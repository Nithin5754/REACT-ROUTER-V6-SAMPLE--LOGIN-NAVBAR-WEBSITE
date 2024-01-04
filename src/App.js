import {Route,Routes} from "react-router-dom";

import { About,Dashboard,Error,Home,Login,SingleProduct,Product, Logout,SharedLayout,SharedProductLayout, ProtectedRoute } from "./pages/index";





function App() {
 
   
  return ( <Routes>
    <Route path="/" element={<SharedLayout/>}>
       <Route index element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="dashboard" element={
       <ProtectedRoute>
          <Dashboard/>
       </ProtectedRoute>} />
<Route path="product" element={<SharedProductLayout/>}>
    <Route index element={<Product/>}/>
   <Route path=":productId" element={<SingleProduct/>}/>
</Route>

       <Route path="login" element={<Login/>}   />
       <Route path="logout" element={<Logout/>}/>
   
    </Route>
    
      
       <Route path="*" element={<Error/>}/>
    </Routes>)

}

export default App;
