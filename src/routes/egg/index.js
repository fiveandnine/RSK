/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Egg from './Egg';
import Layout from '../../components/Layout';

async function action(context) {
  //get data from eggjs or backend
  const resp = await context.fetch('http://127.0.0.1:7001/news/list3',{method:'GET'});
  const { data } = await resp.json();
  // if (!data || !data.news) throw new Error('Failed to load the news feed.');
  console.log("19",context);
  return {
    title: 'RSK',
    chunks: ['egg'],
    local: 'local',
    component: (
      <Layout local={context.local}>
        <Egg data={data}/>
      </Layout>
    ),
  };
}

export default action;
