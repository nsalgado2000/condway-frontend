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
  