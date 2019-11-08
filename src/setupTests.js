import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword } from '@babel/types';


configure({ adapter: new Adapter() });

