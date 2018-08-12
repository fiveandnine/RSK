/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  handlerOnMouseOver = () => {
  };
  getLilist = (data,class_name) => {
    if (data instanceof Array)
      return (
        <ul className={cx(s.menuUl,s[class_name])}>
          {data.map((item, key) => {
            if (item.childMenu && item.childMenu instanceof Array) {
              return <li key={key} className={cx(s.menuLi,s.link)}><Link  className={s.link} to={item.url}>{item.name}</Link>{this.getLilist(item.childMenu,'childrenUl')}</li>
            } else {
              return <li key={key} className={s.menuLi}><Link className={s.link} to={item.url}>{item.name}</Link></li>
            }
          })}
        </ul>
      )
  };

  render() {
    const {menuData} = this.props;
    return (
      <div className={s.root} role="navigation">
        {this.getLilist(menuData)}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
