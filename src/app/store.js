import { flow, observable } from 'mobx'
import store from '../store/helpers/store'
import * as api from './api'

@store
class AppStore {
  @observable
  loading = true

  @observable.ref
  menu = undefined

  @observable.ref
  content = undefined;

  @flow
  *loadMenu() {
    this.error = undefined
    this.menu = yield api.loadMenu()
    this.loading = false
  }

  @flow
  *loadContent(subPath) {
    this.content = yield api.loadContent(subPath)
  }
}

export default new AppStore()
