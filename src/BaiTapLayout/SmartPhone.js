import React, { Component } from 'react'
import Produce from './Produce'

export default class SmartPhone extends Component {
    render() {
        return (
            <div className="bg-dark text-center pt-2 pb-2 ">
                <h3 className="text-white">BEST SMARTPHONE</h3>
                <div className="row">
                    <div className="col-3">
                        <Produce/>
                    </div>
                    <div className="col-3">
                        <Produce/>
                    </div>
                    <div className="col-3">
                        <Produce/>
                    </div>
                    <div className="col-3">
                        <Produce/>
                    </div>
                   
                </div>

            </div>
        )
    }
}
