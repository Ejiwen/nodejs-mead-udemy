const fs = require('fs');

const getNotes = () => {

}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.filter( (note) => {
        return (note.title == title);
    })

    
    
    if(duplicateNote.length === 0) {
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
        return note.title != title
    })
    saveNote(noteToKeep);
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
    removeNote: removeNote
}