function atualizarMensagens() {
    fetch('/mensagens')
        .then(response => response.json())
        .then(data => {
            let mensagensDiv = document.getElementById('mensagens');
            mensagensDiv.innerHTML = '';

            let ultimaMensagem = data[data.length - 1];

            if (data.length > 0) {
                let div = document.createElement('div');
                div.className = 'mensagem';
                div.textContent = ultimaMensagem;
                mensagensDiv.appendChild(div);
            } else {
                mensagensDiv.innerHTML = '<p>Nenhuma mensagem recebida ainda.</p>';
            }
        });
}

function resetarMensagens() {
    fetch('/reset', { method: 'POST' })
        .then(() => atualizarMensagens());
}

function mostrarSecao(selecao) {
    document.getElementById('logs-container').style.display = 'none';
    document.getElementById(selecao).style.display = 'block';
}

setInterval(atualizarMensagens, 1000);