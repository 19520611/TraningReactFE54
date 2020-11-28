import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sach san pham</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="1,0$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Samsung" price="1,1$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Sony" price="1,4$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi" price="1,6$"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
