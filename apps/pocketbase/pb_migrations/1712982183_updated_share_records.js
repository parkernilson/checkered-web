/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != ''"
  collection.viewRule = "@request.auth.id != ''"
  collection.updateRule = "@request.auth.id != ''"
  collection.deleteRule = "@request.auth.id != ''"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9pvptrni",
    "name": "viewer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != '' && @collection.goals.owner.id = @request.auth.id && @collection.goals.share_record.id = id"
  collection.viewRule = "@request.auth.id != '' && @collection.goals.owner.id = @request.auth.id && @collection.goals.share_record.id = id"
  collection.updateRule = "@request.auth.id != '' && @collection.goals.owner.id = @request.auth.id && @collection.goals.share_record.id = id"
  collection.deleteRule = "@request.auth.id != '' && @collection.goals.owner.id = @request.auth.id && @collection.goals.share_record.id = id"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9pvptrni",
    "name": "viewers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
