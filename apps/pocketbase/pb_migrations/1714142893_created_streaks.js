/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "boxov1a985iy2c5",
    "created": "2024-04-26 14:48:13.572Z",
    "updated": "2024-04-26 14:48:13.572Z",
    "name": "streaks",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  created, id\nFROM entries"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5");

  return dao.deleteCollection(collection);
})
