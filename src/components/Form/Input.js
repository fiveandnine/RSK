import {field} from '../FormSrc'
import fieldDecorator from './fieldDecorator'
import React,{PureComponent} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Input.scss';
class Input extends PureComponent {
  static defaultProps={
    value:'',
    type:'text',
    clear:false,
    onChange:()=>{},
    onBlur:()=>{},
    onFocus:()=>{}
  };
  handlerClear=()=>{
    const {onChange}=this.props;
    onChange('');
  };
  handlerChange=(e)=>{
    const {onChange,maxLength}=this.props;
    let value=e.target.value;
    if(maxLength){
      value=value.slice(0,maxLength);
    }
    onChange(value);
  };
  render() {
    const {value,type,onFocus,onBlur,className,maxLength,placeholder,clear,leftIcon,rightIcon,errorState}=this.props;
    s._insertCss(s);
    return (
      <span>
                {leftIcon||null}
        <input className={errorState==2 ? s.errInput: ''} maxLength={maxLength} onFocus={onFocus} onBlur={onBlur} onChange={this.handlerChange} value={value} type={type} placeholder={placeholder}/>
        {/*{rightIcon||null}*/}
        {/*{clear&&value?<i className="c-input__close icon-clean" onClick={this.handlerClear}/>:null}*/}
            </span>
    );
  }
}
export default field(fieldDecorator(Input))
// export default Input
