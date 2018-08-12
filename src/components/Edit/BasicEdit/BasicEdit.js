import React, {Component,PureComponent} from 'react'
import Input from '../../Form/Input'
import Form from '../../Form/Form'
import layer from '../../hoc/layer/layer'
import s from './BasicEdit.css'
import Tip from '../../Module/Tip'
import GenderInput from '../../Form/Gender/GenderInput'
import Radio from '../../Form/Radio/Radio';
import RadioTextArea from '../../Form/Radio/RadioTextArea';
import TextArea from '../../Form/TextArea/TextArea';
import CheckBox from '../../Form/CheckBox/CheckItem';

class BasicEdit extends PureComponent{
  state = {
    list: [{name: '上海', value: 'sh'}, {name: '杜布罗夫尼克', value: 'dv'}, {name: '纽约', value: 'ny'}, {name: '悉尼', value: 'sy'}]
  };
  handlerBack=()=>{
    const {remove} = this.props;
    remove()
  };
  handlerClose= ()=>{
    const {remove} = this.props;
    remove()
  };
  handlerSave = () => {
    this.form.submit();
  };
  handlerError = (vaildData) => {
    console.log(vaildData);
  };
  handlerSubmit = (data) => {
    new Tip("确定提交");

    console.log(data)
  };
  render(){
    const {children} = this.props;
    console.log(children);
    s._insertCss(s);
    const data = {
      citys: ["dv", "ny"],
      city: "dv"
    };
    return (
      <div className={s.root} onClick={this.handlerRemove}>
        <div className={s.top_contain}>
          <span onClick={this.handlerBack}>back</span>
          <span>title</span>
          <span onClick={this.handlerClose}>close</span>
        </div>
        <div className={s.body}>
          <Form ref={self => this.form=self} data={{name:'name'}} onSubmit={this.handlerSubmit} onError={this.handlerError}>
            <Radio name="city" onClick={this.copyData} label="城市" list={this.state.list}/>
            <Radio name="citycopy" label="城市copy" list={this.state.list}/>
            <CheckBox  name="citys" label="城市(多)" list={this.state.list}/>
            <GenderInput errMsg="请选择性别" decoratorClass="is-gender" name="gender" rule="REQ"/>
            <RadioTextArea data={data} name="radio-Text" list={[{name: '上海', value: 'sh'}, {name: '杜布罗夫尼克', value: 'dv'}]} nendText="sh"/>
            {/*<GenderInput errMsg="请选择性别" name="gender" rule="REQ"/>*/}
          <Input name="email" rule="REQ EMAIL" label="邮箱" errMsg="请填写邮箱"/>
          </Form>
          <button onClick={this.handlerSave}>save</button>
        </div>
      </div>
    )
  }
}
export default layer(BasicEdit);
export const BasicEditComponent = BasicEdit;
