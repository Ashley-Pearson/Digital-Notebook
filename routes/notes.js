const express = require('express');

const notes = require('express').Router();
const fs = require('fs');


//GET route to get all notes
notes.get('/', (req, res) => 
    readFromFile('.db/db.json').then((data) => res.json(JSON.parse(data)))
);

//Route to POST new note
notes.post('/', req, res) => {

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            title_id: randomUUID(),
        };

        readAndAppend(newNote, './db/db.json')
    }
}

//Delete note

