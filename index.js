// Função para criptografar o texto
function criptografar() {
  const texto = document.querySelector(".decodificador_area_texto").value;
  const errorMessage = document.querySelector(".error-message");
  
  // Verificar se o texto está vazio
  if (!texto.trim()) {
    errorMessage.textContent = "Por favor, insira um texto para criptografar.";
    return;
  }
  
 // Verificar se o texto contém apenas letras minúsculas, sem espaços e pontuações (.,!?)
 if (!/^[a-zA-Z\s.,!?]+$/.test(texto)) {
  errorMessage.textContent = "Por favor, digite apenas letras minúsculas, sem espaços e pontuações (.,!?)";
  return;
 }

  
  // Substituir letras por sequências específicas
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  
  // Exibir o texto criptografado no lugar correto
  exibirResultado(textoCriptografado);
  
  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

// Função para descriptografar o texto
function descriptografar() {
  const texto = document.querySelector(".decodificador_area_texto").value;
  const errorMessage = document.querySelector(".error-message");
  
  // Verificar se o texto está vazio
  if (!texto.trim()) {
    errorMessage.textContent = "Por favor, insira um texto para descriptografar.";
    return;
  }
  
  // Substituir sequências específicas por letras originais
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  
  // Exibir o texto descriptografado no lugar correto
  exibirResultado(textoDescriptografado);
  
  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

// Função para exibir o resultado na seção relacionada à mensagem recebida
function exibirResultado(texto) {
  const mensagemEncontrada = document.querySelector(".decodificador_nenhumamensagem_encontrada");
  const textoHidden = document.querySelector(".decodificador_texto_pHidden");
  const botaoCopiar = document.querySelector(".decodificador_botao_copiar");
  
  if (texto) {
    mensagemEncontrada.textContent = "";
    textoHidden.textContent = texto;
    botaoCopiar.removeAttribute("hidden");
    textoHidden.removeAttribute("hidden");
  } else {
    mensagemEncontrada.textContent = "Nenhuma mensagem encontrada";
    textoHidden.textContent = "";
    botaoCopiar.setAttribute("hidden", true);
    textoHidden.setAttribute("hidden", true);
  }
}

// Função para copiar o texto descriptografado para a área de transferência
function copyText() {
  const textoDescriptografado = document.querySelector(".decodificador_texto_pHidden").textContent;

  if (textoDescriptografado) {
    navigator.clipboard.writeText(textoDescriptografado)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  }
}



