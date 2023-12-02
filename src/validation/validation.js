import {ResponseError} from "../error/response-error.js";

const validation = (schema, req)=>{
    const result = schema.validate(req ,{
        abortEarly : false
    })
    if (result.error){
        throw new ResponseError(400, result.error.message)

    }else {
        return result.value

    }
}

export {
    validation
}