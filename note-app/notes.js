const fs = require('fs');

const getNotes = () => {

}

const addNote = (title, body) => {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    })

    saveNote(notes) 
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
    addNote: addNote
}