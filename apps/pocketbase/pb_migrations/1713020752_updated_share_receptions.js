/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7d0v7ij7p2dey7o")

  collection.name = "share_accepts"

  // remove
  collection.schema.removeField("kuxohcjz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y7evo38i",
    "name": "share_record",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "x6kih4z4zv8oma1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7d0v7ij7p2dey7o")

  collection.name = "share_receptions"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuxohcjz",
    "name": "goal",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vj0h29poq2k6tbj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("y7evo38i")

  return dao.saveCollection(collection)
})
