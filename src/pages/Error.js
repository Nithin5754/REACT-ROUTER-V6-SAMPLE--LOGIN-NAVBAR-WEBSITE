import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2 className="alert alert-danger"> 404 PAGE NOT FOUND</h2>
      <Link to={'/'}>
       <button className="btn btn-hipster">back to home page</button>
      
      </Link>
    </section>
  );
};
export default Error;
