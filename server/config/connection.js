const mongoose = require('mongoose');

mongoose.connect(process.env.NONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFineAndModify: false,
});

module.exports = mongoose.connection;