let db;

const request = window.indexedDB.open("budget");

request.onupgradeneeded = event => {
  db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = event => {
  db = event.target.result;
  if (navigator.onLine) checkDatabase();
};

request.onerror = event => console.error(event.target.error);

function saveRecord(record) {
  const transaction = db.transaction("pending", "readwrite");
  const pending = transaction.objectStore("pending");
  pending.add(record);
}

function checkDatabase() {
  const transaction = db.transaction("pending", "readwrite");
  const pending = transaction.objectStore("pending");
  const records = pending.getAll("pending");
  records.onsuccess = () => {
    if (records.result.length) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => pendingStore.clear());
    }
  };
}

window.addEventListener("online", checkDatabase);
