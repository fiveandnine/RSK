import React, {PureComponent} from 'react'
import cx from 'classnames'
import s from './TextArea.css'
import field from '../field'
import fieldFiled from '../fieldDecorator'

class TextArea extends PureComponent {

  handlerChange=(e)=>{
    const {maxLength,onChange} = this.props;
    onChange(e.target.value.slice(0,maxLength));
  };
  getWords = () => {
    const {value} = this.props;
    return value ? value.length : 0
  };
  render() {
    const {value,triggerValidate,maxLength}=this.props;
    s._insertCss(s);
    return (
      <div className={s.textarea_root}>
        <textarea value={value&&value.slice(0,maxLength)} onBlur={triggerValidate} onChange={this.handlerChange}/>
        {maxLength ? <div className={s.textarea_words}>{this.getWords()}<span>/{maxLength}</span></div> : ''}
      </div>
    )
  }
}
export default field(fieldFiled(TextArea))
