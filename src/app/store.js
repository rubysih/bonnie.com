import { flow, observable } from 'mobx'
import store from '../store/helpers/store'
import * as api from './api'

@store
class AppStore {
  @observable.ref
  menu = undefined

  @observable.ref
  content = undefined;

  @flow
  *loadMenu() {
    this.menu = yield api.loadMenu()
  }

  @flow
  *loadContent({ subPath, lang }) {
    this.content = yield api.loadContent(subPath, lang)
  }
}

export default new AppStore()
