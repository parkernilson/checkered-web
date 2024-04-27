/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.owner.id ?= @request.auth.id && @collection.goals.id ?= goal"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.owner.id ?= @request.auth.id && @collection.goals.id ?= goal"

  // remove
  collection.schema.removeField("77pkqp0y")

  // remove
  collection.schema.removeField("perd53ve")

  // remove
  collection.schema.removeField("2vmcgntt")

  // remove
  collection.schema.removeField("7xatrbs4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f0rjxes3",
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
    "id": "icglbkmq",
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
    "id": "fxcndj9g",
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
    "id": "wfpzjgzz",
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

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.owner.id = @request.auth.id && @collection.goals.id = goal"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.owner.id = @request.auth.id && @collection.goals.id = goal"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "77pkqp0y",
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
    "id": "perd53ve",
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
    "id": "2vmcgntt",
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
    "id": "7xatrbs4",
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
  collection.schema.removeField("f0rjxes3")

  // remove
  collection.schema.removeField("icglbkmq")

  // remove
  collection.schema.removeField("fxcndj9g")

  // remove
  collection.schema.removeField("wfpzjgzz")

  return dao.saveCollection(collection)
})
