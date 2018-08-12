import React from 'react';
import Layout from '../../components/Layout/Layout';

import ComponentPage from './Component';

function action(context) {
  // const {userAgent} = context;
  console.log("gg",context.UA);
  return {
    chunks: ['component'],
    // title: about.title,
    component: (
      <Layout type={context.UA}>
        <ComponentPage componentName={context.params.componentname}/>
      </Layout>
    ),
  };
}

export default action;
