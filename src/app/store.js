import { flow, observable } from 'mobx'
import store from '../store/helpers/store'
import * as api from './api'

@store
class AppStore {
  @observable
  loading = true

  @observable.ref
  menu = undefined;

  @flow
  *loadMenu() {
    this.error = undefined
    this.menu = yield api.getMenu()
    this.loading = false
  }
}

export default new AppStore()
