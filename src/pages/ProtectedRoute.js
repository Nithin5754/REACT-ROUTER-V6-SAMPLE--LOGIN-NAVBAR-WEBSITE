import { useEffect } from "react"
import { UseglobalContext } from "../context"
import { useNavigate } from "react-router-dom"
const ProtectedRoute = ({children}) => {
  let navigate=useNavigate()
  const {isUser}=UseglobalContext()
useEffect(()=>{
if(!isUser){
  console.log("hello");
  navigate('/')
}
},[isUser,navigate])

   if(!isUser){
   return null

   }
   return children
}
export default ProtectedRoute
