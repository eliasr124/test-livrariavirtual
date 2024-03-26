import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbBooks } from 'react-icons/tb'


const Navbar = () => {
    return(
        <nav id="navbar">
            <h2>
                <Link to="/">
                <TbBooks />Home</Link>
            </h2>
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