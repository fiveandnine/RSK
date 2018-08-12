import React, {PureComponent} from 'react'
import BScroll from 'better-scroll'
import throttle from 'lodash/throttle'
import classnames from 'classnames'
import findIndex from 'lodash/findIndex'

@function (WrapComponent){
    return ({data,...others})=>{
        return <WrapComponent {...others} data={data.map((item)=>{
            if(typeof item==='object'){
                return {value:item.value,text:item.text||item.value}
            }else{
                return {value:item,text:item}
            }
        })}/>
    }
}
export default class extends PureComponent {
    static defaultProps={
        defaultIndex:0,
        onChange:()=>{},
        data:[]
    };
    componentWillMount(){
        const {value,data,onChange}=this.props;
        this.value=value;
        const index=findIndex(data,(item)=>value===item.value);
        this.currentIndex=Math.max(0,index);
        if(index<0){
            onChange(data[this.currentIndex].value||data[this.currentIndex].value);
        }
    }
    componentDidMount(){
        try{
            this.lineHeight=this.el.children[0].children[0].clientHeight;
        }catch (e){
            this.lineHeight=window.rem*1;
        }
        this.scroller=new BScroll(this.el,{
            startY:this.getStartY(),
            scrollY:true,
            swipeTime:1000,
            probeType:3,
            deceleration:0.002
        });
        this.scroller.on('scrollEnd',()=>{
            this.scroller.scrollTo(0,this.getStartY(),100);
        });
        this.scroller.on('scroll',throttle(()=>{
            let current=this.getIndex();
            if(this.currentIndex!==current){
                const {data,onChange}=this.props;
                this.currentIndex=current;
                this.value=data[this.currentIndex].value||data[this.currentIndex].value;
                onChange( this.value);
            }
        },200));
    }
    componentDidUpdate(){
        this.scroller.refresh();
        //list更新以后重新触发onChange给组件赋值，暂时这么写，没想到更好的办法
        const {data,onChange}=th
        this.scroller.on('scrollEnd',()=>{
            this.scroller.scrollTo(0,this.getStartY(),100);
        });
        this.scroller.on('scroll',throttle(()=>{
            let current=this.getIndex();
            if(this.currentIndex!==current){
                const {data,onChange}=this.props;
                this.currentIndex=current;
                this.value=data[this.currentIndex].value||data[this.currentIndex].value;
                onChange( this.value);
            }
        },200));
    }
    componentDidUpdate(){
        this.scroller.refresh();
        //list更新以后重新触发onChange给组件赋值，暂时这么写，没想到更好的办法
        const {data,onChange}=this.props,index=this.getIndex(),value=data[index].value||data[index].value;
        if(this.currentIndex!==index||this.value!==value){
            this.currentIndex=index;
            this.value=value;
            onChange(this.value);
        }
    }
    componentWillUnmount(){
        this.scroller.destroy();
    }
    getIndex(){
        const {data}=this.props;
        return Math.min(Math.max(0,-Math.round(this.scroller.y/this.lineHeight)),data.length-1);
    }
    getStartY(){
        return -this.currentIndex*this.lineHeight
    }
    render() {
        const {data,value}=this.props;
        return (
            <div className="m-selector__group" ref={(el)=>this.el=el}>
                <div className="m-selector__group__inner">
                    {data.map((item)=><div className={classnames("m-selector__item",{
                        'is-active':item.value===value
                    })} key={item.value}>{item.text}</div>)}
                </div>
            </div>
        );
    }
}
