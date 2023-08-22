import { json } from "stream/consumers";
import * as user from "../user"

describe("user handler",()=>{
    it("it should create new user",async()=>{
        const req = {body:{username:"anyname",password:"anypassword"}};
        const res = {json(token){
            expect(token).toBeTruthy();
        }}
        await user.createNewUser(req,res,()=>{})
    })
})