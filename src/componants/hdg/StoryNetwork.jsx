import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useState } from 'react';
import { GraphChart } from "echarts/charts";
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { LegendComponent, TooltipComponent } from "echarts/components";

echarts.use([
  TooltipComponent,
  GraphChart,
  LegendComponent,
  LabelLayout,
  CanvasRenderer,
  TooltipComponent
]);

class StoryNetwork extends React.Component {
    constructor(props){
        super(props)
        console.assert(props.data, "No data passed to storyNetwork");
        this.defaults = {
            NODE_NOT_SELECTED : -5,
            colorUnselected : 'grey',
            colorToSelected : 'maroon',
            colorFromSelected : 'green',
            curveness: .1,
            animationDelay : 5,
            transperencySelected : .8,
            transperencyUnselected : .3,
            lineWidethSelected: 1.5,
            lineWidethUnselected: 1,
            edgeSymbolSelected: ['none','arrow'],
            edgeSymbolUnselected: ['none','none']
        };
        this.state = {selectedNode:this.defaults.NODE_NOT_SELECTED,rerender:false}
        this.links = this.getStyledLinks(this.props.data.links);
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.rerender){
            this.setState({selectedNode:this.state.selectedNode,rerender:false})
        }
    }

    
    reactToClick =  (params) => {
        //if the object we hit is an arrow
        if (params.data.target){
            this.setState({selectedNode:params.data.target,rerender:true})
            
        }else {
            this.setState({selectedNode:
                (params.data.id != this.state.selectedNode) ? params.data.id: this.defaults.NODE_NOT_SELECTED,
                rerender:true})
            }
        }
    

    //returns a copy of the data filtered by selection for the appropriate color
    getStyledLinks = (data) => {
        const finalLinks = []
        data.forEach(link => {
            let color = this.defaults.colorUnselected;
            let selected = false;
            if (link.source == this.state.selectedNode){
                color = this.defaults.colorFromSelected
                selected = true
            }
            if (link.target == this.state.selectedNode){   
                color = this.defaults.colorToSelected
                selected = true
            }
            let line_settings = {
                id: `${link.source}-${link.target}`,
                source: link.source,
                target: link.target,
                lineStyle: {
                color: color,
                width:(selected) ? this.defaults.lineWidethSelected: this.defaults.lineWidethUnselected,
                curveness:this.defaults.curveness,
                opacity: (selected)? this.defaults.transperencySelected: this.defaults.transperencyUnselected
                }}
            if (this.state.rerender && color == link.lineStyle.color){
                finalLinks.push(line_settings);
            }
            if (!this.state.rerender){
                finalLinks.push(line_settings);
            }
            });
        return finalLinks;
    }

    getOption = () => {
        let years = new Set(this.props.data.nodes.map(function (node) {
                    return new Date(node.date_published).getFullYear();
                }));
        console.debug(years);
        const obj =  {
            tooltip: {},
            series:[{
            animationDelay:5,
            animationEasing:'cubicInOut',
            name: 'HDG',
            type: 'graph',
            layout: "none",
            legend: [
            {
                data: years
            }
            ],
            data: this.props.data.nodes,
            links: this.getStyledLinks(this.links),
            edgeSymbol:(this.state.selectedNode == this.defaults.NODE_NOT_SELECTED)? 
                this.defaults.edgeSymbolUnselected : this.defaults.edgeSymbolSelected,
            animation: true,
            roam:true,
            categories: this.props.data.nodes.map((node) => {
                return new Date(node.date_published).getFullYear();
            }),
            edgeSymbolSize: 5,
            tooltip:{
                trigger:'item',
                formatter: this.showTooltip
            },
            label: {
                show: true,
                postition: 'right'
            },        
            labelLayout: {
            hideOverlap: true
            },
            scaleLimit: {
            min: 0.4,
            max: 15
            }
            }]
        };  
        return obj;
    }

    //shows the tooltip when hovering over the nodes
    showTooltip = (params) => {
        const d = params.data;
        //tooltip for line
        if (!d.author){
            let src = this.props.data['nodes'][d.source].title
            let target = this.props.data['nodes'][d.target].title
            const lineTooltip = `${src} -> ${target}`;
            return lineTooltip
        }
        //tooltip for node
        const nodeTooltip = 
            `<strong>${d.title}</strong><br>
            Author: ${d.author.map((i)=>i)}<br>
            Words: ${d.wordcount.toLocaleString()}<br>
            Kudos: ${d.kudos.toLocaleString()}<br>
            Recommendations: ${d.recs.toLocaleString()}<br>
            Hits: ${d.hits.toLocaleString()}`;
        return nodeTooltip;
    }

    render(){
        return (
        <ReactEChartsCore
            echarts={echarts}
            style={{minWidth:"70vw",minHeight:"70vw"}}
            notMerge={false}
            // showLoading={isLoading}
            option={this.getOption()}
            onEvents={{'click':this.reactToClick}}
            lazyUpdate={false}
            id='hdg-story-network'
        />)
    }
}



export default StoryNetwork;