import React, { Component } from 'react'

export class Home extends Component {
    move = () =>{
        this.props.history.push("/charts")
    }
    render() {
        return (
            <div>
                <button onClick={this.move}>TakeMeToGraph</button>
            </div>
        )
    }
}

export default Home