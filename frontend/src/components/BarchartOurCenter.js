import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

function BarchartOurCenter() {

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    class App extends Component {
        constructor() {
            super();
            this.toggleDataSeries = this.toggleDataSeries.bind(this);
        }

        toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            this.chart.render();
        }

        render() {
            const options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Our Center's Stats 2023",
                    fontFamily: "verdana"
                },
                axisY: {
                    includeZero: true,
                },
                toolTip: {
                    shared: true,
                    reversed: true
                },
                legend: {
                    verticalAlign: "center",
                    horizontalAlign: "right",
                    reversed: true,
                    cursor: "pointer",
                    itemclick: this.toggleDataSeries
                },
                data: [
                    {
                        type: "stackedColumn",
                        name: "Arrived Patients",
                        showInLegend: true,
                        yValueFormatString: "#,###",
                        color:"#00FFFF",
                        dataPoints: [
                            { label: "Jan", y: 100 },
                            { label: "Feb", y: 120 },
                            { label: "Mar", y: 95 },
                            { label: "Apr", y: 136 },
                            { label: "May", y: 110 },
                            { label: "Jun", y: 98 },
                            { label: "Jul", y: 102 },
                            { label: "Aug", y: 110 },
                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: "Recovered Patients",
                        showInLegend: true,
                        yValueFormatString: "#,###",
                        color:"#0096FF",
                        dataPoints: [
                            { label: "Jan", y: 100 },
                            { label: "Feb", y: 117 },
                            { label: "Mar", y: 92 },
                            { label: "Apr", y: 130 },
                            { label: "May", y: 104 },
                            { label: "Jun", y: 96 },
                            { label: "Jul", y: 101 },
                            { label: "Aug", y: 108 },
                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: "Deceased Patients",
                        showInLegend: true,
                        yValueFormatString: "#,###",
                        color:"#89CFF0",
                        dataPoints: [
                            { label: "Jan", y: 0 },
                            { label: "Feb", y: 3 },
                            { label: "Mar", y: 3 },
                            { label: "Apr", y: 6 },
                            { label: "May", y: 6 },
                            { label: "Jun", y: 2 },
                            { label: "Jul", y: 1 },
                            { label: "Aug", y: 2 },
                        ]
                    },
                ]
            };

            return (
                <div>
                    <CanvasJSChart options={options} onRef={ref => this.chart = ref} />
                </div>
            );
        }
    }

    return <App />;
}

export default BarchartOurCenter;
