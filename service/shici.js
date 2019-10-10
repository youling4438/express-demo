const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "shici";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const insertDocument = (db, shici, cb) => {
    const collection = db.collection("jrsc");
    collection.insertOne(shici, (err, result) => {
        if (err) {
            console.log("err", err);
        }
        console.log("shici", shici);
        console.log("result", result);
        console.log("result.insertedCount: ", result.insertedCount);
        cb(result);
    });
};

// client.connect(err => {
//     if (err) {
//         console.log("err", err);
//         return;
//     }
//     const db = client.db(dbName);
//     insertDocument(db, () => {
//         client.close();
//     });
// });

const insertDocumentForShici = (shici, cb) => {
    client.connect(err => {
        if (err) {
            console.log("err", err);
            return;
        }
        const db = client.db(dbName);
        insertDocument(db, shici, () => {
            client.close();
            cb();
        });
    });
};

module.exports = {
    insertDocumentForShici
};
