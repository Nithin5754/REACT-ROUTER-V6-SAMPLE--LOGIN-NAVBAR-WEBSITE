


import React,{useContext, useEffect, useState} from "react";




const AppContext=React.createContext()

const AppProvider=({children})=>{
  const [isUser,setUser]=useState(()=>{
    const localData=localStorage.getItem('users')
    return localData?JSON.parse(localData):[];
  })





  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
  localStorage.setItem('users',JSON.stringify(isUser))
  },[isUser])

  return(
    <AppContext.Provider value={{isUser,setUser,name, setName,email, setEmail}}>
{children}
    </AppContext.Provider>
  )
}


const UseglobalContext=()=>{
  return useContext(AppContext)
}


export{UseglobalContext,AppProvider}