export const useGetCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 because getMonth() returns 0-11
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
