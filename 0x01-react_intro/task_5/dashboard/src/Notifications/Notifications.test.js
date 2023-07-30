import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li').length).toEqual(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
  });
});
