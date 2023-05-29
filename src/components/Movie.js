import React from 'react';
import { useGlobalcontext } from '../context/context';

const Movies = () => {
    const { movie }=useGlobalcontext();
  return (
    <>
    {movie && movie.map((curr)=>{
        return(
        <div>
         <h2>{curr.Title}</h2>
        </div>
        );
    })}

    </>
    
  );
}

export default Movies;
