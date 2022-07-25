import Resposta from "./Resposta";


export default function Info_Inferior({
    quantidade,
    contador,
    icones,
    esqueceu
}) {
    <Resposta />
    
    function Verificar() {
        const parabens = "Parabéns !";
        const textParabens = "Você não esqueceu de nenhum flashcard!";
        const putz = "Putz...";
        const textPutz = "Ainda faltam alguns... Mas não desanime!";
    
        if(contador === quantidade.length && esqueceu === 0){
            return <Resposta titulo={parabens} texto={textParabens} icon={"Party"}/>
        }
    
        if(contador === quantidade.length && esqueceu === 1){
            return <Resposta titulo={putz} texto={textPutz} icon={"Sad"}/>
        }
    }

    return (
        <div className="info_Inferior">
            <span>{Verificar()}</span>
            <p>{contador} / {quantidade.length} CONCLUÍDOS</p>
            <div>{icones}</div>
        </div>
    )
}