import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './InfoBox.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Input from '../../components/Form/Input'
import Form from '../../components/Form/Form';
import Radio from '../../components/Form/Radio/Radio';
import RadioTextArea from '../../components/Form/Radio/RadioTextArea';
import TextArea from '../../components/Form/TextArea/TextArea';
import CheckBox from '../../components/Form/CheckBox/CheckItem';
import Module from '../../components/Module/Module/Module'

@withStyles(s)
class InfoBox extends Component {
  state={
    isEdit: false,
    list: [{name: '上海', value: 'sh'}, {
      name: '杜布罗夫尼克',
      value: 'dv'
    }, {name: '纽约', value: 'ny'}, {name: '悉尼', value: 'sy'}]
  };
  static defaultProps = {
    defaultLayout: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        leftIcon: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
    defaultData: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.setState({isEdit: false})
  }
  handlerEdit = (flag) => {
    this.setState({isEdit: true});
    this.setState({
      isEdit: flag || !this.state.isEdit
    })
  };
  handlerCancel = ()=>{
    this.setState({isEdit: false});
  }
  handlerSave = () => {
    this.form.submit();
  };
  handlerError = (vaildData) => {
    console.log(vaildData);
  };
  handlerSubmit = (data)=>{
    new Module(<h1>success</h1>);
    console.log(data)
  };
  render() {
    const {defaultData, defaultLayout} =this.props;
    const data = {
      citys: ["dv", "ny"],
      city: "dv"
    };
    return (
      <div className={s.root}>
          <div className={s.boxHeader}>
            <span>{defaultLayout.leftIcon}{defaultLayout.title}</span>
            {this.state.isEdit ?<span className={s.editIcon} onClick={this.handlerCancel}>取消</span>:<span className={s.editIcon} onClick={this.handlerEdit}>编辑</span>}
          </div>
        {this.state.isEdit ?
          <Form ref={self => this.form=self}
                onSubmit={this.handlerSubmit}
                onError={this.handlerError}>
            <Input name="name" label="姓名"
                   errMsg="请填写有效姓名"/>

            <Radio name="city" label="城市"
                   list={this.state.list} errMsg="请选择城市"/>

            <CheckBox name="citys" label="城市(多)"
                      list={this.state.list}/>

            <RadioTextArea data={data} name="radio-Text"
                           list={[{name: '有输入框', value: 'sh'}, {name: '无输入框', value: 'dv'}]}
                           nendText="sh"/>
            <div className={s.introduction}>
              说明：选择有无输入框来显示隐藏输入框，输入框带有规则进行验证
            </div>

            <TextArea errMsg="请填写其他备注" label="其他"
                      maxLength="500"
                      name="text"/>
            <button onClick={this.handlerSave}>save</button>
            <button onClick={this.handlerCancel}>cancel</button>
          </Form>
          :<div className={s.defaultBody}>{defaultLayout.content}</div>}

      </div>
    )
  }
}
export default (InfoBox);
