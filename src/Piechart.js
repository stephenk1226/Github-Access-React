import React, { Component } from 'react';
import { ResponsivePie } from 'nivo'




class PieChart extends Component {


    getLegendTextures()
    {
        let list = []

        for(let i in this.props.chartData){
         
            let newEl = {
                "match": {
                   "id": "Python"
                },
                "id": "lines"
            }
            newEl["match"]["id"] = this.props.chartData[i]["id"]
            list.unshift(newEl)
        }
       
        return list
    }
  

  constructor(props)
  {
    super(props)
    this.state = {
      languages:
      {
        "python":100,
      },
      
    }
  }

  render() {



    return (

        <ResponsivePie 
          data=
          {
            this.props.chartData
          }
          margin=
          {{
              "top": 20,
              "right": 60,
              "bottom": 0,
              "left": 60
          }}
          innerRadius={0.3}
          padAngle={0.7}
          cornerRadius={2}
          colors= 'set3'
          colorBy="id"
          borderWidth={1}
          borderColor="inherit:darker(0.2)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#000000"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          defs={[
              {
                  "id": "dots",
                  "type": "patternDots",
                  "background": "inherit",
                  "color": "rgba(255, 255, 255, 0.3)",
                  "size": 1,
                  "padding": 1,
                  "stagger": true
              },
              {
                  "id": "lines",
                  "type": "patternLines",
                  "background": "inherit",
                  "color": "rgba(255, 255, 255, 0.3)",
                  "rotation": -45,
                  "lineWidth": 6,
                  "spacing": 10
              }
          ]}
          fill={
              this.getLegendTextures()
          }
    />
       
      
    );
    
  }
}

export default PieChart;