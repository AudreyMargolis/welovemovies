
exports.up = function(knex) {
  return knex.schema.createTable("theaters", (table) => {
      table.increments("theater_id").primary();
      table.string("name");
      table.string("address_line_1");
      table.string("address_line_2");
      table.string("city");
      table.string("state");
      table.string("zip");
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("theaters");
};

// "theater_id": 1,
//       "name": "Regal City Center",
//       "address_line_1": "801 C St.",
//       "address_line_2": "",
//       "city": "Vancouver",
//       "state": "WA",
//       "zip": "98660",
//       "created_at": "2021-02-23T20:48:13.335Z",
//       "updated_at": "2021-02-23T20:48:13.335Z",
//       "movies": [
//         {
//           "movie_id": 1,
//           "title": "Spirited Away",
//           "runtime_in_minutes": 125,
//           "rating": "PG",
//           "description": "Chihiro...",
//           "image_url": "https://imdb-api.com...",
//           "created_at": "2021-02-23T20:48:13.342Z",
//           "updated_at": "2021-02-23T20:48:13.342Z",
//           "is_showing": false,
//           "theater_id": 1
//         }