/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT t.id, COUNT(*) as days, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nWHERE end_date >= date('now', '-1 day')\nGROUP BY part_id, goal\nORDER BY end_date DESC\n"
  }

  // remove
  collection.schema.removeField("l95o0vtl")

  // remove
  collection.schema.removeField("wlyeksbo")

  // remove
  collection.schema.removeField("xgbqajrj")

  // remove
  collection.schema.removeField("1ecoxjos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pr7dbx4c",
    "name": "days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbexg6l5",
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
    "id": "hdqd4ot5",
    "name": "end_date",
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
    "id": "e5bul4h4",
    "name": "goal",
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
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT t.id, COUNT(*) as days, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nWHERE end_date > date('now', '-1 day')\nGROUP BY part_id, goal\nORDER BY end_date DESC\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l95o0vtl",
    "name": "days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlyeksbo",
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
    "id": "xgbqajrj",
    "name": "end_date",
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
    "id": "1ecoxjos",
    "name": "goal",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("pr7dbx4c")

  // remove
  collection.schema.removeField("wbexg6l5")

  // remove
  collection.schema.removeField("hdqd4ot5")

  // remove
  collection.schema.removeField("e5bul4h4")

  return dao.saveCollection(collection)
})
