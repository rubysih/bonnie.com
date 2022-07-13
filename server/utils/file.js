const fs = require('fs')

const folder = 'src/assets/contents'
const infoFile = 'structure.json'

function readFile(path) {
  try {
    return JSON.parse(fs.readFileSync(path))
  } catch {}
}

function getFolderStructure() {
  const dir = readFile(`${folder}/${infoFile}`).map(d => ({
    ...d,
    children: readFile(`${folder}/${d.directoryName}/${infoFile}`)
  }))
  return dir
}

module.exports = { getFolderStructure }
