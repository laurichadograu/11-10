const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    conts res = await fetch(url)
    const dados = await res.json()
    const pessoasConectaas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const porcentagemConectada = ((pessoasConectaas / pessoasNoMundo) * 100).tofFixed(2);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas 
    e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma 
    rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
    console.log(paragrafo)
    const container = document.getElementById('grafico-container')
    container.appendChild(paragrafo)
}
vizualizarInformaçõesGlobais()