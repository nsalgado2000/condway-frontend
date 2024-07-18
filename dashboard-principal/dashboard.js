const ctx = document.getElementById('grafico1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Água', 'Luz', 'Condomínio', 'Gás', 'Manutenção'],
      datasets: [{
        label: ': Valor em R$',
        data: [1200, 528, 3852, 5324, 2344],
        backgroundColor: 'rgba(40, 85, 222, 0.5)', // Cor cinza
        borderColor: 'rgba(128, 128, 128, 1)', // Cor cinza
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  function adjustLayoutForMobile() {
    const containerWidth = window.innerWidth;
    const graficobarra =  document.getElementById('graficobarra')
    const mensagens = document.getElementById('mensagens')
    const titulo = document.getElementsByTagName('span')
    const resumo = document.getElementById('resumo')
    if (containerWidth <= 600) {
    
        mensagens.style.width = '90%';
        mensagens.style.marginLeft = '25px';
        mensagens.style.height = '300px';
        graficobarra.style.width = '90%';
        graficobarra.style.padding = '2px'
        titulo[5].style.fontSize = 'px'
      } else{
        mensagens.style.width = '635px';
        mensagens.style.marginLeft = '50px';
        mensagens.style.height = '445px';
        graficobarra.style.width = '800px';
        graficobarra.style.padding = '20px'
      }
      }
  

  window.addEventListener('load', adjustLayoutForMobile);
  window.addEventListener('resize', adjustLayoutForMobile);
  