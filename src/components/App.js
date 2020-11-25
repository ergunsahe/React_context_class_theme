import React from "react";
import BookList from "./BookList"

import MyContextProvider from "../context/MyContext"
import ThemeContextProvider from "../context/ThemeContext"



class App extends React.Component {
    
    render() {

        
        return(
            <ThemeContextProvider>
                <MyContextProvider>
                    <BookList />
                </MyContextProvider>
            </ThemeContextProvider>
        ); 
    }
}

export default App;