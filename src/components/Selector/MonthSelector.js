import React, {PureComponent} from 'react'
import Group from './Group'
import SelectorOuter from './SelectorOuter'
import range from 'lodash/range'
import layer from '../hoc/layerTouchClose'

export function formatMonth({year,month}){
    if(year===-1){
        return 'Y';
    }
    const maps=['00','01','02','03','04','05','06','07','08','09'];
    month=maps[month]||month;
    return `${year}-${month}`;
}

export const computedDate = (date) => {
    const arrayToDate=(arr)=>{
        const newDate = new Date();
        newDate.setFullYear(arr[0]);
        newDate.setMonth(arr[1]-1);
        return newDate;
    };

    const dateNotInvalid=(date)=>{
        if(!date){
            return false;
        }
        return new Date(date).toString() !== 'Invalid Date';
    };

    const getMonth=(date)=>{
        return {
            year:date.getFullYear(),
            month:date.getMonth()+1
        };
    };

    if (date instanceof Date&&date.toString() !== 'Invalid Date') {
        return getMonth(date);
    }

    if(Array.isArray(date)){
        const newDate=arrayToDate(date);
        if(dateNotInvalid(newDate)){
            return getMonth(newDate);
        }
    }

    if (dateNotInvalid(date)) {
        return getMonth(new Date(date));
    }

    if (typeof date === 'string') {
        if(date==='Y'){
            return {year:-1,month:-1};
        }
        const arr = date.replace(/[-\/]{1}/g, '-').split('-');
        if (arr.length >= 2) {
            const newDate = arrayToDate(arr);
            if (dateNotInvalid) {
                return getMonth(newDate);
            }
        }
    }

    if(date&&date.year&&date.month){
        if(date.year===-1,date.month===-1){
            return {year:-1,month:-1};
        }
        const newDate=arrayToDate([date.year,date.month]);
        if (dateNotInvalid) {
            return getMonth(newDate);
        }
    }
    return getMonth(new Date());
};

@layer
@function(WrapComponent){
    return class extends PureComponent{
        static defaultProps = {
            minDate: '1950-01',
            maxDate: '2050-05',
            defaultDate: Date.now()
        };
        render(){
            const {minDate,maxDate,defaultDate,...others}=this.props,
                cMinDate=computedDate(minDate),cMaxDate=computedDate(maxDate),cDefaultDate=computedDate(defaultDate);
            return <WrapComponent {...others}
                                  minDate={cMinDate}
                                  maxDate={cMaxDate}
                                  defaultDate={cDefaultDate}
            />
        }
    }
}
class MonthSelector extends PureComponent{
    static defaultProps={
        onChange:()=>{}
    };
    state={
        year:-1,
        month:-1
    };
    handlerConfirm=()=>{
        const {remove,onChange}=this.props;
        onChange(formatMonth({year:this.state.year,month:this.state.month}));
        remove();
    };
    handlerYearChange=(year)=>{
        this.setState({year});
    };
    handlerMonthChange=(month)=>{
        this.setState({month});
    };
    componentWillMount(){
        const {defaultDate}=this.props;
        this.setState({
            year:defaultDate.year,
            month:defaultDate.month
        });
    }
    render(){
        const {className,title,remove,minDate,maxDate,defaultDate}=this.props;
        let minMonth=1,maxMonth=12;
        if(this.state.year===minDate.year){
            minMonth=minDate.month;
        }
        if(this.state.year===maxDate.year){
            maxMonth=maxDate.month;
        }
        return (
            <SelectorOuter className={className} title={title} onConfirm={this.handlerConfirm} onCancel={remove}>
                <Group onChange={this.handlerYearChange} value={defaultDate.year} data={range(minDate.year,maxDate.year+1).map((item)=>({value:item,text:`${item}年`}))}/>
                <Group onChange={this.handlerMonthChange} value={defaultDate.month} data={range(minMonth,maxMonth+1).map((item)=>({value:item,text:`${item}月`}))}/>
            </SelectorOuter>
        );
    }
}

