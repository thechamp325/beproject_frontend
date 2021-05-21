import React from "react";
import { render } from "react-dom";
import { VictoryBar,VictoryPie, VictoryChart, VictoryAxis,
    VictoryTheme } from 'victory';
const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  const data2=[
    { x: "Dairy", y: 35 },
    { x: "wafer", y: 40 },
    { x: "Soap", y: 55 }];
class Charts extends React.Component
{
render(){
    return (
        <div class="row" >
            <div class="col-md-6">
                <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
                >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Date 1", "Date 2", "Date 3", "Date 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                />
                </VictoryChart>
            </div>
            <div class="col-md-6">
                <VictoryPie
                data={data2}
                />
            </div>
         </div>
    );
};
}
export default Charts;
