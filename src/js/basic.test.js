/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from './app.js';

test('creation of character', () => {
  const result1 = new Character('Ivan', 'bowerman', 20, 20);
  const expected = {
    attack: 20,
    defence: 20,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'bowerman',
  };
  expect(result1).toEqual(expected);
});
test('move to another level', () => {
  const result1 = new Character('Ivan', 'bowerman', 20, 20);
  result1.levelUp();
  const expected1 = {
    attack: 24,
    defence: 24,
    health: 100,
    level: 2,
    name: 'Ivan',
    type: 'bowerman',
  };
  expect(result1).toEqual(expected1);
});
test('get damage', () => {
  const result2 = new Character('Ivan', 'bowerman', 20, 20);
  result2.damage(20);
  const expected2 = {
    attack: 20,
    defence: 20,
    health: 84,
    level: 1,
    name: 'Ivan',
    type: 'bowerman',
  };
  expect(result2).toEqual(expected2);
});
test('move to another level when the chatacter is dead', () => {
  const result3 = new Character('Ivan', 'bowerman', 20, 20);
  result3.health = 0;
  expect(() => {
    result3.levelUp();
  }).toThrow();
});
test('get damage when the chatacter is dead', () => {
  const result3 = new Character('Ivan', 'bowerman', 20, 20);
  result3.health = 0;
  expect(() => {
    result3.damage(20);
  }).toThrow();
});
test('creation of Bowerman', () => {
  const bow = new Bowerman('Ivan', 'bowerman');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'bowerman',
  };
  expect(bow).toEqual(expected);
});
test('creation of Swordsman', () => {
  const sword = new Swordsman('Ivan', 'Swordsman');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Swordsman',
  };
  expect(sword).toEqual(expected);
});
test('creation of Magician', () => {
  const mag = new Magician('Ivan', 'Magician');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Magician',
  };
  expect(mag).toEqual(expected);
});
test('creation of Daemon', () => {
  const demon = new Daemon('Ivan', 'Daemon');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Daemon',
  };
  expect(demon).toEqual(expected);
});
test('creation of Undead', () => {
  const undead = new Undead('Ivan', 'Undead');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Undead',
  };
  expect(undead).toEqual(expected);
});
test('creation of Zombie', () => {
  const zombie = new Zombie('Ivan', 'Zombie');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Ivan',
    type: 'Zombie',
  };
  expect(zombie).toEqual(expected);
});
