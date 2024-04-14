/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqqys2eg",
    "name": "accepted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  // remove
  collection.schema.removeField("uqqys2eg")

  return dao.saveCollection(collection)
})
