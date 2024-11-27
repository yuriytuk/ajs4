import colorGame from '../health';

test('result healthy', () => {
    const received = colorGame({ name: 'Маг', health: 80 });
    expect(received).toBe('healthy');
});

test('result wounded', () => {
    const received = colorGame({ name: 'Маг', health: 30 });
    expect(received).toBe('wounded');
});

test('result critical', () => {
    const received = colorGame({name: 'Маг', health: 10});
    expect(received).toBe('critical');
});