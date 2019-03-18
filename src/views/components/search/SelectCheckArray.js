/** 
     * @author xuesong
     * @param SelectMessage 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    //import TextField from '../components/input/TextField'
    //import Select from './Select'
    class SelectCheckArray extends Component {
        state = {
            search_state: false,
            add_customer: false,
            search_name: "",
            add_customer_input: "",
            search_info_list: [],
            add_button: this.props.addButton,
            before_api_uri: this.props.searchInfoLists,
            searchInfoLists: [],
            info_lists: this.props.searchInfoLists,
        }
        /** 
         * @author xuesong
         * @param infos 函数名  获取下拉内容
         */
        infos() {
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                    this.setState({
                        searchInfoLists: message.data
                    })
                }else if(message.error === 2){
                    console.log("未登录")
                    sessionStorage.logged = false;
                    sessionStorage.token="";
                    if(window.location.hash.split("#")[1]!=="/"){
                        window.location.href=window.location.href.split("#/")[0]
                    
                      }
                }
            }
            console.log(this.state.before_api_uri)
            getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token }, cb, {});
        }
    componentDidMount(){
        this.infos()
    }
        searchShow() {
            this.setState({
                search_state: !this.state.search_state
            })
            var selectedInfo = document.getElementById(this.props.id+"_name").innerHTML.split(","); 
           console.log(this.props.id)
                var checklist = document.getElementsByName(this.props.id+"checkSelectList");
                console.log(checklist)
                var checkValue="";
                var checkedLength=0;
                var id_arr=[];
                if(this.state.search_state){
                    for(var j = 0;j<checklist.length;j++){
                        console.log(checklist[j])
                    for(var m = 0;m<selectedInfo.length;m++){
                        console.log(selectedInfo[m])
                        if(checklist[j].value==selectedInfo[m]){
                            console.log(selectedInfo[m])
                            checklist[j].checked=true;
                        }
                    }
                    }
                    for(var i = 0;i<checklist.length;i++){
                        if(checklist[i].checked){
                                checkValue=checkValue+checklist[i].value+",";
                                checkedLength++;
                                id_arr.push(checklist[i].id)
                            }
                        }
                        checkedLength===0?document.getElementById(this.props.id+"_name").innerHTML="-选择-":document.getElementById(this.props.id+"_name").innerHTML=checkValue.slice(0,checkValue.length-1);
                        document.getElementById(this.props.id+"_id").innerHTML=JSON.stringify(id_arr);
                }
              
               
            }

        render() {
            const { selectedInfo,selectedIdInfo, id, labelValue,disabled } = this.props;
            var selectedArrayInfo = selectedInfo.split(","); 
            // console.log(selectedInfo)
            return (
                <div className="search_info_list_card">
                    <div onClick={() => {
                     
                            this.searchShow()
                          }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    <label className="search_info_list_label">{labelValue}</label>
                    {/* <label className="search_info_list_label">{labelValue}</label> */}
                    <div className="selectedInfo" id={id+"_name"}
                         onClick={() => {
                             if(disabled===true){
                                 return false;
                             }else{
                                this.searchShow()
                                this.infos();
                               console.log(document.getElementById(id+"_name").innerHTML)
                             }
                            
                         }}
                    >
                        {selectedInfo===null||selectedInfo===undefined ?"-选择-": selectedInfo}
                    </div>
                    <div id={id+"_id"}  style={{display:"none"}}>{selectedIdInfo === "" ? "-选择-" : selectedIdInfo}</div>
                    <div className="search_info_position">
                        <div
                            id="search_info_list_div"
                            className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                        >
                            <ul className="search_info_list_ul select_info_list_ul">
                                {this.state.searchInfoLists?this.state.searchInfoLists.map((info_lists,index) => {
                                   
                                   console.log(this.state.searchInfoLists)
                                   return (
                                        <li  key={index}>
                                            <input id={info_lists.id} value={info_lists.name} name={id+"checkSelectList"} type="checkbox"/>
                                            <span 
                                            >
                                                {info_lists.name}   
                                            </span>
                                        </li>
                                    )
                                }):""}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectCheckArray;