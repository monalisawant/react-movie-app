import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";




const Home = () => {
 const [movies,setMovies]=useState([])
  const API=`http://www.omdbapi.com/?apikey=a1848174&s=titanic`
  useEffect(()=>{
   fetch(API)
   .then((response)=>response.json())
   .then((data)=>setMovies(data.Search))
    

  },[])
   
  return (
   <section className="moviepage">
    <div className="grid grid-4-col">
    {movies.map((curr)=>{
      const {imdbID,Title,Poster}=curr
        return (
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="cardinfo">
              <h2>{Title}</h2>
              <img src={Poster}/>
              </div>
               </div>
               </NavLink>
        );
    })}
    </div>
    </section>
  );
}

export default Home;
