import React from "react";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";
import "./Css/Reset.css";
import "./Css/Style.css";

function App() {
    const [tela2, setTela2] = React.useState(true);

    return (
        <>
            {tela2 ? <Tela1 tela2={tela2} setTela2={setTela2} /> : <Tela2 /> }
        </>
    )
}
export default App;