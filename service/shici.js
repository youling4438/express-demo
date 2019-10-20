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
        console.log("result.insertedCount: ", result.insertedCount);
        cb(result);
    });
};

const insertDocumentForShici = (shici, cb) => {
    client.connect(err => {
        if (err) {
            console.log("err", err);
            return;
        }
        const db = client.db(dbName);
        insertDocument(db, shici, () => {
            cb();
            client.close();
        });
    });
};

const findDocumentsWithFilter = (filter, cb) => {
    client.connect(err => {
        if (err) {
            console.log("err", err);
            return;
        }
        const db = client.db(dbName);
        const collection = db.collection("jrsc");
        collection.find(filter).toArray((err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result.length: ", result.length);
            cb(result);
        });
    });
};

const deleteDocumentsWithFilter = (delItem, cb) => {
    client.connect(err => {
        if (err) {
            console.log("err", err);
            return;
        }
        const db = client.db(dbName);
        const collection = db.collection("jrsc");
        collection.deleteOne(delItem, (err, result) => {
            if (err) {
                console.log("err", err);
            }
            console.log("result: ", result);
            cb(result);
        });
    });
};

module.exports = {
    insertDocument: insertDocumentForShici,
    findDocuments: findDocumentsWithFilter,
    deleteDocuments: deleteDocumentsWithFilter
};
