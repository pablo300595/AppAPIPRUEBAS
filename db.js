const mongoose = require('mongoose');
const URI = 'mongodb://pablo:123465@stitch.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=appstudents-kbuqg:mongodb-atlas:local-userpass';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;