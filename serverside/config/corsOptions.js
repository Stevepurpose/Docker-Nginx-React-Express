const allowedOrigins = require('./allowedOrigins')

let corsOptions = {
    origin:(origin, callback)=>{
        if(allowedOrigins.indexOf(origin!==-1)){
            callback(null, true)
        }

        else{
            callback(new Error('not allowed by cors'))
        }
    },
    credientials:true,
    optionsSuccessStatus:200

}
module.exports=corsOptions