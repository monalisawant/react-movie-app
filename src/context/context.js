// import React, { useContext, useEffect, useState } from "react";
// const AppContext=React.createContext();



// const API=`http://www.omdbapi.com/?apikey=a1848174&s=titanic`

// const AppProvider=({children})=>{
//       const {isloading,setIsloading}=useState(true)
//       const {movie,setMovie}=useState([])
//     //   const {iserror,setIserror}=useState({show:"false",msg:""})



//     useEffect(()=>{
//         const res=fetch(API)
//         const data = JSON.parse(res);
       
//         if(data.Response==="True"){
//             setIsloading(false);
//             setMovie(data.Search);
//         }
//     },[])


//     return <AppContext.Provider value={[isloading,setIsloading,setMovie,movie]}>
//               {children}    
//             </AppContext.Provider>
// }

// const useGlobalcontext=()=>{
//     return useContext(AppContext)
// }


// export {AppProvider,AppContext,useGlobalcontext}
