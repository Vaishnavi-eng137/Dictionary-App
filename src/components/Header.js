import {createTheme} from "@material-ui/core/styles"
import {MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import categories from "../data/category";
import {debounce} from "lodash";

function Header({category,setCategory,setWord,word,setMeanings,LightMode}) {

    const darkMode = createTheme({
        palette:{
            primary:{
                main: LightMode? "#000":"#fff",
            },
             type: LightMode? "light" : "dark" ,
        },
    });
     
    const handleChange = (language)=>{
       setCategory(language);
       setWord('');
       setMeanings([]);
    };
     
    const handleText = debounce((text)=>{
        setWord(text);
    },500);

    return (
        <div className="header">
         <span className="title">{word?word:"Word Hunt"}</span>
         <div className = "inputs">
             <ThemeProvider theme = {darkMode}>
             <TextField 
             className = "search"
             value={word}
             label="Search a Word"
             onChange= {(e)=> setWord(e.target.value)}/>
             <TextField 
             select
             className="select"
             id="standard-select-category"
             label="Language"
             value ={category} 
             onChange ={(e) => handleChange(e.target.value)}
             >    
              {categories.map((option)=>(
                  <MenuItem key = {option.label} value = {option.label}>
                      {option.value}
                  </MenuItem>
              ))}    
                 </TextField> 
             </ThemeProvider>
         
         </div>
        </div>
    );
};

export default Header
