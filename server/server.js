const express = require('express');
const cors = require('cors');
const app = express();
const PORT= 8000;
const DB="player";

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/mongoose.config')(DB);  
require('./routes/Player.routes')(app);

app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})
