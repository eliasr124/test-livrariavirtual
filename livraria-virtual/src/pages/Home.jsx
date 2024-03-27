import { useState, useEffect } from "react";
import { getLivros } from "../service/livro.service";
import LivroCard from "../components/Livros";
import "./LivrosGrid.css";

const Home = () => {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        getLivros()
            .then(data => setLivros(data))
            .catch(err => console.log(err));
    }, [])

    console.log(livros);

    return(

        <div className="container"> 
            <h2 className="title"> Livros Disponiveis para venda: </h2>
            <div className="livros-container">
                { livros.length === 0 && <p>Carregando ...</p> }
                { livros.length > 0 && livros.map((livro) => <LivroCard  key={livro.id} data={livro} />) }
            </div>
        </div>
    )
}

export default Home;