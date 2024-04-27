/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lwroqxd8s2vfd8z",
    "created": "2024-04-26 20:21:14.260Z",
    "updated": "2024-04-26 20:21:14.260Z",
    "name": "streaks",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qludflru",
        "name": "start_date",
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
        "id": "nsucwy27",
        "name": "end_date",
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
        "id": "wzowcwmk",
        "name": "consecutive_entries",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (entries.date - LAG(entries.date) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff > 1 OR date_diff IS NULL\nGROUP BY\n    date_diff\nORDER BY\n    start_date;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z");

  return dao.deleteCollection(collection);
})
