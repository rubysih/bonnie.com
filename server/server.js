const http = require('http')
const { getFolderStructure } = require('./utils/file')

const server = http.createServer(function (req, res) {
  if (req.url === '/menu') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    })
    const data = getFolderStructure()
    res.write(JSON.stringify(data))
    res.end()
  }
})

server.listen(5001)
console.log('Node.js web server at port 5001 is running..')
