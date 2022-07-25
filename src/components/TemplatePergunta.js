import Vector from "./Assets/Vector.png";

export default function TemplatePergunta({
    setEstado,
    index,
    respondido
}) {

    function Pergunta(){
        setEstado("pergunta")
    }

    return (
        <div className={respondido} onClick={Pergunta}>
            <span>Pergunta {index}</span>
            <img src={Vector} />
        </div>
    )
}