import expect from 'expect';
import * as reducers from '../../src/utils/reducers';

const topicsJson = [
  { volume: 10 },
  { volume: 5 },
  { volume: 999 },
  { volume: 3 },
  { volume: 12 },
];
const fontSizes = [12, 14, 16, 18, 25, 40];
const enrichedTopics = {
  minVolume: 3,
  maxVolume: 999,
  entities: [
    { volume: 10, fontSize: 12 },
    { volume: 5, fontSize: 12 },
    { volume: 999, fontSize: 40 },
    { volume: 3, fontSize: 12 },
    { volume: 12, fontSize: 12 },
  ],
};


describe('utils reducers', () => {
  it('should return minimum and maximum volume', () => {
    expect(
      reducers.getMinMaxVolume(topicsJson)
    ).toEqual({
      minVolume: 3,
      maxVolume: 999,
    });
  });

  it('should return the correct font size', () => {
    expect(
      reducers.getFontSize(3, 999, 3, fontSizes)
    ).toEqual(12);
  });

  it('should return an object with enriched topics', () => {
    expect(
      reducers.enrichTopics(topicsJson, fontSizes)
    ).toEqual(enrichedTopics);
  });
});
