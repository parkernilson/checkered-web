/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "boxov1a985iy2c5",
    "created": "2024-04-26 14:48:13.572Z",
    "updated": "2024-04-26 20:16:19.991Z",
    "name": "streaks",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i0mil67j",
        "name": "goal",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "fj1g6csq",
        "name": "date",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "xtifzviq",
        "name": "date_diff",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH t AS (\nSELECT \n  id, goal, entries.date,\n  (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY \n    entries.date)) AS date_diff\n  FROM entries\n  GROUP BY goal\n)\nSELECT id, goal, t.date, date_diff FROM t"
    }
  });

  return Dao(db).saveCollection(collection);
})
