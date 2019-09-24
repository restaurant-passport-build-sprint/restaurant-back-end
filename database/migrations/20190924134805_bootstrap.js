exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 140)
        .unique()
        .notNullable();
      tbl.string("password", 140).notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("restaurant_review", tbl => {
      tbl.increments();
      tbl
        .string("restaurant_name", 140)

        .notNullable();
      tbl.string("restaurant_type", 140).notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        // this table must exist already
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("item_name", 140).notNullable();
      tbl.string("photo_of_order", 1000).notNullable();
      tbl.decimal("food_rating").notNullable();
      tbl.string("comments", 500).notNullable();
      tbl.decimal("price").notNullable();
      tbl.string("wait_time").notNullable();
      tbl.date("date_of_visit").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("restaurant_review")
    .dropTableIfExists("users");
};
