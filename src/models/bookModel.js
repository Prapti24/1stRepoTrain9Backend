const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {

    bookName : {
        type: String,
        required: true,
    },
    authorName : {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["romantic", "mystry", "crimescene"]
    },
    year :{ 
        type: String ,
    }
},
 { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books