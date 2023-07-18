import bcrypt from 'bcrypt';
const salt =  bcrypt.genSaltSync(10)


const encrypt = {
    bcrypt: async (text:string) => {
        try{
            const output = await bcrypt.hash(text, salt);
            console.log('encryptoion works: ' + bcrypt.compareSync(text, output))
            return output;
        }

        catch{
            console.log('Hashing did not work')
        }
    }
  }

const decrypt = {
    bcrypt: {
        varifyPassword: (password: string, hashedPassword: string) => {
            console.log('pasword: ' + password);
            console.log('hashedPasword: ' + hashedPassword);
            const output =   bcrypt.compareSync(password, hashedPassword);
            console.log('Decrypton result= ' + output);
            return output;
        }
    }
}

export default {
    encrypt,
    decrypt
}