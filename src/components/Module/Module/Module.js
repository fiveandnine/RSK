import React, {Component,PureComponent} from 'react'
import layer from '../../hoc/layer/layer'
import s from './Module.css'
import Tip from '../../Module/Tip'


class BasicEdit extends PureComponent{
  state = {
    list: [{name: '上海', value: 'sh'}, {name: '杜布罗夫尼克', value: 'dv'}, {name: '纽约', value: 'ny'}, {name: '悉尼', value: 'sy'}]
  };
  handlerBack=()=>{
    new Tip("ssss");
  };
  handlerClose= ()=>{
    const {remove} = this.props;
    remove()
  };
  render(){
    const {children} = this.props;
    s._insertCss(s);
    return (
      <div className={s.root}>
        <div className={s.body}>
          {children}
          <button onClick={this.handlerClose}>close</button>
        </div>
      </div>
    )
  }
}
export default layer(BasicEdit);
export const BasicEditComponent = BasicEdit;
