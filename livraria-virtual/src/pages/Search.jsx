import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LivroCard from "../components/Livros";
import "./LivrosGrid.css";
import { getLivros } from "../service/livro.service";

const livrosURL = "http://localhost:3001/livros";

const Search = () => {
    const [searchParams] = useSearchParams();

    const [livros, setLivro] = useState([]);
    const query = searchParams.get("q");

    const getSearchLivro = async (url) => {
        const res = await fetch(url);
        const data = res.json();

        setLivro(data);
    }

    useEffect(() => {
        const searchWithQueryURL = `${livrosURL}?&query=${query}`;
        console.log(searchWithQueryURL);
        
        getSearchLivro(searchWithQueryURL);
    }, [query])

    console.log(livros);

    return(
        <div className="container"> 
            <h2 className="title"> Resultados para: <span className="query-text">{query}</span></h2>
            <div className="livros-container">
                { livros.length === 0 && <p>Carregando ...</p> }
                { livros.length > 0 && livros.map((livro) => <LivroCard  key={livro.id} livro={livro} />) }
            </div>
        </div>
    )
}

export default Search;