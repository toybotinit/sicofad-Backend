const mongoose = require('mongoose');

const URI = 
'mongodb+srv://admin:12345@cluster0.vzsfz.mongodb.net/SiCoFADDB?retryWrites=true&w=majority';
//const URI = 'mongodb://localhost/SiCoFAD';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true} )
    .then(db => console.log('Conexion exitosa a la BD'))
    .catch(err => console.log(err));


module.exports = mongoose;