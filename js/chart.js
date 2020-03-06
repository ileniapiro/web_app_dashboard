/***************************************************************************LINE CHART****************************************************************************************/

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    responsive: true,
    maintainAspectRatio: false,
    xLabels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
    yLabels: ["0", "10", "20", "30", "40", "50"],
    datasets: [{
      backgroundColor: 'rgba(214, 236, 210, 0.2)',
      borderColor: 'rgb(190, 139, 248)',
      data: [27, 30, 15, 35, 25, 40, 30, 20, 32, 15, 23, 27, 10],
      lineTension: 0,
      pointRadius: 5,
      pointBackgroundColor: 'rgb(232, 217, 249, 1)'
    }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    }
  }
});

$("#hourly").on("click", function() {
  var context1 = document.querySelector('#myChart').getContext('2d');
  var chart = new Chart(context1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      responsive: true,
      maintainAspectRatio: false,
      xLabels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
      yLabels: ["0", "10", "20", "30", "40", "50"],
      datasets: [{
        backgroundColor: 'rgba(214, 236, 210, 0.2)',
        borderColor: 'rgb(190, 139, 248)',
        data: [27, 30, 15, 35, 25, 40, 30, 20, 32, 15, 23, 27, 10],
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(232, 217, 249, 1)'
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }],
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });
});

$("#daily").on("click", function() {
  var context2 = document.querySelector('#myChart').getContext('2d');
  var chart = new Chart(context2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      responsive: true,
      maintainAspectRatio: false,
      xLabels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      yLabels: ["0", "100", "200", "300", "400", "500"],
      datasets: [{
        backgroundColor: 'rgba(214, 236, 210, 0.2)',
        borderColor: 'rgb(190, 139, 248)',
        data: [220, 320, 300, 150, 225, 450, 300, 280, 400, 380, 200],
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(232, 217, 249, 1)'
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }],
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });
});

$("#weekly").on("click", function() {
  var context3 = document.querySelector('#myChart').getContext('2d');
  var chart = new Chart(context3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      responsive: true,
      maintainAspectRatio: false,
      xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      yLabels: ["500", "1000", "1500", "2000", "2500"],
      datasets: [{
        backgroundColor: 'rgba(214, 236, 210, 0.2)',
        borderColor: 'rgb(190, 139, 248)',
        data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(232, 217, 249, 1)'
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }],
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });
});

$("#monthly").on("click", function() {
  var context4 = document.querySelector('#myChart').getContext('2d');
  var chart = new Chart(context4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      responsive: true,
      maintainAspectRatio: false,
      xLabels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      yLabels: ["5000", "10000", "15000", "20000", "25000"],
      datasets: [{
        backgroundColor: 'rgba(214, 236, 210, 0.2)',
        borderColor: 'rgb(190, 139, 248)',
        data: [2700, 3300, 15000, 13500, 23000, 4500, 3340, 17900, 22422, 12000, 9000],
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(232, 217, 249, 1)'
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }],
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });
});

/***************************************************************************BAR CHART*****************************************************************************************/

var dailyTraffic = document.getElementById('barChart').getContext('2d');
var gradientFill = dailyTraffic.createLinearGradient(0, 0, 0, 1000);
gradientFill.addColorStop(1, "rgba(128, 182, 244, 0.6)");
gradientFill.addColorStop(0, "rgba(99, 62, 133, 0.6)");
var chart = new Chart(dailyTraffic, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    responsive: true,
    maintainAspectRatio: false,
    xLabels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      backgroundColor: gradientFill,
      borderColor: 'rgb(237, 204, 128)',
      data: [120, 320, 300, 180, 225, 450, 300, 280, 400, 380, 200],
    }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    }
  }
});

/*************************************************************************DOUGHNUT CHART**************************************************************************************/

var mobileUser = document.getElementById('doughnutChart').getContext('2d');

var chart = new Chart(mobileUser, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
    responsive: true,
    maintainAspectRatio: false,
    labels: ["Tablets", "Phones", "Desktop"],
    datasets: [{
      backgroundColor: ["#218ea9", "#B09BC2", "#6bf4f0"],
      data: [20, 70, 40]
    }]
  },
  options: {
    legend: {
      position: 'right',
    },
    rotation: -0.1 * Math.PI,
  }
});
