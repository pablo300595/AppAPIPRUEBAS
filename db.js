const mongoose = require('mongoose');
const URI = `mongodb://admin:admin@cluster0-shard-00-00-qkg0z.mongodb.net:27017,cluster0-shard-00-01-qkg0z.mongodb.net:27017,cluster0-shard-00-02-qkg0z.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
// const URI = `mongodb://localhost/test-students`;

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;