import EncryptionManager from './EncryptionManager';
import io from './io'

const userFileLocation ="src/tempDB/users.json";
type user ={
    id: string;
    username: string;
    password: string;
}
const get = {
    before: () => {
        const jsonText = io.file.read(userFileLocation);
        let json = JSON.parse(jsonText!);
        json.users= json.users? json.users : [];

        return json;
    },
    checkUsernameExists:(username:string) => {
        let parsedUser = get.before();
        let usersArray:user[] = parsedUser.users;

        console.log("Users Array.length:"+ usersArray.length)
        console.log('Looking for username: ' + username);
        console.log(usersArray.filter(element => element.username == username).length)
        
        return usersArray.filter(element => element.username == username)[0]? true : false;
    },
    add: (user:user) => {
        let parsedUsers = get.before();
        parsedUsers.users.push(user)
        io.file.write(userFileLocation, JSON.stringify(parsedUsers))
    },
    remove:(user:user) =>{
        let parsedUser = get.before();
        let usersArray:user[] = parsedUser.users;
        
        parsedUser.users = usersArray.filter(element => element.id != user.id)

        io.file.write(userFileLocation, JSON.stringify(parsedUser))

    },
    update:() =>{

    },
    get: async (username:string, password: string) =>{
        console.log('Username: ' + username);
        console.log('PAssword: ' + password);
        const parsedUsers = get.before();
        let usersArray:user[] = parsedUsers.users;
        let outputUser = null;
        console.log('Users Array length: '  + usersArray.length);
        let requestedUser = usersArray.filter(element => element.username == username)
        console.log('Requested user: ' +requestedUser.length)

        let index = 0;

        if(username && password){
            for(let element of requestedUser as user[]){
                let toAdd = EncryptionManager.decrypt.bcrypt.varifyPassword(password, element.password)
                if(!toAdd)
                {
                    console.log('removing user for invalid password');
                    requestedUser.splice(index,1)
                }
                else{
                    console.log("USER FOUND!");
                    outputUser = requestedUser;
                }
                index++;
        };
        }
        
        console.log("Requested user: " +requestedUser.length)
        
        return outputUser? outputUser[0] : null;
    
    }
}

export default{
    get
}