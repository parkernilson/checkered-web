/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("boxov1a985iy2c5")

  collection.options = {
    "query": "SELECT \n  id, entries.date,\n  (LAG(entries.date) OVER (ORDER BY entries.date)) AS date_diff\nFROM entries"
  }

  // remove
  collection.schema.removeField("tbvnlrul")

  // remove
  collection.schema.removeField("pktxxefu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iitryoag",
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
    "id": "v2alhy0s",
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
    "query": "SELECT \n  id, entries.date,\n  (entries.date - LAG(entries.date) OVER (ORDER BY entries.date)) AS date_diff\nFROM entries"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbvnlrul",
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
    "id": "pktxxefu",
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
  collection.schema.removeField("iitryoag")

  // remove
  collection.schema.removeField("v2alhy0s")

  return dao.saveCollection(collection)
})
