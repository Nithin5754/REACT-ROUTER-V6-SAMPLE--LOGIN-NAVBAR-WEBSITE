import { UseglobalContext } from "../context";


const Dashboard = () => {

  const {isUser}=UseglobalContext()
  return (
    <section className='section'>
    <h4>Welcome to Dashboard</h4>
    <h1>Hello{isUser?.name}</h1>
  </section>
  );
};
export default Dashboard;
