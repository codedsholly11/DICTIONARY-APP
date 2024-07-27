import React, { useState } from 'react'


const Users = () => {
    const [phonetics, setphonetics] =  useState('')
    const [word, setword] = useState('')
    const [definition, setDefinition] = useState('')
    const [partofspeech, setPartOfSpeech] = useState('')
    async function fetchApi(e){
        e.preventDefault();
        try {
            const baseurl = 'https://api.dictionaryapi.dev/api/v2/entries/en'
            const response = await fetch(`${baseurl}/${word}`)
            .then((res) =>res.json())
            if(response){
                setphonetics(response)
                setword(response)
                setDefinition(response)
                setPartOfSpeech(response)
            }
        } catch (error){
         console.log(error)  
        }
        

    }
  return (
    <div className='flex flex-col gap-[10px] items-center justify-center'>
        <div className='flex gap-[10px]'>
            <input onChange={(e)=> setword(e.target.value)} className='border-2 w-[30vw] h-[8vh] rounded-lg bg-white' type="text" placeholder='' />
            <button onClick={fetchApi} className='bg-green-300 px-[15px] w-[7vw] h-[8vh] rounded-lg'>search</button>
        </div>
    <div className='bg-slate-400 w-[38vw] rounded-xl px-[15px]'>
    {   
        definition && 
        <p>{definition[0].meanings[0].definitions[0].definition}</p>
    }
    {
        phonetics &&
        <p>{phonetics[0].phonetics[0].text}</p>
    }
    {
        partofspeech &&
        <p>{partofspeech[0].meanings[0].partOfSpeech}</p>
    }
    </div>
     
    </div>
    
  )
}

export default Users

