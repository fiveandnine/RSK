import React, {PureComponent} from 'react'
import cx from 'classnames'
import s from './Gender.css'
import field from '../field'
import fieldFiled from '../fieldDecorator'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Gender extends PureComponent{
  handlerManClick = () =>{
    const {onChange,onBlur}=this.props;
    onChange('M');
    setTimeout(()=>{
      onBlur&&onBlur();
    },0);
  };
  handlerWomanClick = () =>{
    const {onChange,onBlur}=this.props;
    onChange('W');
    setTimeout(()=>{
      onBlur&&onBlur();
    },0);
  }
  render(){
    const {value}=this.props;
    return (
      <div className={s.gender_oot}>
        <span  onClick={this.handlerManClick}>
          <i className="c-gender__icon icon-boy"/>
          <span className="c-gender__text">男</span>
        </span>
        <span className="c-gender__split">|</span>
        <span  onClick={this.handlerWomanClick}>
          <i className="c-gender__icon icon-boy"/>
          <span className="c-gender__text">女</span>
        </span>
      </div>
    )
  }
}
export default field(fieldFiled(Gender))
