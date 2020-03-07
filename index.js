const express = require('express');
const {port} = require('./config');
const messageApi = require('./routes/message');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

messageApi(app)

app.listen(port, (err) => {
if(err) console.log('No se pudo iniciar el servidor vuelve a intentarlo mas tarde');
console.log(`El servidor se incio en http://localhost:${port}`)
})