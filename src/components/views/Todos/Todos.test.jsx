import React from 'react';
import { shallow } from 'enzyme';
import Todos from './Todos';

describe('<Todolist />', () => {
  it('renders a first level title', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
