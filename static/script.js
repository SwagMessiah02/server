const botao_exibir = document.getElementById("botao_exibir");
const botao_reset = document.getElementById("botao_reset");
 
botao_exibir.addEventListener("click", () => {
    document.getElementById('logs-container').style.display = 'none';
    document.getElementById('logs-container').style.display = 'block';
});

botao_reset.addEventListener("click", () => {
    fetch('/reset', { method: 'POST' })
        .then(() => atualizarMensagens());
});

setInterval(atualizarMensagens, 2000);

function atualizarMensagens() {
    fetch('/mensagens')
        .then(response => response.json())
        .then(data => {
            let mensagensDiv = document.getElementById('mensagens');
            mensagensDiv.innerHTML = '';

            if (data.length > 0) {
                data.forEach(msg => {
                    let div = document.createElement('div');
                    div.className = 'mensagem';
                    div.textContent = msg;
                    mensagensDiv.appendChild(div);
                });

            } else {
                mensagensDiv.innerHTML = '<p>Nenhuma mensagem recebida ainda.</p>';
            }
        });
}