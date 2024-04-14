/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zd1j59fli7ga69y",
    "created": "2024-04-13 15:19:37.547Z",
    "updated": "2024-04-13 15:19:37.547Z",
    "name": "shared_goals",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7shdndsa",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "y2fvwvbw",
        "name": "share_accepted",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT G.id, G.title, S.accepted as share_accepted\nFROM goals as G\nJOIN share_records as S\nON G.id = S.goal"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zd1j59fli7ga69y");

  return dao.deleteCollection(collection);
})
