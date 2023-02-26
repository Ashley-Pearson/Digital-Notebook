const express = require('express');

const notes = require('express').Router();
const fs = require('fs');


//GET route to get all notes
notes.get('/', (req, res) => 
    fs.readFile('.db/db.json').then((data) => res.json(JSON.parse(data)))
);

//Route to POST new note
notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            title_id: randomUUID(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'sucess',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error posting new note');
    }
    });

//Delete note bonus

module.exports = notes;
