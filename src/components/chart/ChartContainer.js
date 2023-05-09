import React, {useEffect, useState} from "react";
import ChartView from "./ChartView";

export function ChartContainer(props) {
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            theme: "light1", // "light1", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            title: {
                text: ""
            },
            height: 400,
            width: 1000,
            axisX: {maximum: 31},
            data: [{
                type: "bar",
                dataPoints: props.chartData
            }]
        })
    }, [props.chartData])

    return (<ChartView chartData={props.chartData} chartOptions={chartOptions}/>);
}
