let id = 1;

const createFakeId = () => {
  const newId = String(id);

  id++;

  return newId;
};

export default createFakeId;
