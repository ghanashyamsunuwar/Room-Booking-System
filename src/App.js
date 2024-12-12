import './App.css';
import First from "./screens/First";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//for bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from './screens/Main';
import Slogin from './screens/sell/Slogin';
import Sregister from './screens/sell/Sregister';
import Shome from './screens/sell/Shome';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import Admin from "./screens/Admin";

import BuyerList from './components/Admin/BuyerList';
import SellerList from './components/Admin/SellerList';
import RoomList from './components/Admin/RoomList';
import BookedList from './components/Admin/BookedList';
import AdminLogin from './screens/AdminLogin';
import Edit from './screens/sell/Edit.js';



function App() {
    return (
      <CartProvider>
     <Router>
       <div>
         <Routes>
            <Route exact path="/edit/:_id" element={<Edit/>}/>

            <Route exact path="/" element={<First/>} />
            <Route exact path='/buy' element={<Home/>}/>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/main" element={<Main/>}/>
            <Route exact path="/shome" element={<Shome/>}/>
            <Route exact path="/slogin" element={<Slogin/>}/>
            <Route exact path="/sregister" element={<Sregister/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/admin" element={<Admin/>} />
            <Route exact path="/adminlogin" element={<AdminLogin/>} />

            <Route exact path="/Admin/BuyerList" element={<BuyerList/>}/>
            <Route exact path= "/Admin/SellerList" element={<SellerList/>}/>
            <Route exact path = "/Admin/RoomList" element={<RoomList/>}/>
            <Route exact path = "/Admin/BookedList" element={<BookedList/>}/>
        </Routes>
       </div>
     </Router>
     </CartProvider>
    );
  }

export default App;
