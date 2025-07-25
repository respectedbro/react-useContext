const ExpensiveCalculation = ({ numbers }) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return (
    <div>
      <h2>Sorted Numbers</h2>
      <ul>
        {sortedNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveCalculation;
