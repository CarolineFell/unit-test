import indicateHealth from '../app';

test('test health', () => {
  const result = indicateHealth({ name: 'Маг', health: 60 });

  expect(result).toBe('healthy');
});
