async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");
    // criou uma variavel que está guardando os dados que vem da API

    const data = await resposta.json();
    // criou uma variavel para transformar os dados em JSON

    document.querySelector("#advice").innerHTML = data.slip.advice;
    // data.slip.advice é o caminho para acessar o valor do nosso objeto
}

// botao funcionando

let botaoAdvice = document.querySelector('#get-advice');

botaoAdvice.addEventListener("click", function(){
    getAdvice();
});

