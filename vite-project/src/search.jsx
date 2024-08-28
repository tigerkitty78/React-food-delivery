import React ,{useState}from "react";
import data from "./TemplateData.json"
import { Navigate, useNavigate } from "react-router-dom";
export const SearchBar = () =>
    {const [input, setInput] = useState("");
    
    
        
        return (<div>
<i  class="material-icons">search</i>
<input className="search"placeholder="search" value= {input} onChange={(event) => {setInput(event.target.value);}}/>
    <div className="categories">
{

    data
    .filter((val) => {
        if(input == ""){
          return val;
        }else if(val.title.toLowerCase().includes(input.toLowerCase())){
          return val;
        }
      })
      .map((val) => {

       
            
        return(
          <div onClick={() => {Navigate('/${val.id}');}} className="template" key={val.id}>
             
              <p onClick={() => {Navigate('/${val.id}');}} className="stext">{val.title}</p>
              <p className="stext">{val.descrip}</p>
             
          </div>
        )})
        }


    </div>
    
    
    
    
    
    
    </div>

        )



};