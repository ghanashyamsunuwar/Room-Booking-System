const express = require("express");
const app = express();

const cors = require("cors");

//for path yt method
// app.use(express.static("uploads"));
// Define a route to serve uploaded images
app.use('/uploads', express.static('uploads'));


// importing connection 
require("./conn")

const port = process.env.PORT || 4000;

app.use(cors());


//for middleware
app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-requested-With, Content-Type, Accept"
    );
    next();
})


//for reading req.body jsoon file
app.use(express.json()); 

// //for login admin 
app.use('/api', require("./router/AdminLog"));
// Import and use the routes
// const authRoutes = require("./router/AdminLog");
// app.use("/api/AdminLog", authRoutes);

//method by new user 
app.use('/api', require("./router/createUser"));
// app.use(createUser);

//for dislaydata
app.use('/api', require("./router/DisplayData"));

//for display userdata
app.use('/api', require("./router/DisplayUser"));

//for dispaly list data in
app.use('/api', require("./router/DisplayList"));

//for Adding data
app.use('/api', require("./router/AddData"));

//for adding booked data to database
app.use('/api', require("./router/BookedData"));

//for delete Data from Database
app.use("/api", require("./router/DeleteData"));

//for display update 
app.use("/api", require("./router/DisplayUpdate"));

//for update Data form Database
app.use("/api", require("./router/UpdateData"));

//for creating seller account
app.use("/api", require("./router/createSeller"));

//for user detail
app.use("/api", require("./router/userLogs.js"));

//Admin
//for buysesList 
app.use("/api", require("./router/BuyersList"));

//for sellersList
app.use("/api", require("./router/SellersList"));

//for Rooms
app.use("/api", require("./router/Roomss"));

//for Booked
app.use("/api", require("./router/Bookeds"));


//for delete Booked
app.use("/api", require("./router/DeleteBooked"));

//for delte buyers
// app.use("/api", require("./router/"));

app.listen(port, ()=> {
    console.log(`lisinign to port no ${port} `)
}) 

//exporting function
// module.exprots = transporter;