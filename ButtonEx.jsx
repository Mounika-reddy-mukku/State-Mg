import React from 'react';
class ButtonEX extends React.Component{
    state={
        msg:"Hello"
    }
    changeMsg=()=>{
        this.setState({msg:"Hi message changed"})
    }
    render(){
        return <React.Fragment>
            <h3>Message={this.state.msg}</h3>
            <button className='btn btn-warning' onClick={this.changeMsg}>click to change Message</button>

        </React.Fragment>
    }
}
export default ButtonEX