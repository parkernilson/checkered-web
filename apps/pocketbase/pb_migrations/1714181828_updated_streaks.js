/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, COUNT(*) as days, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nGROUP BY part_id, goal\nORDER BY end_date DESC\n"
  }

  // remove
  collection.schema.removeField("xi7hefgc")

  // remove
  collection.schema.removeField("8ligxjy5")

  // remove
  collection.schema.removeField("92ulzq0f")

  // remove
  collection.schema.removeField("t6q7jplb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tulkwp0k",
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
    "id": "uex4qahe",
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
    "id": "wkxuyxcb",
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
    "id": "n3ltio1e",
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
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, COUNT(*) as days, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nGROUP BY part_id, goal\nORDER BY t.date DESC\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xi7hefgc",
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
    "id": "8ligxjy5",
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
    "id": "92ulzq0f",
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
    "id": "t6q7jplb",
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
  collection.schema.removeField("tulkwp0k")

  // remove
  collection.schema.removeField("uex4qahe")

  // remove
  collection.schema.removeField("wkxuyxcb")

  // remove
  collection.schema.removeField("n3ltio1e")

  return dao.saveCollection(collection)
})
