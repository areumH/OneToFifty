const getCurrentTime = () => {
  const now = new Date().getTime();
  return now / 1000;
};

const getElapsedTime = (array: number[]) => {
  const time = (array[1] - array[0]).toFixed(3);
  return time;
};

export { getCurrentTime, getElapsedTime };
