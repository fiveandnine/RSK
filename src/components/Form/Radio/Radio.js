import React, {PureComponent} from 'react'
import cx from 'classnames'
import s from './Radio.css'
import field from '../field'
import fieldFiled from '../fieldDecorator'

class Radio extends PureComponent {
  handlerClick = (val) => {
    const {onChange, triggerValidate,value,onDataChange,onClick}=this.props;
    if(value ==val) return;
    onChange&&onChange(val);
    setTimeout(() => {
      triggerValidate && triggerValidate();
      onDataChange && onDataChange(val);
      onClick && onClick()
    }, 0);
  };

  componentDidMount(){
    const {value} =this.props;
    value&&this.handlerClick(value);
  }
  render() {
    const {value,list}=this.props;
    s._insertCss(s);
    return (
      <div className={s.radio_root}>
        {list&&list.map((item, key) => {
          return (
            <span key={key} onClick={()=>this.handlerClick(item.value)} className={s.radio_item}>
              <i className={cx(s.radio_idot,value===item.value ? s.isactive:'')}/><span className={s.radio_body} key={key}>{item.name}</span>
            </span>
          )
        })}
      </div>
    )
  }
}
export default field(fieldFiled(Radio))
export const RadioC = Radio;
