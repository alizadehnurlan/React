const Increment = ({ number, up }) => {
  return <button onClick={() => up(number + 1)}>Artır</button>;
};
export default Increment;
