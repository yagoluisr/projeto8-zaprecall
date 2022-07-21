export default function Tela1({tela2, setTela2}){
    return (
        <div className="tela1">
            <div className="inicio">
                <img src="Assets/Raio.png"/>
                  <span>ZapRecall</span>
                <div className="button" onClick={() => 
                    (setTela2(!tela2))}>
                <p>Iniciar Recall!</p>
            </div>
            </div>
        </div>
    )
}