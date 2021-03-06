const express = require('express')
const app = express()
const path = require('path')



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, (err) => {
    if(err){
        console.log('Servidor offline...')
    }else {
        console.log('Servidor Portfolio online...')
    }
})