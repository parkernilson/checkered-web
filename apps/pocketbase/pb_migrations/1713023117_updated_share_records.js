/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != \"\" && (\n  @request.auth.id = viewer.id ||\n  (\n      @collection.goals.id = goal.id && \n      @request.auth.id = @collection.goals.owner.id\n  )\n)"
  collection.viewRule = "@request.auth.id != \"\" && (\n  @request.auth.id = viewer.id ||\n  (\n      @collection.goals.id = goal.id && \n      @request.auth.id = @collection.goals.owner.id\n  )\n)"
  collection.createRule = "@request.auth.id != \"\" && @collection.goals.id = goal.id && @request.auth.id = @collection.goals.owner.id"
  collection.updateRule = "@request.auth.id != \"\" &&\n  (\n    @request.data.accepted:isset = true && \n    @request.auth.id = viewer.id && \n    @request.data.goal:isset = false && \n    @request.data.viewer:isset = false &&\n    @request.data.id:isset = false &&\n    @request.data.created:isset = false &&\n    @request.data.updated:isset = false\n  )"
  collection.deleteRule = "@request.auth.id != \"\" && (\n  @request.auth.id = viewer.id ||\n  (\n      @collection.goals.id = goal.id && \n      @request.auth.id = @collection.goals.owner.id\n  )\n)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6kih4z4zv8oma1")

  collection.listRule = "@request.auth.id != '' && (@collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id) || (viewer.id = @request.auth.id)"
  collection.viewRule = "@request.auth.id != '' && (@collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id) || (viewer.id = @request.auth.id)"
  collection.createRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.updateRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"
  collection.deleteRule = "@request.auth.id != '' && @collection.goals.id = goal.id && @collection.goals.owner.id = @request.auth.id"

  return dao.saveCollection(collection)
})
