import { Link } from "react-router-dom";
import "./NavBar.css";

function LivroCard(props, showLink = true) {
    return(
        <div className="livro-card">

            <img src="../images"  alt="Livros"/>
            <h2>
                {props.data.nome}
            </h2>
            
            <h2>
               {props.data.nomedoautor}
            </h2>
            { showLink && <Link to={`/livro/${props.id}`}>Detalhes</Link> }
        </div>
        
    )
}

export default LivroCard;
