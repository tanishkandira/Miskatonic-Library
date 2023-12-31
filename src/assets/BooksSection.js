import React,{useState,useEffect} from 'react';
import axios from 'axios';
import logo from '../img/Book.svg';
import SearchForm from './SearchForm';
import Book from './Book';
import Footer from './Footer';
import LoadingCard from './LoadingCard';

function BooksSection() {
    const [details,setDetails] = useState([])
    const [term,setTerm] = useState("Harry Potter")
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchDetails = async ()=>{
            setIsLoading(true)
            const resources = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=10&key=${process.env.REACT_APP_SECRET_KEY}
                `
            )
            // console.log(resources.data.items) array of search items
            setDetails(resources.data.items)
            setIsLoading(false)
        }
        fetchDetails()
    }, [term])

    const loadMore = async ()=>{
        const resources = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=8&startIndex=${details.length}&key=${process.env.REACT_APP_SECRET_KEY}
            `
        )
        setDetails((oldDetails)=>[...oldDetails, ...resources.data.items])
    }

    return (
        <>
          <div
            className="searchText"
            style={{ filter: "drop-shadow(5px 8px 3px black)" }}
          >
            <h2
              style={{
                textTransform: "capitalize",
                color: "#f40968",
                fontSize: 40,
                marginTop: -60,
                marginBottom: -21,
                // fontFamily: "Scheherazade New",
              }}
            >
            {term}
            </h2>
          </div>
          <SearchForm searchText={(text) => setTerm(text)}/>
          {isLoading ? (
            <section className="container" style={{ padding: "2rem 0rem" }}>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </section>
          ) : !details ? (
            <h1
              className="loading-name"
              style={{
                background: "white",
                borderRadius: "1rem",
                color: "#DB4437",
                padding: "1rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                fontSize: 33,
                fontFamily: "Inria Serif",
                transform: "translate(-50%,-50%)",
                textTransform: "capitalize",
                display: "flex",
              }}
            >
              😞 Couldn't find books about {term}
            </h1>
          ) : (
            <section>
              <section className="container" style={{ padding: "1rem 0rem" }}>
                {details.map((book, index) => (
                  <Book {...book} key={index} />
                ))}
                <div className="custom-card">
                  <h3 style={{ fontSize: "1.32rem", color: "white" }}>
                    Didn't find the book you love?
                  </h3>
                  <br />
    
                  <img
                    style={{ width: "100%" }}
                    src={logo}
                    alt="A man reading a book"
                    srcSet=""
                  />
                  <h3 style={{ fontSize: "1.21rem", color: "white" }}>
                    Search for your Favorite{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Genre{" "}
                    </span>
                    or{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Author{" "}
                    </span>
                    of Book in the search box!!{" "}
                  </h3>
                  <h3>
                    or <span>Subscribe to our NewsLetter!</span>
                  </h3>
                  <form
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                      autofill="false"
                    />
                    <button
                      className="join-btn"
                      style={{
                        marginLeft: ".8rem",
                        transition: "all 0.3s ease 0s",
                        padding: "0.6rem",
                        borderRadius: "0.4rem",
                        cursor: "pointer",
                      }}
                      type="submit"
                    >
                      Join
                    </button>
                  </form>
                </div>
              </section>
              <div className="load-more">
                <button onClick={() => loadMore()}>Load More!</button>
              </div>
              <Footer/>
            </section>
          )}
        </>
      );
}


export default BooksSection