/** 
     * @author xuesong
     * @param ScreeningMessage 组件  label+input
     */
    import React, { Component } from 'react';
    import KeywordSearch from './KeywordSearch';
    import SelectMessage from './SelectMessage'
    class ScreeningMessage extends Component {
        state={
            inputValue:"",
            inputState:false,
            message_list:this.props.message,
            search_arr:[]
            // message_spare_list:this.props.message,
        }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param screening_information 函数 筛选搜索
         */
          screening_information=()=>{
            var key=this.props.selectNameMessage?this.props.selectNameMessage:[];
            var value=[];
            var keyword_list=[];
            var keywordSearch = document.getElementById("keywordSearch").value;
           if(this.props.selectNameMessage){
            
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    value.push(document.getElementById("select_message"+i+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+i+"_name").innerHTML)
                }
            }
            
            // key.push(this.props.keywordSearch);
            // value.push(document.getElementById("keywordSearch").value)
            var obj = {};
            for (var j = 0; j < key.length; j++) {
                obj[key[j]] = value[j]
            }
            console.log(obj)
            var search_arr=[];
            for(var key in obj){ 
                if(obj[key]!==""){
                    search_arr.push({name:obj[key]})   
                }
                }  
                search_arr.push({name:keywordSearch})   
                this.setState({
                    search_arr:search_arr
                })
                console.log(search_arr)
            let filter=(condition,data)=>{
                return data.filter( item => {
                    return Object.keys( condition ).every( key => {
                    return String( item[ key ] ).toLowerCase().includes( 
                            String( condition[ key ] ).trim().toLowerCase() )
                        } )
                } )
                }
              
                if(keywordSearch!==""){
                    if(this.props.keywordSearch){
                        for(var m = 0; m<this.props.keywordSearch.length;m++){
                            for(var k = 0; k<filter(obj,this.props.message).length;k++){
                                
                                    // console.log(this.props.keywordSearch[m]])
                                    if(filter(obj,this.props.message)[k][this.props.keywordSearch[m]].indexOf(keywordSearch)>=0){
                                        keyword_list.push(filter(obj,this.props.message)[k])
                                    }
                                }
                            
                            }
                    }
                }else{
                    for(var n = 0;n<filter(obj,this.props.message).length;n++){
                        keyword_list.push(filter(obj,this.props.message)[n])
                    }
                }
                console.log(keyword_list)
    //  console.log(filter(obj,this.props.message))
    this.props.screening_message(keyword_list)
            // this.setState({
            //     view_table_list:screening_list
            // })
    
        }
         /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_search 函数 清空所有筛选条件
         */
        clear_search=()=>{
            if(this.props.selectNameMessage){
            for(var i = 0; i<this.props.selectNameMessage.length;i++){
                document.getElementById("select_message"+i+"_name").innerHTML="-选择-"
            }
        }
            document.getElementById("keywordSearch").value="";
            this.setState({
                search_arr:[]
            })
            // console.log(this.props.message)
            this.props.screening_message(this.props.message)
        }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_this_search 函数 清空某一项筛选条件
         */
        clear_this_search=()=>{

        }
        render(){
            const {id,message} =this.props;
            return (
                <div>
                    <KeywordSearch
                        id={"keywordSearch"}
                    />
                    {this.props.selectListMessage?this.props.selectListMessage.map((selectListMessage,index)=>{
                        return(
                            <SelectMessage
                            key={index}
                            id={"select_message"+index}
                            searchInfoLists={selectListMessage}     
                        />
                        )
                    }):""}
                   
                    <button
                        onClick={()=>{
                            this.screening_information()
                        }}
                    >搜索</button>
                    <div>
                        <span>
                            {this.state.search_arr.length>0?"关键字:":""}
                        </span>
                        {this.state.search_arr.map((search_arr,index)=>{
                            return(
                                <div key={index}>
                                    <span style={search_arr.name!==""?{border:"1px dashed #fff",margin:"3px",padding:"2px 5px"}:{}}>{search_arr.name+"  "}
                                        <span
                                            onClick={()=>{
                                            this.clear_this_search() 
                                            }}
                                        >X</span>
                                    </span>
                                    
                                </div>
                            )
                        })}
                        {this.state.search_arr.length>0?<button
                            onClick={()=>{
                               this.clear_search() 
                            }}
                        >
                            清空
                        </button>:""}
                    </div>
              </div>
            )
        }
    }
    export default ScreeningMessage;
    