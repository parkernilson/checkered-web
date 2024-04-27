/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "SELECT \n  id, date,\n  (date - LAG(date) OVER (ORDER BY date)) AS date_diff\nFROM entries"
  }

  // remove
  collection.schema.removeField("skaebroo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zmswvzs",
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
    "id": "in0gsjck",
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
    "query": "SELECT \n  id, created,\n  (LAG(created) OVER (ORDER BY created)) as prev_date\nFROM entries"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skaebroo",
    "name": "prev_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("9zmswvzs")

  // remove
  collection.schema.removeField("in0gsjck")

  return dao.saveCollection(collection)
})
