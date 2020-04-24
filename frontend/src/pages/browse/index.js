import React from 'react';
// import api from '~/services/api';

// import Banner from '~/components/browse/banner';
import List from '~/components/browse/list';

import { BrowsePage } from '../main/styled';

const Browse = () => {
  return (
    <BrowsePage className="flex column alignStart justifyTop">
      {/* <Banner /> */}
      <List />
    </BrowsePage>
  );
};

export default Browse;
