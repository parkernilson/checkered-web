/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && ((\n  @collection.goals.owner.id ?= @request.auth.id && \n  @collection.goals.id ?= goal\n) || (\n  @request.auth.id ?= @collection.share_records.viewer.id &&\n  @collection.share_records.goal.id ?= @collection.goals.id\n))"
  collection.viewRule = "@request.auth.id != \"\" && ((\n  @collection.goals.owner.id ?= @request.auth.id && \n  @collection.goals.id ?= goal\n) || (\n  @request.auth.id ?= @collection.share_records.viewer.id &&\n  @collection.share_records.goal.id ?= @collection.goals.id\n))"

  // remove
  collection.schema.removeField("f0rjxes3")

  // remove
  collection.schema.removeField("icglbkmq")

  // remove
  collection.schema.removeField("fxcndj9g")

  // remove
  collection.schema.removeField("wfpzjgzz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inzed6g3",
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
    "id": "jo4lpkis",
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
    "id": "zukpyb5t",
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
    "id": "ep5zbhbu",
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

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.owner.id ?= @request.auth.id && @collection.goals.id ?= goal"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.owner.id ?= @request.auth.id && @collection.goals.id ?= goal"

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

  // remove
  collection.schema.removeField("inzed6g3")

  // remove
  collection.schema.removeField("jo4lpkis")

  // remove
  collection.schema.removeField("zukpyb5t")

  // remove
  collection.schema.removeField("ep5zbhbu")

  return dao.saveCollection(collection)
})
