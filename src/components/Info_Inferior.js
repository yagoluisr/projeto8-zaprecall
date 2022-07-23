export default function Info_Inferior({quantidade, contador, icones}) {
 
    function Verificar() {
        let texto = "Parabéns !";

        if(contador === quantidade.length){
            return (
                <>
                    <img src="Assets/Party.png" />
                    {texto}
                </>
            )
        }
    }
    

    console.log(icones);
    return (
        <div className="info_Inferior">
            <span>{Verificar()}</span>
            <p>{contador} / {quantidade.length} CONCLUÍDOS</p>
            <div>{icones}</div>
        </div>
    )
}