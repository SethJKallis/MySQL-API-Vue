const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.set("port", process.env.PORT || 3500);
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(productRoutes);
app.use(userRoutes);

app.get('/', (req,res) => {
    res.json({
        Message: "Welcome to the application!"
    });
});


app.listen(app.get("port"), () => {
    console.log(`Server is listening on Port ${app.get("port")}`)
});