import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Livro.css";
import LivroCard from "../components/Livros";
import { getLivros } from "../service/livro.service";


const URL = "http://localhost:3001/livros/";

const Livro = () => {

    const {id} = useParams();
    const [livro, setLivro] = useState(null);

    const getLivro = async(url)=> {
        const res = await fetch(url);
        const data = await res.json();

        setLivro(data);
        console.log(data);
    }

    useEffect(() => {
        const livroUrl = `${URL}${id}`;
        getLivro(livroUrl);
    }, [])

    return(
        <div>{livro && <>{livro.nome}</>}</div>
    )
}

export default Livro;