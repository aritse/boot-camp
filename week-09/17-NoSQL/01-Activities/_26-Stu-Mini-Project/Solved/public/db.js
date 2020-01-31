// check for indexedDB browser support

// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

let db;
request.onupgradeneeded = function(event) {
  db = event.target.result;

  // create object store called "pending" and set autoIncrement to true
  const objectStore = db.createObjectStore("pending", {
    autoIncrement: true
  });

  objectStore.createIndex("saveRecord", "saveRecord");
};

request.onsuccess = function(event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  // console.log();
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction("pending", "readwrite");

  // access your pending object store
  const pendingStore = transaction.objectStore("pending");
  // add record to your store with add method.
  pendingStore.add({ status: "budget" });
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction("pending", "readwrite");

  // access your pending object store
  const pendingStore = transaction.objectStore("pending");

  // get all records from store and set to a variable
  const records = pendingStore.getAll("pending");

  records.onsuccess = function() {
    if (records.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => {
          const transaction = db.transaction("pending", "readwrite");
          const pendingStore = transaction.objectStore("pending");
          pendingStore.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
