const express = require('express')
const path = require('path')
const app = express()
const day = new Date().getDay()
const hour = new Date().getHours()

app.get('/', (req, res, next)=>{
    if((day<=5)&&(hour>9)&&(hour<17)) res.sendFile(__dirname+'/public/index.html')
    else res.sendFile(__dirname+'/public/unfound.html')
})

app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs');
app.listen(3000, (err)=>{
    if(err){
        throw err
    }else{
        console.log("SERVER IS UP")
    }
})
