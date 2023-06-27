const fsPromises = require("fs").promises;
const path = require("path");

// using async and await keyword
const fsOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'starter.txt'), 'Nice to meet you');
        await fsPromises.appendFile(path.join(__dirname, 'starter.txt'), '\n\n Yes it is');
        await fsPromises.rename(path.join(__dirname, 'starter.txt'), path.join(__dirname, 'newStarter.txt'))
    } catch (err) {
        console.error(err)
    }

}

fsOps()

// fs.readFile('./starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     // else console.log(data.toString())
//     else console.log(data)
// })



// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     // else console.log(data.toString())
//     else console.log(data)
// })

// console.log("Hello")

// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     // else console.log(data.toString())
//     else console.log(data)
// })


// Output is in sequcance but it callback Hell we solve using async and await keyword
// fs.writeFile(path.join(__dirname, 'replay.txt'), 'Nice too meet you', (err) => {
//     if (err) throw err;
//     console.log('File written')
//     fs.appendFile(path.join(__dirname, 'replay.txt'), '\n\n Yes it is', (err) => {
//         if (err) throw err;
//         console.log('File appended')
//         fs.rename(path.join(__dirname, 'replay.txt'), path.join(__dirname, 'Newreplay.txt'), (err) => {
//             if (err) throw err;
//             console.log('File Rename')
//         })
//     })
// })


// exit on uncaught err
// process.on('uncaughtException', err => {
//     console.log(`There was an uncaught error : ${err}`)
//     process.exit(1)
// })