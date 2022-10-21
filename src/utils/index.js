function objLength(obj) {
  const length = Object.keys(obj);
  // console.log(length);
  if (length.length === 0) return false;
  return true;
}

export { objLength };
