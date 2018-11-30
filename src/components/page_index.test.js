import React from 'react';
import IndexPage from './page_index';
import { shallow } from 'enzyme';

describe('<IndexPage />', () => {
    it('renders 1 <IndexPage /> component', () => {
        const component = shallow(<IndexPage />);
        expect(component).toHaveLength(1);
    });
});