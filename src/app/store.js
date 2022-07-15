import { flow, observable, action } from 'mobx'
import store from '../store/helpers/store'
import * as api from './api'

function keyBy(arr, key, contentKey) {
  return arr.reduce(
    (acc, cur) => ({ ...acc, [cur[key]]: contentKey ? cur[contentKey] : cur }),
    {}
  )
}

function sortMenu(arr) {
  if (!arr) return
  return arr.sort((a, b) => a.displayOrder - b.displayOrder)
}

@store
class AppStore {
  @observable.ref
  menu = undefined

  @observable.ref
  content = undefined

  @observable.ref
  i18n = undefined

  @observable
  lang = 'zh-cn';

  @flow
  *loadMenu() {
    const menu = yield api.loadMenu()
    const menuAfterSort = sortMenu(menu)
    const subMenu = yield Promise.allSettled(
      menuAfterSort.map(i => api.loadSubMenu([i.directoryName]))
    ).then(res => res.map(i => i.value))
    this.menu = menuAfterSort.map((i, index) => ({
      ...i,
      children: sortMenu(subMenu[index])
    }))
  }

  @flow
  *loadContent(subPath) {
    this.content = yield api.loadContent(subPath, this.lang)
  }

  @flow
  *loadI18n() {
    let i18nArr = yield api.loadI18n(this.lang)
    i18nArr = i18nArr.map(l => {
      const localizations = keyBy(l.localizations, 'displayKey', 'displayValue')
      return { ...l, localizations }
    })
    this.i18n = keyBy(i18nArr, 'langCode', 'localizations')
  }

  @action
  setLang(value) {
    this.lang = value
  }

  getI18n() {
    if (!this.i18n) return
    return this.i18n[this.lang]
  }
}

export default new AppStore()
