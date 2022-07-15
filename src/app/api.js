import axios from 'axios'
import { ServerUrl, StatusCode } from '../constants'

const folder = 'contents'
const infoFile = 'structure.json'

const get = url =>
  axios
    .get(url)
    .then(({ data, status, statusText }) => {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(e => console.log('api err', e))

export const loadMenu_ = () => get(`${ServerUrl}/menu`)

export const loadContent = (subPath, lang) =>
  get(`contents/${subPath.join('/')}/README_${lang}.md`)

export const loadMenu = () => get(`${folder}/${infoFile}`)

export const loadSubMenu = subPath =>
  get(`${folder}/${subPath.join('/')}/${infoFile}`)

export const loadI18n = () => get(`${folder}/i18n.json`)
