/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7d0v7ij7p2dey7o");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7d0v7ij7p2dey7o",
    "created": "2024-04-13 04:27:13.729Z",
    "updated": "2024-04-13 15:05:52.553Z",
    "name": "share_accepts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "12kopcdj",
        "name": "receiver",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "y7evo38i",
        "name": "share_record",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "x6kih4z4zv8oma1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
})
