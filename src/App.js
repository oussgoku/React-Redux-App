import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserListing from './components/UserListing';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<UserListing></UserListing>}></Route>
        <Route path="/user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/user/edit/:code" element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
