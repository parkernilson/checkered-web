/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = "@request.auth.id != \"\" && (\n  (@request.auth.id = owner.id) ||\n  (\n    @request.auth.id ?= @collection.share_records.viewer.id &&\n    @collection.share_records.goal.id ?= id\n  )\n)"
  collection.viewRule = "@request.auth.id != \"\" && (\n  (@request.auth.id = owner.id) ||\n  (\n    @request.auth.id ?= @collection.share_records.viewer.id &&\n    @collection.share_records.goal.id ?= id\n  )\n)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vj0h29poq2k6tbj")

  collection.listRule = ""
  collection.viewRule = "@request.auth.id != \"\" && (\n  @request.auth.id ?= @collection.share_records.viewer.id &&\n  @collection.share_records.goal.id ?= id\n)"

  return dao.saveCollection(collection)
})
