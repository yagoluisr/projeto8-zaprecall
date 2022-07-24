import React from "react";
import Info_Inferior from "./Info_Inferior";


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

function TemplateFlashcardOpcao({setEstado, resposta, setRespondido, contador, setContador, icones, setIcones, setEsqueceu}) {
    function Estados1() {
        setEsqueceu(1);
        setIcones([...icones, <img src="Assets/errou.png"/>])
        setEstado("respondido")
        setRespondido("errou")
        
    }
    function Estados2() {
        setIcones([...icones, <img src="Assets/duvida.png"/>])
        setEstado("respondido")
        setRespondido("duvida")
    }
    function Estados3() {
        setIcones([...icones, <img src="Assets/acertou.png"/>])
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


function TemplateRespondido({index, respondido}) {
    
    return (
        <div className={respondido}>
            <span>Pergunta {index}</span>
            <img src={`Assets/${respondido}.png`} />
        </div>
    )
}

function VerificarEstado({index, pergunta, resposta, contador, setContador, icones, setIcones, setEsqueceu}) {
    const [respondido, setRespondido] = React.useState("pergunta");
    const [estado, setEstado] = React.useState("inicio");
    
    
    if(estado === "inicio"){
        return (
            <TemplatePergunta 
            setEstado={setEstado} 
            index={index} 
            respondido={respondido} />
        )
    }
    if(estado === "pergunta"){
        return (
            <TemplateFlashcard 
            setEstado={setEstado} 
            pergunta={pergunta} />
        )
    }
    if(estado === "respostas"){
        return (
            <TemplateFlashcardOpcao 
            estado={estado}
            setEstado={setEstado} 
            resposta={resposta} 
            setRespondido={setRespondido} 
            contador={contador} 
            setContador={setContador} 
            icones={icones} 
            setIcones={setIcones}
            setEsqueceu={setEsqueceu}/>
            
        )
    }
    if(estado === "respondido"){
        return (
            <TemplateRespondido 
            setEstado={setEstado} 
            index={index} 
            respondido={respondido} 
            icones={icones} 
            setIcones={setIcones}/>
        )
    }
}


export default function Main() {
    
    const [icones, setIcones] = React.useState([]);

    const perguntas = Deck();
    const [contador, setContador] = React.useState(0);
    const [esqueceu, setEsqueceu] = React.useState(0);

    <VerificarEstado 
    pergunta={perguntas} 
    contador={contador} 
    setContador={setContador} 
    icones={icones} 
    setIcones={setIcones}
    setEsqueceu={setEsqueceu}/>

    const quantidade = Deck();
    
    return (
        <div className="main">
            
            {perguntas.map((obj, index) => (
                <VerificarEstado 
                key={index} 
                index={index+1} 
                {...obj} 
                contador={contador} 
                setContador={setContador} 
                icones={icones} 
                setIcones={setIcones}
                setEsqueceu={setEsqueceu} />
            ))}

            <Info_Inferior 
            contador={contador} 
            quantidade={quantidade} 
            icones={icones}
            esqueceu={esqueceu}/>

        </div>
    )
}