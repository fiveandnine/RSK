/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import LayerPage from './LayerPage';
import LayoutC from '../../components/Layout';

async function action({ fetch }) {
  //get data from eggjs or backend
  return {
    title: 'RSK',
    chunks: ['layerPage'],
    component: (
      <LayoutC>
        <LayerPage/>
      </LayoutC>
    ),
  };
}

export default action;
