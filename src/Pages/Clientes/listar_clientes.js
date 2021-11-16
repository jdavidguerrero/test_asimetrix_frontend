import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import DataTablesComp from "./DataTables";
import Aux from "../../hoc/_Aux";
import {getClients} from "../../api/clients"
import $ from 'jquery';
import { removeClient } from '../../api/clients';

window.jQuery = $;
window.$ = $;
global.jQuery = $;






class DataTables extends React.Component {
   
   
    
    constructor(props){
        super(props);
        this.state = {
            data: []
        };

         } 

         getData = async () => {

            let dataset =await getClients()
            this.setState({
                data:dataset.response
            })
            this.forceUpdate();
          }

         
            
         
     deleteRow = async (id) => {
        await removeClient(id)
        .then(result=>{
            console.log(result)
            let response = result.response
           
            if(response.status === 500) {
                alert('Petición erronea')
            }
            if(response.status === 200 || response.status === 201) {
                //console.log(response.data.authorization);
                alert(' Cliente Borrado con Exito')
                this.getData();
                    
            }


        })
      //  const filteredData = this.state.getData.filter((i) =>  i.id !== id);
    //this.setState({data: filteredData});
    }



    async componentDidMount() {
       
        this.getData()
     
    }
    

    render() {
       
        return (
            this.state.data.length == 0 ? "Loading...":
            <DataTablesComp  
            data={this.state.data} 
            deleteRow={this.deleteRow} />
            
        );
    }
}

export default DataTables;