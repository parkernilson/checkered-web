/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != '' && (@collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id) || (viewer.id = @request.auth.id)"
  collection.viewRule = "@request.auth.id != '' && (@collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id) || (viewer.id = @request.auth.id)"
  collection.createRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.updateRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.deleteRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ioz71jsa",
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
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != ''"
  collection.viewRule = "@request.auth.id != ''"
  collection.createRule = ""
  collection.updateRule = "@request.auth.id != ''"
  collection.deleteRule = "@request.auth.id != ''"

  // remove
  collection.schema.removeField("ioz71jsa")

  return dao.saveCollection(collection)
})
