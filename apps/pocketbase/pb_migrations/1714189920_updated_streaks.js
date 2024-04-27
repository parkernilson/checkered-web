/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.id = goal && @collection.goals.owner = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.id = goal && @collection.goals.owner = @request.auth.id"

  // remove
  collection.schema.removeField("ai50debe")

  // remove
  collection.schema.removeField("2upk5goo")

  // remove
  collection.schema.removeField("4nhkljd4")

  // remove
  collection.schema.removeField("l4ulwfcn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0znirctg",
    "name": "days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iesvgsrx",
    "name": "start_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rh2iem3c",
    "name": "end_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v704fn3y",
    "name": "goal",
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
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ai50debe",
    "name": "days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2upk5goo",
    "name": "start_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4nhkljd4",
    "name": "end_date",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l4ulwfcn",
    "name": "goal",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("0znirctg")

  // remove
  collection.schema.removeField("iesvgsrx")

  // remove
  collection.schema.removeField("rh2iem3c")

  // remove
  collection.schema.removeField("v704fn3y")

  return dao.saveCollection(collection)
})
