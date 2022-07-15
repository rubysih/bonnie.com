import axios from 'axios'
import { ServerUrl, StatusCode } from '../constants'

const folder = 'contents'
const infoFile = 'structure.json'

export const loadMenu_ = () =>
  axios
    .get(`${ServerUrl}/menu`)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('api err', e))

export const loadContent = (subPath, lang) =>
  axios
    .get(`contents/${subPath.join('/')}/README_${lang}.md`)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('e', e))

export const loadMenu = () =>
  axios
    .get(`${folder}/${infoFile}`)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('e', e))

export const loadSubMenu = subPath =>
  axios
    .get(`${folder}/${subPath.join('/')}/${infoFile}`)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('e', e))

export const loadI18n = () =>
  axios
    .get(`${folder}/i18n.json`)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('e', e))
