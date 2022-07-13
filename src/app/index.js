import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useRequest from '@ahooksjs/use-request'
import { useSelector } from '../store'
import store from './store'

function App() {
  const req = useRequest(store.loadMenu, { manual: true })
  const contentReq = useRequest(store.loadContent, { manual: true })
  const menu = useSelector(() => store.menu)
  const content = useSelector(() => store.content)

  useEffect(() => {
    req.run()
    contentReq.run({ subPath: 'football', lang: 'zh-tw' })
  }, [])

  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
}

export default App
