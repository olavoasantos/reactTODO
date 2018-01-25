/** Configuração Enzyme */
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

/** Facilitar uso do shallow criando uma variável global */
global.shallow = shallow;
global.mount = mount;

/** Mock do localStorage */
import './StorageMock';
