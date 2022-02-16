const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const taskRoutes = require('./routes/Routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);

//manejo de errores
app.use((err, req, res, next) =>{
    return res.json({
        message: err.message
    })
});

app.use(express.static(process.cwd()+"/MM_frontend/build/"));


app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'));
console.log("server on port 8080");