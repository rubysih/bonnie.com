const http = require('http')
const { getFolderStructure } = require('./utils/file')

const server = http.createServer(function (req, res) {
  if (req.url === '/menu') {
    const fs = getFolderStructure()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ fs }))
    res.end()
  }
})

server.listen(5001)
console.log('Node.js web server at port 5001 is running..')
