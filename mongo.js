const mongoose = require('mongoose');

const password = process.argv[2];

const url = 
    `mongodb+srv://bingosu196:${password}@cluster0.ezfn5.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema);

switch(process.argv.length) {
    case 2:
        console.log('Please provide your password as an argument: node mongo.js <password>');
        process.exit(1);
        break;
    case 3:
        Note.find({}).then(result => {
            result.forEach(note => {
                console.log(note);
            })
            mongoose.connection.close();
        })
        break;
    case 5: 
        const note = new Note({
            name: process.argv[3],
            number: process.argv[4]
        })
        note.save().then(result => {
            console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
            mongoose.connection.close()
        })
        break;
    default:
        console.log('Invalid input');
        process.exit(1);
}