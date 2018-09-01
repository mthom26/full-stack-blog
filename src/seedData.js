import bcrypt from 'bcrypt';

const seedData = {
  users: [
    {
      username: 'Top Noob',
      email: 'topnoob@email.com',
      password: bcrypt.hashSync('password', 10)
    },
    {
      username: 'Jimmy',
      email: 'jimmy@email.com',
      password: bcrypt.hashSync('password', 10)
    },
    {
      username: 'Keyboard Cat',
      email: 'keyboardkittie@email.com',
      password: bcrypt.hashSync('password', 10)
    }
  ],

  blogPosts: [
    {
      userId: '1',
      title: 'Top Noob\'s Blog Post',
      content: 'Pressing Buttonz!!'
    },
    {
      userId: '2',
      title: 'Jimmy\'s Blog Post',
      content: 'Blah blah blah...'
    },
    {
      userId: '1',
      title: 'Another Blog Post',
      content: 'Pressing moar Buttonz!!'
    },
    {
      userId: '3',
      title: 'I like yarn',
      content: 'A ball of string...'
    }
  ],

  comments: [
    {
      userId: '2',
      blogPostId: '1',
      content: 'Jimmy\'s comment'
    },
    {
      userId: '1',
      blogPostId: '2',
      content: 'Comment by Top Noob'
    },
    {
      userId: '1',
      blogPostId: '3',
      content: 'Another Comment by Top Noob'
    },
    {
      userId: '3',
      blogPostId: '4',
      content: 'Keyboard Kittiez!'
    },
    {
      userId: '1',
      blogPostId: '4',
      content: 'Yet Another Comment by Top Noob'
    },
    {
      userId: '2',
      blogPostId: '2',
      content: 'Jimmys\' next comment'
    },
    {
      userId: '3',
      blogPostId: '1',
      content: 'Comment brought to you by a cat.'
    }
  ]
};

const seedDatabase = async (db) => {
  try {
    await db.schema.dropTableIfExists('users');
    await db.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('username');
      table.string('email');
      table.string('password');
    });
    await db('users').insert(seedData.users);

    await db.schema.dropTableIfExists('blogPosts');
    await db.schema.createTable('blogPosts', (table) => {
      table.increments('id');
      table.string('title');
      table.string('content');
      table.string('userId');
    });
    await db('blogPosts').insert(seedData.blogPosts);

    await db.schema.dropTableIfExists('comments');
    await db.schema.createTable('comments', (table) => {
      table.increments('id');
      table.string('content');
      table.string('userId');
      table.string('blogPostId');
    });
    await db('comments').insert(seedData.comments);
    console.log('Finished seeding database!');
  } catch(err) {
    console.log(err);
  }
};

export { seedDatabase, seedData };