migrate((db) => {
  const collection = new Collection({
    "id": "z42q627p0fkvxd5",
    "created": "2023-06-19 03:51:51.251Z",
    "updated": "2023-06-19 03:51:51.251Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "apwn80ey",
        "name": "field",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z42q627p0fkvxd5");

  return dao.deleteCollection(collection);
})
