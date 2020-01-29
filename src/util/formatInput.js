const formatInput = number => {
  const formatted = parseFloat(number.replace(/,/g, '')).toFixed(2);
  return formatted;
};

export default formatInput;
