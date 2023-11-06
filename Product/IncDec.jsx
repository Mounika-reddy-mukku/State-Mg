import React from "react";
class IncDec extends React.Component{
    state={qty:1}
    incHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return <>
            <h3>Product component</h3>
            <button onClick={this.decHandler}>-</button>
            <span>{this.state.qty}</span>
            <button onClick={this.incHandler}>+</button>
            
        </>
    }

}
export default IncDec