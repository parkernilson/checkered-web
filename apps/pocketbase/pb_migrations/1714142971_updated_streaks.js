/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "SELECT \n  created, id\nFROM entries"
  }

  // remove
  collection.schema.removeField("skaebroo")

  return dao.saveCollection(collection)
})
