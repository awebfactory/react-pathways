var db = connect("localhost:27017/rpdb");
var users = null;

var users = [{
    "gender": "male",
    "dob": 1078494582,
    "name": {
        "title": "mr",
        "first": "umut",
        "last": "tunaboylu"
    },
    "language": "es",
    "location": {
        "street": "5532 downy street",
        "city": "sage",
        "state": "california",
        "postcode": 69324,
        "country": "us",
        "timezone": "America\/Araguaina",
    },
    "phone": "(179)-102-8133",
    "cell": "(107)-226-0688",
    "login": {
        "username": "goldwolf434",
        "password": "$S$DujzPYMSCRPzW4aKFaUell0as942AQv8Hl.ggEOdZCgmQc\/\/eQ8Q",
    },
    "email": "umut@example.com",
    "created": "1456939637",
    "lastAccess": "1460474050",
    "lastLogin": "1460474050",
    "status": "9",
    "avatar": null,
    "roles": {
        "2": "authenticated user",
        "4": "editor",
    }
}, {
    "gender": "female",
    "dob": 1078494582,
    "name": {
        "title": "ms",
        "first": "brielle",
        "last": "ma"
    },
    "language": "es",
    "location": {
        "street": "5592 pockrus page rd",
        "city": "santa ana",
        "state": "oregon",
        "postcode": 69974,
        "country": "us",
        "timezone": "America\/Araguaina",
    },
    "phone": "(179)-102-8139",
    "cell": "(107)-396-0688",
    "login": {
        "username": "silverwolf434",
        "password": "$S$DujzPYMSCRPzW4aKFaUell0yd942AQv8HlgggEOdZCgmQc\/\/eQ8Q",
    },
    "email": "brielle@example.com",
    "created": "1456939637",
    "lastAccess": "1460474050",
    "lastLogin": "1460472050",
    "status": "9",
    "avatar": null,
    "roles": {
        "2": "authenticated user",
        "4": "editor",
    }
}, {
    "gender": "male",
    "dob": 1078494582,
    "name": {
        "title": "mr",
        "first": "harry",
        "last": "ross"
    },
    "language": "es",
    "location": {
        "street": "5592 pockrus page rd",
        "city": "santa ana",
        "state": "oregon",
        "postcode": 69974,
        "country": "us",
        "timezone": "America\/Araguaina",
    },
    "phone": "(179)-102-8139",
    "cell": "(107)-396-0688",
    "login": {
        "username": "harryz",
        "password": "$S$DujzPYMSCRPz12aKFaUell0yd942AQv8Hl.ggEOdZCgmQc\/\/eQ8Q",
    },
    "email": "juan@hotmail.com",
    "created": "1456939637",
    "lastAccess": "1460474050",
    "lastLogin": "1460474050",
    "status": "9",
    "avatar": null,
    "roles": {
        "2": "authenticated user",
        "4": "editor",
    }
}];

db.users.insert(users[0]);
db.users.insert(users[1]);
db.users.insert(users[2]);
