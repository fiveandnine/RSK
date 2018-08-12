/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import axios from 'axios';
class Header extends React.Component {
  componentDidMount(){
    axios.get('http://127.0.0.1:7001/news/list3')
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const menuData = [
      {name:'Component',url:'/component',childMenu:[
        {name:'Form',url:'/component/Form'},
        {name:'Layer',url:'/component/Layer'},
        {name:'ResumeBox',url:'/component/ResumeBox'},
        // {name:'ResumeEdit',url:'/component/ResumeEdit'},
      ]},
      {name:'Egg',url:'/egg'},
      {name:'About',url:'/about',childMenu:[
        {name:'private',url:'/private'},
      ]},
      {name:'Other',url:'/not-found'},
    ];
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation menuData={menuData}/>
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            {/*<span className={s.brandTxt}>Your Component</span>*/}
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
