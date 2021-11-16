import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getDataLine } from '../../api/data';

class LineBasicChart extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }

    getData = async () => {

        let data =await getDataLine(localStorage.getItem('company_id'))
        
        let data_normalize = this.normalize_data(data.response)
        

        this.setState({
            data: data_normalize 
        })
        this.forceUpdate();
        this.options = {
            chart: {
                type: 'line',
            },
            colors: ['#1de9b6', '#1dc4e9', '#A389D4', '#B589D4','#A389D4', '#899FD4', '#f44236', '#f4c22b'],
            title: {
                text: 'Last Hour Temp per Sensor'
            },
            xAxis: {
                
                    type: 'datetime'
                
            },
            
            yAxis: {
                title: {
                    text: 'Temperature (°F)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: this.state.data,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };



    }
    groupBy = (array, key) =>{
    // Return the end result
    return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue.value.replace(/["']/g, "")
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {});
};



    normalize_data = (data) =>{
 
        let new_data = [];
        let group = this.groupBy(data, 'id');

        console.log(group)

        for(const [key, value] of Object.entries(group)){
            
          
            
            let item =
            {
                name: key,
                data: value
            }
           
        new_data.push(item)
        }
        console.log(new_data)
        return new_data
    

    
    }


    componentDidMount (){

        this.getData();
        
 
     }
 
 

    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.options}
            />
        )
    }
}

export default LineBasicChart;