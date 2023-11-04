import React from 'react';
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    gmMsg=()=>{
        this.setState({msg:"Good morning"})
    }
    gnMsg=()=>{
        this.setState({msg:"Good night"})
    }
    resetMsg=()=>{
        this.setState({msg:"Hello"})
    }
    render(){
        return <React.Fragment>
            <h3>Message={this.state.msg}</h3>
            <button className='btn btn-warning' onClick={this.gmMsg}>Button1</button><br></br><br></br>
            <button className='btn btn-dark' onClick={this.gnMsg}>Button2</button><br></br><br></br>
            <button className='btn btn-success' onClick={this.resetMsg}>RESET</button>

        </React.Fragment>
    }
}
export default Message