# Creating, Inserting and Finding in MongoDB

## Instructions

- Use the command line to create a classroom database.

  ```sql
  use classroom;
  ```

- Insert entries for yourself and the people in your row in a `students` collection.

  ```sql
  db.students.insert({"name" : "Isabel", "rowNumber" : 3, "os" : "Mac", "hobbies" : [ "shopping", "basket weaving" ], "gaveCandy" : false });
  db.students.insert({"name" : "Alexa", "rowNumber" : 1, "os" : "Mac", "hobbies" : [ "partying", "driving" ], "gaveCandy" : false });
  db.students.insert({"name" : "Ari", "rowNumber" : 1, "os" : "Win", "hobbies" : [ "Ping pong", "coding"], "gaveCandy" : true });
  db.students.insert({"name" : "Joe", "rowNumber" : 2, "os" : "Mac", "hobbies" : [ "jokes", "coding" ], "gaveCandy":true });
  ```

- Each document should have:

  - A field of `name` with the person's name.
  - A field of `rownumber` which will contain the row number that they are in.
  - A field of `os` which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc
  - A field of `hobbies` with an array of the hobbies the person likes to do.

- Use find commands to get:

  - A list of everyone in your row.

  ```sql
  db.students.find({rowNumber:1}).pretty();
  ```

  - An entry for a single person.

  ```sql
  db.students.find({name:"Joe"}).pretty();
  ```

  The entries for all the Mac users in your row.

  ```sql
  db.students.find({os:"Mac"}).pretty();
  ```

## 💡 Hint(s)

- Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

- If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.

  ```sql
  db.students.find({hobbies:"jokes"}).pretty();
  db.students.find({hobbies: {$in: ["coding"]}})
  ```
