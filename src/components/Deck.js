export default function Deck(){
    const perguntas = [
        {
            pergunta: "O que está escrito em João 3:16 ?", 
            resposta: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna"
        },
        {
            pergunta: "O que diz o versículo João 14:6 ?", 
            resposta: "Jesus respondeu: — Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai senão por mim"
        },
        {
            pergunta: "Qual o maior mandamento de todos?", 
            resposta: "Amarás o senhor seu Deus sobre todas as coisas, e amarás à seu próximo como a ti mesmo"
        },
        {
            pergunta: "O que a Ceia representa?", 
            resposta: "A Ceia representa o sacrifício de Jesus por nós na cruz, assim, todas as vezes que participamos, lembramos o que Ele fez por nós"
        },
        {
            pergunta: "Batismo salva?", 
            resposta: "Não"
        },
        {
            pergunta: "Por que a Cruz vazia?", 
            resposta: "Porque Cristo ressuscitou."
        },
        {
            pergunta: "Jesus vai voltar de novo? Quando?", 
            resposta: "Sim, nao se sabe a hora exata, mas em breve 😝"
        },
        {
            pergunta: "Quantos livros tem a bíblia?", 
            resposta: "66"
        },
    ]

    perguntas.sort(() => Math.random() - 0.5)

    return perguntas;
}