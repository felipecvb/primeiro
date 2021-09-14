import{useState} from 'react';

function Home() {
    return (
        <div>
            <h2>Home 3</h2>
            <Contador />
            <div>teste</div>
        </div>
    )
}
function Contador() {
    const [contador,setContador] = useState(1);
    function adicionarContador(){
        setContador(contador+1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>             
        </div>
    )
}

export default Home