import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Sidebar from '../../src/components/Sidebar';

function setup(topic = null) {
  const component = TestUtils.renderIntoDocument(
    <Sidebar topic={topic} />
  );
  return {
    component,
    root_element: TestUtils.scryRenderedDOMComponentWithClass(component, 'wordcloud__sidebar'),
  };
}

describe('Sidebar component', () => {
  it('should display sidebar', () => {
    const { root_element } = setup();
    expect(root_element.textContent).toMatch(/^blub/);
  });
});
