import orderByProps from '../app';

test('function "orderByProps" should sort', () => {
  const inputObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(inputObject, inputOrder);
  expect(received).toEqual(expected);
});

test('function "orderByProps" should sort', () => {
  const inputObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['name', 'level', 'health', 'defence', 'attack'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];
  const received = orderByProps(inputObject, inputOrder);
  expect(received).toEqual(expected);
});

test('function "orderByProps" should throw error', () => {
  const inputObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['blah-blah', 'level', 'health', 'defence', 'attack'];
  expect(() => {
    orderByProps(inputObject, inputOrder);
  }).toThrowError(new Error('Пераметр blah-blah не существет'));
});
