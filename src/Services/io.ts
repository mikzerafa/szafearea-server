import fs from 'fs'

const file = {
    read: (fileLocation:string)=> { return fs.readFileSync(fileLocation, 'utf-8')},
    write: (fileLocation:string, content:string)=> {fs.writeFileSync(fileLocation,content)}
}

export default{
    file
}