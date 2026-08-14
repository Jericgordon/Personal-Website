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



class WordcountByAuthorGraph extends React.Component{
    constructor(props){
    super(props)
    console.assert(props.data, "No data passed to storyNetwork");
    this.authorName = Object.keys(this.props.data.wordcount);
    this.wordcount = Object.values(this.props.data.wordcount);
    }

    getOption = () => {
        let glitchyCount = this.props.data.wordcount['GlitchyRobo'];
        
        let glitchyIndex = this.authorName.indexOf('GlitchyRobo');
        let scatterData = this.authorName.map((authorName,i) =>{
                    return [i,this.wordcount[i]]
                });
        const option = {
            tooltip:{},
            xAxis: {
                name: 'Years',
                nameLocation:'center',
            },
            yAxis: {
                name: 'Number of stories',
                nameLocation:'center'
            },
            series: [
            {
                data: scatterData,
                symbolSize:6,
                type: 'scatter',
                tooltip:{
                    trigger:'item',
                    formatter: this.showTooltip
                },
            },
            {
                data: [[glitchyIndex,glitchyCount]],
                symbolSize:10,
                type: 'effectScatter',
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
        let authorNum = params.data[0]
        let numWords = params.data[1]
        let text = 
        `Author: ${this.authorName.at(authorNum)} <br>
        Total words writen: ${numWords.toLocaleString('en-US')}`;
        return text
        
    }

    render(){
        return (
        <ReactEChartsCore
            echarts={echarts}
            style={{Width:"50vw",Height:"70vw",minHeight:"40vw"}}
            notMerge={false}
            // showLoading={isLoading}
            option={this.getOption()}
            lazyUpdate={false}
            id='author-by-wordcount'
        />)
    }
}

export default WordcountByAuthorGraph;