const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')

const restaurantRoutes = require('./routes/restaurant')
const customerRoutes = require('./routes/customer')
const employeeRoutes = require('./routes/employee');
const menuItemRoutes = require('./routes/menuItem');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const orderItemRoutes = require('./routes/orderItem');
const reservationRoutes = require('./routes/reservation');

require('./db/mongoose')



const app=express()
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use(bodyParser.json())

app.use('/restaurant', restaurantRoutes);
app.use('/customer', customerRoutes);
app.use('/employee', employeeRoutes);
app.use('/menuItem', menuItemRoutes);
app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);
app.use('/orderItem', orderItemRoutes);
app.use('/reservation', reservationRoutes);
const port=process.env.PORT

app.listen(port,()=>{
    console.log(`Server is Running ${port}`)
})


