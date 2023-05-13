import React from 'react';

import Chart, {CommonSeriesSettings, Format, Label, Legend, Series,} from 'devextreme-react/chart';

const YearGraphic = ({data}) => {
    console.log(data)
        return (
            <Chart
                title="Month frequency for year 2023"
                dataSource={data}
                id="chart"
            >

                <CommonSeriesSettings
                    argumentField="month"
                    type="bar"
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0}/>
                    </Label>
                </CommonSeriesSettings>

                <Series
                    type="bar"
                    valueField="frequency"
                />

                <Legend
                    visible={false}
                />

            </Chart>
        );
}

export default YearGraphic;