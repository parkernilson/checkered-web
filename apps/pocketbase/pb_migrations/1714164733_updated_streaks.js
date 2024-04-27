/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(ORDER BY entries.date) part_id\n  FROM entries\n)\nSELECT id, t.date, part_id\nFROM t\nGROUP BY part_id\n"
  }

  // remove
  collection.schema.removeField("yuu9jg8d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tubzhos2",
    "name": "date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gm7jfckg",
    "name": "part_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(ORDER BY entries.date) part_id\n  FROM entries\n)\nSELECT id, part_id\nFROM t\nGROUP BY part_id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yuu9jg8d",
    "name": "part_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("tubzhos2")

  // remove
  collection.schema.removeField("gm7jfckg")

  return dao.saveCollection(collection)
})
