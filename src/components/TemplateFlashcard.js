import Girar from "./Assets/Girar.png";

export default function TemplateFlashcard({
    setEstado,
    pergunta
}) {
    
    function Opcoes(){
        setEstado("respostas")
    }

    return (
        <div className="flashcard">
            <span>{pergunta}</span>
                <div className="icones">
                    <img src={Girar} onClick={Opcoes}/>
                </div>
        </div>
    )
}