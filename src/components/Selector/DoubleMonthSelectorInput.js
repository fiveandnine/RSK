import React, {PureComponent} from 'react'
import {doubleMonthSelector,computedDate} from './MonthSelector'
import classnames from 'classnames'

export default class extends PureComponent {
    static defaultProps={
        onChange:()=>{},
        onBlur:()=>{},
        onFocus:()=>{},
        value:{},
        placeholder:'请选择'
    };
    handlerClick=()=>{
        const {maxDate,sofar,minDate,placeholder,value,onChange,onBlur,onFocus}=this.props;
        doubleMonthSelector({title:placeholder,minDate,maxDate,sofar,defaultStartDate:value.start,defaultEndDate:value.end,onChange,removeCallback:onBlur});
        onFocus();
    };
    getText(){
        const {value,placeholder}=this.props,cStartValue=computedDate(value.start),cEndValue=computedDate(value.end);
        if(value.start&&value.end){
            return `${cStartValue.year}.${cStartValue.month} ~ `+(value.end==='Y'?'至今':`${cEndValue.year}.${cEndValue.month}`);
        }else{
            return placeholder;
        }
    }
    render() {
        const {className,value,placeholder}=this.props;
        return (
            <div className={classnames(className,{
                'is-placeholder':!(value.start&&value.end)
            })} onClick={this.handlerClick}><span>{this.getText()}</span></div>
        );
    }
}
