import React, {
	Component
} from 'react'
import { getData, getRouter } from '../../utils/helpers'
import ComponentsViewList from '../components/ComponentsViewList'
import ViewTextField from '../components/ViewTextField';
import VDraggable from '../components/VDraggable'
class View extends Component {
   
	state = {
		view_table_list:[],//所有的视图json表
		this_view_list:[],//当前json内容,
		this_json_view:[],//获取当前某个组件json
		isViewJson:false,//打开修改paper状态
		is_view_list:false,//打开视图json状态
		index_json_view:"",//组件在视图中的位置
		componentsView:[],
		this_index_view_list:"",
		id_name:"",
		type_name:"",
		key:"",
		title:"",
		tip: "",
		add_button: "",
		descript: "",
		before_api_uri: "",
		after_api_uri: ""
		

	};

	componentWillMount() {
		this.fetchListData()
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param viewList 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			console.log(message)
			if (message.error === 0) {
				this.setState({
					view_table_list:message.data	
				})

			}
		}
		getData(getRouter("viewManagement"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param viewList 函数 获取某一个视图列表json 
	 */
	viewList=(name,index)=>{
		var cb = (route, message, arg) => {
			
			if (message.error === 0) {
				this.setState({
					this_view_list:message.data["form-list"],
					is_view_list:true,
					this_index_view_list:index
				})
				console.log(message.data["form-list"])
			}
		}
		getData(getRouter(name), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param thisJsonView 函数 点击视图中数组获取详细json 
	 */
	thisJsonView=(newState)=>{
		var componentsView=[]
		//将组件的json数据变成数组
		for(var i in newState.form_list){
			componentsView.push(
				{key:i,value:newState.form_list[i]}
			 )
		
			
		}
         this.setState({
			componentsView:componentsView,
			this_json_view:newState.form_list,
			index_json_view:newState.index,
			isViewJson:true,
			id_name:newState.form_list.id_name,
			type_name:newState.form_list.type_name,
			key:newState.form_list.key,
			title:newState.form_list.title,
			tip:newState.form_list.tip,
			add_button:newState.form_list.add_button,
			descript:newState.form_list.descript,
			before_api_uri:newState.form_list.before_api_uri,
			after_api_uri:newState.form_list.after_api_uri,
		 })
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editViewList 函数 编辑视图列表 
	 */
	editViewList=()=>{
		console.log(this.state.this_view_list)
	}/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editJsonView 函数 编辑视图组件 
	 */
	editJsonView=()=>{
		//重新编辑视图组件列表
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				other_list.push({id_name:this.state.id_name,type_name:this.state.type_name,
					key:this.state.key,title:this.state.title,
					tip:this.state.tip,add_button:this.state.add_button,
					descript:this.state.descript,before_api_uri:this.state.before_api_uri,
					after_api_uri:this.state.after_api_uri
				})
			}
		}
		this.setState({
			this_view_list:other_list
		})
		 
	}
	render() {
		return(
			<div>
				<div className="view_table_list">
					<ul>
						{this.state.view_table_list.map((view,index)=>{
							return <li onClick={()=>{
								this.viewList(view.name,index)
							}} key={index}>{view.title}</li>
						})}
					</ul>
					
					<VDraggable value={this.state.view_table_list}/>
				</div>
				<div className="view_list overflow">
					<div className={this.state.is_view_list?"view_paper_list overflow open":"view_paper_list overflow"}>
						< ComponentsViewList handleViewJson={this.thisJsonView} componentslist =  {this.state.this_view_list?this.state.this_view_list:[]}  ></ComponentsViewList > 
						<button onClick={()=>{
							this.editViewList()
						}}>确定</button>
					</div>
				</div>
				<div className="view_list overflow">
					<div className={this.state.isViewJson?"view_paper_list overflow open":"view_paper_list overflow"}>
					{this.state.componentsView.map((componentsView,index)=>{
						return(
							<ViewTextField 
							// id={form_list.id_name}
							key={this.state.this_index_view_list+""+this.state.index_json_view+""+index}
							inputValue={componentsView.value} 
							labelValue={componentsView.key} 
							onChange={(event) => {
								this.setState({
									[componentsView.key]:event.target.value 
								});
								}} 
						/>
						)
					})}
						<button onClick={()=>{
						
							this.editJsonView()
						}}>确定</button>
					</div>
				</div>
				
			</div>
			
		);
	}
}

export default View;