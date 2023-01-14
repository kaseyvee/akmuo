export function getItemById(database, currentId) {
  return database.find(datum => datum.id === currentId);
}

export function getItemsByCategory(database, category) {
  return database.filter(datum => datum.categories.includes(category));
}