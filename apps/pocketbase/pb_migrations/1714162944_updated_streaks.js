/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwroqxd8s2vfd8z")

  collection.options = {
    "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (JULIANDAY(entries.date) - LAG(JULIANDAY(entries.date)) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff > 1 OR date_diff IS NULL\nGROUP BY\n    date_diff\nORDER BY\n    start_date;"
  }

  // remove
  collection.schema.removeField("qludflru")

  // remove
  collection.schema.removeField("nsucwy27")

  // remove
  collection.schema.removeField("wzowcwmk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i1fupik1",
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
    "id": "wcxg9caq",
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
    "id": "fzq0f9kl",
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
    "query": "WITH Sequences AS (\n    SELECT\n        entries.date,\n        LAG(entries.date) OVER (ORDER BY entries.date) AS prev_date,\n        (entries.date - LAG(entries.date) OVER (ORDER BY entries.date)) AS date_diff\n    FROM\n        entries\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    MIN(Sequences.date) AS start_date,\n    MAX(Sequences.date) AS end_date,\n    COUNT(*) AS consecutive_entries\nFROM\n    Sequences\nWHERE\n    date_diff > 1 OR date_diff IS NULL\nGROUP BY\n    date_diff\nORDER BY\n    start_date;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qludflru",
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
    "id": "nsucwy27",
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
    "id": "wzowcwmk",
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
  collection.schema.removeField("i1fupik1")

  // remove
  collection.schema.removeField("wcxg9caq")

  // remove
  collection.schema.removeField("fzq0f9kl")

  return dao.saveCollection(collection)
})
