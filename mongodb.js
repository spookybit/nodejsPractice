var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // db.createCollection("customers", function(err, res) {
  //   if (err) throw err;
  //   db.close()
  // })

  // var myObj = {name:"company inc", address: "highway 12"};
  // db.collection("customers").insertOne(myObj, function(err, res) {
  //   if (err) throw err;
  //   console.log("inserted");
  //   db.close();
  // })

  // var myobj = [
  //   { _id: 154, name: 'Chocolate Heaven'},
  //   { _id: 155, name: 'Tasty Lemon'},
  //   { _id: 156, name: 'Vanilla Dream'}
  // ];
  //
  // db.collection("products").insertMany(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // });

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
});
