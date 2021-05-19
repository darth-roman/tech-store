import mongoose from "mongoose"

const db = {}

db.mongoose = mongoose

db.article = require('article')
db.user = require('user')
db.merchant = require('merchant')
db.category = require('category')

export default db