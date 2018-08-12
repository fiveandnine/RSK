import React, {PureComponent} from 'react'
import './style.scss'

export default class extends PureComponent {
    static defaultProps={
        onConfirm:()=>{}
    };
    handlerClick=()=>{
        const {onConfirm}=this.props;
        onConfirm();
    };
    render() {
        const {className,children,title,onCancel}=this.props;
        return (
            <div className={className}>
                <div className="m-selector">
                    <div className="m-selector__options">
                        <div className="m-selector__button" onClick={onCancel}>取消</div>
                        <div className="m-selector__title">{title}</div>
                        <div className="m-selector__button" onClick={this.handlerClick}>确定</div>
                    </div>
                    <div className="m-selector__body">
                        <div className="m-selector__scroll">
                            {children}
                        </div>
                        <div className="m-selector__indicator"></div>
                    </div>
                </div>
            </div>
        );
    }
}
