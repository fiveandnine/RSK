import React,{PureComponent} from 'react'
import classnames from 'classnames'
// import './index.scss'
export default class extends PureComponent{
    static defaultProps={
        onChange:()=>{},
        onEnter:()=>{},
        onCancel:()=>{},
        placeholder:'输入搜索内容'
    };
    state={
        value:''
    };
    handlerKeyUp=(e)=>{
        const {onEnter,maxLength}=this.props;
        let value=e.target.value;
        if(maxLength){
            value=value.slice(0,maxLength);
        }
        if(e.keyCode===13){
            e.preventDefault();
            onEnter(value);
        }
    };
    constructor(){
        super();
        this.handlerChange=this.handlerChange.bind(this);
        this.handlerClick=this.handlerClick.bind(this);
    }
    componentWillMount(){
        const {value}=this.props;
        value&&this.setState({value:value.toString()});
    }
    componentDidMount(){
        this.input.focus();
        if(this.input.setSelectionRange){
            const index=this.state.value.length;
            this.input.setSelectionRange(index,index);
        }
    }
    handlerChange(e){
        const {onChange,maxLength}=this.props;
        let value=e.target.value;
        if(maxLength){
            value=value.slice(0,maxLength);
        }

        this.setState({value},()=>{
            onChange(value);
        });
    }
    handlerSubmit(e){
        e.preventDefault();
    }
    handlerClick(){
        const {onCancel}=this.props;
        onCancel();
    }
    render(){
        const {className,placeholder,maxLength,type}=this.props;
        return (
            <div className={classnames("m-search-input",className)}>
                <a className="m-search-input__button" onClick={this.handlerClick}>取消</a>
                <form action="/" onSubmit={this.handlerSubmit}>
                    <input ref={(el)=>this.input=el} type={type ? type : "search"} maxLength={maxLength} onKeyUp={this.handlerKeyUp} onChange={this.handlerChange} value={this.state.value} className="m-search-input__input" placeholder={placeholder}/>
                </form>
            </div>
        );
    }
}
