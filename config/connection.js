const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DATABASE_URI, options).catch(error => console.log(error));
mongoose.connection.on('error', (error) => {console.log(error);});
