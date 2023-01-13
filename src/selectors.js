export default function getItemById(database, currentId) {
  return database.find(datum => datum.id === currentId);
}