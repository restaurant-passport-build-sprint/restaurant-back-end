exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        username: "jay",
        password: 1122,
        email: "123@gmail.com",
        city: "New York City"
      }
    ]);
  });
};
