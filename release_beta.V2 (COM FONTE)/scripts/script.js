function loadPage(page) {
  document.getElementById("content-frame").src = page;
}

// JS para o Gráfico

var cardGraficoBackgroundColor = window.getComputedStyle(document.querySelector('.card-grafico')).backgroundColor;

var chart = JSC.chart('chartDivDetalhescamp', {
  debug: true,
  type: 'line',
  legend_visible: false,
  defaultCultureName: "pt-BR",
  chartArea: {
    fill: cardGraficoBackgroundColor
  },
  xAxis: { 
    crosshair_enabled: true,
    scale: { type: 'time' },
    defaultTick: {
      label: {
        style: { background: cardGraficoBackgroundColor }
      }
    }
  },
  yAxis: { 
    orientation: 'opposite', 
    formatString: 'c',
    defaultTick: {
      label: {
        style: { background: cardGraficoBackgroundColor }
      }
    }
  },
  defaultSeries: {
    firstPoint_label_text: '<b>%seriesName</b>',
    defaultPoint_marker: {
      type: 'circle',
      size: 8,
      fill: '#FF0000',
      outline: { width: 2, color: '#FFFFFF' }
    }
  },
  //title_label_text: 'Arrecadação X Meta',
  series: [
    {
      name: 'Suas Contribuições',
      points: [
        ['1/1/2024', 5.00],
        ['2/1/2024', 10.00],
        ['3/1/2024', 20.00],
        ['4/1/2024', 30.00],
        ['5/1/2024', 30.00],
        ['6/1/2024', 40.00]
      ]
    },
    {
      name: 'Contribuições Gerais',
      points: [
        ['1/1/2024', 50.00],
        ['2/1/2024', 55.00],
        ['3/1/2024', 60.00],
        ['4/1/2024', 65.00],
        ['5/1/2024', 80.00],
        ['6/1/2024', 116.00]
      ]
    },
  ]
});

