import layer from '../hoc/layer/layer';
import React,{Component} from 'react';
import cx from 'classnames';
import s from './Tip.css'
class Tip extends Component{
  static defaultProps={
    time:2000
  };
  handlerClose = () => {
    const {remove} = this.props;
    // remove()
  };
  componentDidMount(){
    const {remove} = this.props;
    setTimeout(()=>{
      remove();
    }, 3000);
  }
  render(){
    const {children} =this.props;
    s._insertCss(s);
    return (
        <div className={s.root} onClick={this.handlerClose}>
          <div className={s.body}>
            {children}
          </div>
          <span className="c-tips__close icon-close"/>
        </div>
    )
  }
}
export default layer(Tip);

