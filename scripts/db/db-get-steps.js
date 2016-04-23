var db = connect("localhost:27017/rpdb");
//var cursor = db.cats.find({name : "greta"});
var cursor = db.steps.find();
var total = 0;
while(cursor.hasNext()) {
  printjson(cursor.next());
  total++;
}
print('total steps: ' + total);