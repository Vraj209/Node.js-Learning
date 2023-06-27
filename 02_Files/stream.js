const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname, 'newStarter.txt'),{encoding: 'utf8'})

const ws = fs.createWriteStream(path.join(__dirname, 'new-lorem.txt'))

// rs.on('data', chunk => {
//     ws.write(chunk)
// })

// it is more efficient than pervious one
rs.pipe(ws);