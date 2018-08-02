$(document).ready(function(){
	Highcharts.chart('areaspline-chart', {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: ''
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 70,
          y: 20,
          floating: true,
          borderWidth: 1,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
          categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          plotBands: [{
            from: 4.5,
            to: 6.5,
          }],
          gridLineDashStyle: 'longdash',
                  gridLineWidth: 1,
                  crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          },
          gridLineDashStyle: 'longdash',
        },
        tooltip: {
          shared: true,
          valueSuffix: ' units'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.6
          }
        },
        series: [{
          name: 'John',
          data: [0, 5, 8, 6, 3, 10, 8],
          color: '#f5956c'
        }, {
          name: 'Jane',
          data: [0, 3, 6, 3, 7, 5, 9],
          color: '#f56767'
        }, {
          name: 'Johnny',
          data: [0, 2, 5, 3, 2, 4, 0],
          color: '#a683eb'
        }, {
          name: 'Daniel',
          data: [0, 4, 7, 3, 0, 7, 4],
          color: '#41ccba'
        }]
      });


      // Device Usage chart
      Highcharts.chart('device-usage', {
        chart: {
          type: 'pie'
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: false,
              format: '{point.name}: {point.y:.1f}%'
            }
          },
          pie: {
            innerSize: 127,
            depth: 45
          }
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'IE',
            y: 10,
            color: '#ecc72f'
          }, {
            name: 'Chrome',
            y: 40,
            color: '#46be8a'
          }, {
            name: 'Firefox',
            y: 30,
            color: '#f2a654'
          }, {
            name: 'Safari',
            y: 10,
            color: '#62a8ea'
          }, {
            name: 'Opera',
            y: 10,
            color: '#e14e50'
          }]
        }]
      });

      // gauge chart
      Highcharts.chart('ram', {

        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [{
            borderWidth: 0,
            outerRadius: '109%'
          }, {
            borderWidth: 0,
            outerRadius: '107%'
          }, {
          }, {
            backgroundColor: '#fff',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },

        yAxis: {
          min: 0,
          max: 200,

          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: 'RAM'
          },
          plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B'
          }, {
            from: 120,
            to: 160,
            color: '#DDDF0D'
          }, {
            from: 160,
            to: 200,
            color: '#DF5353'
          }]
        },

        series: [{
          name: 'Speed',
          data: [80],
          tooltip: {
            valueSuffix: '%'
          }
        }]
      });
      Highcharts.chart('cpu', {

        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [{
            borderWidth: 0,
            outerRadius: '109%'
          }, {
            borderWidth: 0,
            outerRadius: '107%'
          }, {
          }, {
            backgroundColor: '#fff',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },

        yAxis: {
          min: 0,
          max: 200,

          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: 'CPU'
          },
          plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B'
          }, {
            from: 120,
            to: 160,
            color: '#DDDF0D'
          }, {
            from: 160,
            to: 200,
            color: '#DF5353'
          }]
        },

        series: [{
          name: 'Speed',
          data: [120],
          tooltip: {
            valueSuffix: ' %'
          }
        }]
      });
});