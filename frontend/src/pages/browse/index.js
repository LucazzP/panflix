import React from 'react';

import List from '~/components/browse/list';

import { BrowsePage } from '../main/styled';

const Browse = () => {
  return (
    <BrowsePage className="flex column alignStart justifyTop">
      <List />
    </BrowsePage>
  );
};

export default Browse;
