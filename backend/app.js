const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');
const goals = require('./routes/api/goals');
const users = require('./routes/api/users');

app.use(cors({origin:true, credentials:true}));

app.use('/api/users', users);
app.use('/api/goals', goals);

const conn_str = 'mongodb+srv://buddergod311:budder311@4300-project.eng7kr2.mongodb.net/?retryWrites=true&w=majority&appName=4300-Project';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Succeeded...`)
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
})