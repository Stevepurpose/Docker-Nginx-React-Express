let express = require('express')
let app = express()
const cors = require('cors')
let corsOptions = require('./config/corsOptions')

let myarr = [8, 10, 16]



app.use(cors(corsOptions))

app.get('/',(req, res)=>{
    console.log(myarr)
    res.send(myarr)
})



let port = 4500
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})