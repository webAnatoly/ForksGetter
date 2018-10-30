let counter = Math.random();

const getUniqueRandomNumber = () => {
  const randomNumber = counter;
  counter += 0.1234;
  return randomNumber;
};

export default getUniqueRandomNumber;
