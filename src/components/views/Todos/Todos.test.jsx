import Todos from './Todos';

const { shallow } = Enzyme;

describe('<Todolist />', () => {
  it('renders a first level title', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
