export default (state) => {
  const newState = JSON.parse(JSON.stringify(state));
  return newState;
};
