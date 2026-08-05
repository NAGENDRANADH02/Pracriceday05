import React from "react";
import Function from "./Function"
import ArrowFunction from "./ArrowFunction"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar";
class App extends React.Component {
    render() {
        return(
            <>
            <NavBar/>
            <h1> Hello this is app component </h1 >
            <Function/>
            <ArrowFunction/>
            <SearchBar/>
            </>
        );


        
    }
}
export default App;