import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import AmChartEarnings from "../Widget/Chart/AmChartEarnings";
import DEMO from "../../store/constant";


import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import AmChartStatistics6 from "../Widget/Chart/AmChartStatistics6";

import LineBasicChart from "./LineBasicChart";
import PieBasicChartHum from "./PieBasicChartHum";
import PieBasicChartTemp from "./PieBasicChartTemp";

import {getDataInit} from "./../../api/data"

class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            farms:'',
            barns:'',
            sensors:'',
            temp:'',
            hum:''
        }
    }

    getData = async () => {

        let data =await getDataInit(localStorage.getItem('company_id'))
        
        let temp, hum
        let average = data.response.average
        average.forEach((data)=>{
            if(data.type == "temp")
            temp = data.value
            else
            hum = data.value
        })
        

        this.setState({
            farms:data.response.count[0].farms,
            barns:data.response.count[0].barns,
            sensors:data.response.count[0].sensors,
            temp:temp,
            hum:hum
            
        })

       
        this.forceUpdate();
      }

    componentDidMount (){

       this.getData();

    }


    render() {
        const {farms,barns,sensors,temp, hum} = this.state
        return (
            <Aux>
            
                <Row>
                    <Col md={4} >
                    <Card className='table-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-auto theme-bg text-white p-t-50 p-b-50">
                                        <i className="feather icon-map f-30"></i>
                                    </div>
                                    <div className="col text-center">
                                        <span className="text-uppercase d-block m-b-10">Mis Granjas</span>
                                        <h3 className="f-w-300">{farms}</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card className='table-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-auto theme-bg text-white p-t-50 p-b-50">
                                        <i className="feather icon-home f-30"></i>
                                    </div>
                                    <div className="col text-center">
                                        <span className="text-uppercase d-block m-b-10">Mis Galpones</span>
                                        <h3 className="f-w-300">{barns}</h3>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                    </Col>
                    <Col md={4} >
                    <Card className='table-card'>
                            <Card.Body className='p-0'>
                                <div className="row-table">
                                    <div className="col-auto theme-bg text-white p-t-50 p-b-50">
                                        <i className="feather icon-thermometer f-30"></i>
                                    </div>
                                    <div className="col text-center">
                                        <span className="text-uppercase d-block m-b-10">Mis Sensores</span>
                                        <h3 className="f-w-300">{sensors}</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">{temp} °F</h3>
                                        <span className="d-block text-uppercase">Average Temperature</span>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                            </Col>
                            <Col md={6} xl={4}>
                                <Card>

                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">{hum} %</h3>
                                        <span className="d-block text-uppercase">Average Humidity</span>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                    </Col>
                    
                </Row>

                <Row>
                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Average Temperature by Farm</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieBasicChartTemp/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Average Humidity by Farm</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieBasicChartHum/>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row>
                <Col >
                <Card>
                            <Card.Header>
                                <Card.Title as="h5">Temperature by farm Last Hour</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineBasicChart/>
                            </Card.Body>
                        </Card>

                        </Col>

                </Row>

    

                
                
            </Aux>
        );
    }
}

export default Dashboard;