import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const CChart = () => {

    const company = {
        // chart:{
        //     marginTop: 20
        // },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: ''
            },
            // categories: intime,
        },

        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },

        series: [{
            name: 'A',
            data: [5,10,7,8,9,6,3,4,7,2,2,6,6,7,5,4,9],
            color: "#726bea"
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
    }

    return(
        <div >
            <HighchartsReact
                highcharts={Highcharts}
                options={company}
                containerProps={{className: "dashboard-allUseChart"}}
            />
        </div>
    )
}

export default CChart;
