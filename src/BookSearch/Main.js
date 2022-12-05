import react ,{useState}from "react";
import Card from "./Card";
import './style.css'
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios
              .get(
                // "https://www.googleapis.com/books/v1/volumes?q=" +
                //   search +
                //   "&key=AIzaSyCk-AYMHq6QW2rp8-SPjHBYsxZJ03OPSTc" +
                //   "&maxResults=40"
                `${API_URL}?q=${search}`
              )
              .then((res) => setData(res.data.items))
              .catch((err) => console.log(err));
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="../images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;