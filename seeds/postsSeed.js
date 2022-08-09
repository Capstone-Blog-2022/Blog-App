/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Populate the users table
    await knex('users').del()
    await knex('users').insert([
      { username: 'zkhanhoop', title: 'The Time I Lost to Charles', description: 'Losing sucks', body: 'I lost to Charles in basketball on Thursday. He broke my ankles bad. But it\'s okay, I will get my revenge!', hashtags: ['#revenge', '#anger', '#bBall', '#livingmybestlife'], category: ['baskeball', 'sports'] },
      { username: 'emilyg', title: 'Lovely Grandchildren', description: 'My daughter Rory is going off to college and is the most intuitive student.', hashtags: ['#favgrandchild'], category: ["family", "college"] }
    ]);
  };