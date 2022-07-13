import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import useRequest from '@app/common/hooks/useRequest'
import useRequest from '@ahooksjs/use-request'
import { useSelector } from '../store'

import store from './store'

function App() {
  console.log('rth ')
  const req = useRequest(store.getMenu)
  const loading = useSelector(() => store.loading)
  const menu = useSelector(() => store.menu)

  const [content, setContent] = useState('')
  useEffect(() => {
    req.run()
    const readmePath = require('../README_zh-tw.md')

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        console.log('text', text)
        setContent(text)
      })
  }, [])

  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
}

export default App
