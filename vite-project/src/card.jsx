import { useEffect, useState } from 'react';
import gridpik from './assets/app1.jpg'
import {db} from "./firebase";
import { getDocs,collection } from 'firebase/firestore';

<head>
<script src="https://kit.fontawesome.com/e7c5456c49.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
</head>
function Card (){

    const [foodlist,setfoodlist]= useState([]);
    const foodcollectonRef  = collection(db, "menu")

    useEffect(()    =>{
        const getfoodlist = async() => {
            
            try{

const data = await getDocs(foodcollectonRef); 
const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id:doc.id,
}) );
setfoodlist(filteredData);}
catch (err) {console.error(err);}
};  
getfoodlist();
},[]);


return(
<div >
<h1>favorites</h1>
    {foodlist.map((menu) =>  (
<div className="card">
<img className="car"src={gridpik} alt="doodoo" />
<i class="material-icons">spa</i>
<i class="fas fa-cloud"></i>
<h4 >  {menu.dish}</h4>
<p className="title">price : {menu.price}</p>
<p6 className="title">size : {menu.size}</p6>
  
    </div>
      ))}
</div>

);

}
export default Card;

