/** 
     * @author xuesong
     * @param LabelTotalMessage 组件  label+message
     */
    import React, { Component } from 'react';
     import {dealNumber} from '../../../utils/helpers'
    class LabelTotalMessage extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {message,labelValue} =this.props;
            return (
                <div className="label_total_message">
                    <label>{labelValue}</label>
                   <span>{message?message.toString().indexOf("%")!==-1?message:dealNumber(parseFloat(message)):0}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LabelTotalMessage;
    