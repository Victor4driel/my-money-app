const _ = require('lodash')
const nodeRestful = require('node-restful')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle // local onde se encontra os erros

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErros) => {
    const errors = []
    _.forIn(nodeRestfulErros, error => errors.push(error.message))
    return errors
}