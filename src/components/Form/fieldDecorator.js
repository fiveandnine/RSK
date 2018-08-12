import React, {PureComponent} from 'react'
import s from './Input.scss';

export default function (WrapComponent) {
  return class extends PureComponent{
    handlerBlur = ()=>{
      const {triggerValidate, value, addEventListener, errorMsg,getRadioValue} = this.props;

      triggerValidate();
      addEventListener('dataChange',()=>{
        console.log(value);
        // getRadioValue(value);
      })
    };
    handlerFocus = () => {
      console.log('focus');
    };
    render(){
      const {label,errorState,errorMsg} = this.props;
      return(
        <div className={s.root}>
          <span className={s.label}>{label}</span>
          <WrapComponent {...this.props} onBlur={this.handlerBlur} onFocus={this.handlerFocus}/>
          <div className={s.errMsg}>{errorMsg}</div>
        </div>
      )
    }
  }
}
