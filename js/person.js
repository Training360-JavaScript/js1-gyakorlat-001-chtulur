const personDataLog = ({
  firstname = `John`,
  lastname = `doe`,
  age = 33,
} = {}) => {
  return `My name is ${firstname} ${lastname}. I'm ${age} years old.`;
};
