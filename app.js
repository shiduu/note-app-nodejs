const fs = require('fs');
const add = require('./util.js')
const yargs = require('yargs')
const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')


// fs.writeFileSync('node.txt' , 'this is a text creted');
// fs.appendFileSync('node.txt', 'shidi is a great guy');

// sum = add(2,6);

// mynotes = getNotes('this is my notes');

// console.log(chalk.green.bgGray('success'));

// console.log(process.argv[2])


//customizing yargs
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add you notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNotes(argv.title, argv.body)
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

//list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
   
    handler: () => {
        notes.listNotes()
    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.readNotes(argv.title)
    }
})
yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)