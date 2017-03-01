let commandLines = [];

const load = () => {
  const rawCommandLines = window.localStorage.getItem('potier.commandLines');

  if (rawCommandLines) {
    commandLines = JSON.parse(rawCommandLines);
  }
};

const persist = () => {
  window.localStorage.setItem('potier.commandLines', JSON.stringify(commandLines));
};

const addBook = book => {
  const currentItem = commandLines.find(b => b.isbn === book.isbn);

  if (!currentItem) {
    commandLines.push(Object.assign(book, {quantity: 1}));
  } else {
    currentItem.quantity++;
  }

  persist();
};

const removeBook = item => {
  const index = commandLines.findIndex(b => b.isbn === item.isbn);
  commandLines.splice(index, 1);

  persist();
};

const getItems = () => commandLines;

const getTotal = () =>
  commandLines
    .map(item => item.price * item.quantity)
    .reduce((ac, v) => ac + v, 0);

/*
 * Init
 */
load();

export default {
  addBook,
  removeBook,
  getItems,
  getTotal,
  persist
};
