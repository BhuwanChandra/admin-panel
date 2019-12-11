
$(function () {

  $(".progress").each(function () {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

$(document).ready(function (){
  if ($(window).width() < 768) {
    $("#sidebar-collapse").collapse("hide");
  }
})

function resize() {
  let c = 0;
  if ($(window).width() >= 768) {
    $("#sidebar-collapse").collapse("show");
    c = 0;
  }
  if (($(window).width() < 768)&&(c==0)) {
    $("#sidebar-collapse").collapse("hide");
    c++;
  }
}
window.onresize = resize;

function makePie(id, data) {
    let myChart = document.getElementById(id).getContext('2d');
    let massPopChart = new Chart(myChart, {
        type: 'pie',
        data: {
            labels: ["incomplete", "complete"],
            datasets: [{
                label: "",
                data: data,
                backgroundColor: [
                    '#3f80ff',
                    '#ddd'
                ],
                borderWidth: 0
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        }
    });
}

function makeBar(id,data,labels,color){
    let myChart = document.getElementById(id).getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontSize = 0;

    let massPopChart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: data,
            backgroundColor: color,
            minBarLength: 5
          }
        ],
        order: 0
      },
      options: {
        title: {
          display: false
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          enabled: true,
          backgroundColor: "#fff",
          titleFontColor: "#444",
          titleFontSize: 14,
          titleAlign: "center",
          bodyFontColor: color,
          bodyFontSize: 12,
          bodyAlign: "center",
          xPadding: 10,
          yPadding: 5,
          displayColors: false
        }
      }
    });
}

makeBar("myBarChart1", [17, 23, 25, 29, 8], ["17 Jan", "23 Jan", "25 Feb", "29 Jan", "8 Jan"], "#79d60e");
makeBar("myBarChart2", [17, 23, 25, 29, 8], ["17 Jan", "23 Jan", "25 Feb", "29 Jan", "8 Jan"], "#3fc9ff");

makePie("myChart1", [23, 13]);
makePie("myChart2", [11, 25]);
makePie("myChart3", [18, 18]);