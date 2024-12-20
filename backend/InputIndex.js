// const express = require("express");
// const app = express();

// // importing router
// // const createUser = require("./router/createUser")

// // importing connection 
// require("./conn")
// // const mongoDB = require("./conn")
// // mongoDB();

// const port = process.env.PORT || 4000;

// //for middleware
// app.use((req,res,next)=> {
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-requested-With, Content-Type, Accept"
//     );
//     next();
// })

// //for reading req.body jsoon file
// app.use(express.json()); 


// //method by new user 
// app.use('/api', require("./router/createUser"));
// // app.use(createUser);

// // for Adding data
// app.use('/api', require("./router/AddData"));

// //for creating seller account
// app.use("/api", require("./router/createSeller"));

// app.listen(port, ()=> {
//     console.log(`lisinign to port no ${port} `)
// }) 