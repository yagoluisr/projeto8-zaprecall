import React from "react";


function Deck(){
    return ([
        {pergunta: "O que é JSX? ", resposta:"Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __ ", resposta:"Letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta:"Expressões"},
        {pergunta: "O ReactDOM nos ajuda __ ", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __ ", resposta:"Gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __ ", resposta:"Passar diferentes informações para componentes "},
        {pergunta: " Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ])
}

function TemplatePergunta({setEstado, index, respondido}) {
    function Pergunta(){
        setEstado("pergunta")
    }

    return (
        <div className={respondido} onClick={Pergunta}>
            <span>Pergunta {index}</span>
            <img src="Assets/Vector.png" />
        </div>
    )
}


function TemplateFlashcard({setEstado, pergunta}) {
    function Opcoes(){
        setEstado("respostas")
    }

    return (
        <div className="flashcard">
            <span>{pergunta}</span>
                <div className="icones">
                    <img src="Assets/Girar.png" onClick={Opcoes}/>
                </div>
        </div>
    )
}

function TemplateFlashcardOpcao({setEstado, resposta, setRespondido}) {
    return (
        <div className="flashcard">
            <span>{resposta}</span>
                <div className="opcoes">
                    <div className="opcao1" onClick={() => {setEstado("respondido"); setRespondido("errou")} }>Não lembrei</div>
                    <div className="opcao2" onClick={() => {setEstado("respondido"); setRespondido("duvida")} }>Quase não lembrei</div>   
                    <div className="opcao3" onClick={() => {setEstado("respondido"); setRespondido("acertou")} }>Zap!</div>
                </div>
        </div>
    )
}

function TemplateRespondido({index, respondido}) {

    return (
        <div className={respondido}>
            <span>Pergunta {index}</span>
            <img src={`Assets/${respondido}.png`} />
        </div>
    )
}


export default function Main() {
    const perguntas = Deck();
    

    function VerificarEstado({index, pergunta, resposta}) {
        const [respondido, setRespondido] = React.useState("pergunta");
        const [estado, setEstado] = React.useState("inicio");

        if(estado === "inicio"){
            return (
                <TemplatePergunta setEstado={setEstado} index={index} respondido={respondido} />
            )
        }
        if(estado === "pergunta"){
            return (
                <TemplateFlashcard setEstado={setEstado} pergunta={pergunta} />
            )
        }
        if(estado === "respostas"){
            return (
                <TemplateFlashcardOpcao setEstado={setEstado} resposta={resposta} setRespondido={setRespondido}/>
            )
        }
        if(estado === "respondido"){
            return (
                <TemplateRespondido setEstado={setEstado} index={index} respondido={respondido}/>
            )
        }
}

    return (
        <div className="main">
            
            {perguntas.map((obj, index) => (
                <VerificarEstado key={index} index={index+1} {...obj}/>
            ))}

        </div>
    )
}