/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Left from '../Left/Left';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const left_data = [
      {name: 'Button', component: 'Button', id: 'Button'},
      {name: 'Input', component: 'Input', id: 'Input'},
      {name: 'Form', component: 'Form', id: 'Form'},
      {name: 'Component', component: 'Component', id: 'Component'},
      {name: 'Other', component: 'Other', id: 'Other'},
      {name: '弹窗函数', component: 'div', id: 'layer'},
      {name: '单选', component: 'div', id: 'layer'},
      {name: '多选', component: 'div', id: 'layer'},
    ];
    return (
      <div>
        <div className={s.contain_body}>
          <div className={s.body_left}><Left left_data={left_data}/></div>
          <div className={s.body_right}>{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
