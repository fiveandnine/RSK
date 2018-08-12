/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ResumeBox from './ResumeBox';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  //get data from eggjs or backend
  // const resp = await fetch('http://localhost:1337/resumes?format=json',{method:'GET'});
  // console.log(resp);
  return {
    title: 'RSK',
    chunks: ['resumeBox'],
    component: (
      <Layout>
        {/*<Home news={data.news} />*/}
        <ResumeBox/>
      </Layout>
    ),
  };
}

export default action;
