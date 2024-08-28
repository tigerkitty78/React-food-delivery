import {Auth} from "./auth";
import {Link, Route, Routes} from "react-router-dom"
import Food from "./food";
import { Logins } from "./login";
import { SearchBar } from "./search";

function App () {

  return(
  <>
  <div className="App">
    <Routes>
    <Route path="/" element={<Auth/>}/>
    <Route path="/food" element={<Food/>}/>
    <Route path="/login" element={<Logins/>}/>


 
    <Route path="/search" element={<SearchBar/>}/>
    </Routes>
    
    
    
    </div>

<div className="navbar">
     
<div className="icon"><span class="material-icons">home</span></div>       
<div className="icon"> <span class="material-icons">search</span> </div>
<div className="icon">  <span class="material-icons">delivery_dining</span> </div>
<div className="icon">  <span class="material-icons">account_circle</span>   </div>       



</div>
</>
    );
}
export default App;