const ctx = document.getElementById('grafico1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dez'],
      datasets: [{
        label: 'Custos',
        data: [1200, 528, 3852, 5324, 2344, 3455, 4534, 4213, 4564, 1324, 5657],
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Cor cinza
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
  