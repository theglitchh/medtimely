//importing packages

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path =  require('path');

let staticPath = path.join(__dirname);
//initialising express.js

const app = express();

//routes
//home route
//middlewares
app.use(express.static(staticPath));
// app.use(express.json());

app.get ('/', (req, res) => {
    res.sendFile(path.join(staticPath,'index.html'));

})
//sign up
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(staticPath,'signup.html'));
})
// app.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.json('data recieved');
// })

// 404 route
app.get('/404',(req, res) => {
    res.sendFile(path.join(staticPath,'404.html'));
})
app.use((req,res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log("server is running on port 3000...");
})