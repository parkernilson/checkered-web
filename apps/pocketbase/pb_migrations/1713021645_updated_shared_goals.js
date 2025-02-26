/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd1j59fli7ga69y")

  collection.options = {
    "query": "SELECT G.id, G.title, G.owner, S.viewer, S.accepted as share_accepted\nFROM goals as G\nJOIN share_records as S\nON G.id = S.goal"
  }

  // remove
  collection.schema.removeField("kgfwpknd")

  // remove
  collection.schema.removeField("1nwmrerb")

  // remove
  collection.schema.removeField("mxr1ide6")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd1j59fli7ga69y")

  collection.options = {
    "query": "SELECT G.id, G.title, G.owner, S.accepted as share_accepted\nFROM goals as G\nJOIN share_records as S\nON G.id = S.goal"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kgfwpknd",
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
    "id": "1nwmrerb",
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
    "id": "mxr1ide6",
    "name": "share_accepted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("y6eahq7y")

  // remove
  collection.schema.removeField("pbwa08m1")

  // remove
  collection.schema.removeField("pdknki6k")

  // remove
  collection.schema.removeField("54bf6i5i")

  return dao.saveCollection(collection)
})
