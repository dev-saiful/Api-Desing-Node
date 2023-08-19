import jwt from "jsonwebtoken";

export const createJwt = (user)=>{
    const token = jwt.sign(
        {
            id:user.id,
            username:user.username
        },
            process.env.JWT_SECRET
        );

        return token;
}

// protect routes
export const protect = (req,res)=>{
    const bearer = req.headers.authorization;
    if(!bearer)
    {
        res.status(401);
        res.json({message:"you are not authorized!!!"});
        return;
    }
}