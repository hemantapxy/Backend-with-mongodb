//step1:create a folder
//step2:move into that folder
//step3:npm init -y
//step4:open folder using vscode
//step5:npm i express
//step6:create server.js
// const express = require('express');

// const app = express();

// app.listen(3000, () => {
//     console.log("Server started at port no. 3000");
// });

// app.get('/', (request, response) => {
//     response.send("hello jee, kaise hoo sare")
// });

//server instaniate
const express = require('express');

const app = express();

const bodyPraser = require('express');
//specifically parse json data add it to the request.body object
app.use(bodyPraser.json());
//routes
app.get('/', (request, response) => {
    response.send("hello jee, kaise hoo sare");
});

app.post('/api/cars',(request,response)=>{

  const{name,brand}=request.body; 
  console.log(name);
  console.log(brand);
  response.send("car submitted successfully.")    
});

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/cars',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(() => {console.log("connection successful")})
// .catch((error) =>{console.log("error")});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));


// Change port to 5500
app.listen(7000, () => {
    console.log("Server started at port no. 7000");
});


