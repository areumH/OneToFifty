const getCurrentTime = () => {
  const now: number = new Date().getTime();
  return now / 1000;
};

const getElapsedTime = (array: number[]) => {
  const time: number = parseFloat((array[1] - array[0]).toFixed(3));
  return time;
};

export { getCurrentTime, getElapsedTime };
