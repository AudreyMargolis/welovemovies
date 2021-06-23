const knex = require ("../db/connection");


const tableName = "theaters"

function list() {
    return knex(tableName)
        .join("movies_theaters", `${tableName}.theater_id`, "movies_theaters.theater_id")
        .join("movies", "movies_theaters.movie_id", "movies.movie_id")
        .select(`${tableName}.theater_id`,
        `${tableName}.name`,
        `${tableName}.address_line_1`,
        `${tableName}.address_line_2`,
        `${tableName}.city`,
        `${tableName}.state`,
        `${tableName}.zip`,
        "movies.movie_id",
        "movies.title",
        "movies.runtime_in_minutes",
        "movies.rating",
        "movies.description")
        
  }

module.exports = {
    list
}