/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(ORDER BY entries.date) part_id\n  FROM entries\n)\nSELECT id, MIN(t.date) as start_date, MAX(t.date) as end_date\nFROM t\nGROUP BY part_id\n"
  }

  // remove
  collection.schema.removeField("xd3dwx37")

  // remove
  collection.schema.removeField("mbokp3lp")

  // remove
  collection.schema.removeField("giqnivte")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrvlclqc",
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
    "id": "ds5lexnl",
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
    "query": "WITH t AS (\n  SELECT *, JULIANDAY(entries.date) - ROW_NUMBER() OVER(ORDER BY entries.date) part_id\n  FROM entries\n)\nSELECT id, MIN(t.date) as start_date, MAX(t.date) as end_date, part_id\nFROM t\nGROUP BY part_id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xd3dwx37",
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
    "id": "mbokp3lp",
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
    "id": "giqnivte",
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
  collection.schema.removeField("hrvlclqc")

  // remove
  collection.schema.removeField("ds5lexnl")

  return dao.saveCollection(collection)
})
