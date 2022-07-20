import Info_Inferior from "./Info_Inferior";
import React from "react";
import Tela1 from "./Inicio";
import Tela2 from "./Tela2";




function App() {
    const [tela2, setTela2] = React.useState(true);

    return (       
        <>
            <>
                {tela2 ? <Tela1 /> : <Tela2 /> }
            </> 
            
            <div className="button" onClick={() => (setTela2(!tela2))}>
                <p>Iniciar Recall!</p>
            </div>

        </>
    )
}
export default App;