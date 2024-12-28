const GerarCPF = () => {
    let cpf = String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10)) + 
          String(Math.floor(Math.random() * 10)) + "." +
          String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10)) + "." +
          String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10)) + "-" +
          String(Math.floor(Math.random() * 10)) +
          String(Math.floor(Math.random() * 10));

    document.querySelector(".textGerador").innerHTML = cpf;

    return cpf;
}

const CopiarCPF = () => {
    navigator.clipboard.writeText(document.querySelector(".textGerador").innerHTML)
    .then(function() { 
        document.querySelector(".copiar").style.backgroundColor = "#5bb658";
        setTimeout(() => {
            document.querySelector(".copiar").style.backgroundColor = "rgb(211, 211, 211)";
        }, 1000);
    })
    .catch(function(err) { 
        console.error('Erro ao copiar o texto: ', err); 
    });
}

document.querySelector(".gerar").addEventListener("click", GerarCPF);
document.querySelector(".copiar").addEventListener("click", CopiarCPF);
