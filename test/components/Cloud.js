import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Cloud from '../../src/components/Cloud';

function setup(
  fontName = "Impact",
  fontSizes = [12, 16, 22, 31, 44, 64],
  height = 500,
  onSelectTopic = () => {},
  topics = [],
  width = 500
) {
  const component = TestUtils.renderIntoDocument(
    <Cloud
      fontName={fontName}
      fontSizes={fontSizes}
      height={height}
      onSelectTopic={onSelectTopic}
      topics={topics}
      width={width}
    />
  );
  return {
    component,
    root_element: TestUtils.findRenderedDOMComponentWithClass(component, 'wordcloud__cloud'),
    topics_elements: TestUtils.scryRenderedDOMComponentsWithTag(component, 'text')
  };
}

describe('Cloud component', () => {
  it('should display cloud', () => {
    const { root_element } = setup();
    expect(root_element.textContent).toMatch(/^blub/);
  });
  it('should handle click on topic', () => {
    const { root_element, topics_elements } = setup();
    console.log(topics_elements);
  })
});
