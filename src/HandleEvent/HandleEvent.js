import React, { Component } from 'react'

export default class HandleEvent extends Component {

    state = {
        imgSrc: './img/car/products/red-car.jpg' // giá trị mặc định của state 
    }

    showMess = () => {
        alert('hello cybersoft frontend 54');
    }

    render() {
        const title = ''
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me</button>

                <button onClick={() =>{
                    alert(`hello ${title}`);
                }}>show message</button>
                <br/>
                
            </div>
            

        )
    }
}
