require('dotenv').config({path: './environmentVariables/variables.env'});
require('./config/connection');
const app = require('./config/app')


const server = app.listen(app.get('port'), () => {
    console.log(`server running at ${server.address().port}`);
})