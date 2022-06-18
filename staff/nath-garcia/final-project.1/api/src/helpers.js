const cors = (req, res, next) => { //CORS mid
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
}

module.exports = { 
    cors 
}