/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH t AS (\n  SELECT id, entries.date d\n  FROM entries\n)\nSELECT id\nFROM t\n"
  }

  // remove
  collection.schema.removeField("fhxsxseh")

  // remove
  collection.schema.removeField("njbznz61")

  // remove
  collection.schema.removeField("omtsomz5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff < 2 OR date_diff IS NULL\nGROUP BY\n    date_diff\nORDER BY\n    start_date;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fhxsxseh",
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
    "id": "njbznz61",
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
    "id": "omtsomz5",
    "name": "consecutive_entries",
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

  return dao.saveCollection(collection)
})
