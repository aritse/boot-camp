const waitFor = seconds => {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds) || seconds < 1) return reject(`invalid parameter: ${seconds}`);

    setTimeout(() => {
      resolve("success");
    }, seconds * 1000);
  });
};

waitFor(2)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

waitFor(-2)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
