import React from 'react';

import Chart, {CommonSeriesSettings, Format, Label, Legend, Series,} from 'devextreme-react/chart';

const DayGraphic = ({data}) => {
    console.log(data)
    return (
        <Chart
            title="Frequency"
            dataSource={data}
            id="chart"
        >

            <CommonSeriesSettings
                argumentField="hour"
                type="bar"
                hoverMode="allArgumentPoints"
                selectionMode="allArgumentPoints"
            >
                <Label visible={true}>
                    <Format type="fixedPoint" precision={0}/>
                </Label>
            </CommonSeriesSettings>
            <Series type="bar" valueField="frequency"/>
            <Legend visible={false} />
        </Chart>
    );
}

export default DayGraphic;