const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const createNote = require('./CreateNote')
const retrieveNotes = require('./retrieveNotes')
const addCommentToNote = require('./addCommentToNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    createNote,
    retrieveNotes,
    addCommentToNote,
    deleteCommentFromNote
}