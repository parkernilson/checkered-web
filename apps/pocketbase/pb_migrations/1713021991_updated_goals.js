/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = "@request.auth.id != \"\" && (\n  (owner.id = @request.auth.id) ||\n  (\n    @collection.share_records.goal.id = id \n    && @collection.share_records.viewer.id = @request.auth.id\n  )\n)"
  collection.viewRule = "@request.auth.id != \"\" && (\n  (owner.id = @request.auth.id) ||\n  (\n    @collection.share_records.goal.id = id \n    && @collection.share_records.viewer.id = @request.auth.id\n  )\n)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = "@request.auth.id != \"\" && owner.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && owner.id = @request.auth.id"

  return dao.saveCollection(collection)
})
