const getFormattedDifference = (difference: number) => {
  const diff = difference.toFixed(3);
  return difference > 0 ? `+ ${diff}%` : `- ${-diff}%`;
};

export default getFormattedDifference;