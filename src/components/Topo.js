import logotipo from "./Assets/Raio.png";

export default function Topo() {
    return (
        <div className="topo">
            <div>
                <img src={logotipo} />
                <span>ZapRecall</span>
            </div>
        </div>
    )
}