document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('nome').textContent = user.nomecondo;
        document.getElementsByClassName('cnpj').textContent = user.cnpj;
        document.getElementById('cep').textContent = user.cep;
        document.getElementById('bairro').textContent = user.bairro;
        document.getElementById('logradouro').textContent = user.logradouro;
        document.getElementById('numero').textContent = user.numero;
        document.getElementById('cidade').textContent = user.cidade;
        document.getElementById('uf').textContent = user.uf;
        document.getElementById('torre').textContent = user.torre;
        document.getElementById('un').textContent = user.un;
        document.getElementById('elevador').textContent = user.elevador;
        document.getElementById('portaria').textContent = user.portaria;
        document.getElementById('canalizado').textContent = user.canalizado;
        document.getElementById('individual').textContent = user.individual;
        document.getElementById('agua').textContent = user.agua;
        document.getElementById('poço').textContent = user.poço;
        document.getElementById('aqagua').textContent = user.aqagua;
        document.getElementById('aqpiscina').textContent = user.aqpiscina;
        document.getElementById('solar').textContent = user.solar;
        document.getElementById('seguranças').textContent = user.seguranças;
        document.getElementById('cftv').textContent = user.cftv;
        document.getElementById('controle').textContent = user.controle;
        document.getElementById('ivas').textContent = user.ivas;
        document.getElementById('cerca').textContent = user.cerca;
        document.getElementById('concertina').textContent = user.concertina;
        document.getElementById('alarme').textContent = user.alarme;
    } else {
        console.error('No user data found in local storage.');
    }
});