/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, COUNT(*) as days, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nGROUP BY part_id, goal\nORDER BY t.date\n"
  }

  // remove
  collection.schema.removeField("lzn69kxn")

  // remove
  collection.schema.removeField("mbeuggvs")

  // remove
  collection.schema.removeField("spcnznkz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3jvojftc",
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
    "id": "xy9qcxcy",
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
    "id": "htzbba5s",
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
    "id": "jzxabcur",
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
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(PARTITION BY goal ORDER BY entries.date) part_id\n  FROM entries\n  WHERE checked = TRUE\n)\nSELECT id, MIN(t.date) as start_date, MAX(t.date) as end_date, goal\nFROM t\nGROUP BY part_id, goal\nORDER BY t.date\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzn69kxn",
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
    "id": "mbeuggvs",
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
    "id": "spcnznkz",
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
  collection.schema.removeField("3jvojftc")

  // remove
  collection.schema.removeField("xy9qcxcy")

  // remove
  collection.schema.removeField("htzbba5s")

  // remove
  collection.schema.removeField("jzxabcur")

  return dao.saveCollection(collection)
})
