import logo from './logo.svg';
import './App.css';
import {Header,UserList,UserDetails,DeleteUser,UpdateUser,AddUser} from './MiniProject/HeaderM.js'
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">
   <Header></Header>
   <div>

      <Routes>        
{/* -------------------MIniProject-Routes-------------------- */}
        <Route path='userlist' element={<UserList/>} ></Route>
        <Route path='adduser' element={<AddUser/>} ></Route>
        <Route path='userdetails/:id' element={<UserDetails/>} ></Route>
         <Route path='deleteuser/:id' element={<DeleteUser/>} ></Route>
        <Route path='updateuser/:id' element={<UpdateUser/>} ></Route> 
        
      </Routes>
   </div>
   {/* <Footer></Footer> */}
      </div>
    </>

  );
}

export default App;
