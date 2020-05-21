import React from 'react';

// import Banner from '~/components/browse/banner';
import List from '~/components/browse/list';

import { BrowsePage } from './styled';

const Browse = () => {
  return (
    <BrowsePage className="flex column alignStart justifyStart">
      {/* <Banner /> */}
      <List />
    </BrowsePage>
  );
};

export default Browse;
