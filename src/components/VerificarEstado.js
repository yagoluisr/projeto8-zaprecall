import React from "react";
import TemplateFlashcard from "./TemplateFlashcard";
import TemplateFlashcardOpcao from "./TemplateFlashcardOpcao";
import TemplatePergunta from "./TemplatePergunta";
import TemplateRespondido from "./TemplateRespondido";


export default function VerificarEstado({
    index,
    pergunta,
    resposta,
    contador,
    setContador,
    icones,
    setIcones,
    setEsqueceu,
    images
}) {
        
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
            setIcones={setIcones}
            images={images}/>
        )
    }
}