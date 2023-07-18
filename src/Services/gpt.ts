
import express from 'express';
import axios from 'axios';
import fs from 'fs/promises';

const app = express();
const port = 3000;

const get = {
    print: (text:string) => console.log(text),
    cleanFile: () => {
        fs.writeFile('commands.txt', '')
    },
    createFolder: (folderName:string) => {
     fs.mkdir(folderName)
    },
    request: async (API_KEY:string, query:string, fun:Function, index = 1, folderName = "") => {
        try {
            const response = await axios.post('https://api.openai.com/v1/completions', {
                model: "text-davinci-003",
                max_tokens: 1000,
                prompt: query,
                temperature: 0.8
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            const result = response.data;
            if (result.choices && result.choices.length > 0) {
                const text = result.choices[0].text;
                console.log(text);
                get.print(text);
                if (folderName != "" && !folderName.endsWith('/')) {
                    folderName += "/";
                }
                fs.writeFile(folderName + "commands.txt", text, { flag: 'a+' });
                fun(text, index + 1, folderName);
            } else {
                console.log(result);
                get.print(result);
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export default{
    get
}