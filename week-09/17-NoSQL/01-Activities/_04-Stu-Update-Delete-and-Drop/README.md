# Update, Delete and Drop in MongoDB

* Go back to your classroom database. You've decided to take on a new hobby, extreme basket weaving. While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They're now using a new operating system now. Another student in your row saw you break that computer and wisely decided to move. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn’t leave with candy. All this work made you hungry, so you bought yourself some candy. 
  
## Instructions

* **Your Task:**

* Add Extreme Basket Weaving to your array of hobbies.
  * `db.students.update({name:"Ari"},{$push:{hobbies: "basket weaving"}})`

* Change the operating system of the student next to you.
  * `db.students.update({_id:ObjectId("5e31d4f2652cf0e09bc3170b")},{$set:{os:"Win"}})`

* Remove the student to the other side of you from your database.
  * `db.students.remove({name:"Joe"})`

* Add a field of `gavecandy` with a value of `false` to everyone in the array.
  * `db.students.update({},{$set:{candy:false}},{multi:true})`

* Change the value of `gavecandy` to true for yourself.
  * `db.students.update({name:"Ari"},{$set:{candy:true}})`

## Bonus

## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

* Insert five more documents with one command. Use [https://docs.mongodb.com/manual/tutorial/query-documents/](https://docs.mongodb.com/manual/tutorial/query-documents/) to see how you can accomplish this.

```sql
db.students.insertMany([
    { name:"Mike", rowNumber: 4, os:"Win", hobbies:["coding","carpentry"], candy:false },
    { name:"Jackie", rowNumber: 1 , os:"Win", hobbies:["basketball","dancing"],candy:false },
    { name:"Nick", rowNumber: 3, os:"Win", hobbies:["basketball","football"],candy:false },
    { name:"Sarah", rowNumber: 1, os:"Win", hobbies:["reading","sewing"],candy:false },
    { name:"Ben", rowNumber: 4, os:"Mac", hobbies:["eating","climbing"],candy:false },
])
 ```