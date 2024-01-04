import React,{useEffect} from "react"

import { useNavigate } from "react-router-dom"
import { UseglobalContext } from "../context"



const Logout = () => {
  
  let navigate=useNavigate()
  let {setUser}=UseglobalContext()

useEffect(()=>{
  setUser(null)
  localStorage.removeItem('users')

  navigate('/')
},[setUser,navigate])

  
  return null
 
}


export default Logout