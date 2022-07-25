export default function TemplateRespondido({
    index,
    respondido,
    images
}) {
    
    return (
        <div className={respondido}>
            <span>Pergunta {index}</span>
            <img src={images[respondido]} />
        </div>
    )
}