import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Left.css';
import Link from '../Link';

class Left extends React.Component {
  static propTypes = {
    // left_data: PropTypes.Object.isRequired,
  };
  toComponentPage = ()=>{

  }
  render() {
    const { left_data } = this.props;
    return (
      <div className={s.root}>
        {
          left_data.map((item)=>{
            return <div onClick={this.toComponentPage} className={s.root_item} key={item.name}><Link className={s.link} to={`/component/${item.name}`}>{item.name}</Link></div>
          })
        }
      </div>
    );
  }
}
export default withStyles(s)(Left);
