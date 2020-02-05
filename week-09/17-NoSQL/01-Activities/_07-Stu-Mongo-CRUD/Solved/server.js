const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
<<<<<<< HEAD
=======
const path = require("path");
>>>>>>> upstream/master

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send(index.html);
});

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
app.post("/submit", (req, res) => {
  db.notes.insert(req.body, (err, data) => {
    res.json(data);
  });
});

// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", (req, res) => {
  db.notes.find({}, (err, data) => {
    res.json(data);
  });
});

// 3. Retrieve one note in the database's collection by it's ObjectId
// GET: /find/:id
// ==================================================================
app.get("/find/:id", (req, res) => {
  db.notes.findOne({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {
    res.json(data);
  });
});

// 4. Update one note in the database's collection by it's ObjectId
// POST: /update/:id
// ================================================================
app.post("/update/:id", (req, res) => {
  db.notes.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: req.body }, (err, data) => {
    res.json(data);
  });
});

// 5. Delete one note from the database's collection by it's ObjectId
// DELETE: /delete/:id
// ==================================================================
app.delete("/delete/:id", (req, res) => {
  db.notes.remove({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {
    res.json(data);
  });
});

// 6. Clear the entire note collection
// DELETE: /clearall
// ===================================
app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (err, data) => {
    res.json(data);
  });
});

// Listen on port 3000
=======
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  db.notes.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.get("/all", (req, res) => {
  db.notes.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/find/:id", (req, res) => {
  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post("/update/:id", (req, res) => {
  db.notes.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.notes.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

>>>>>>> upstream/master
app.listen(3000, () => {
  console.log("App running on port 3000!");
});