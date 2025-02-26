/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "WITH t AS (\nSELECT \n  id, entries.date,\n  (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\nFROM entries\n)\nSELECT id, date_diff FROM t"
  }

  // remove
  collection.schema.removeField("9gfqkw7m")

  // remove
  collection.schema.removeField("f4vpopbm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "26rkfp8o",
    "name": "date_diff",
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
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "SELECT \n  id, entries.date,\n  (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\nFROM entries"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gfqkw7m",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f4vpopbm",
    "name": "date_diff",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("26rkfp8o")

  return dao.saveCollection(collection)
})
