/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Populate the users table
    await knex('posts').del()
    await knex('posts').insert([
      {title: 'The Time I Beat Charles', description: 'Winning Rules!', body: 'I beat Charles in basketball on Thursday. I broke his ankles bad. But I\'m scared he will get his revenge though!', hashtags: ['#revenge', '#bBall', '#livingmybestlife'], category: ['baskeball', 'sports'] },
      {title: 'Lovely Grandchildren', description: 'Sending Rory to Yale', body: 'My daughter Rory is going off to college and is the most intuitive student.', hashtags: ['#favgrandchild'], category: ["family", "college"] }
    ]);
  };