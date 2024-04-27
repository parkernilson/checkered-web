/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"

  // remove
  collection.schema.removeField("byuoif9x")

  // remove
  collection.schema.removeField("ymry3e2x")

  // remove
  collection.schema.removeField("zsv0cboi")

  // remove
  collection.schema.removeField("4ouzuizk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9q5cpwit",
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
    "id": "eatqgm37",
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
    "id": "7plc38tl",
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
    "id": "suse0jho",
    "name": "goal",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vj0h29poq2k6tbj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.listRule = "@request.auth.id != \"\" && @collection.goals.id = goal && @collection.goals.owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @collection.goals.id = goal && @collection.goals.owner.id = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "byuoif9x",
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
    "id": "ymry3e2x",
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
    "id": "zsv0cboi",
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
    "id": "4ouzuizk",
    "name": "goal",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vj0h29poq2k6tbj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("9q5cpwit")

  // remove
  collection.schema.removeField("eatqgm37")

  // remove
  collection.schema.removeField("7plc38tl")

  // remove
  collection.schema.removeField("suse0jho")

  return dao.saveCollection(collection)
})
