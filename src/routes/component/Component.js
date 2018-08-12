import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input';
import Radio from '../../components/Form/Radio/Radio';
import RadioTextArea from '../../components/Form/Radio/RadioTextArea';
import TextArea from '../../components/Form/TextArea/TextArea';
import CheckBox from '../../components/Form/CheckBox/CheckItem';
import s from './Component.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Tip from '../../components/Module/Tip'
import Loading from '../../components/Module/Loading'
import Module from '../../components/Module/Module/Module'

import InfoBox from '../../components/InfoBox/InfoBox';
import InfoBoxMobile from '../../components/InfoBox/InfoBoxMobile';

class ComponentPage extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
  };
  state = {
    list: [{name: '上海', value: 'sh'}, {
      name: '杜布罗夫尼克',
      value: 'dv'
    }, {name: '纽约', value: 'ny'}, {name: '悉尼', value: 'sy'}]
  };
  handlerSubmit = (data) => {
    console.log(data);
    new Module(<div><h1>提交成功</h1>
      <span>{JSON.stringify(data)}</span></div>);
  };
  handlerSave = () => {
    this.form.submit();
  };
  handlerError = (vilderInfo) => {
    console.log(vilderInfo);
  };
  handlerOnPrevSubmit = (pass, validateInfo, data) => {
    console.log(pass, validateInfo, data);
  };
  copyData = () => {
    this.form.data.citycopy = this.form.data.city
  };
  newTips = () => {
    new Tip("提示信息,3秒关闭")
  };
  newModule = () => {
    new Module(<h1>dasda</h1>)
  };
  newLoading = () => {
    new Loading()
  };

  render() {
    const data = {
      citys: ["dv", "ny"],
      city: "dv"
    };
    return (
      <div>
        <h1
          onClick={this.copyData}>{this.props.componentName}</h1>

        {this.props.componentName == 'Form' ?
          <div>
            <div className={s.introduction}>
              说明：使用 ic-form 2.1.7-alpha-5进行模拟开发
            </div>
            <Form ref={self => this.form=self}
                  onSubmit={this.handlerSubmit}
                  onError={this.handlerError}>
              <Input name="name" rule="REQ NAME" label="姓名"
                     errMsg="请填写有效姓名"/>
              <Input name="email" rule="REQ EMAIL"
                     label="邮箱"
                     errMsg="请填写有效的邮箱"/>
              <Input name="phone" rule="REQ TEL" label="电话"
                     errMsg="请填写有效的电话"/>
              <Radio rule="REQ" name="city"
                     onClick={this.copyData} label="城市"
                     list={this.state.list} errMsg="请选择城市"/>
              <Radio name="citycopy" label="城市copy"
                     list={this.state.list}/>
              <div className={s.introduction}>
                说明：城市单选框的值复制到单选框城市copy中，模拟身份证修改设置出生日期
              </div>
              <CheckBox name="citys" label="城市(多)"
                        list={this.state.list}/>

              <RadioTextArea data={data} name="radio-Text"
                             list={[{name: '有输入框', value: 'sh'}, {name: '无输入框', value: 'dv'}]}
                             nendText="sh"/>
              <div className={s.introduction}>
                说明：选择有无输入框来显示隐藏输入框，输入框带有规则进行验证
              </div>

              <TextArea errMsg="请填写其他备注" label="其他"
                        maxLength="500" rule="REQ"
                        name="text"/>
            </Form>
            <button onClick={this.handlerSave}>save</button>
          </div> : ''}
        {this.props.componentName == 'Layer' ?
          <div>
            <div className={s.introduction}>
              说明：使用new方法弹出弹窗，使用layer函数可以创建一个名为layer-set的dom，并在dom中添加传入的组件，作为弹窗形式显示
            </div>

            <div>
              <button onClick={this.newTips}>Tips</button>
              <div className={s.introduction}>
                说明：使用new方法弹出，点击空白处关闭，常用在调用接口过程
              </div>
            </div>
            <div>
              <button onClick={this.newModule}>
                Confirm Module
              </button>
              <div className={s.introduction}>
                说明：使用new方法弹出弹窗，弹窗内的元素可通过传参自定义
              </div>
            </div>
            <div>
              <button onClick={this.newLoading}>Loading
              </button>
              <div className={s.introduction}>
                说明：使用new方法弹出loading，点击空白处关闭，常用在调用接口过程
              </div>
            </div>
          </div> : ''}
        {this.props.componentName == 'ResumeBox' ?
          <div>
            <div className={s.introduction}>
              说明：模拟职南针pc版的简历编辑部分的基本模块
            </div>
            <InfoBox defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息pc'}}/>

            <InfoBoxMobile defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息mobile'}}/>
          </div> : ''}


        </div>
    )
  }
}
export default withStyles(s)(ComponentPage);
