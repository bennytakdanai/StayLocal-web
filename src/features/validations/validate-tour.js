import Joi from 'joi'

const tourCreateSchema = Joi.object({
    name: Joi.string().required().trim().messages({
        'string.emty':'name is required',
        'any.required':'name is required'
    }),
    date: Joi.string().required().trim().messages({
        'string.emty':'date is required',
        'any.required':'date is required'
    }),
    duration: Joi.string().required().trim().messages({
        'string.emty':'duration is required',
        'any.required':'duration is required'
    }),
    location: Joi.string().required().trim().messages({
        'string.emty':'location is required',
        'any.required':'location is required'
    }),
    groupSize:Joi.number().required().trim().messages({
        'string.emty':'groupSize is required',
        'any.required':'groupSize is required'
    }),
    tourProfileImage: Joi.required().trim().messages({
        'string.emty':'tourProfileImage is required',
        'any.required':'tourProfileImage is required'
    }),
    tourDetail: Joi.string().required().trim().messages({
        'string.emty':'tourDetail is required',
        'any.required':'tourDetail is required'
    }),
    tourProgram: Joi.string().required().trim().messages({
        'string.emty':'tourProgram is required',
        'any.required':'tourProgram is required'
    }),
    price:Joi.number().required().trim().messages({
        'string.emty':'price is required',
        'any.required':'price is required'
    }),
    type:Joi.string().required().trim().messages({
        'string.emty':'type is required',
        'any.required':' type is required'
    }),
        

})



const validateTourCreate = (input)=>{
    const {error} =tourCreateSchema.validate(input,{abortEarly:false})
    if(error){
        const result = error.details.reduce((acc,el)=>{
            acc[el.path[0]] = el.message
            return acc
        },{})
        return result
    }
}

export default validateTourCreate