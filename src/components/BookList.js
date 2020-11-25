import React from "react"
import Book from "./Book"
import { myContext } from "../context/MyContext"
import { ThemeContext } from "../context/ThemeContext"


import "./BookList.css"


class BookList extends React.Component {
    // static contextType = BookContext;
    render() {
        // console.log(this.context)
        // const books = this.context

        return (
            <ThemeContext.Consumer>{(contextTheme) => (

                <myContext.Consumer>
                        {contextBook => {
                            const {books} = contextBook;
                            const {changeTheme, isDarkTheme, dark, light} = contextTheme;
                            const theme = isDarkTheme ? dark : light;
                        return (
                            <section className="page-section" style={{background:theme.bg, color:theme.txt}} id="portfolio">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                        <button 
                                            type="button" 
                                            className= "btn btn-sm btn-info" 
                                            style={{marginBottom:"40px"}}
                                            onClick={() =>changeTheme()}
                                            
                                        >Change Theme</button>
                                    </div>
                                    <div className="row">

                                        {books.map((book, i) => {
                                            return <Book
                                                book={book}
                                                key={i}
                                            />
                                        })}

                                    </div>
                                </div>
                            </section>
                        )
                    }}
                </myContext.Consumer>
            )}

            </ThemeContext.Consumer>
        )
    }
}

export default BookList


{/* <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">

                        {books.map((book, i) => {
                            return <Book
                                book={book}
                                key={i}
                            />
                        })}

                    </div>
                </div>
            </section> */}