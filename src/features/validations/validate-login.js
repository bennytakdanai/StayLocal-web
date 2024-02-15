import Joi from 'joi'

const loginSchema = Joi.object({
    
    username: Joi.string().required().trim().messages({
        'string.emty':'username is required',
        'any.required':'username is required'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,}/).required().messages({
        'string.emty':'password is required',
        'string.pattern.base':'password must be alphabets and at least 6 characters long',
        'any.required':'password is required'
    })

})

const validateLogin = (input)=>{
    const {error} = loginSchema.validate(input,{abortEarly:false})
    if(error){
        const result = error.details.reduce((acc,el)=>{
            acc[el.path[0]] = el.message
            return acc
        },{})
        return result
    }
} 

export default validateLogin