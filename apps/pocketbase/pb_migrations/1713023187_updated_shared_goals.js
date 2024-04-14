/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd1j59fli7ga69y")

  collection.listRule = "@request.auth.id != \"\" && (\n  @request.auth.id = viewer.id || @request.auth.id = owner.id\n)"
  collection.viewRule = "@request.auth.id != \"\" && (\n  @request.auth.id = viewer.id || @request.auth.id = owner.id\n)"

  // remove
  collection.schema.removeField("y6eahq7y")

  // remove
  collection.schema.removeField("pbwa08m1")

  // remove
  collection.schema.removeField("pdknki6k")

  // remove
  collection.schema.removeField("54bf6i5i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oh3ervxr",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "87eokck6",
    "name": "owner",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6sscl0u",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjqswzyl",
    "name": "share_accepted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd1j59fli7ga69y")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y6eahq7y",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbwa08m1",
    "name": "owner",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdknki6k",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "54bf6i5i",
    "name": "share_accepted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("oh3ervxr")

  // remove
  collection.schema.removeField("87eokck6")

  // remove
  collection.schema.removeField("w6sscl0u")

  // remove
  collection.schema.removeField("vjqswzyl")

  return dao.saveCollection(collection)
})
