const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req ,res) => {
    res.send('<h2>kindly login here</h2>')
})

app.get('/signup' , (req , res)=>{
    res.send('hey signup with historian timeline')
})

app.get('/chai' , (req , res)=>{
    res.send(123)
})

app.get('/code' , (req , res)=>{
    res.send('code and chai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})