export const addItem = itemName => {
  const newItem = {
    task: itemName,
    id: Date.now(),
    completed: false
  };
};
