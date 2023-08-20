import prisma from "../db";
import { createJwt, hashPasswords } from "../modules/auth";

export const createNewUser = async(req,res)=>{
    const user = prisma.user.create({
        data:{
            username:req.body.username,
            password: await hashPasswords(req.body.password),
        }
    });

    const token = createJwt(user);
    res.json({token});
}

