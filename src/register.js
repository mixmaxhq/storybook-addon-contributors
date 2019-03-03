import React from 'react';
import addons, { types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID } from './constants';
import Tool from './Tool';

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <Tool api={api} />
  });
});
