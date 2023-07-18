import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';


dotenv.config();

const get = {
    token:(payload:object, expires:string = '1h') => {
        if(payload == null){
            return null;
        }
        const options ={
            expiresIn: '1h'
        };
        return jwt.sign(payload, process.env.JWT_KEY!, options)
    }
}

const verify = {
    token:(token:string): JwtPayload | string => {
        try{
            return jwt.verify(token, process.env.JWT_KEY!)
        }catch{
            return "fail";
        }
    }
}

export default {
    get,
    verify
}