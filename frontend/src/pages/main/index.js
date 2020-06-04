import React from 'react';

import List from '~/components/browse/list';

import { BrowsePage } from './styled';

const Browse = () => {
  return (
    <BrowsePage className="flex column alignStart justifyStart">
      <List />
    </BrowsePage>
  );
};

export default Browse;
