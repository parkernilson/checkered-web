/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0ha165cbigv0ei")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbfp6vwg",
    "name": "checked",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycujh7pg",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0ha165cbigv0ei")

  // remove
  collection.schema.removeField("dbfp6vwg")

  // remove
  collection.schema.removeField("ycujh7pg")

  return dao.saveCollection(collection)
})
