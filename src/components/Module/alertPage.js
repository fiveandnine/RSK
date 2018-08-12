import layer from '../hoc/layer/layer';
import React,{Component} from 'react';
import cx from 'classnames';
@layer
export default class AlertPage extends Component{
  static defaultProps={
    time:2000
  };
  componentDidMount(){
  }
  render(){
    const {className,title,children} =this.props;
    return (
      <div className={cx(className,"c-tips")}>
        <div className="c-tips__area">
          <div className="c-tips__title">{title}</div>
          <div className="c-tips__content">
            alertPage
          </div>
          <span className="c-tips__close icon-close"/>
        </div>
      </div>
    )
  }
}
