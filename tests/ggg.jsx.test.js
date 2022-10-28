import React from 'react';
import renderer from 'react-test-renderer';

import ggg.jsx from '..\src\component\ggg.jsx.js';

describe('<ggg.jsx />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ggg.jsx />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });