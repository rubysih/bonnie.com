import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useRequest from '@ahooksjs/use-request'
import { useSelector } from '../store'
import store from './store'
import './App.css'

const Lang = [
  { key: 'zh-cn', display: '简体中文' },
  { key: 'zh-tw', display: '繁體中文' }
]

function App() {
  const req = useRequest(store.loadMenu, { manual: true })
  const contentReq = useRequest(store.loadContent, { manual: true })
  const i18nReq = useRequest(store.loadI18n, { manual: true })
  const menu = useSelector(() => store.menu)
  const content = useSelector(() => store.content)
  const i18n = useSelector(() => store.getI18n)
  const lang = useSelector(() => store.lang)
  const [showItemPath, setShowItemPath] = useState('')
  const [subMenu, setSubMenu] = useState()

  useEffect(() => {
    req.run()
    i18nReq.run()
    contentReq.run(['football'])
  }, [])

  useEffect(() => {
    contentReq.run(showItemPath)
  }, [showItemPath])

  if (!menu) return null

  return (
    <div className="page">
      <div className="topBar">
        <select value={lang} onChange={e => store.setLang(e.target.value)}>
          {Lang?.map(opt => (
            <option key={opt.key} value={opt.key}>
              {opt.display}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        <div className="sideBar">
          {menu.map(i => {
            const mItemName = i18n?.[i.displayKey] || i.displayKey
            return (
              <>
                <div
                  className="menuItem"
                  onClick={() => {
                    setShowItemPath([i.directoryName])
                    setSubMenu(i.directoryName)
                  }}
                >
                  {mItemName}
                </div>
                {i.children &&
                  subMenu === i.directoryName &&
                  i.children.map(c => (
                    <div
                      className="menuItem subMenu"
                      onClick={() =>
                        setShowItemPath([i.directoryName, c.directoryName])
                      }
                    >
                      {i18n?.[c.displayKey] || c.displayKey}
                    </div>
                  ))}
              </>
            )
          })}
        </div>
        <div className="content">
          {showItemPath && (
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
