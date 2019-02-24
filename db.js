const mongoose = require('mongoose');
const URI = 'mongodb+srv://pablo:123456789@cluster0-qkg0z.mongodb.net/test?retryWrites=true';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;