/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Populate the users table
    await knex('users').del()
    await knex('users').insert([
      { username: 'example', password: 'greatBeyond', email: 'example@example.com', first_name: 'Zohaib', last_name: 'Khan', age: 18, birthday: '1978-01-17', image: 'https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww=', bio: 'I am from  the Bronx and I love books!' },
      { username: 'emilyg', password: '2', email: 'emmy@gmail.com', first_name: 'Emily', last_name: 'Gilmore', age: 67, birthday: '1945-09-27', image: 'https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww=', bio: 'My grandduaughter Rory, loves books. She\'s a bibliophile to the core and she is on her way to Yale. This app better work, or I\'ll sue!' }
    ]);
  };

  