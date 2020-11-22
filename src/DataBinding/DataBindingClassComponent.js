import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {

    sinhVien = {
        ma: '001',
        ten:'Nguyen Van Teo',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="321"/>
    }
    render() {
        const title = 'frontend54';
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        }

        return (
            <div>
                <h3>Data binding class component</h3>
                <p>Tieu de: {title}</p>
                {renderTitle()}
                <h3>Thong tin sinh vien</h3>
                <ul>
                    <li>Ma sinh vien: {this.sinhVien.ma}</li>
                    <li>Ten sinh vien: {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200"/></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
