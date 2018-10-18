/** 
     * @author xuesong
     * @param CardBody 组件  card内容
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    class CardBody extends Component {
        state={
        }
        /** 
	 * @time 2018-09-27
	 * @author xuesong
	 * @param handleChildChange 函数 出来Link返回的数据 
	 */
    handleClick=(formData)=>{
        console.log(formData)
      var newState = {
          add_button:formData.add_button,
          data:formData.data,
          dataId:formData.dataId,
          form_temp_name:formData.form_temp_name
      }
      this.props.threeChange(newState);//回调函数传递参数给父组件
  }
        render(){
            return (
                <div className="card-body">
                <ComponentsList twoChange = {this.handleClick}  componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
          </div>
            )
        }
    }
    export default CardBody;
    