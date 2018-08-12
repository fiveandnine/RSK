import React, {PureComponent} from 'react'
import monthSelector,{computedDate} from './MonthSelector'
import classnames from 'classnames'

export default class extends PureComponent {
    static defaultProps={
        onChange:()=>{},
        onBlur:()=>{},
        onFocus:()=>{},
        value:null,
        placeholder:'请选择'
    };
    handlerClick=()=>{
        const {maxDate,minDate,placeholder,value,onChange,onBlur,onFocus}=this.props;
        monthSelector({title:placeholder,minDate,maxDate,defaultDate:value,onChange,removeCallback:onBlur});
        onFocus();
    };
    render() {
        const {className,value,placeholder}=this.props,cValue=computedDate(value);
        return (
            <div className={classnames(className,{
                'is-placeholder':!value
            })} onClick={this.handlerClick}><span>{value?`${cValue.year}.${cValue.month}`:placeholder}</span></div>
        );
    }
}
