import app from './app.js';

//incialize the server
const port = /*process.env.PORT ||*/ 3000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});