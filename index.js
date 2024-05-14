// basic unopiniated framework for node.js
// Node.js => browser pe run hone wali java script ko server pe run karta hai
        //    => for chrome it runs through v8 engine
        //    => npm is package manager for node.js => get installed into node modules
        //    => we can use extra packages through npm
        // => we use express in place of node to for easy application on end points


// 500 server code for internal error
// 400 server code for =>  server can't process or recognize the request.

const express = require('express')
const path = require('path')  // we imported a module path
const app = express()
const port = 3000

// to create our own middleware
const darshanMiddleware=(req,res,next)=>{
        console.log(req)
        next() // if we create more than one middleware to run next one
}

// middleware => function jo req and res object ki access ko rakte hai and usko change kar sakte hai
app.use(express.static(path.join(__dirname,"public")))
// app.use(darshanMiddleware)



app.get('/', (req, res) => {
res.send('Hello World!')
})

let name="darshan"

app.get('/hello/:name', (req, res) => {
res.send('Hello World!'+req.params.name)
})

app.get('/about', (req, res) => {
// res.send('aboutt!')    
res.sendFile(path.join(__dirname,'index.html'))
res.status(400)
})

app.get('/aboutt', (req, res) => {
res.json({"harry":34,"darshan":34})
})

app.listen(port, () => {
console.log(`Example app listening on port at http://localhost:${port}`)
})        