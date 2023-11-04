import React from 'react';
class Test extends React.Component{
    msg="Hello"
    changeMsg=()=>{
        this.msg="Hello message changed"
        this.forceUpdate()
        console.log(this.msg)
    }
    render(){
        return <React.Fragment>
            <h3>Message={this.msg}</h3>
            <button className='btn btn-warning' onClick={this.changeMsg}>click to change Message</button>

        </React.Fragment>
    }
}
export default Test