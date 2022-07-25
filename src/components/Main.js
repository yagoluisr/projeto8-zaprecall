import React from "react";
import Info_Inferior from "./Info_Inferior";
import acertou from "./Assets/acertou.png";
import duvida from "./Assets/duvida.png";
import errou from "./Assets/errou.png";
import TemplatePergunta from "./TemplatePergunta";
import TemplateFlashcard from "./TemplateFlashcard";
import TemplateFlashcardOpcao from "./TemplateFlashcardOpcao";
import TemplateRespondido from "./TemplateRespondido";
import VerificarEstado from "./VerificarEstado";
import Deck from "./Deck";



export default function Main() {
    const images = {
        acertou: acertou,
        duvida: duvida,
        errou: errou,
    }
    
    const perguntas = Deck();
    const quantidade = Deck();

    const [icones, setIcones] = React.useState([]);
    const [contador, setContador] = React.useState(0);
    const [esqueceu, setEsqueceu] = React.useState(0);

    <>  
        <Deck />
        <TemplatePergunta />
        <TemplateFlashcard />
        <TemplateFlashcardOpcao />
        <TemplateRespondido />
        <VerificarEstado 
        pergunta={perguntas} 
        contador={contador} 
        setContador={setContador} 
        icones={icones} 
        setIcones={setIcones}
        setEsqueceu={setEsqueceu}
        images={images}/>
    </>

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
                setEsqueceu={setEsqueceu}
                images={images} />
            ))}

            <Info_Inferior  
            contador={contador} 
            quantidade={quantidade} 
            icones={icones}
            esqueceu={esqueceu}/>

        </div>
    )
}