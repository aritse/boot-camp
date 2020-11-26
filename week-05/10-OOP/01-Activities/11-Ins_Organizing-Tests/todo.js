const Todo = (text) => {
  if (typeof text !== "string" || text.trim().length < 0) {
    throw new Error("Expected parameter 'text' to be a non empty string");
  }

  this.text = text;
};

module.exports = Todo;
