import React from 'react';
import expect, {
  createSpy,
} from 'expect';
import {
  mount,
  shallow,
} from 'enzyme';
import Cloud from '../../src/components/Cloud';


function setup(
  onSelectTopic = () => {},
  fontName = 'Impact',
  fontSizes = [12, 16, 22, 31, 44, 64],
  height = 500,
  topics = [],
  width = 500
) {
  return shallow(
    <Cloud
      fontName={fontName}
      fontSizes={fontSizes}
      height={height}
      onSelectTopic={onSelectTopic}
      topics={topics}
      width={width}
    />
  );
}

describe('<Cloud />', () => {
  it('renders', () => {
    const wrapper = setup();
    expect(wrapper.is('.wordcloud__cloud')).toEqual(true);
  });

  /* it('should handle click on topic', () => {
    const onTopicClick = createSpy();
    const wrapper = setup(onTopicClick);
    console.log(wrapper);
    wrapper.find('.wordcloud__cloud_label').simulate('click');
    expect(onTopicClick.calls.length).toEqual(1);
  }); */
});
