import React from 'react'

export default function DataBinding() {

    //Binding bien (doi tuong, cac bien co ban)
    const title = 'Cybersoft';
    const imgSrc = 'https://picsum.photos/800/800';

    const SinhVien = {
        maSV: '0001',
        tenSinhVien: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200'
    }

    //Binding ham
    const renderImg = () => {
        return <div>
            <h3>Hinh anh</h3>
            <img src={SinhVien.hinhAnh} width="200" height="200" />
        </div>
    }
    return (
        <div>
            <h3>DataBinding</h3>
            <p id="title" className="display-4">{title}</p>

            <img src={imgSrc} width="400" height="400" alt="123.jpg" />
            <intput className="form-control w-25" value={title} />
            <hr/>
            <h3>Thong tin sinh vien</h3>
            <div className="card " style={{width:200,height:200}}>
                <img className="card-img-top" src={SinhVien.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{SinhVien.tenSinhVien}</h4>
                <p className="card-text">{SinhVien.maSV}</p>
                </div>
            </div>
            <hr/>
           <div className="mt-5">
           {renderImg()}
           </div>
        </div>
    )
}
