import React, { Component } from 'react';
import { getData, getRouter,getList } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Remind'
import Alerts from '../components/modal/Alert'
import PaymentManageBtn from '../components/button/PaymentManageBtn'
class FilterTable extends Component {
	state={
		pno:1,
        psize:5,
        count:0,
        table_data_body:[],
        table_data_bodys:[],
         query_condition:{},
		 search_message:"",
		 financial_number:"",
		 alertAddFinancialState:false,//财务编号
		 alertAddProjectState:false,//相关内容
		 alertState:false,
		 payment_id:"",//支出id
		 project_id:"",//项目id
		 payment_id_arr:[],
		 alertTitle:"",
		 linkpage:""
        
	}
	componentWillMount(){
		this.table_data_body(1,5)
	}
	table_data_body = (page_num,page_size,search_obj) => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
                table_data_body:message.data.data_body,
                table_data_bodys:message.data.data_body,
                table_data_head:message.data.data_head,
                count:message.data.count
			   })
            }
           
        }
        var obj ={page_num:{"condition":"equal","query_data":page_num},page_size:{"condition":"equal","query_data":page_size}};
        // console.log(obj)
        var objs = search_obj?Object.assign(obj, search_obj):obj
        // console.log(objs)
        // var places = JSON.parse((JSON.stringify(obj)+JSON.stringify(this.state.search_message)).replace(/}{/,','));
        // console.log(places)
        this.setState({
            query_condition:obj
		})
		// console.log(objs)
        getData(getRouter("payment_project_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

	}
	export_csv=(search_obj)=>{
		var cb = (route, message, arg) => {
            if (message.error === 0) {
           
            }
           
        }
        var obj ={};
     
        this.setState({
            query_condition:obj
		})
		console.log(search_obj)
         getData(getRouter("payment_project_list"), search_obj===""?{token: sessionStorage.token,data_type:"page_csv"}:{token: sessionStorage.token,query_condition:search_obj,data_type:"page_csv"}
		 , cb, {});
	}
	alertAddState=(newState)=>{
		// console.log(newState)
		this.setState({
			[newState.state]:true,
			payment_id:newState.dataId,
			financial_number:newState.financialNumber?newState.financialNumber:""

		})
	}
	alertHoldState=(newState)=>{
		// console.log(newState)
		this.setState({
			[newState.state]:true,
			payment_id:newState.dataId,
			alertTitle:newState.alertTitle,
			linkpage:newState.linkpage
		})
	}

	goPage= (pno,psize) =>{
        // this.table_data_body()
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       var currentPage = pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
       
        
        this.state.table_data_body.map((table_data_body,index)=>{
            
            components.push (
                <tr
                    //   style={{maxHeight:"25px",display:this.state.table_data_body.indexOf(table_data_body)+1>=startRow &&this.state.table_data_body.indexOf(table_data_body)+1<=endRow?"":"none"}}
                    key = {index}> 
                    {/* <td>
                       <div className="statistical_table_box">
                       {this.state.table_data_body.indexOf(table_data_body)+1}
                       </div>
					</td> */}
					<td>
						<PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="财务编号"
							classNames="financialBtn"
							state="alertAddFinancialState"	
							dataId={table_data_body.id}
							financialNumber={table_data_body.financial_number}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="关联项目"
							state="alertAddProjectState"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="通过"
							classNames="passBtn"
							state="alertState"
							linkpage="payment_state_pass"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="撤回"
							state="alertState"
							classNames="recallBtn"
							linkpage="payment_state_recall"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="作废"
							state="alertState"
							linkpage="payment_state_cancel"	
							dataId={table_data_body.id}
						/>
						
					
					</td>
					{/* <td>
						<input value={table_data_body.id} type="checkbox" name="payment"/>
					</td> */}
                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
						return(
						<td key={index} title={table_data_body[table_data_head.key]}>
							<div className="statistical_table_box">
								{table_data_body[table_data_head.key]}
							</div>
						</td>)
						
					}):""}
					
                </tr>
       
        );
       
        })
        return components
	 }
	 change_page = (pno,psize)=>{
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       	var currentPage = this.state.pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
        var components =<div>
            <span>{"共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页"}</span>
        	<a 
				className="nyx-change-page-href"
				onClick={()=>{
					this.setState({
						pno:1
					})
					currentPage>1?this.goPage(this.state.pno,"+psize+"):""
					currentPage>1?this.table_data_body(1,5):""
				}}
				>首页
			</a>
			<a 
				className="nyx-change-page-href" onClick={()=>{
				currentPage>1?this.setState({pno:this.state.pno-1}):""
				currentPage>1?this.goPage(this.state.pno,"+psize+"):""
				currentPage>1?this.table_data_body(this.state.pno-1,5):""
			}}
			>{"<上一页"}</a>
			<a 
				className="nyx-change-page-href" 
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:this.state.pno+1}):""
			{ this.goPage("+(currentPage+1)+","+psize+")}
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(this.state.pno+1,5):""
			}}
			>{"下一页>"}</a>
			<a 
				className="nyx-change-page-href"
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:totalPage}):""
				
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(totalPage,5):""
			} }
			>{"尾页"}</a>
			<a 
				onClick={()=>{
					this.export_csv(this.state.search_message)
				}}
				className="nyx-change-page-href" style={{marginRight:"-10em",float:"right"}}>
				{"导出"}
			</a>
        </div>
     return components
     }
     screening_information=(message)=>{
        // table_data_body()
		 console.log(message)
		 
         //message为筛选条件
		this.setState({
			search_message:message
        })
        this.table_data_body(1,5,message)
	}
	// 添加财务编号
	sureAddFinancialCallback=()=>{
		console.log(this.state.payment_id)
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddFinancialState:false,
		
				})
				this.table_data_body(1,5)

			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}else{
				Alert.open({
				  alertTip:message.msg
				  
				});
				setTimeout(function(){
				  Alert.close();
				},3000)
			  }
		}
		console.log(this.state.payment_id)
		console.log(this.state.financial_number)
		getData(getRouter("payment_manage_edit_financial_number"), { token:sessionStorage.token,id:this.state.payment_id,financial_number:this.state.financial_number }, cb, {});
	}
	sureAddProjectCallback=()=>{
		console.log(this.state.payment_id)
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddProjectState:false,
		
				})
				this.table_data_body(1,5)

			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}else{
				Alert.open({
				  alertTip:message.msg
				  
				});
				setTimeout(function(){
				  Alert.close();
				},3000)
			  }
		}
		console.log(this.state.payment_id)
		console.log(this.state.project_id)
		getData(getRouter("payment_project_add"), { token:sessionStorage.token,id:this.state.payment_id,project_id:this.state.project_id }, cb, {});
	}
	cancelCallback=()=>{
		this.setState({
			alertAddFinancialState:false,
			alertAddProjectState:false,
			alertState:false
		})
	}
	sureCallback=()=>{
		// this.copyViewMessage(this.state.copy_message)
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                this.setState({
                    alertState:false
				})
				this.table_data_body(1,5)
            }else if(message.error === 2){
                console.log("未登录")
                sessionStorage.logged = false;
                sessionStorage.token="";
                if(window.location.hash.split("#")[1]!=="/"){
                    window.location.href=window.location.href.split("#/")[0]
                
                  }
            }else{
                this.setState({
                    remind_state:true
                })
                Alert.open({
                    alertTip:message.msg
                    
                });
                setTimeout(function(){
                    Alert.close();
                 },3000)
            }
            //  this.props.oneChange(newState);
        }
        //获取数据接口
        console.log(this.state.linkpage)
         getData(getRouter(this.state.linkpage),  {token:sessionStorage.token, id:this.state.payment_id }, cb,  {}); 
    //}
	}
	render(){
		var sumLength=0;
        if(this.state.table_data_head){
            for(var i = 0;i<this.state.table_data_head.length;i++){
                sumLength=sumLength+parseFloat(this.state.table_data_head[i].size);
            }
        }
		return (
            <div>
				<DataSearchMessage 
					index={0}
					   message={this.state.table_data_bodys}
					   keywordSearch={["financial_number"]}
					   keywordTitle={[
                        "财务编号",
                        // "项目类型",
						"领款人",
						"时间",
						"状态"]}
					//    selectListMessage={["project_type_list"]}
					// 	selectNameMessage={["project_project_template_name"]}
					   selectListMessage={[]}
                       selectNameMessage={[]}
                       selectListCheckMessage={["staff_manage_list"]}
                       selectNameCheckMessage={["payee_name"]}
					   sectionTimeMessage={["submit_time"]}
					   langPackMessage={["state"]}
					   langPackTitle={"-1,1,2"}
					   screeningMessage={this.screening_information}
					/>
                <div  className="statistical_div">
                
                    <table style={{width:sumLength+26+"em"}} className="statistical_table">
                        <thead>
                            <tr>
								{/* <th><div className="statistical_table_box">序号</div></th> */}
								<th style={{"width":"26em"}}></th>
                                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
                                    return(
                                        <th key={index}>
                                            <div  style={{width:table_data_head.size}} className="statistical_table_box">
                                                {table_data_head.value}
                                            </div>
                                        </th>
                                    )
                                }):<th> <div className="statistical_table_box"></div></th>}
                                
                            </tr>
                        </thead>
                    <tbody>
                        {this.goPage(this.state.pno,this.state.psize)}
                    </tbody>
                </table>       
            </div>
			<div className="statistical_change_page">
                    {this.change_page(1,5)}
                </div>
			<Popup 
				content={
					<div>
						<h2>财务编号</h2>
						<div className="popup_content">
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										financial_number:e.target.value
										})
									}}
									// view={true}
								value={this.state.financial_number} 
								labelValue={"财务编号"} 
							/>
						</div>
					</div>
					}	 
				sureCallback = {this.sureAddFinancialCallback.bind(this)} 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertAddFinancialState}
			/>
			<Popup 
				content={
					<div>
						<h2>关联项目</h2>
						<div className="popup_content">
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										project_id:e.target.value
										})
									}}
									// view={true}
								value={this.state.project_id} 
								labelValue={"项目id"} 
							/>
						</div>
					</div>
					}	 
				sureCallback = {this.sureAddProjectCallback.bind(this)} 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertAddProjectState}
			/>
			 <Alerts alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
        </div>
		)
	}
}

export default FilterTable;
