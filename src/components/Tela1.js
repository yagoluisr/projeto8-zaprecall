import logoTipo from "./Assets/Raio.png";

export default function Tela1({
    tela2,
    setTela2
}){
    
    return (
        <div className="tela1">
            <div className="inicio">
                <img src={logoTipo}/>
                  <span>ZapRecall</span>
                  
                <div className="button" onClick={() => 
                    (setTela2(!tela2))}>
                    <p>Iniciar Recall!</p>
                </div>
            </div>
        </div>
    )
}