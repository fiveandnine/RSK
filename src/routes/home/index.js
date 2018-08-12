/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  //get data from eggjs or backend
  // const resp = await fetch('http://127.0.0.1:7001/news/list3',{method:'GET'});
  // const { data } = await resp.json();
  // if (!data || !data.news) throw new Error('Failed to load the news feed.');
  const data='welcome'
  return {
    title: 'RSK',
    chunks: ['home'],
    component: (
      <Layout>
        <Home data={data}/>
      </Layout>
    ),
  };
}

export default action;
