const mongoose = require('mongoose');
//const url = 'mongodb://0.0.0.0:27017/issueTracker';

mongoose.connect('mongodb+srv://poojadornal:pooja123@cluster0.s6texit.mongodb.net/issuetracker?retryWrites=true&w=majority',{
    useNewUrlParser: true
     
});
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db