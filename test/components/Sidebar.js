import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Sidebar from '../../src/components/Sidebar';

/**
 * Fake topics.json
 * @type {Array}
 */
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
    expect(wrapper.is('.wordcloud__container_sidebar')).toEqual(true);
  });

  it('renders empty state', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.contains(
      <h1 className="wordcloud__sidebar_title">Information</h1>
    )).toEqual(true);
  });

  it('renders metatable', () => {
    const wrapper = shallow(<Sidebar topic={topic} />);
    expect(wrapper.find('.wordcloud__sidebar_metatable').length).toEqual(1);
  });
});
