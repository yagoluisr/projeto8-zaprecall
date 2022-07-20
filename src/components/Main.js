export default function Main() {
    return (
        <div className="main">
            <div className="pergunta">
                <span>Perugnta 1</span>
                <img src="Assets/Vector.png" />
            </div>

            <div className="pergunta">
                <span>Perugnta 1</span>
                <img src="Assets/Vector.png" />
            </div>

            <div className="flashcard">
                <span>O que é JSX?</span>
                    <div className="icones">
                        <img src="Assets/Girar.png" />
                    </div>
            </div>
            
            <div className="flashcard">
                <span>Uma extensão de linguagem do JavaScript</span>
                    <div className="opcoes">
                        <div className="opcao1">Não lembrei</div>
                        <div className="opcao2">Quase não lembrei</div>
                        <div className="opcao3">Zap!</div>
                    </div>
            </div>
        </div>
    )
}