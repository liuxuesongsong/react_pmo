/** 
     * @author xuesong
     * @param AddCardBtn 组件  添加card按钮
     */
import React, { Component } from 'react'
import ComponentsCard from './ComponentsCard'
import { getData, getRouter } from '../../utils/helpers'
    class AddCardBtn extends Component {
        state={
            add_card_state:false
        }
        project_index_add = (list_message,before_api_uri)=>{
            var key_name = [];
            var value = [];
            if(this.props.dataId){
                value.push("header_id")
                key_name.push(this.props.dataId)
            }
            for (var i = 0; i < list_message.length; i++) {
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
                    value.push(list_message[i].id_name+"_name")
                    key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                    key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML)
                   }
                else{
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
                  }			 
            }     
            var obj = {};
            for(var j=0;j<value.length;j++){
                obj[value[j]] =key_name[j];
            }
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                    this.setState({
                        add_card_state:false
                    })
                }
    
            }
            console.log(obj)
            getData(getRouter(before_api_uri), {data:obj,token:"tnkGNc"}, cb, {});
        }
        render(){
            return (
                <div>
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true,
                            })
                        }}
                    >
                        {this.props.title}
                    </button>
                    <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                        <div className="paper_card_title">
                            <div onClick={() => {
                                    this.setState({
                                        add_card_state: false
                                            })
                                        }} 
                                    className="return_btn">
                            </div>
                            {this.props.title}
                        </div>
                        <div className="selected_scroll_div">
                            <ComponentsCard  componentslist={this.props.addButton}></ComponentsCard>
                            <button className="hold_btn"
                                    onClick={(e) => {
                                        console.log(this.props.dataId)
                                        this.project_index_add(this.props.addButton,this.props.before_api_uri)
                                    }}
                            >保存
                            </button>  
                        </div>
                    </div>  
                </div>
            )
        }
    }
    export default AddCardBtn;
    