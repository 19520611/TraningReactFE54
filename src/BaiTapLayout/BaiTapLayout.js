import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import LapTop from './LapTop'
import SmartPhone from './SmartPhone'
import Promotion from './Promotion'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <SmartPhone/>
                <LapTop/>
                <Promotion/>
            </div>
        )
    }
}
