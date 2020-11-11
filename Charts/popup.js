function createChart(){
var xData = document.getElementById('xaxis').value;
var yData = document.getElementById('yaxis').value;
if(xData === '' || yData === ''){
	alert('Please provide the inputs');
	return;
}
var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
canvas.style.border = '1px solid Black';
var label = xData.split(',');
var dataSet = yData.split(',');
var chartType = document.getElementById('chartType').value;
console.log('Labels : '+label );
console.log('Data : '+dataSet);
console.log('chartType : '+chartType);
var myChart = new Chart(ctx, {
    type: chartType,
    data: {
        labels: label,
        datasets: [{
            label: chartType,
            data:dataSet,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

document.getElementById("btn").addEventListener("click", createChart);