export default function(props){
    return new MonthSelector(null,props);
}

@layer
@function(WrapComponent){
    return class extends PureComponent{
        static defaultProps = {
            minDate: '1950-01',
            maxDate: '2050-05',
            defaultStartDate: (()=>{
                const start=new Date();
                start.setFullYear(start.getFullYear()-1);
                return start;
            })(),
            defaultEndDate: new Date()
        };
        render(){
            const {minDate,maxDate,defaultStartDate,defaultEndDate,...others}=this.props,
                cMinDate=computedDate(minDate),cMaxDate=computedDate(maxDate),cDefaultStartDate=computedDate(defaultStartDate),
                cDefaultEndDate=defaultEndDate ? computedDate(defaultEndDate) : cMaxDate;
            return <WrapComponent {...others}
                                  minDate={cMinDate}
                                  maxDate={cMaxDate}
                                  defaultStartDate={cDefaultStartDate}
                                  defaultEndDate={cDefaultEndDate}
            />
        }
    }
}
class DoubleMonthSelector extends PureComponent {
    static defaultProps={
        onChange:()=>{}
    };
    state = {
        startYear:-1,
        startMonth:-1,
        endYear:-1,
        endMonth:-1
    };
    handlerConfirm=()=>{
        const {remove,onChange}=this.props;
        onChange({
            start:formatMonth({year:this.state.startYear,month:this.state.startMonth}),
            end:formatMonth({year:this.state.endYear,month:this.state.endMonth})
        });
        remove();
    };
    handlerStartYearChange=(startYear)=>{
        this.setState({startYear});
    };
    handlerStartMonthChange=(startMonth)=>{
        this.setState({startMonth});
    };
    handlerEndYearChange=(endYear)=>{
        this.setState({endYear});
    };
    handlerEndMonthChange=(endMonth)=>{
        this.setState({endMonth});
    };
    componentWillMount() {
        const {defaultStartDate,defaultEndDate}=this.props;
        this.setState({startYear:defaultStartDate.year,startMonth:defaultStartDate.month,endYear:defaultEndDate.year,endMonth:defaultEndDate.month});
    }
    render() {
        const {className,title,remove,minDate,maxDate,defaultStartDate,defaultEndDate,sofar}=this.props;
        let minStart=1,maxStart=12,minEnd=1,maxEnd=12;
        if(this.state.startYear===minDate.year){
            minStart=minDate.month;
        }
        if(this.state.startYear===maxDate.year){
            maxStart=maxDate.month;
        }
        if(this.state.endYear===this.state.startYear){
            minEnd=this.state.startMonth;
        }
        if(this.state.endYear===maxDate.year){
            maxEnd=maxDate.month;
        }
        const endYearRange=range(this.state.startYear,maxDate.year+1).map((item)=>({value:item,text:`${item}年`}));
        if(sofar){
            endYearRange.push({value:-1,text:'至今'});
        }
        return (
            <SelectorOuter className={className} title={title} onConfirm={this.handlerConfirm} onCancel={remove}>
                <Group onChange={this.handlerStartYearChange} value={defaultStartDate.year} data={range(minDate.year,maxDate.year+1).map((item)=>({value:item,text:`${item}年`}))}/>
                <Group onChange={this.handlerStartMonthChange} value={defaultStartDate.month} data={range(minStart,maxStart+1).map((item)=>({value:item,text:`${item}月`}))}/>
                <Group onChange={this.handlerEndYearChange} value={defaultEndDate.year} data={endYearRange}/>
                {this.state.endYear!==-1?<Group onChange={this.handlerEndMonthChange} value={defaultEndDate.month} data={range(minEnd,maxEnd+1).map((item)=>({value:item,text:`${item}月`}))}/>:<div className="m-selector__group"/>}
            </SelectorOuter>
        );
    }
}

export function doubleMonthSelector(props){
    return new DoubleMonthSelector(null,props);
}
