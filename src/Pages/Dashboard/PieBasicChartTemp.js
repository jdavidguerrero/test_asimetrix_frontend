import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getDataPieTemp } from '../../api/data';



class PieBasicChartTemp extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }

    getData = async () => {

        let data =await getDataPieTemp(localStorage.getItem('company_id'))
        console.log(data)
    
        

        this.setState({
            data: data.response  
        })
        this.forceUpdate();
        this.options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            colors: ['#1de9b6', '#1dc4e9', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
            title: {
                text: '% Temperature by Farm'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Farms',
                colorByPoint: true,
                data: this.state.data
            }]
        };
        console.log(this.state.data)
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

export default PieBasicChartTemp;