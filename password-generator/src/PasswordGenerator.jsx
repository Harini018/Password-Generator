import React, { useState } from 'react';

export const PasswordGenerator = () => {
    const [length,setLength]=useState(8);
    const [includeUpper,setIncludeUpper]=useState(true);
    const [includeLower,setIncludeLower]=useState(true);
    const [includeNumbers,setIncludeNumbers]=useState(true);
    const [includeSymbols,setIncludeSymbols]=useState(true);
    const [password,setPassword]=useState("");

    function generatePassword(){
        let charset="";
        if(includeUpper)  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLower)  charset += "abcdefghijklmnopqrstuv";
        if(includeNumbers)  charset += "0123456789";
        if(includeSymbols)  charset += "!@#$%^&*()_-+=";
        let generatedPassword ="";
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()* charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);

    };
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied")
    }
  return (
    <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length</label>
            <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='upper' checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}/>
            <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='lower' checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}/>
            <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='number' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
            <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='symbol' checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
            <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className='generate-password'>
            <input type="text"  readOnly value={password}/>
            <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
    </div>
  );
}
