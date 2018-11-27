/** 
    * @author xuesong
    * @param ComponentsViewList 组件名 用于所有组件循环 
    */

   import React, { Component } from 'react';
   import CardView from './CardView'
   import TextField from './TextField';
   import TextArea from './TextArea';
   import DisTextArea from './DisTextArea';
   import DisTextField from './DisTextField'
   import TextMoney from './TextMoney'
   import TextDate from './TextDate'
   import TextDatetime from './TextDatetime'
   import ListTextSearch from './ListTextSearch'
   import LinkCard from './LinkCard'
   import CardTitleItem from './CardTitleItem'
//    import CardGroup from './CardGroup'
   import GroupButtonView from './GroupButtonView'
//    import GroupAddButtonView from './GroupAddButtonView'
   import Link from './Link'
   import CardHead from './CardHead'
   import CardBody from './CardBody'
   import CardOpen from './CardOpen'
   import CardFoot from './CardFoot'
   import LabelTitleMessage from './LabelTitleMessage'
   import LabelSelectMessage from './LabelSelectMessage'
   import HoldBtn from './HoldBtn'
//    import AddCardBtn from './AddCardBtn'
   import EditCardBtn from './EditCardBtn'
   import CardItem from './CardItem'
   //import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
   //import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
   //import ProjectGather from '../budgetAndFinalAccountsManagementcond/budget/ProjectGather'
   import SelectList from './SelectList'
   import SelectListSearch from './SelectListSearch'
   import Invisible from './Invisible'
   import DepartmentList from './DepartmentList'
   import TitleLeftCard from './TitleLeftCard'
   import TitleCardRightGroup from './TitleCardRightGroup'
   import DateCard from './DateCard'
   import ProvinceCity from './ProvinceCity'
   import CardLeftBody from './CardLeftBody'
   import CardRightBody from './CardRightBody'
   import SpellingCardGroup from './SpellingCardGroup'
   import LoopCardGroup from './LoopCardGroup'
  import LabelChildMessage from './LabelChildMessage'
  import LabelMessage from './LabelMessage'
  import LabelTotalMessage from './LabelTotalMessage'

   class ComponentsViewList extends Component {
    /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param clickComponents 函数  获取视图json
     */
    clickComponents=(form_list,index)=>{
        // console.log(form_list)
        var newState = {
            form_list:form_list,
            index:index
        }
        this.props.handleViewJson(newState);//回调函数传递参数给父组件
    }

      /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param descriptViewButton 函数  group展示按钮传值
     */
    descriptViewButton=(newState)=>{
        var states={
            name:newState.name,
            view:newState.view,
            title:newState.title,
            addButtonTitle:newState.addButtonTitle,
            index:newState.index,
            arrIndex:newState.arrIndex
        }
        this.props.descriptViewonClickButton(states)
    }
    /** 
     * @time 2018-11-16
     * @author xuesong
     * @param interfaceViewData 函数  group接口名称点击回调函数
     */
    interfaceViewData=(newState)=>{
        var states={
            name:newState.name,
            data:newState.data,
            // addButtonTitle:newState.addButtonTitle
        }
        this.props.interfaceViewDataButton(states) 
    }
    delViewContent=(index)=>{
        this.props.delViewIndexContent(index) 
    }
       render() {
           console.log(this.props.componentslist)
           return (
               this.props.componentslist.map((form_list,index) => {
                       return (
                           <div className="view_component_div" key={index}>
                               <div style={{minHeight:"2.5em"}} onClick={()=>{
                               this.clickComponents(form_list,index)
                           }}>
                            {form_list.type_name === "Cards" ?
                                <CardView 
                                    id={form_list.id_name}
                                    index={this.props.index}
                                    cardViewClickButton={this.descriptViewButton}
                                    //sixChange = {this.handleChildChange}
                                    addButton={form_list.add_button}
                                    // card_list={this.props.componentsdata}
                                />
                                :form_list.type_name === "ListTextSearch" ?
                                   <ListTextSearch 
                                       id={form_list.id_name}
                                       addButton={form_list.add_button}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri}
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   />
                               :form_list.type_name === "TextDatetime" ? 
                                   <TextDatetime
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       //inputValue={this.props.componentsdata[form_list.id_name]} 
                                       labelValue={form_list.title} 
                                   />
                               : form_list.type_name === "TextDate" ? 
                                   <TextDate
                                       id={form_list.id_name} 
                                       //inputValue={form_list.key}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   />
                               :form_list.type_name === "LinkCard"?
                                   <LinkCard   
                                       button={form_list.add_button.descript} 
                                       isClick={this.props.componentsdata.id} 
                                       messageList={form_list.add_button.before_api_uri} 
                                       label={form_list.add_button.descript} 
                                       linkpage={form_list.before_api_uri}
                                       title={form_list.title} 
                                   />
                            //    :form_list.type_name === "Link"?
                            //        <Link 
                            //            button={form_list.add_button.descript} 
                            //            handleClick = {this.props.handleClick}
                            //            id={form_list.id_name}
                            //            isClick={this.props.componentsdata.id}
                            //            label={form_list.add_button.descript} 
                            //            linkpage={form_list.before_api_uri}  
                            //            key={form_list.id_name} 
                            //            messageList={form_list.add_button.before_api_uri}
                            //            title={form_list.title}
                            //        />
                               : form_list.type_name === "MutiText" ? 
                                   <TextField 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                : form_list.type_name === "TextArea" ? 
                                   <TextArea 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                : form_list.type_name === "DisTextArea" ? 
                                   <DisTextArea 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                : form_list.type_name === "Invisible" ? 
                                   <Invisible 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                               :form_list.type_name === "DisTextField"?
                                   <DisTextField
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   />
                               :form_list.type_name === "LabelTitleMessage"?
                                   <LabelTitleMessage
                                       id={form_list.id_name}
                                       labelValue={form_list.title} 
                                    //    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                                :form_list.type_name === "LabelSelectMessage"?
                                   <LabelSelectMessage
                                       id={form_list.id_name} 
                                       labelValue={form_list.title} 
                                    //    message={this.props.card_list[form_list.id_name+"_name"]?this.props.card_list[form_list.id_name+"_name"]:""} 
                                   />
                                :form_list.type_name==="CardTitleItem"?
                                    <CardTitleItem
                                    id={form_list.id_name} 
                                    view={true}
                                    labelValue={form_list.title} 
                                    message={form_list.title} 
                                />
                               :form_list.type_name==="DepartmentList"?
                                   <DepartmentList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                               :form_list.type_name==="SelectList"?
                                   <SelectList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                                :form_list.type_name==="SelectListSearch"?
                                   <SelectListSearch 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                               : form_list.type_name === "TextMoney" ? 
                                   <TextMoney
                                       id={form_list.id_name}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   /> 
                               :form_list.type_name==="CardGroup"?
                                   <GroupButtonView 
                                        addButton={form_list.add_button}
                                        beforeApiUri={form_list.before_api_uri}
                                        interfaceData={this.interfaceViewData}
                                        descriptViewClickButton={this.descriptViewButton}
                                        descriptTitle={form_list.add_button.descript_title} 
                                   />
                               :form_list.type_name==="HoldBtn"?
                                   <HoldBtn 
                                       before_api_uri={form_list.before_api_uri}
                                       view={true}
                                       onHoldClick={this.handleChildClick}
                               />
                              
                                :form_list.type_name==="EditCardBtn"?
                                    <EditCardBtn
                                        title={form_list.title}
                                        dataId={this.props.dataId}
                                        addButton={form_list.add_button}
                                        before_api_uri={form_list.before_api_uri}
                                    /> 
                                :form_list.type_name === "Link"?
                                    <Link 
                                        button={form_list.title}
                                        buttonMessage={form_list}
                                        // dataId={this.props.card_list.id}
                                        // isClick={this.props.card_list.id}
                                        linkpage={form_list.before_api_uri}
                                        // messageList={form_list.add_button.before_api_uri}
                                        onChange = {this.handleClick}
                                    />
                            :form_list.type_name === "CardHead"?
                                <CardHead
                                    id={form_list.id_name} 
                                    viewState={true}
                                    addButton={form_list.add_button}
                                    message={form_list.default_value} 
                                />
                            :form_list.type_name === "CardBody"?
                                <CardBody
                                    cardIndex={this.props.index}
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    message={form_list.title} 
                                />
                            :form_list.type_name === "CardOpen"?
                                <CardOpen 
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    openCtrlState={this.openCtrlState}
                                    message={this.props.card_list?this.props.card_list:""} />
                            :form_list.type_name === "CardFoot"?
                                <CardFoot
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    // threeChange = {this.handleClick}
                                    message={form_list.title} 
                                />
                            :form_list.type_name === "CardItem"?   
                                <CardItem
                                    id={form_list.id_name} 
                                    message={form_list.title}
                                />
                            :form_list.type_name === "TitleLeftCard"?
                                <TitleLeftCard
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleCardRightGroup"?
                                <TitleCardRightGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={[]}
                                    // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "DateCard"?
                                <DateCard
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""}
                                   // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "ProvinceCity"?
                                <ProvinceCity
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "CardLeftBody"?
                                <CardLeftBody
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "CardRightBody"?
                                <CardRightBody
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "SpellingCardGroup"?
                                <SpellingCardGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelChildMessage"?
                                <LabelChildMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelMessage"?
                                <LabelMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelTotalMessage"?
                                <LabelTotalMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LoopCardGroup"?
                                <LoopCardGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            : ""}
                            
                           </div>
                          <div className="view_component_function">
                          <button className="label_delete_button" onClick={()=>{
                               this.delViewContent(index)
                           }}>删除</button>
                          </div>
                           </div>
   )
                   }
                   )
           )
       }
   }
   
   export default ComponentsViewList;
   
   