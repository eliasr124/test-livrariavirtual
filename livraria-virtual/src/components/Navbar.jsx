import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbBooks } from 'react-icons/tb';
import React from "react";


const Navbar = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/livros")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, []);

    console.log(data)

    return(
        
        <nav id="navbar">
            <h2>
                <Link to="/">
                <TbBooks />Home</Link>
            </h2>
            <h1> { !data ? 'Loading ...' :  data }</h1>
            <form>
                <input type="text" placeholder="Busque um livro"/>
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;