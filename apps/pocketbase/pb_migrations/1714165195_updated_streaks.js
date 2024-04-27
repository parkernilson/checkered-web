/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, MIN(t.date) as start_date, MAX(t.date) as end_date\nFROM t\nGROUP BY part_id, goal\n"
  }

  // remove
  collection.schema.removeField("2nzq3rdr")

  // remove
  collection.schema.removeField("s1ijfumm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlkeqgeu",
    "name": "start_date",
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
    "id": "qm9cijjf",
    "name": "end_date",
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
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, MIN(t.date) as start_date, MAX(t.date) as end_date\nFROM t\nGROUP BY part_id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nzq3rdr",
    "name": "start_date",
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
    "id": "s1ijfumm",
    "name": "end_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("wlkeqgeu")

  // remove
  collection.schema.removeField("qm9cijjf")

  return dao.saveCollection(collection)
})
