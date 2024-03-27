function Livro(props) {
    return(
        <div>
            <p>
                {props.data.nome}
            </p>
            
            <p>
               {props.data.nomedoautor}
            </p>
            
            <p>
                {props.data.lancamento}
            </p>
            
            <p>
                {props.data.tipo}
            </p>
            
            <p>
                {props.data.genero}
            </p>
            
            <p>
                {props.data.editora}
            </p>
            
            <p>
                {props.data.anoedicao}
            </p>
            
            <p>
                {props.data.numedicao}
            </p>                
        </div>
    )
}

export default Livro;