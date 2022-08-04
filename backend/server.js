const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const registerSocketServer=require('./socketServer');
const authRoutes=require('./routes/auth.routes');
const frindsRoutes=require('./routes/friendRoutes.routes');
const API_PORT = process.env.API_PORT;
const PORT = process.env.PORT || API_PORT;
const app = express();
app.use(express.json());
app.use(cors());

// register the routes;
app.use('/api/auth',authRoutes);
app.use('/api/friend-invitation',frindsRoutes);
const server = http.createServer(app);
registerSocketServer(server);
mongoose.connect(
    process.env.MONGO_URI
).then(() => {
    server.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`);
    });
}).catch((e)=>{
    console.log(e.message);
});
