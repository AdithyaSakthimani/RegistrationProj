import React, { useState } from 'react';

class MyFunc extends React.Component {
    constructor(){
        super(); 
        this.state={
            headingText : 'Hello World',
            newText:''

        }
    }
    ChangeState(){
        this.setState(
            {
                headingText : 'IT GOT CHANGED ',
                newText : 'Suprise' 
            }
        )
    }
    render(){
        return(
            <div>
                <p>{this.state.headingText}
                    {this.state.newText}
                 </p>
                <button onClick ={()=> {
                    this.ChangeState()
                }
                }>
                    CLICK ME FOR MAGIC 
                </button>
            </div>
        );
    };
}; 
export default MyFunc;