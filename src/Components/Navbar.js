import { Link,NavLink } from "react-router-dom"
import { UseglobalContext } from "../context";




const Navbar = () => {

  const {isUser,setUser}=UseglobalContext()

  const navStyle = {
    backgroundColor: '#f8f8f8',
    padding: '10px 0',
    textAlign: 'center'
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
};

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    padding: '10px'
};

const liStyle = {
    display: 'inline',
    margin: '0 10px'
};
  return (
<nav className="section" style={navStyle}>
    <ul className="navbar" style={ulStyle}>
        <NavLink to='/' style={({isActive})=>({color:isActive?'red':'gray'}) }><li style={liStyle}>Home</li></NavLink>
        <NavLink to='/about' ><li style={liStyle}>About</li></NavLink>
        <NavLink to='/dashboard' ><li style={liStyle}>Dashboard</li></NavLink>
        <NavLink to='/product' ><li style={liStyle}>Product</li></NavLink>
       {
        isUser?( <NavLink to='/logout' ><li style={liStyle}>Logout</li></NavLink>):
        ( <NavLink to='/login' ><li style={liStyle}>Login</li></NavLink>)
       }
    </ul>
</nav>
  )
}
export default Navbar