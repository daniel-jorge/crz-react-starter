import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Add enzyme-matchers for Jest
// https://github.com/blainekasten/enzyme-matchers
import 'jest-enzyme';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

export default undefined;
