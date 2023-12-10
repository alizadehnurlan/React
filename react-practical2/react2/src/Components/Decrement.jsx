const Decrement = ({ number, down }) => {
  return <button onClick={() => down(number - 1)}>Azalt</button>;
};
export default Decrement;
