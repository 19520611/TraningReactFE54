import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone XS', price: 3000 },
    ]
    // renderProduct = () => {
    //     let arrJSX = [];
    //     for (let index in this.products) {
    //         //Moi lan duyet lay ra 1 doi tuong san pham
    //         let product = this.products[index];
    //         //Tu doi tuong san pham tao ra doi tuong jsx 
    //         let jsxProduct = <div className="col-4">
    //             <div className="card ">
    //                 <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
    //                 <div className="card-body">
    //                     <h4 className="card-title">{product.name}</h4>
    //                     <p className="card-text">{product.price}</p>
    //                 </div>
    //             </div>

    //         </div>;
    //         arrJSX.push(jsxProduct); // dua phan tu jsx được từ dữ liệu sản phẩm
    //     }
    //     return arrJSX;
    // }

    renderProductWithMap = () => {
        const arrjsx = this.products.map((products, index) => {
            return <div className="col-4" key={index}>
                <div className="card ">
                    <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{products.name}</h4>
                        <p className="card-text">{products.price}</p>

                    </div>
                </div>

            </div>
        });
        return arrjsx;
    }
    renderTable = () => {
        return this.products.map((products, index) => {
            return <tr key={index}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
            </tr>
        })
    };
    render() {
        
        return (
            <div className="row">
                {this.renderProductWithMap()}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}
