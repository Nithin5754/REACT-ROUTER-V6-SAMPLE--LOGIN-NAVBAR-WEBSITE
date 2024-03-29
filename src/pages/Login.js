import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UseglobalContext } from "../context";
const Login = () => {
  const {isUser,setUser,email, setEmail,name, setName}=UseglobalContext()
 


  let navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email||!name)return;
    setUser({name,email})
    setEmail('')
    setName('')
    navigate('/dashboard')
    
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
