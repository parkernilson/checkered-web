/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.owner.id = @request.auth.id"

  // remove
  collection.schema.removeField("cteycix6")

  // remove
  collection.schema.removeField("cqwcqnua")

  // remove
  collection.schema.removeField("2uirw3wa")

  // remove
  collection.schema.removeField("k1uykezs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nadoo3k8",
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
    "id": "wqgr8xkk",
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
    "id": "nleczbqb",
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
    "id": "1czydwdy",
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

  collection.listRule = "@request.auth.id != \"\" && goal = @collection.goals.id"
  collection.viewRule = "@request.auth.id != \"\" && goal = @collection.goals.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cteycix6",
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
    "id": "cqwcqnua",
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
    "id": "2uirw3wa",
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
    "id": "k1uykezs",
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
  collection.schema.removeField("nadoo3k8")

  // remove
  collection.schema.removeField("wqgr8xkk")

  // remove
  collection.schema.removeField("nleczbqb")

  // remove
  collection.schema.removeField("1czydwdy")

  return dao.saveCollection(collection)
})
