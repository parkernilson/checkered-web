/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "WITH t AS (\nSELECT \n  id, goal, entries.date,\n  (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY \n    entries.date)) AS date_diff\n  FROM entries\n  GROUP BY goal\n)\nSELECT id, goal, t.date, date_diff FROM t"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "WITH t AS (\nSELECT \n  id, goal, entries.date,\n  (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY \n    entries.date)) AS date_diff\n  FROM entries\n  GROUP BY goal\n)\nSELECT id FROM t"
  }

  // remove
  collection.schema.removeField("i0mil67j")

  // remove
  collection.schema.removeField("fj1g6csq")

  // remove
  collection.schema.removeField("xtifzviq")

  return dao.saveCollection(collection)
})
