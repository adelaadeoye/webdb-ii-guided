
exports.up = function(knex) {
   return knex.schema.createTable('vegetable',(tbl) => {
        tbl.increments();
        tbl.string("name",255).unique().notNullable();
        tbl.boolean("like_it").defaultTo(false)
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("vegetable");
};
