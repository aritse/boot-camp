# Creating, Inserting and Finding in MongoDB

## Instructions

- Use the command line to create a classroom database.

  ```sql
  use classroom;
  db;
  ```

- Insert entries for yourself and the people in your row in a `students` collection.

  ```sql
  db.students.insertMany([
      {"name" : "A", "rowNumber" : 2, "os" : "Mac", "hobbies" : [ "X", "Y" ]},
      {"name" : "B", "rowNumber" : 1, "os" : "Win", "hobbies" : [ "W", "Y" ]},
      {"name" : "C", "rowNumber" : 2, "os" : "Mac", "hobbies" : [ "T", "W" ]},
      {"name" : "D", "rowNumber" : 1, "os" : "Mac", "hobbies" : [ "Z" ]},
      {"name" : "E", "rowNumber" : 1, "os" : "Mac", "hobbies" : [ "X", "Y" ]},
      {"name" : "F", "rowNumber" : 2, "os" : "Win", "hobbies" : [ "W", "Z" ]},
      {"name" : "G", "rowNumber" : 1, "os" : "Win", "hobbies" : [ "X", "Y", "Z" ]}
  ]);
  ```

- Each document should have:

  - A field of `name` with the person's name.
  - A field of `rownumber` which will contain the row number that they are in.
  - A field of `os` which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc
  - A field of `hobbies` with an array of the hobbies the person likes to do.

- Use find commands to get:

  - A list of everyone in your row.

  ```sql
  db.students.find({rowNumber:1});
  ```

  - An entry for a single person.

  ```sql
  db.students.find({name:"C"}).pretty();
  ```

  The entries for all the Mac users in your row.

  ```sql
  db.students.find({rowNumber:2, os:"Mac"});
  ```

## 💡 Hint(s)

- Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

- If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.

  ```sql
  db.students.find({hobbies:"X"});
  db.students.find({hobbies: {$in: ["X"]}})
  ```
