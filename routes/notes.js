const express = require('express');
const randomUUID = require('uuid');
const notes = require('express').Router();
const fs = require('fs');
const db =JSON.parse(fs.readFileSync('./db/db.json'));

//GET route to get all notes
notes.get('/', (req, res) => 
    fs.readFile('.db/db.json').then((data) => res.json(JSON.parse(data)))
);

//Route to POST new note
notes.post('/', (req, res) => {
  
    const { title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            title_id: randomUUID(),
        }
        db.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(db),);
        res.json(db);

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
