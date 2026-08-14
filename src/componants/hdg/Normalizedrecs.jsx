import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useState } from 'react';
import { EffectScatterChart, ScatterChart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TooltipComponent } from "echarts/components";

echarts.use([
  TooltipComponent,
  GridComponent,
  ScatterChart,
  EffectScatterChart,
  LabelLayout,
  CanvasRenderer,
]);



class NormalizedRecs extends React.Component{
    constructor(props){
    super(props)
    console.assert(props.data, "No data passed to storyNetwork");
    const conversion = Object.keys(this.props.data.author_name).map((s,i)=> {
        return[i,Math.max(this.props.data.normalized_recs[s],this.props.data.normalized_kudos[s])]
    }).sort((a,b) => a[1] < b[1]);
    this.converter = {}
    for (let i = 0;i<conversion.length;i++){
        let fromNum = conversion[i][0]
        this.converter[fromNum] = i 
    }
    this.recsSeries = Object.keys(this.props.data.author_name).map((s,i)=> {
        let newIndex = this.converter[i]
        return[newIndex,this.props.data.normalized_recs[s]]
    })
    this.kudosSeries = Object.keys(this.props.data.author_name).map((s,i)=> {
        let newIndex = this.converter[i]
        return[newIndex,this.props.data.normalized_kudos[s]]
    })
    }

    getOption = () => {
        
        const option = {
            tooltip:{},
            xAxis: {
            },
            yAxis: {
                name: 'Total wordcount by Author',
                nameLocation:'center'
            },
            title: {
                text: 'Normalized recommendations and wordcount',
                zlevel: 5,
                show:true
            },
            series: [
            {
                data: this.recsSeries,
                symbolSize:4,
                type: 'scatter',
                tooltip:{
                    trigger:'item',
                    formatter: this.showTooltip
                },
            },
            {
                data: this.kudosSeries,
                symbolSize:4,
                type: 'scatter',
                color:'green',
                tooltip:{
                    trigger:'item',
                    formatter: this.showTooltip
                },
            }
            ]
        }
        return option;
    }

    showTooltip = (params) => {
        let i = params.data[0]
        let text = 
        `Title: ${this.props.data.title[i]} <br>
        Recs: ${this.props.data.recs[i]}<br>
        Kudos ${this.props.data.kudos[i]}`;
        return text
        
    }

    render(){
        return (
        <ReactEChartsCore
            echarts={echarts}
            notMerge={false}
            // showLoading={isLoading}
            option={this.getOption()}
            lazyUpdate={false}
            id='kudos-recs-coralation'
        />)
    }
}

export default NormalizedRecs;