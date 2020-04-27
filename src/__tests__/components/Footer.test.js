import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Testing Footer Component', () => {
  const footer = mount(<Footer />);

  it('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  it('Render the tile', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
