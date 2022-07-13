import axios from 'axios'
import { ServerUrl, StatusCode } from '../constants'

export const loadMenu = () =>
  axios
    .get(`${ServerUrl}/menu`)
    .then(function ({ data, status, statusText }) {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(function (error) {
      console.log('api err', error)
    })

export const loadContent = (subPath, lang) =>
  axios
    .get(`contents/${subPath}/README_${lang}.md`)
    .then(function ({ data, status, statusText }) {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('e', e))
