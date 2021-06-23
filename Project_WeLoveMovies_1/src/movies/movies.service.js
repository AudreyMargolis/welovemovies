const knex = require ("../db/connection");


const tableName = "movies"
function read(movie_id) {
    return knex(tableName).select("*").where({ movie_id }).first();
}
function list(isShowing) {
    return knex(tableName)
    .select("*")
    .modify((queryBuilder) => {
        if (isShowing) {
            queryBuilder
                .join("movies_theaters", `${tableName}.movie_id`, "movies_theaters.movie_id")
                .where({"movies_theaters.is_showing" : true})
                .groupBy(`${tableName}.movie_id`)
        }
    })
  }

module.exports = {
    read,
    list
}