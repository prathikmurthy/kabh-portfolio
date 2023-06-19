migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z42q627p0fkvxd5")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z42q627p0fkvxd5")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
