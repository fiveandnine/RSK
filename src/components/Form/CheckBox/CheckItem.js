import React, {PureComponent} from 'react'
import cx from 'classnames'
import s from './Checkbox.css'
import field from '../field'
import fieldFiled from '../fieldDecorator'
// import ArrayUtil from '../../ArrayUtil/Util'
class CheckItem extends PureComponent {
  getArrayIndex = (val, array = []) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == val) return i;
    }
    return -1;
  };
  remove = (val, array) => {
    let index = this.getArrayIndex(val, array);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  };
  handlerClick = (val) => {
    const {onChange, triggerValidate, value}=this.props;
    let _value = value || [];
    if (this.getArrayIndex(val, _value)==-1) {
      _value.push(val);
    } else {
      _value = this.remove(val, _value)
    }
    onChange && onChange(_value);
    setTimeout(() => {
      triggerValidate && triggerValidate();
    }, 0);
  };

  render() {
    const {value, label, list}=this.props;
    s._insertCss(s);
    return (
      <div className={s.checkbox_root}>
        {list && list.map((item, key) => {
          return (
            <span key={key}
                  onClick={()=>this.handlerClick(item.value)}
                  className={s.checkbox_item}>
              <i
                className={cx(s.checkbox_idot,this.getArrayIndex(item.value,value)!=-1 ? s.is_active:'')}><i/></i><span
              className={s.checkbox_body}
              key={key}>{item.name}</span>
              {/*<div><textarea>{}</textarea></div>*/}
            </span>
          )
        })}
      </div>
    )
  }
}
export default field(fieldFiled(CheckItem))
