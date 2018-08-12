import React, {PureComponent} from 'react'
import Group from './Group'
import SelectorOuter from './SelectorOuter'
import layer from '../hoc/layerTouchClose'

class GroupItem extends PureComponent{
    handlerChange=(value)=>{
        const {index,onChange}=this.props;
        onChange(value,index);
    };
    render(){
        const {value,data}=this.props;
        return <Group onChange={this.handlerChange} value={value} data={data}/>;
    }
}

@layer
export class Selector extends PureComponent {
    static defaultProps={
        title:'请选择',
        onChange:()=>{}
    };
    handlerChange=(value,index)=>{
        this.data.splice(index,1,value);
    };
    handlerClick=()=>{
        const {remove,onChange}=this.props;
        onChange(this.data);
        remove();
    };
    constructor(){
        super();
        this.data=[];
    }
    componentWillMount(){
        const {children}=this.props;
        this.data=children.map(({data,defaultValue})=>defaultValue||data[0].value||data[0]);
    }
    mapData(){
        const {children}=this.props;
        return children.map(({data,defaultValue},index)=><GroupItem index={index} onChange={this.handlerChange} key={index} value={defaultValue} data={data}/>);
    }
    render() {
        const {className,title,remove}=this.props;
        return (
            <SelectorOuter className={className} title={title} onCancel={remove} onConfirm={this.handlerClick}>{this.mapData()}</SelectorOuter>
        );
    }
}

export default function(children,option){
    if(option.mult){
        return new Selector(children,option);
    }else{
        return new Selector([children],Object.assign({},option,{
            onChange:(value)=>{
                option.onChange&&option.onChange(value[0]);
            }
        }));
    }
}
