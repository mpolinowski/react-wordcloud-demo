import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Sidebar from '../../src/components/Sidebar';

const topic = {
  label: 'Label',
  volume: 500,
  sentiment: {
    positive: 1,
    neutral: 2,
    negative: 3,
  },
};

describe('<Sidebar />', () => {
  it('renders', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.is('.wordcloud__sidebar')).toEqual(true);
  });

  it('renders empty', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.contains(<span>Select an element!</span>)).toEqual(true);
  });

  it('renders with value', () => {
    const wrapper = shallow(<Sidebar topic={topic} />);
    expect(wrapper.find('.wordcloud__sidebar_element').length).toEqual(3);
  });
});
