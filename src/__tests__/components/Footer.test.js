import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
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

describe('Footer Snapshot', () => {
  it('Test UI of Footer component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
