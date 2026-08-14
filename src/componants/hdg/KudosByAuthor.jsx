import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useState } from 'react';
import { PieChart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TitleComponent, TooltipComponent } from "echarts/components";

echarts.use([
  TooltipComponent,
  TitleComponent,
  GridComponent,
  PieChart,
  LabelLayout,
  CanvasRenderer,
]);



class KudosByAuthor extends React.Component{
    constructor(props){
    super(props)
    console.assert(props.data, "No data passed to storyNetwork");
    }

    getOption = () => {

        let pieData = Object.keys(this.props.data.kudos).filter((authorName)=>{
            return this.props.data.kudos[authorName] > 1000;
        }).map((authorName) =>{
            let kudosCount = this.props.data.kudos[authorName];
            return {'value':kudosCount,'name':authorName}
        });
        const option = {
        title: {
            text: 'Share of Kudos by Author',
            subtext : 'having > 1000 kudos',
            top: 50,
            zlevel: 5,
            show:true
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
            type: 'pie',
            radius: '50%',
            data: pieData,
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
        };
        return option;
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
            id='author-by-kudos'
        />)
    }
}

export default KudosByAuthor;