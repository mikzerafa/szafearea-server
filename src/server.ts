import express from "express";
import articles from './tempDB/articles.json';
import UserManager from "./Services/UserManager";
import SymptomManager from './Services/SymptomManager';
import EncryptionManager from "./Services/EncryptionManager";
import JWTManager from "./Services/JWTManager";
import { JwtPayload } from 'jsonwebtoken';
import {v4 as uuid} from 'uuid';

import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

const run = async () => {
    app.use(express.json());
    app.use(cors());

    app.get("/articles", (req,res) => {
        console.log('Articles Requested');
        return res.json(articles.articles);
    })

    app.get('/SymptomList', (req, res) => {
        console.log('SymptomList requested')
        return res.json(JSON.stringify(SymptomManager.request.all()))
    })

    app.post('/AddSymptomHistory', (req,res) => {
      console.log('Add Symptom History Requested')
      console.log('Adding State Requested')
      console.log('req body: ' + JSON.stringify(req.body))
      const received: {token:string, username:string, stateId:string} = req.body;
      let verification = JWTManager.verify.token(received.token)
      const passed = (typeof verification != typeof 'hello')? true : false;
      if(passed){
        const newId = Date.now()+'';
        verification = verification as JwtPayload;
        if(verification.username == received.username)
        {

          const success = SymptomManager.SymptomHistory.add(received.username, received.stateId)
          return res.json({"added" : success})
        }
        else{
          return res.json({'error': "Token does not belong to user prvided"})
        }
      }

      else{
        return res.json({'error': "token invalid"})
      }
    })

    app.post('/GetStates', (req,res) => {
      console.log('Get States Requested')
      const received: {token:string, stateIds: string[]} = req.body;
      let verification = JWTManager.verify.token(received.token)
      const passed = (typeof verification != typeof 'hello')? true : false;
      if(passed){
        return res.json(JSON.stringify(SymptomManager.stateManager.get(received.stateIds)));
      }
      else{
        return res.json({"error" : "invalid token"})
      }
    })

    app.post('/AddState', (req,res) => {
      console.log('Adding State Requested')
      console.log('req body: ' + JSON.stringify(req.body));
      const received: {token:string, symptomNames:string[], time:string, notes:string} = req.body;
      let verification = JWTManager.verify.token(received.token)
      const passed = (typeof verification != typeof 'hello')? true : false;
      if(passed){
        const newId = uuid();
        console.log('Received symptom names: ' + received.symptomNames);
        SymptomManager.stateManager.state({id: newId,SymptomNames: received.symptomNames, time: received.time, note: received.notes})
        return res.json({"id" : newId})
      }

      else{
        return res.json({'error': "token invalid"})
      }

      
    })

    app.post('/SymptomListHistory', (req, res) => {
      console.log('Requesting Symptom List History');
      const json: {token:string} = req.body;

      console.log('Token received: ' + json.token);
      let verification = JWTManager.verify.token(json.token);

      console.log('type of verfication: ' + verification);

      if(typeof verification !=  typeof 'string')
      {
        verification = verification as JwtPayload;
        const username = verification.username;
        console.log('Username requesting SymptomList History: ' + username);
        SymptomManager.request
        const output = res.json({"SymptomHistory" : SymptomManager.SymptomHistory.get(username)});
        return output;
      }
      else {
        return res.json({'Error' : 'Failed to get history'})
      }
    })

    app.post('/register', async (req, res) => {
      console.log('Register request');
      const json: {username:string, password:string} = req.body;
      console.log('Received from client: ' + JSON.stringify(json));

      let output:any = UserManager.get.checkUsernameExists(json.username)? res.json({'Message': 'User Exists'} ) : true;
      if(output != true)
      {
        console.log('User already exists');
        return output;
      }


      let passwordHashed:string =  await EncryptionManager.encrypt.bcrypt(json.password) + "";

      console.log('Encryption Output: ' + passwordHashed);

      
      const id = Date.now() + "";
      const userJson = {id: id, username: json.username, password: passwordHashed};
      UserManager.get.add(userJson)

      return res.json({'Message': "User Successfully Registered!"});
    })

    app.post('/login', async (req,res) => {
      console.log('Login Request');
      const requestedUser: {username:string, password:string} = req.body;

      let outputUser = null;
      outputUser =  await UserManager.get.get(requestedUser.username, requestedUser.password);


      const response = (outputUser != null)? res.json(JWTManager.get.token(outputUser!)): res.json({'error': 'User was not found.'})

      return response
    })

    app.delete('/remove', (req,res) => {
      console.log('Delete Request');
      const json: {id: string, username:string, password:string} = req.body;

      UserManager.get.remove({id: json.id, username: json.username, password: json.password})

      return res.json({'id': json.id, 'username': json.username, "message": "User has been deleted"})
    })

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    
}


export default {
    run
}