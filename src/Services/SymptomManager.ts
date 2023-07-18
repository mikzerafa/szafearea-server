import React from 'react';


import Symptoms from '../tempDB/SymptomList';
import io from '../Services/io';

type State = {
    id: string;
    SymptomNames: string[];
    time: string;
    note: string;
}

type SymptomHistoryLog = {
    userId: string;
    stateId: string[];
}

const request ={
    all:()=>{
        return Symptoms.SymptomList
    }
}


const  SymptomHistory ={
    get:(username:string) => {
        let history = JSON.parse(io.file.read(process.env.SYMPTOM_HISTORY_FILE_LOCATION!)) as SymptomHistoryLog[]
        let user = null;
        if(history.length > 0)
        {
            user = history.filter(element => element.userId == username);
        }
        return user? user[0] : [];
    },
    set:(username:string, states:string[]) => {
        let history = JSON.parse(io.file.read(process.env.SYMPTOM_HISTORY_FILE_LOCATION!)) as SymptomHistoryLog[]
        history = history.filter(element => element.userId != username)
        history.push({userId: username, stateId: states});
        io.file.write(process.env.SYMPTOM_HISTORY_FILE_LOCATION!, JSON.stringify(history))
    },
    add:(username:string, stateId:string) => {
        let temp:SymptomHistoryLog = {userId: username, stateId: [stateId]}
        let history = JSON.parse(io.file.read(process.env.SYMPTOM_HISTORY_FILE_LOCATION!)) as SymptomHistoryLog[]

        
        let userHistory = null;
        if(history.length)
        {
            userHistory = history.filter(element => element.userId == username)
            userHistory = userHistory.length? userHistory : null;
        }

        if(userHistory != null)
        {
            console.log("user history length: " + userHistory.length)
            userHistory[0].stateId.push(stateId);
            userHistory = userHistory? userHistory : [temp];

            history.push(userHistory[0]);
            io.file.write(process.env.SYMPTOM_HISTORY_FILE_LOCATION!, JSON.stringify(history))
        }
        else{
            io.file.write(process.env.SYMPTOM_HISTORY_FILE_LOCATION!, JSON.stringify([temp]))
        }
        

        return true;
    }
}

const stateManager ={
    state:(stateToAdd:State) => {
        let currentStates = JSON.parse(io.file.read(process.env.STATE_FILE_LOCATION!)) as State[];
        console.log(currentStates);
        if(currentStates.length)
        {
            currentStates.push(stateToAdd)
            io.file.write(process.env.STATE_FILE_LOCATION!, JSON.stringify(currentStates))
        }
        else{
            io.file.write(process.env.STATE_FILE_LOCATION!, JSON.stringify([stateToAdd]))
        }

        return stateToAdd.id
    },
    get:(stateIds:String[]) => {
        let currentStates = JSON.parse(io.file.read(process.env.STATE_FILE_LOCATION!)) as State[];
        let filteredStates = currentStates.filter(element => stateIds.includes(element.id))

        console.log('Filtered states length: ' + filteredStates.length)
        return filteredStates;
    }
}

export default{
    request,
    SymptomHistory,
    stateManager
}