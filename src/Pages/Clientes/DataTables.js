import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Row, Col, Card, Table, Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import {getClients} from "../../api/clients"
const $ = require('jquery');
window.jQuery = $;
window.$ = $;
global.jQuery = $;

$.DataTable = require( 'datatables.net' );
require( 'jszip' );
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );

{
    /*  "data": "id", render: function (data, type, row) {return data;}},
{ "data": "name", render: function (data, type, row) {return data;}},
{ "data": "email", render: function (data, type, row) {return data;}},
{ "data": "role", render: function (data, type, row) {return data;}},
{ "data": "action", render: function (data, type, row) {return data;}},
//{ "data": "status", render: function (data, type, row) {return data;}}, 
*/
}
const columns = [
    
    {"title" : "id", "data": "id"},
    {"title" : "name", "data": "name"},
    {"title" : "email", "data": "email"},
    {"title" : "action", "data": "role"},
   
  
];




class DataTablesComp extends React.Component {

    constructor(props) {
        super(props);
        this.clients=[]

     }


   componentDidMount() {

       console.log(this.props.data)
        this.$el = $(this.el);
        this.$el.DataTable({
               dom: '<"data-table-wrapper"t>',
               data: this.props.data,
               columns: columns,
               ordering: false,
               columnDefs: [
                        {
                       targets: [3],
                       width: 180,
                       className: "center",
                       createdCell: (td, cellData, rowData) =>
                       ReactDOM.render(
                            <div
                              id={rowData.id}
                              onClick={() => {
                              this.props.deleteRow(rowData.id);
                              }}
                             > 
                            <i className="feather icon-trash"/>
                              
                             </div>, 
                             td ), },],
                            
                            });
                        }
  componentWillUnmount() {
      $(".data-table-wrapper").find("table").DataTable().destroy(true);
      }


  reloadTableData = (data) => {
          const table = $('.data-table-wrapper').find('table').DataTable();
       table.clear();
       table.rows.add(data);
       table.draw();
        }

        
  shouldComponentUpdate(nextProps, nextState){
  if (nextProps.data.length !== this.props.data.length) {
         this.reloadTableData(nextProps.data);
            }
     return false;
      }
      



    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Listado Clientes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table  className="table table-borderless display" id="dataTable" ref={(el) => (this.el = el)}/> 
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default DataTablesComp;