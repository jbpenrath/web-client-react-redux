import React from 'react';
import { shallow } from 'enzyme';
import TodoArchived from './TodoArchived';

describe('<TodoArchived />', () => {
  it('renders a first level title', () => {
    const wrapper = shallow(<TodoArchived />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
