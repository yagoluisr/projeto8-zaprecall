import errou from "./Assets/errou.png";
import duvida from "./Assets/duvida.png";
import acertou from "./Assets/acertou.png";


export default function TemplateFlashcardOpcao({
    setEstado,
    resposta,
    setRespondido,
    contador,
    setContador,
    icones,
    setIcones,
    setEsqueceu
}) {

    function Estados1() {
        setEsqueceu(1);
        setIcones([...icones, <img src={errou}/>])
        setEstado("respondido")
        setRespondido("errou")
        
    }

    function Estados2() {
        setIcones([...icones, <img src={duvida}/>])
        setEstado("respondido")
        setRespondido("duvida")
    }

    function Estados3() {
        setIcones([...icones, <img src={acertou}/>])
        setEstado("respondido")
        setRespondido("acertou")
    }
    
    return (
        <div className="flashcard">
            <span>{resposta}</span>
                <div className="opcoes" onClick={() => {setContador(contador + 1)}}>

                    <div className="opcao1" onClick={Estados1}>Não lembrei</div>

                    <div className="opcao2" onClick={Estados2}>Quase não lembrei</div>   

                    <div className="opcao3" onClick={Estados3}>Zap!</div>

                </div>
        </div>
    )
}