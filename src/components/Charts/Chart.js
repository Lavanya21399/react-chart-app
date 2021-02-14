import React, { Component } from 'react'
import {LineChart,Line,CartesianGrid,XAxis, YAxis, Tooltip,Legend,} from "recharts";
import ApiFetch from '../ulities/ApiFetch'

export class Charts extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            data: [],

        }
    }
    
    componentDidMount = async () => {
        let apivalue = await ApiFetch();
        this.setState({ loading: false, data: apivalue })
        console.log(this.state.data)
    };
    
    render() {
     
        return (
            <div>

            <LineChart
            width={1100}
            height={700}
            data={this.state.data.data}
            margin={{ top: 55, right: 30, left: 120, bottom: 5 }}

           >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis padding={{ left: 20 }} domain={[0, 50]} />
            <YAxis type="number" domain={[25, 100]} />
            <Tooltip  />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="data_error" stroke="#8884d8"  />
            <Line type="monotone" dataKey="incoming_data" stroke="#82ca9d" />
          </LineChart>
        </div>
        
        
        )}
}
export default Charts
