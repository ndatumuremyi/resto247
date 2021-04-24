import React, {useState} from 'react';
import DairyUsage from './DairyUsage';
import DairyVisits from './DairyVisits';
import ItemsSold from '../UIcomponents/ItemsSold';
import DairyEarning from './DairyEarning';
import ReactDatePicker from '../UIcomponents/ReactDatePicker';
import {Table} from "reactstrap";

const Dashboard = (props) => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3>
                </div>
                <div className="col-12 col-md-8 ">
                    <ReactDatePicker/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3">
                    <DairyVisits/>
                </div>
                <div className="col-12 col-md-3">
                    <ItemsSold/>
                </div>
                <div className="col-12 col-md-3">
                    <DairyEarning/>
                </div>
                <div className="col-12 col-md-3">
                    <ItemsSold/>
                </div>

            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="row">

                <div className="col">
                    <h2>
                        Product sold
                    </h2>
                    <Table responsive hover>
                        <thead>
                        <tr>
                            <th> Id</th>
                            <th> Name</th>
                            <th> Quantity</th>
                            <th> Unity Price</th>
                            <th> Total Price</th>
                            <th> Day profit/product</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        </tbody>


                    </Table>
                </div>
                <div className="col">
                    <h2>
                        Daily order
                    </h2>
                    <Table responsive hover>
                        <thead>
                        <tr>
                            <th> OrdersId</th>
                            <th> Date</th>
                            <th> Waiter</th>
                            <th> Client Name</th>
                            <th> Total Price</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        </tbody>


                    </Table>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">

                </div>
                <div className="col-12 col-md-6">
                    <DairyUsage/>
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <DairyUsage/>
                </div>
                <div className="col-12 col-md-6">

                </div>

            </div>

        </div>


    );
}

export default Dashboard;