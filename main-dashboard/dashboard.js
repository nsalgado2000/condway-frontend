const ctx = document.getElementById('grafico1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Custos',
        data: [12, 19, 3, 5, 2, 3],
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
  