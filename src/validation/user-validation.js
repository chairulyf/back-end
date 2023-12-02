import joi from 'joi'

const registerUserValidation = joi.object({
    username : joi.string().max(100).required(),
    password : joi.string().max(100).required(),
    name : joi.string().max(100).required()
})

const getValidation = joi.object({
    username : joi.string().max(100).required(),
    password : joi.string().max(100).required(),
    name : joi.string().max(100).required()
})

export {
    registerUserValidation,
    getValidation
}