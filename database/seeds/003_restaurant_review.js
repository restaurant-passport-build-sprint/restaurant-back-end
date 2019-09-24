exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("restaurant_review").then(function() {
    // Inserts seed entries
    return knex("restaurant_review").insert([
      {
        restaurant_name: "Pizza Hut",
        restaurant_type: "Italian-American cuisine",
        user_id: 1,
        item_name: "pizza",

        photo_of_order:
          "https://www.pngfind.com/pngs/m/327-3272002_free-png-pizza-png-png-image-with-transparent.png",

        food_rating: 3.0,
        comments: "this is a great place to eat",
        price: 7.45,
        wait_time: "30min",
        date_of_visit: "01/30/2019"
      },
      {
        restaurant_name: "Burger King",
        restaurant_type: "Fast Food",
        user_id: 2,
        item_name: "Whopper",

        photo_of_order:
          "https://www.stickpng.com/assets/images/5882488ae81acb96424ffaaf.png",

        food_rating: 4.0,
        comments: "fast fun service",
        price: 8.74,
        wait_time: "10min",
        date_of_visit: "02/05/2019"
      },
      {
        restaurant_name: "Mcdonalds",
        restaurant_type: "Fast-Food",
        user_id: 3,
        item_name: "Big Mac",
        comments:
          "i order with no pickles and received pickles i will not be returning",
        price: 8.0,
        wait_time: "9min",
        date_of_visit: "03/10/2019",

        photo_of_order: "https://i.redd.it/bydegsnwwhp11.png",

        food_rating: 4.5
      },
      {
        restaurant_name: "olive garden",
        restaurant_type: "Italian cuisine",
        user_id: 4,
        item_name: "spaghetti and meatballs",

        photo_of_order: "https://www.pastapass.com/images/dish1.png",

        food_rating: 5.0,
        comments: "my favorite go to spot ",
        price: 12.1,
        wait_time: "40min",
        date_of_visit: "05/27/2019"
      },
      {
        restaurant_name: "Chili's Grill & Bar ",
        restaurant_type: "American cuisine",
        user_id: 5,
        item_name: "Chicken steak fish and chips",

        photo_of_order:
          "https://www.pngkey.com/png/detail/21-216126_chicken-steak-fish-and-chips.png",

        food_rating: 5.0,
        comments:
          "the right amount of spice and the right amount of alcohol i <3 this place",
        price: 13.24,
        wait_time: "45min",
        date_of_visit: "04/09/2019"
      },
      {
        restaurant_name: " Buffalo Wild Wings",
        restaurant_type: "American cuisine",
        user_id: 6,
        item_name: "BBQ hot wings",

        photo_of_order:
          "http://www.pngmart.com/files/8/Grilled-Food-PNG-Clipart-Background.png",

        food_rating: 4.0,
        comments: "mm i had better wings",
        price: 15.0,
        wait_time: "40min",
        date_of_visit: "01/30/2019"
      }
    ]);
  });
};
