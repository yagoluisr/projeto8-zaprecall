import Party from "./Assets/Party.png";
import Sad from "./Assets/Sad.png";

export default function Resposta({
    titulo,
    texto,
    icon
}) {
    const icons = {
        Party: Party,
        Sad: Sad,
    }

    return (
        <>
            <img src={icons[icon]} />
            <span><strong>{titulo}</strong></span>
            <p>{texto}</p>
            <br/>
        </>
    )
}