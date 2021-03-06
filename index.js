require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Note = require('./models/notes')

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.get('/api/notes/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => {
            if(note){
                res.json(note);
            } else {
                res.status(404).end();
            }
        })
        .catch(err => next(err))
})

app.put('/api/notes/:id', (req, res, next) => {
    const body = req.body;

    const note = {
        content: body.content,
        important: body.important
    }

    Note.findByIdAndUpdate(req.params.id, note, {new: true})
        .then(updatedNote => {
            res.json(updatedNote)
        })
        .catch(err => next(err))
})

app.delete('/api/notes/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

app.post('/api/notes', (req, res, next) => {
    const body = req.body;

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    note.save()
        .then(savedNote => savedNote.toJSON())
        .then(savedAndFormattedNote => {
            return res.json(savedAndFormattedNote);
        })
        .catch(err => next(err))
})

app.get('/api/notes', (req, res, next) => {
    Note.find({})
        .then(notes => {
            res.json(notes)
        })
        .catch(err => next(err))
})

// Custom error handler of requests with result to errors (always be last loaded middleware)
const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    if(err.name === 'CastError') {
        return res.status(400).send({error: 'Malformatted id!'});
    } else if (err.name === 'ValidationError') {
        return res.status(400).json({error: err.message});
    }

    next(err);
}
app.use(errorHandler);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});