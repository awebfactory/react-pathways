var db = connect("localhost:27017/rpdb");
var cursor = db.users.find();
var total = 0;
while(cursor.hasNext()) {
  printjson(cursor.next());
  total++;
}
print('total users: ' + total);