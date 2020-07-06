export const getIndex = (arr = [], item = {}, key = 'id') => {
  return arr.findIndex(current => {
    return current[key] === item[key];
  });
};

export const findItem = (arr = [], item = {}, key = 'id') => {
  return arr.find(current => {
    return current[key] === item[key];
  });
};

export const replaceItem = (arr = [], item = {}, key = 'id') => {
  const index = getIndex(arr, item, key);
  return index > -1 ? [...arr.slice(0, index), item, ...arr.slice(index + 1)] : [...arr, item];
};

export const removeItem = (arr = [], item = {}, key = 'id') => {
  const index = getIndex(arr, item, key);
  return index > -1 ? [...arr.slice(0, index), ...arr.slice(index + 1)] : arr;
};

export const updateItem = (arr = [], item = {}, key = 'id') => {
  const index = getIndex(arr, item, key);
  return index > -1 ? [...arr.slice(0, index), { ...arr[index], ...item }, ...arr.slice(index + 1)] : [...arr, item];
};

export const updateItemIfExists = (arr = [], item = {}, key = 'id') => {
  const index = getIndex(arr, item, key);
  return index > -1 ? [...arr.slice(0, index), { ...arr[index], ...item }, ...arr.slice(index + 1)] : arr;
};

export default {};