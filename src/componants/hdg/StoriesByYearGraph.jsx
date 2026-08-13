import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useState } from 'react';
import { BarChart, GraphChart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TooltipComponent } from "echarts/components";

echarts.use([
  TooltipComponent,
  GridComponent,
  BarChart,
  LabelLayout,
  CanvasRenderer,
]);



class StoriesByYearGraph extends React.Component{
    constructor(props){
    super(props)
    console.assert(props.data, "No data passed to storyNetwork");
    }

    getOption = () => {
        console.debug(Object.values(this.props.data.pubdate))
        let dates = Object.values(this.props.data.pubdate);
        let storiesCount = Object.values(this.props.data.count);
        console.debug(dates,storiesCount)
        const option = {
            tooltip:{},
            xAxis: {
                type: 'category',
                name: 'Years',
                nameLocation:'center',
                data: dates
            },
            yAxis: {
                type: 'value',
                name: 'Number of stories',
                nameLocation:'center'
            },
            series: [
                {
                data: storiesCount,
                type: 'bar'
                }
            ]
        }
        console.debug(option)
        return option;
    }

    showTooltip = () => {

    }

    render(){
        return (
        <ReactEChartsCore
            echarts={echarts}
            style={{Width:"50vw",Height:"50vw"}}
            notMerge={false}
            // showLoading={isLoading}
            option={this.getOption()}
            lazyUpdate={false}
            id='hdg-stories-by-year'
        />)
    }
}

export default StoriesByYearGraph;