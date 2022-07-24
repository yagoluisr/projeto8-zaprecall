export default function Info_Inferior({quantidade, contador, icones, esqueceu }) {
    const parabens = "Parabéns !";
    const textParabens = "Você não esqueceu de nenhum flashcard!";
    const putz = "Putz...";
    const textPutz = "Ainda faltam alguns... Mas não desanime!";

    function Verificar() {

        if(contador === quantidade.length && esqueceu === 0){
            return <Resposta titulo={parabens} texto={textParabens} icon={"Party"}/>
        }

        if(contador === quantidade.length && esqueceu === 1){
            return <Resposta titulo={putz} texto={textPutz} icon={"Sad"}/>
        }
    }
    
    //console.log(icones[0].props.src);
    return (
        <div className="info_Inferior">
            <span>{Verificar()}</span>
            <p>{contador} / {quantidade.length} CONCLUÍDOS</p>
            <div>{icones}</div>
        </div>
    )
}

function Resposta({titulo, texto, icon}) {
    return (
        <>
            <img src={`Assets/${icon}.png`} />
            <span><strong>{titulo}</strong></span>
            <p>{texto}</p>
            <br/>
        </>
    )
}

