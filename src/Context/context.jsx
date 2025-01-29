import { createContext, useState } from "react";
import run from "../config/gemini";
import { use } from "react";


export const Context = createContext();

const ContextProvider = (props)=>{

    const [input,setInput] = useState('');
    const [recentPrompt,setRecentPrompt] = useState('');
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState('');


    const delayPara=(index,nextWord)=>{
        setTimeout(() => {
            setResultData(prev=>prev+nextWord);
        }, 75*index);
    }

    const newChat= ()=>{
        setLoading(false);
        setShowResult(false)
    }


    const onSent = async (prompt)=>{

        setResultData('');
        setLoading(true);
        setShowResult(true);
        let response ;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setRecentPrompt(input);
            setPrevPrompts(prev=>[...prev,input]);
             response = await run(input);
        }

        const responseArray = response.split('**'); 

        let newResponse = '';
        for (let i = 0; i < responseArray.length; i++) {
            if (i % 2 === 0) {
                newResponse += responseArray[i];
            } else {
                newResponse += `<b>${responseArray[i]}</b>`;
            }
        }
   
        const formattedResponse = newResponse.split('*').join('</br>');
        let newResponseArray=formattedResponse.split(' ');

        for(let i =0 ; i <newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+' ');
        }
        setLoading(false);
        setInput('');


    };

 


    const contextValue = { 

        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat

     }

    return (

        <Context.Provider  value={contextValue}>

            {props.children }
        </Context.Provider>
    )
};

export default ContextProvider;
