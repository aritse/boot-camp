<<<<<<< HEAD
// Your assignment is to define the routes below. Good luck!

=======
>>>>>>> upstream/master
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

<<<<<<< HEAD
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "warmup";
const collections = ["books"];

const db = mongojs(databaseUrl, collections);
=======
const databaseUrl = "warmup";
const collections = ["books"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

>>>>>>> upstream/master
db.on("error", error => {
  console.log("Database Error:", error);
});

<<<<<<< HEAD
// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

app.post("/submit", (req, res) => {
  req.body.read = false;
  db.books.insert(req.body, (err, data) => {
    res.json(data);
  });
});

// Find all books marked as read
app.get("/read", (req, res) => {
  db.books.find({ read: true }, (err, data) => {
    res.json(data);
  });
});

// Find all books marked as unread
app.get("/unread", (req, res) => {
  db.books.find({ read: false }, (err, data) => {
    res.json(data);
  });
});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: true } }, (err, data) => {
    res.json(data);
  });
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: false } }, (err, data) => {
    res.json(data);
  });
});

// Listen on port 3000
=======
app.post("/submit", ({ body }, res) => {
  const book = body;

  book.read = false;

  db.books.save(book, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get("/read", (req, res) => {
  db.books.find({ read: true }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get("/unread", (req, res) => {
  db.books.find({ read: false }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.put("/markread/:id", ({ params }, res) => {
  db.books.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        read: true
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

app.put("/markunread/:id", ({ params }, res) => {
  db.books.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        read: false
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

>>>>>>> upstream/master
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
