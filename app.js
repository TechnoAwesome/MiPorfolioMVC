const express = require('express');
const app = express();
const port = 3000 ;
app.use(express.static('public'));

/* RUTAS */
const mainRouter = require('./routers/main');

app.use('/', mainRouter);

/* servidor */
app.listen(port, ()=> console.log(`Server running in http://localhost${port}`));