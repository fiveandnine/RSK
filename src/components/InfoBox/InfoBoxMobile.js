import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './InfoBox.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import BasicEdit from '../../components/Edit/BasicEdit/BasicEdit'
@withStyles(s)
class InfoBox extends Component {
  state={
    isEdit: false
  };
  static defaultProps = {
    defaultLayout: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        leftIcon: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
    defaultData: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.setState({isEdit: false})
  }
  handlerEdit = (flag) => {
    new BasicEdit("ssss");
    this.setState({
      isEdit: flag || !this.state.isEdit
    })
  };
  handlerSave = () => {
    this.form.submit();
  };
  handlerError = (vaildData) => {
    console.log(vaildData);
  };
  handlerSubmit = (data)=>{
    console.log(data)
  };
  render() {
    const {defaultData, defaultLayout} =this.props;
    return (
      <div className={s.root}>
          <div className={s.boxHeader}>
            <span>{defaultLayout.leftIcon}{defaultLayout.title}</span>
            <span className={s.editIcon} onClick={this.handlerEdit}>编辑</span>
          </div>

       <div className={s.defaultBody}>{defaultLayout.content}</div>
      </div>
    )
  }
}
export default (InfoBox);
