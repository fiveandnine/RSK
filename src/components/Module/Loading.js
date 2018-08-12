import layer from '../hoc/layer/layer';
import React,{Component} from 'react';
import cx from 'classnames';
import s from './Loading.css'
class Loading extends Component{
  static defaultProps={
    time:2000
  };
  handlerClose = () => {
    const {remove} = this.props;
    remove()
  };
  render(){
    s._insertCss(s);
    return (
      <div className={s.root} onClick={this.handlerClose}>
        <div className={s.body}>
          loading
        </div>
        <span className="c-tips__close icon-close"/>
      </div>
    )
  }
}
export default layer(Loading);

