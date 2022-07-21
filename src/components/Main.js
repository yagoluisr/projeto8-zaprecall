import React from "react";


function Deck(){
    return ([
        {pergunta: "O que é JSX? ", resposta:"Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
        // {pergunta: "Componentes devem iniciar com __ ", resposta:"Letra maiúscula"},
        // {pergunta: "Podemos colocar __ dentro do JSX", resposta:"Expressões"},
        // {pergunta: "O ReactDOM nos ajuda __ ", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
        // {pergunta: "Usamos o npm para __ ", resposta:"Gerenciar os pacotes necessários e suas dependências"},
        // {pergunta: "Usamos props para __ ", resposta:"Passar diferentes informações para componentes "},
        // {pergunta: " Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ])
}

function TemplatePergunta({setEstado}) {
    function Pergunta(){
        setEstado("pergunta")
    }

    return (
        <div className="pergunta" onClick={Pergunta}>
            <span>Pergunta 1</span>
            <img src="Assets/Vector.png" />
        </div>
    )
}


function TemplateFlashcard({setEstado}) {
    function Opcoes(){
        setEstado("respostas")
    }

    return (
        <div className="flashcard">
            <span>O que é JSX?</span>
                <div className="icones">
                    <img src="Assets/Girar.png" onClick={Opcoes}/>
                </div>
        </div>
    )
}

function TemplateFlashcardOpcao() {
    return (
        <div className="flashcard">
            <span>Uma extensão de linguagem do JavaScript</span>
                <div className="opcoes">
                    <div className="opcao1">Não lembrei</div>
                    <div className="opcao2">Quase não lembrei</div>   
                    <div className="opcao3">Zap!</div>
                </div>
        </div>
    )
}




export default function Main() {
    const perguntas = Deck();
    

    function VerificarEstado() {
        const [estado, setEstado] = React.useState("inicio");

        if(estado === "inicio"){
            return (
                    <TemplatePergunta setEstado={setEstado}/>
            )
        }
        if(estado === "pergunta"){
            return (
                    <TemplateFlashcard setEstado={setEstado}/>
            )
        }
        if(estado === "respostas"){
            return (
                    <TemplateFlashcardOpcao />
            )
        }
}

    return (
        <div className="main">
            
            {perguntas.map((value, index) => (
                <VerificarEstado key={index} />
            ))}

        </div>
    )
}