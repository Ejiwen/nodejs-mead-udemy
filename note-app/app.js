const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0')

// Add note
yargs.command({
 command: 'add',
 describe: 'Add a new note',
 builder: {
     title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
     },
     body: {
         describe: 'add content',
         demandOption: true,
         type: 'string'
     }
 },
    handler: function (argv) {
    notes.addNote(argv.title,argv.body);
    }
})

// Remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log("Remove a note")
    }
})

// creat read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log("Read a note")
    }
})

// cread read commandto read the list of notes
yargs.command({
    command: 'list',
    describe: 'listing out all note',
    handler: function () {
        console.log("list of note")
    }
})

yargs.parse();