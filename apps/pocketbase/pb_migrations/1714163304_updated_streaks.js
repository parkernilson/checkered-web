/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff < 2\nGROUP BY\n    date_diff\nORDER BY\n    start_date;\n"
  }

  // remove
  collection.schema.removeField("x5eriizn")

  // remove
  collection.schema.removeField("ylsjxdjz")

  // remove
  collection.schema.removeField("edoscgwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k9nrx9eb",
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
    "id": "si8fmnfd",
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
    "id": "lgoobzzq",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff > 1 OR date_diff IS NULL\nGROUP BY\n    date_diff\nORDER BY\n    start_date;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5eriizn",
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
    "id": "ylsjxdjz",
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
    "id": "edoscgwz",
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

  // remove
  collection.schema.removeField("k9nrx9eb")

  // remove
  collection.schema.removeField("si8fmnfd")

  // remove
  collection.schema.removeField("lgoobzzq")

  return dao.saveCollection(collection)
})
