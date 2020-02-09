# Update, Delete and Drop in MongoDB

- Go back to your classroom database. You've decided to take on a new hobby, extreme basket weaving. While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They're now using a new operating system now. Another student in your row saw you break that computer and wisely decided to move. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn’t leave with candy. All this work made you hungry, so you bought yourself some candy.

## Instructions

- **Your Task:**

- Add Extreme "U" to your array of hobbies.

  ```sql
  db.students.update({name:'A'},{$push:{hobbies:'U'}});
  ```

- Change the operating system of the student next to you.

  ```sql
  db.students.update({_id: ObjectId("5e405cd2ff6ce9fea588fffb")}, {$set: {os: 'Mac'}});
  ```

- Remove the student to the other side of you from your database.

  ```sql
  db.students.remove({name: 'G'});
  ```

- Add a field of `gavecandy` with a value of `false` to everyone in the array.

  ```sql
  db.students.update({}, {$set: {candy: false}}, {multi: true});
  ```

- Change the value of `gavecandy` to true for yourself.

  ```sql
  db.students.update({name: 'A'}, {$set: {candy: true}});
  ```

## Bonus

## 💡 Hint(s)

- Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

- Insert five more documents with one command. Use [https://docs.mongodb.com/manual/tutorial/query-documents/](https://docs.mongodb.com/manual/tutorial/query-documents/) to see how you can accomplish this.

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

- Return all documents of students who have "X" as a hobby or a Win operating system.

  ```sql
  db.students.find({
      $or: [
          {os: "Win"},
          {hobbies: "X"}
      ]
  });
  ```
