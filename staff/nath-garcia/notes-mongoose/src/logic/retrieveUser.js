const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveUser(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
    .then(user => { //{_id: ObjectId, name: 'Papa Gayo', username: 'papagayo', password: '123123123', __v: 0}
        if (!User)
        throw new NotFoundError(`user with id ${userId} does not exist`)

        delete user._id
        delete user._v
        delete user.password

        return user
    })
}

module.exports = retrieveUser