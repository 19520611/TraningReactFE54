import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }
    
    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* {hinh anh cua xe} */}
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />

                    </div>
                    <div className="col-6">
                        {/* {button chon mau xe} */}
                        <div className="card text-black ">

                            <div className="card-body">
                                <div className="card-header bg-dark text-white">Exterior color</div>
                                <div className="row mt-3 border p-2">
                                    <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={() => {
                                            this.changeColor('black');
                                        }} src="./img/car/icons/icon-black.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border p-2">
                                    <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={() => {
                                            this.changeColor('silver');
                                        }}  src="./img/car/icons/icon-silver.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border p-2">
                                    <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={() => {
                                            this.changeColor('red');
                                        }}  src="./img/car/icons/icon-red.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border p-2">
                                    <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={() => {
                                            this.changeColor('steel');
                                        }}  src="./img/car/icons/icon-steel.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>


        )
    }
}




/*
 Các bước thực hiện task frontend (react js)
 1 - Dàn layout (hoàn chỉnh giao diện html css)
 2 - Xác định nguồn dữ liệu thay đổi khi người dùng thao tác lên giao diện. Tổ chức lưu trữ trong state.
 3 - xư lý sự kiện set lại giá trị cho value







*/