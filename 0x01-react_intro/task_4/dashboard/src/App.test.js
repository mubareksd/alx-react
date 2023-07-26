import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('renders a header', () => {
    const app = shallow(<App />);
    expect(app.find('App-header').length).toBeDefined();
  });

  it('renders a body', () => {
    const app = shallow(<App />);
    expect(app.find('App-body').length).toBeDefined();
  });

  it('renders a footer', () => {
    const app = shallow(<App />);
    expect(app.find('App-footer').length).toBeDefined();
  });
});
