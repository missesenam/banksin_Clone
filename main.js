const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['jan', 'feb', 'march', 'april', 'may', 'june','july', 'aug', 'sep', 'oct', 'nov', 'dec'],
    datasets: [{
      label: '# Transactions Records',
      data: [210000, 205000, 150000, 290000,210000,280000,320000,210000,150000,220000,210000,220000],
      borderWidth: 1,
      backgroundColor: '#007FFF',
      // Set minBarLength to a desired pixel width (e.g., 30)
      
	  barThickness: 15
    }]
  },
  options: {
    scales: {
      y: {
        // Set minimum value for y-axis to 100000 (represents $100k)
        min: 100000,
        ticks: {
          callback: function(value, index, values) {
            return '$' + (value / 1000).toFixed(0) + 'k';
          }
        }
      }
    }
  }
});
