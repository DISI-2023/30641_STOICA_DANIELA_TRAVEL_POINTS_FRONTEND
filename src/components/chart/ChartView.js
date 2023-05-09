import React from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'


function ChartView(props) {
    return (
        <div>
            <CanvasJSChart options={props.chartOptions} />
        </div>
    );
}

export default ChartView;