import react from 'react';
import { shallow } from 'enzyme';
import Search from './search';

describe('<Search/>', ()=>{
    it('It should pass', ()=> {
        const wrapper = shallow(<Search/>).dive();
        expect(wrapper.find('form.Inside-search').length).toEqual(1);
    });
});