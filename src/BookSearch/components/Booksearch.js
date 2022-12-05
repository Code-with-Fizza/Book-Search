import React, {useState} from 'react'
// import './style.css'
import axios from 'axios'
import bg2 from '../images/bg2.png'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Booksearch = () => {
    // const [book ,setBook]= useState("");
      const [searchTerm, setSearchTerm] = useState("");
      const [books, setBooks] = useState({ items: [] });
      const onInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    // const [result , setResult] = useState([]);
    //     const [apikey, setApiKey] = useState("AIzaSyCk-AYMHq6QW2rp8-SPjHBYsxZJ03OPSTc");

//     const handleChange =(event)=>{
//  const book = event.target.value;
//  setBook(book)
//     }
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
   const btnstyle = {   marginLeft: "1400px", FontSize: "large"};
   const fetchBooks = async () => {
     const result = await axios.get(`${API_URL}?q=${searchTerm}`);
     setBooks(result.data);
   };
    const handleSubmit=async(event)=>{
      event.preventDefault();
      // Call fetch books async function
      fetchBooks();
      // axios.get(" https://www.googleapis.com/books/v1/volumes?q="+book+"&key=" +apikey+"&maxResults=20")
      // .then(data =>{
      //     console.log(data)
      // })
    }
    const bookAuthors = (authors) => {
      if (authors.length <= 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    };
  return (
    <>
      <div className="header">
        <Link to="/">
   <button class="btn btn btn-primary" style={btnstyle} type="submit">Logout</button>
        </Link>
      
         
      </div>
      <div className="container">
        <h1> Book Search App</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              className="form-control mt-10"
              placeholder="Serach for books"
              autoComplete="off"
              value={searchTerm}
              onChange={onInputChange}
            />
          </div>
          <button class="btn btn btn-primary" type="submit">
            Search
          </button>
          <img src="../images/bg2.png" alt="" />
        </form>

        <ul className="card">
          {books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div>
                    <h3 className="title">{book.volumeInfo.title}</h3>
                    <p>{bookAuthors(book.volumeInfo.authors)}</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Booksearch