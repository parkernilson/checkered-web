/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = "@request.auth.id != \"\" && owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && owner.id = @request.auth.id"

  // remove
  collection.schema.removeField("1avrnoys")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = "@request.auth.id != \"\" && (owner.id = @request.auth.id || @request.auth.id ?= share_record.viewers)"
  collection.viewRule = "@request.auth.id != \"\" && (owner.id = @request.auth.id || @request.auth.id ?= share_record.viewers)"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1avrnoys",
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
})
