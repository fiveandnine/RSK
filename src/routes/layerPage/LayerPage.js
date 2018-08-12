import React, {Component} from 'react'
import Tip from '../../components/Module/Tip'

import ReactDOM from 'react-dom'

 class LayerPage extends Component{
  showTip = () => {
    console.log('ss');
    // ReactDOM.render(<Tip>asda</Tip>,document.getElementById('module-root'));
    // new Tip("szdasdasdasdasda");
  };
  render(){
    return(
      <div>
        <div onClick={this.showTip}>
          sss
        </div>
        <div>
          <Tip>dddd</Tip>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}
export default LayerPage;
