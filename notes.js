const chalk = require('chalk')
const fs  = require('fs')

const addNotes =(title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) =>  note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        save(notes)
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('note title taken'))
    }

  
}

const save = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const datatJson  = dataBuffer.toString()
        return JSON.parse(datatJson)
    }catch(e){
       return []
    }
   
}

const removeNote = (title) =>{
    const notes = loadNotes()
   
    const notesTokeep = notes.filter((note) =>note.title !== title)
    if(notes.length > notesTokeep.length){
        console.log(chalk.green.inverse('note removed'))
        save(notesTokeep)
    } else {
        console.log(chalk.red.inverse('note not removed'))
    }
    
    
  
      
   
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
    
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) =>  note.title === title)
    if(readNote){
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body)
    }else{
        console.log(chalk.red.inverse('error'))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

};