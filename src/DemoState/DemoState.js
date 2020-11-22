import React, { Component } from 'react'

export default class DemoState extends Component {


    //state: là thuộc tính có sẵn của component => dùng để quản lý nguồn dữ liệu thay đổi trên giao diện 
    state = {
        isLogin: false
    }

    handleLogin = () => {
        //Khong được thay đổi state trực tiếp mà phải thông qua phương thức this.setState
       
        // this.state.isLogin = true;
        // console.log('isLogin',this.state.isLogin);
         //setState(): là phương thức có sẵn của lớp đối tượng component => dùng để thay dổi giá trị trong this.state đồng thời gọi lại hàm render 
        const newstate = {
            isLogin: true
        }
        this.setState(newstate);
    }
    //isLogin = false;
    userName = 'Thanh';
    renderContent = ()=>{
        if(this.state.isLogin){
            return <p>
                Hello ! {this.userName}
            </p>    
        }
        return <button className="btn btn-info" onClick = { ()=>{
            this.handleClick();
        }}> Login </button>
    }
    handleClick = () =>{
        
        alert('123')
    }
    render() {
        return (
            <div>
                <h3> IF - ELSE -  REACT</h3>
                {/* {this.isLogin? <p> Hello: {this.userName}</p>: <button className="btn btn-info"> Login </button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
