import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LivroCard from "../components/Livros";
import "./LivrosGrid.css";
import { getLivros } from "../service/livro.service";


const Search = () => {
    const [searchParams] = useSearchParams();

    const [livros, setLivro] = useState([]);
    const query = searchParams.get("q");

    useEffect(() => {
        const searchWithQueryURL = `http://localhost:3001/livros&query=${query}`;
        getLivros(searchWithQueryURL)
            .then(data => setLivro(data))
            .catch(err => console.log(err));
    }, [query])

    console.log(livros);

    return(
        <div className="container"> 
            <h2 className="title"> Resultados para: <span className="query-text">{query}</span></h2>
            <div className="livros-container">
                { livros.length === 0 && <p>Carregando ...</p> }
                { livros.length > 0 && livros.map((livro) => <LivroCard  key={livro.id} data={livro} />) }
            </div>
        </div>
    )
}

export default Search;