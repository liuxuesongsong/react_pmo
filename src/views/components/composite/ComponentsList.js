/** 
    * @author xuesong
    * @param ComponentsList 组件名 用于所有组件循环 
    */

import React, { Component } from 'react';
import Cards from '../../components/card/Cards'
import TextField from '../../components/input/TextField';
import TextArea from '../../components/input/TextArea'
import TextAreaShow from '../watch/TextAreaShow'                               
import TextMoney from '../../components/input/TextMoney'
import TextDate from '../../components/input/TextDate'
import TextDatetime from '../../components/input/TextDatetime'
import ListTextSearch from '../../components/select/ListTextSearch'
import Link from '../../components/button/Link'
import DateCard from '../watch/DateCard'
import CardGroup from '../../components/logic/CardGroup'
import LabelTitleMessage from '../../components/watch/LabelTitleMessage'
import TitleMessage from '../../components/watch/TitleMessage'
import LabelChildMessage from '../watch/LabelChildMessage'
import SpellMessage from '../watch/SpellMessage'
import ApplicationsState from '../watch/ApplicationsState'
import SubmitApplications from '../watch/SubmitApplications'
import LabelMessage from '../../components/watch/LabelMessage'
import LabelTotalMessage from '../../components/watch/LabelTotalMessage'
import TitleLeftCard from '../watch/TitleLeftCard'
import TitleRightCard from '../watch/TitleRightCard'
import TitleCardRightGroup from '../watch/TitleCardRightGroup'
import ProvinceCity from '../watch/ProvinceCity'
import CardLeftBody from '../../components/watch/CardLeftBody'
import CardRightBody from '../watch/CardRightBody'
import SpellingCardGroup from '../watch/SpellingCardGroup'
import LoopCardMoneyGroup from '../watch/LoopCardMoneyGroup'
import LoopCardGroup from '../watch/LoopCardGroup'
import EnrollManageList from '../watch/EnrollManageList'
import LabelSelectMessage from '../watch/LabelSelectMessage'
import CardHead from '../../components/card/CardHead'
import CardPage from '../watch/CardPage'
import CardTitleItem from '../watch/CardTitleItem'
import CardItem from '../../components/watch/CardItem'
import ShowStateMessage from '../../components/watch/ShowStateMessage'
import CardItemTime from '../../components/watch/CardItemTime'
import HoldBtn from '../../components/button/HoldBtn'
import AddCardBtn from '../../components/button/AddCardBtn'
import Invisible from '../../components/input/Invisible'
import DisTextField from '../../components/input/DisTextField'
import SelectList from '../../components/select/SelectList'
import SelectListLangPack from '../../components/select/SelectListLangPack'
import DisSelectList from '../../components/select/DisSelectList'
import SelectListSearch from '../../components/select/SelectListSearch'
import DepartmentList from '../select/DepartmentList'
import IsAgreeApplications from '../watch/IsAgreeApplications'
import LabelShowMessage from '../watch/LabelShowMessage'
import GetDataSpellingLabel from '../watch/GetDataSpellingLabel'
import ApplicationsFlow from '../watch/ApplicationsFlow'
import ApplicationsDefault from '../watch/ApplicationsDefault'
import ShowMessage from '../watch/ShowMessage'
import ShowEditorMessage from '../watch/ShowEditorMessage'
import SelectListLocal from '../select/SelectListLocal'
import Print from '../button/Print'
import ClickAlert from '../button/ClickAlert';
import Editor from '../watch/Editor'
import EditEditor from '../watch/EditEditor'
import SelectCheckArray from '../search/SelectCheckArray'
// import LoanBill from '../watch/LoanBill'
class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"inputValue",
            targetValue:"",
            componentslist: this.props.componentslist,
            componentsdata:this.props.componentsdata,
            activeState:"",
            title_index:0
        }
    }
    select_title_index=(index)=>{
        this.setState({
            title_index:index
        })
    }
    handleChildClick=(newState)=>{
      //  console.log(newState)
        var newStates = {
            before_api_uri:newState.before_api_uri
           }
       this.props.holdClick(newStates);//回调函数传递参数给父组件
    }
    handleClick=(formData)=>{
      var newState = {
          add_button:formData.add_button,
          data:formData.data,
          dataId:formData.dataId,
          form_temp_name:formData.form_temp_name
      }
      this.props.twoChange(newState);//回调函数传递参数给父组件
  }
  handlethreeClick=(formData)=>{
  var newState = {
      add_button:formData.add_button,
      data:formData.data,
      dataId:formData.dataId,
      form_temp_name:formData.form_temp_name
  }
  this.props.fourChange(newState);//回调函数传递参数给父组件
}
  handleClicks=(formData)=>{
  var newState = {
      add_button:formData.add_button,
      data:formData.data,
      dataId:formData.dataId,
      form_temp_name:formData.form_temp_name
  }
  this.props.fiveChange(newState);//回调函数传递参数给父组件
}
examine_bool_message=(state)=>{
    this.props.examine_bool_second(state)
    // console.log(state)
}
examine_bool_message_third=(state)=>{
    this.props.examine_bool_fourth(state)
    // console.log(state)
}
examine_bool_message_sixth=(state)=>{
    this.props.examineBoolSeventh(state)
    // console.log(state)
}
handleChildChange=(formData)=>{
    var newState = {
        add_button:formData.add_button,
        data:formData.data,
        dataId:formData.dataId,
        form_temp_name:formData.form_temp_name
    }
    this.props.sevenChange(newState);//回调函数传递参数给父组件
  }
  //组件CardTitleItem的回调参数
  handleThisCardTitleItem=(thisBtnState)=>{
    var newState = {
        cardTitleItem:thisBtnState.cardTitleItem
    }
    this.props.handleTwoCardTitleItem(newState);
  }
 /** 
	 * @time 2018-10-22
	 * @author xuesong
	 * @param editCardSuccess 函数 CardGroup新建保存回调函数
	 */
  editCardSuccess=(newState)=>{
     var newStates={
        success_message:newState.success_message,
        id:newState.id,
        freshName:newState.freshName,
     }
     
     this.props.editCardGroupState(newStates)
  }

  addCardGroupState=(newState)=>{
    var newStates={
       success_message:newState.success_message,
       id:newState.id,
       freshName:newState.freshName,
    }
    
    this.props.editCardGroupStates(newStates)
 }
 activeState=(newState)=>{
    //  this.setState({
    //     activeState:newState
    //  })
    this.props.card_active_state(newState)
 }
 selectLangPackProps=(newState)=>{

 }
    render() {
     
        return (
                this.props.componentslist.map((form_list,index) => {
                    if(form_list.type_name==="Editor"){
                        console.log(this.props.componentsdata)
                    }
                    return (
                            form_list.type_name === "Cards" ?
                                <Cards  
                                    id={form_list.id_name} 
                                    index={this.props.index}
                                    key={index}
                                    card_active_state={this.activeState}
                                    indexKey={this.props.indexKey}
                                    sixChange = {this.handleChildChange}
                                    examine_bool_sixth={this.examine_bool_message_sixth}
                                    addButton={form_list.add_button}
                                    card_list={this.props.componentsdata}
                                />
                            :form_list.type_name === "ListTextSearch" ?
                                <ListTextSearch 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    addButton={form_list.add_button}
                                    disabled={this.props.disabled}
                                    labelValue={form_list.title}
                                    key={index}
                                    searchInfoLists={form_list.before_api_uri}
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                />
                            :form_list.type_name === "TextDatetime" ? 
                                <TextDatetime
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    // inputValue={form_list.key}
                                    key={index}
                                    disabled={this.props.disabled}
                                    inputValue={this.props.componentsdata[form_list.id_name]} 
                                    labelValue={form_list.title} 
                                />
                            : form_list.type_name === "TextDate" ? 
                                <TextDate
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    key={index}
                                    //inputValue={form_list.key}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                />
                            :form_list.type_name === "Link"?
                                <Link 
                                    button={form_list.title}
                                    buttonMessage={form_list}
                                    dataId={this.props.componentsdata.id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={form_list.before_api_uri}
                                    key={index}
                                    messageList={form_list.add_button}
                                    oneChange = {this.handleClick}
                                />
                            :form_list.type_name === "ClickAlert"?
                                <ClickAlert 
                                    button={form_list.title}
                                    // buttonMessage={form_list}
                                    dataId={this.props.componentsdata.id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={form_list.before_api_uri}
                                    key={index}
                                    defaultValue={form_list.key}
                                    examine_bool_first={this.examine_bool_message}
                                    
                                />
                               
                            //     <Link 
                            //     button={form_list.add_button.descript} 
                            //     handleClick = {this.props.handleClick}
                            //     id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                            //     isClick={this.props.componentsdata.id}
                            //     label={form_list.add_button.descript} 
                            //     linkpage={form_list.before_api_uri}   
                            //     messageList={form_list.add_button.before_api_uri}
                            //     title={form_list.title}
                            // />
                            : form_list.type_name === "MutiText" ? 
                                <TextField 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    disabled={this.props.disabled}
                                    inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={index}
                                />
                            : form_list.type_name === "Invisible" ? 
                                <Invisible 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={index}
                                />
                            :form_list.type_name === "DisTextField"?
                                <DisTextField
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    inputValue={this.props.componentsdata[form_list.id_name]!==null?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    index={index}
                                />
                            :form_list.type_name === "LabelTitleMessage"?
                                <LabelTitleMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleMessage"?
                                <TitleMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                />
                            :form_list.type_name === "LabelChildMessage"?
                                <LabelChildMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "SpellMessage"?
                                <SpellMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    className={form_list.class}
                                    beforeApiUri={form_list.before_api_uri}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "ApplicationsState"?
                                <ApplicationsState
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "ApplicationsDefault"?
                                <ApplicationsDefault
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "ShowMessage"?
                                <ShowMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    tip={form_list.tip}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "ShowEditorMessage"?
                                <ShowEditorMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    tip={form_list.tip}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                                
                            :form_list.type_name === "SubmitApplications"?
                                <SubmitApplications
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    submit_application_first={this.examine_bool_message}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "IsAgreeApplications"?
                                <IsAgreeApplications
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    
                                    examine_bool_first={this.examine_bool_message}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "LabelShowMessage"?
                                <LabelShowMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "GetDataSpellingLabel"?
                                <GetDataSpellingLabel
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    id_name={form_list.id_name}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "ApplicationsFlow"?
                                <ApplicationsFlow
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    id_name={form_list.id_name}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                /> 
                            :form_list.type_name === "LabelMessage"?
                                <LabelMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleLeftCard"?
                                <TitleLeftCard
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    tip={form_list.tip}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleRightCard"?
                                <TitleRightCard
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleCardRightGroup"?
                                <TitleCardRightGroup
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "LabelTotalMessage"?
                                <LabelTotalMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                                
                            :form_list.type_name === "SpellingCardGroup"?
                                <SpellingCardGroup
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "LoopCardMoneyGroup"?
                                <LoopCardMoneyGroup
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "LoopCardGroup"?
                                <LoopCardGroup
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    keywordTitle={form_list.key} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />   
                            :form_list.type_name === "EnrollManageList"?
                                <EnrollManageList
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    keywordTitle={form_list.key} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                     examine_bool_enroll={this.examine_bool_message}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />   
                                 
                            :form_list.type_name === "DateCard"?
                                <DateCard
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "ProvinceCity"?
                                <ProvinceCity
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "CardLeftBody"?
                                <CardLeftBody
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    beforeApiUri={form_list.before_api_uri}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "CardRightBody"?
                                <CardRightBody
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                                
                            :form_list.type_name === "CardHead"?   
                                <CardHead
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    addButton={form_list.add_button}
                                    key={index}
                                />
                            :form_list.type_name === "CardPage"?   
                                <CardPage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    cardIndex={this.props.cardIndex}
                                    addButton={form_list.add_button}
                                    key={index+""+this.props.cardIndex}
                                    index={index}
                                    footState={this.props.footState}
                                    threeChange = {this.handlethreeClick}
                                    examine_bool_third={this.examine_bool_message_third}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "CardItem"?   
                                <CardItem
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:form_list.default_value} 
                                />
                            :form_list.type_name === "ShowStateMessage"?   
                                <ShowStateMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    key={index}
                                    thisKey={form_list.key}
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:form_list.default_value} 
                                />
                            :form_list.type_name === "CardItemTime"?   
                                <CardItemTime
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    key={index}
                                    defaultValue={form_list.default_value}
                                    message={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:form_list.default_value} 
                                />
                                
                            :form_list.type_name === "CardTitleItem"?   
                                <CardTitleItem
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    key={index}
                                    index={index}
                                    message={form_list.title} 
                                    footItemState={this.props.footItemState}
                                    handleCardTitleItem={this.handleThisCardTitleItem}
                                />
                            :form_list.type_name === "LabelSelectMessage"?
                                <LabelSelectMessage
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name}  
                                    labelValue={form_list.title} 
                                    key={index}
                                    message={this.props.card_list[form_list.id_name+"_name"]?this.props.card_list[form_list.id_name+"_name"]:""} 
                                />
                            :form_list.type_name==="DepartmentList"?
                                <DepartmentList 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title}
                                    key={index}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name==="SelectList"?
                                <SelectList 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title}
                                    key={index}
                                    disabled={this.props.disabled}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                            :form_list.type_name==="SelectListLangPack"?
                                <SelectListLangPack 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title}
                                    key={index}
                                    disabled={this.props.disabled}
                                    langPack={form_list.key}
                                    // searchInfoLists={form_list.key} 
                                    stateFun={this.selectLangPackProps}
                                    selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                                
                            :form_list.type_name==="DisSelectList"?
                                <DisSelectList 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title}
                                    key={index}
                                    disabled={this.props.disabled}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                            :form_list.type_name==="SelectListSearch"?
                                <SelectListSearch 
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    labelValue={form_list.title}
                                    key={index}
                                    disabled={this.props.disabled}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                            :form_list.type_name === "TextMoney" ? 
                                <TextMoney
                                    id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                    key={index}
                                    disabled={this.props.disabled}
                                    inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""}  
                                    labelValue={form_list.title} 
                                /> 
                            :form_list.type_name === "TextArea" ? 
                                <TextArea 
                                id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                labelValue={form_list.title} 
                                disabled={this.props.disabled}
                                key={index}
                                />
                            :form_list.type_name === "TextAreaShow" ? 
                                <TextAreaShow 
                                id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                key={index}
                                />
                                
                            :form_list.type_name==="CardGroup"?
                                <CardGroup 
                                    addButtonTitle={form_list.add_button_title} 
                                    addButton={form_list.add_button} 
                                    beforeApiUri={this.props.componentsdata[form_list.add_button.before_api_uri]} 
                                    uriName={form_list.add_button.before_api_uri}
                                    delButton = {form_list.add_button.del_button}
                                    editButton={form_list.add_button.edit_button}
                                    listButton = {form_list.add_button.list_button}
                                    idName={form_list.id_name}
                                    dataId={this.props.dataId}
                                    key={index}
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata:""} 
                                    title={form_list.title} 
                                    postListGroup={this.editCardSuccess}
                                    editCardGroupState={this.addCardGroupState}
                                    
                                />
                            :form_list.type_name==="HoldBtn"?
                                <HoldBtn 
                                    before_api_uri={form_list.before_api_uri}
                                    key={index}
                                    onHoldClick={this.handleChildClick}
                            />
                            :form_list.type_name==="AddCardBtn"?
                                <AddCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                    afterApiUri={form_list.after_api_uri}
                                    key={index}
                                    editCardSuccess={this.editCardSuccess}
                                />
                            :form_list.type_name==="SelectListLocal"?
                                <SelectListLocal
                                    id={"select_title"}
                                    selectedInfo={"-选择-"}
                                    labelValue={form_list.title}
                                    keywordTitle={form_list.key} 
                                    selectTitleIndex={this.select_title_index}
                                />
                            :form_list.type_name==="Print"?
                                <Print
                                    button={form_list.title}
                                    isPrint={true}
                                    printMessage={form_list.key}
                                    className={form_list.class}
                                    // allData={this.props.allData?this.props.allData:[]}
                                    dataId={this.props.componentsdata.id}
                                    buttonMessage={this.props.componentsdata?this.props.componentsdata:''}
                                />
                            :form_list.type_name==="Editor"?
                                <Editor
                                    textarea_id={form_list.id_name} 
                                    inputValue={form_list.key}
                                    message={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""}
                                />
                            :form_list.type_name==="EditEditor"?
                                <EditEditor
                                    textarea_id={form_list.id_name} 
                                    message={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:form_list.default_value} 
                                />
                            :form_list.type_name==="SelectCheckArray"?
                                <SelectCheckArray
                                    id={form_list.id_name}
                                    labelValue={form_list.title}
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?JSON.stringify(this.props.componentsdata[form_list.id_name+"_id"]):"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                    searchInfoLists={form_list.before_api_uri}
                                />
                            // :form_list.type_name==="LoanBill"?
                            //     <LoanBill 
                            //         dataId={this.props.componentsdata.id} 
                            //         message={this.props.componentsdata?this.props.componentsdata:''}/>
                            : ""
                       
)
                }
                
                )
            
        )
    }
}

export default ComponentsList;

