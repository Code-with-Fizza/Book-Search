import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './BookSearch/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booksearch from './components/Booksearch';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} auth={true} />
          {/* <Route path="/dashboard" element={<Main />} auth={true} /> */}
          <Route path="/dashboard" element={<Booksearch />} auth={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

