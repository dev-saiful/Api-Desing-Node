import { validationResult } from "express-validator";

export const hanldeErrors = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors)
    {
        res.status(400);
        res.json({errors:errors.array()});
    }
    else
    {
        next();
    }
}