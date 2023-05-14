import React from 'react';

import Chart, {CommonSeriesSettings, Format, Label, Legend, Series,} from 'devextreme-react/chart';

const TopLandmarksGraphic = ({data}) => {
    console.log(data)
    return (
        <Chart
            title=""
            dataSource={data}
            id="chart"
        >

            <CommonSeriesSettings
                argumentField="landmark"
                type="bar"
                hoverMode="allArgumentPoints"
                selectionMode="allArgumentPoints"
            >
                <Label visible={true}>
                    <Format type="fixedPoint" precision={0}/>
                </Label>
            </CommonSeriesSettings>
            <Series type="bar" valueField="visitCount"/>
            <Legend visible={false} />
        </Chart>
    );
}

export default TopLandmarksGraphic;