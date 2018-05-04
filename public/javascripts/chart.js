var chart = Highcharts.chart('container', {
    title: {
        text: '過去預測分配與預設分配折線圖'
    },
    subtitle: {
        text: '解釋一下 數據隨便寫的'
    },
    yAxis: {
        title: {
        text: '甚麼金額的'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: '用我們預測的',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: '50%50%',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: '忘記這是啥了',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}); 