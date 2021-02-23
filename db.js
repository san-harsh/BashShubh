const mongoose = require('mongoose');


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE ,
            {useNewUrlParser : true,
             useCreateIndex : true,
             useUnifiedTopology : true} );

         console.log(`Mongoose connected : ${conn.connection.host}`. cyan.underline.bold)    

    }
    catch(err){
        console.log(`ERROR : ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;