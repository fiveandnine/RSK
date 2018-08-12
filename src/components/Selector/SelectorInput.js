import React, {PureComponent} from 'react'
import selector from './index'
import find from 'lodash/find'
import get from 'lodash/get'
import classnames from 'classnames'

export default class extends PureComponent {
    static defaultProps={
        onChange:()=>{},
        onBlur:()=>{},
        onFocus:()=>{},
        placeholder:'请选择'
    };
    handlerClick=()=>{
        const {data,value,onChange,placeholder,onBlur,onFocus}=this.props;
        selector({data,defaultValue:value},{title:placeholder,onChange:onChange,removeCallback:onBlur});
        onFocus();
    };
    render() {
        const {className,value,data,placeholder}=this.props,activeItem=find(data,(item)=>item.value===value||item===value);
        return (
            <div className={classnames(className,{
                'is-placeholder':activeItem===undefined
            })} onClick={this.handlerClick}><span>{(activeItem&&activeItem.text?activeItem.text:activeItem)||placeholder}</span></div>
        );
    }
}
