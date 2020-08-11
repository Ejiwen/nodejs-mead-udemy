const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

const getNotes = () => {

}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find( (note) => {
        return (note.title == title);
    })

    
    
    if(!duplicateNote) {
    notes.push({
     title: title,
     body: body
    })
     saveNote(notes) ;
    }
    else {
        console.log("the same Title exist before ... !")
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToKeep = notes.filter( (note) => {
        return note.title === title
    });

    if(noteToKeep.length === 0) {
        console.log(chalk.bgRed.bold("Note not found ..."));
    } else {
        console.log(chalk.bold("note removed ..."));
        saveNote(noteToKeep);
    }
    
}


const listNotes = () => {
    const notes = loadNotes();
    notes.map( (note) => {
        const lineNote = `The note titled ${chalk.blue.bold(note.title)} is ${chalk.green.bold(note.body)}`
        console.log(lineNote);
    })

}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title; 
    });

    if(note) {
        const title = chalk.blue(note.title);
        const body = chalk.green(note.body);
        console.log(title+"---"+body);
    } else {
       console.error((chalk.bgRed(title) + "...Not exist"));
    }
   
}



const loadNotes = () => {
    try{
        const data = fs.readFileSync('notes.json');
        const dataString = data.toString();
        const notesList = JSON.parse(dataString);
        return notesList;
    } catch(e) {
        return [];
    }
}

const saveNote = (notes) => {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesString)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}