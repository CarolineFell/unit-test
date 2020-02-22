import indicateHealth from './app';

test('Здоровье более 50', () => {
  const object = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = indicateHealth(object);

  expected(received).toBe(expected);
});

test('Здоровье от 50 и до 15', () => {
  const object = { name: 'Маг', health: 30 };
  const expected = 'wounded';
  const received = indicateHealth(object);

  expected(received).toBe(expected);
});

test('Здоровье менее 15', () => {
  const object = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = indicateHealth(object);

  expected(received).toBe(expected);
});

// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

// {name: 'Маг', health: 90}

// И возвращает ответ в виде одной из строк: healthy, wounded, critical