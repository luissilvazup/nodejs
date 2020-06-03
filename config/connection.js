const mongoose = require('mongoose');
const uri = "mongodb://admin:admin123@ds141208.mlab.com:41208/animal_test";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(uri, options).catch(error => console.log(error));
mongoose.connection.on('error', (error) => {console.log(error);});
