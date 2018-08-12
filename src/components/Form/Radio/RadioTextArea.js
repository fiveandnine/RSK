import React, {PureComponent} from 'react'
import cx from 'classnames'
import s from './Radio.css'
import TextArea from '../TextArea/TextArea'
import Radio from '../Radio/Radio';
class RadioTextArea extends PureComponent {
  state={
    value: ''
  };
  getWords = () => {
    const {value} = this.props;
    return value ? value.length : 0
  };
  getRadioValue=(value)=>{
    console.log('15',value);
    this.setState({
      value:value
    })
  };
  render() {
    const {data,nendText,maxLength=500}=this.props;
    s._insertCss(s);
    return (
      <div>
        <Radio label="带输入框" onDataChange={this.getRadioValue} name="radio-Text" list={[{name: '上海', value: 'sh'}, {name: '杜布罗', value: 'dv'}]}/>
        {this.state.value===nendText? <TextArea maxLength="500" rule="REQ" name="text" />
          :''}
      </div>
    )
  }
}
export default RadioTextArea
