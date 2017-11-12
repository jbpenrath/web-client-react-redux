import TodoArchived from './TodoArchived';

const { shallow } = global.Enzyme;

describe('<TodoArchived />', () => {
  it('renders a first level title', () => {
    const wrapper = shallow(<TodoArchived />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
