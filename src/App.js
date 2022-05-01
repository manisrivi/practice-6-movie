import "./App.css";
import { useState } from "react";



export default function App() {
  // Create Array of object then inside put the => [{key:values}]
  let users = [
    {rate:"9.6", name:"RRR", img:"https://imdb-api.com/images/original/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7449_AL_.jpg", plot:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."},
    {rate:"5.1", name:"Hey Sinamika", img:"https://imdb-api.com/images/original/MV5BNWEwYjE0YzQtZmZiYi00NzY3LWJkNzktMTA5NmE2NGNkOTA5XkEyXkFqcGdeQXVyMTM1MzAzNzUx._V1_Ratio0.7857_AL_.jpg", plot:"The lives of Mouna, a weather scientist who falls in love with Yaazhan, a quirky and loving guy. What happens to their relationship after a couple of years. "},
    {rate:"8.8", name:"Kaun Pravin Tambe?", img:"https://imdb-api.com/images/original/MV5BYzY5MWZkMzMtYTIxNS00ZmYxLWFkNjMtNTNlMTM2ZmU2YThlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.6837_AL_.jpg", plot:"An indian cricketer who shows persistence and hardwork to achieve his ultimate goal of playing a Ranji Trophy. At the penultimate stage of the career at a age when it is believed people's career end."},
    {rate:"7.5", name:"Etharkkum Thunindhavan", img:"https://imdb-api.com/images/original/MV5BOThhOTU0ODYtYTMyNC00YTZlLTgwYTUtZGEzNmRmYWNmMmQ4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_Ratio0.8469_AL_.jpg", plot:"A lawyer turns judge jury and executioner and goes after a gang, led by a minister's son, that threatens women with videos of them."},
    {rate:"8.3", name:"Jai Bhim", img:"https://imdb-api.com/images/original/MV5BMGEzN2VkMmUtMGM1Zi00Y2U1LTlkMDktMTlhMTdmYzZmZDlhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_Ratio0.6837_AL_.jpg", plot:"When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice."},
    {rate:"9.8", name:"Pushpa", img:"https://imdb-api.com/images/original/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_Ratio0.6837_AL_.jpg", plot:"Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats."}
  ]; 
  

  // return the all things render
     return (
        <div className="container">
          <div className="row">
            {users.map((ele) => <Msg name={ele.name} img = {ele.img} plot = {ele.plot} rate = {ele.rate}/>)}
          </div>
        </div>
     );
     
}



// Create the Counter function [hooks Method]
function Counter(){
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);
  let [lovelike, setloveLike] = useState(0);
  return (
  <div>
    <button className="border-0 btn btn-outline-light" onClick={()=> setLike(like + 1)}>👍<sup className="fw-bold">{like}</sup></button>
    <button className="border-0 btn btn-outline-light" onClick={()=> setDisLike(dislike + 1)}>👎<sup className="fw-bold">{dislike}</sup></button>
    <button className="border-0 btn btn-outline-light" onClick={()=> setloveLike(lovelike + 1)}>💖<sup className="fw-bold">{lovelike}</sup></button>
  </div>
  )
}


// create the content function
function Msg({name, img, plot, rate}){
  return(
       <div className="col-lg-4 col-md-6 tagCard text-center">
        <div className="card p-1">
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
       <div>
       <div className="d-flex justify-content-evenly">
        <div><h5 className="card-title fw-bold">{name}</h5></div>
        <div>{rate}⭐</div>
         </div>
       </div>
        <p className="card-text lh-1">{plot}</p>
        <Counter  />
  </div>
</div>
</div>
  );
}
