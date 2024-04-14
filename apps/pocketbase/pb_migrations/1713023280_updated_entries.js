/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0ha165cbigv0ei")

  collection.listRule = "@request.auth.id != \"\" && (\n  goal.owner.id = @request.auth.id || (\n    @collection.share_records.goal.id = goal.id && \n    @collection.share_records.viewer.id = @request.auth.id\n  )\n)"
  collection.viewRule = "@request.auth.id != \"\" && (\n  goal.owner.id = @request.auth.id || (\n    @collection.share_records.goal.id = goal.id && \n    @collection.share_records.viewer.id = @request.auth.id\n  )\n)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0ha165cbigv0ei")

  collection.listRule = "@request.auth.id != \"\" && goal.owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && goal.owner.id = @request.auth.id"

  return dao.saveCollection(collection)
})
