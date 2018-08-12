import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import s from './layer.css'

export default function(ComposedComponent){

  class Layer extends PureComponent{
    state={
      options:null,
      children:null,
      show:false
    }
    constructor(){
      super();
      this.animateEndHandler=this.animateEndHandler.bind(this);
      this.touchStartHandler=this.touchStartHandler.bind(this);
    }
    componentWillMount(){
      const {children,options}=this.props;
      this.setState({
        options,children
      });
    }
    animateEndHandler=()=>{
      const {show,options}=this.state;
      const {destroy}=this.props;
      if(!show&&options.persistent!==true){
        destroy();
      }
    }
    touchStartHandler=(e)=>{
      e.preventDefault();
    }
    show(){
      const {show}=this.state;
      if(show){
        return;
      }
      this.setState({show:true});
    }
    hide(callback){
      // console.log('hide');
      // const {show}=this.state;
      const {destroy}=this.props;
      callback();
      destroy();
      // if(!show){
      //   return;
      // }
      // this.setState({show:false},()=>{
      //   callback();
      // });
    }
    isShow(){
      return this.state.show;
    }
    change({children,options}){
      this.setState({children:children||this.state.children,options:Object.assign({},this.state.options,options)});
    }
    render(){
      const {show, children,options}=this.state;
      const {remove}=this.props;
      s._insertCss(s);
      return (
        <div className={s.root}>
        { show ? <ComposedComponent  {...options} remove={remove}>{children}</ComposedComponent>: null }
        </div>
      );
    }
  }
  return class {
    constructor(children,options){
      this._layer=document.createElement('div');
      this._layer.className='layer-set';
      document.body.appendChild(this._layer);
      this.options=Object.assign({},options);
      this.children=children;
      this.reactLayer=this._render();
      if(!this.options.persistent){
        this.show();
      }

    }
    _render(){
      return ReactDOM.render(
        (<Layer options={this.options} remove={this.remove} destroy={this.destroy}>{this.children}</Layer>)
        , this._layer);

    }
    change=({children,options})=>{
      this.reactLayer.change({children,options});
    }
    show=()=>{
      this.reactLayer.show();
      document.body.style.overflow='hidden';
    }
    remove=()=>{
      document.body.style.overflow='auto';
      this.reactLayer.hide(()=>{
        this.options.removeCallback&&this.options.removeCallback();
      });
    }
    destroy=()=>{
      // document.body.style.overflow='auto';
      document.body.removeChild(this._layer);
      ReactDOM.unmountComponentAtNode(this._layer);
    }
  }
}
