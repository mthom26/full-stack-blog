const seedData = {
  users: {
    1: {
      id: '1',
      username: 'A',
      email: 'a@mail.com',
      blogPosts: ['1', '2'],
      comments: ['1', '4']
    },
    2: {
      id: '2',
      username: 'B',
      email: 'b@mail.com',
      blogPosts: ['3'],
      comments: ['5']
    },
    3: {
      id: '3',
      username: 'C',
      email: 'c@mail.com',
      blogPosts: [],
      comments: ['2', '3']
    },
    4: {
      id: '4',
      username: 'D',
      email: 'd@mail.com',
      blogPosts: [],
      comments: ['6']
    }
  },
  blogPosts: {
    1: {
      id: '1',
      dateCreated: 'date',
      title: 'Blog Post 1',
      userId: '1',
      comments: ['1', '3'],
      content: 'Sed pharetra malesuada ullamcorper. Nunc volutpat eleifend ligula, sit amet rhoncus dui finibus eget. Nullam tincidunt leo leo, vitae mollis turpis pellentesque vel. Praesent et cursus risus. Maecenas pulvinar bibendum sem, a tincidunt magna viverra sit amet. Ut tellus turpis, mattis ut urna sit amet, sagittis ullamcorper quam. Etiam pretium ipsum elementum nulla congue.'
    },
    2: {
      id: '2',
      dateCreated: 'date',
      title: 'Blog Post 2',
      userId: '1',
      comments: ['2', '4'],
      content: 'Duis nec tincidunt nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam condimentum purus vitae massa lobortis, ullamcorper ornare nisi dapibus. Nulla iaculis ullamcorper ullamcorper. In vitae dapibus odio, at eleifend tortor. Donec eget justo rutrum augue ullamcorper rhoncus. Fusce vehicula felis at leo iaculis pulvinar. Ut vel ante malesuada, venenatis risus at, efficitur.'
    },
    3: {
      id: '3',
      dateCreated: 'date',
      title: 'Blog Post 3',
      userId: '2',
      comments: ['5', '6'],
      content: 'Curabitur dictum quam non nunc varius interdum. Proin vestibulum aliquam placerat. Proin nec quam sed mi maximus condimentum a eu turpis. In at nunc et lacus dictum pellentesque eu non purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In rhoncus convallis neque a rutrum. In gravida, arcu vel.'
    }
  },
  comments: {
    1: {
      id: '1',
      blogPostId: '1',
      userId: '1',
      content: 'This is comment 1!' 
    },
    2: {
      id: '2',
      blogPostId: '2',
      userId: '3',
      content: 'This is comment 2!' 
    },
    3: {
      id: '3',
      blogPostId: '1',
      userId: '3',
      content: 'This is comment 3!' 
    },
    4: {
      id: '4',
      blogPostId: '2',
      userId: '1',
      content: 'This is comment 4!' 
    },
    5: {
      id: '5',
      blogPostId: '3',
      userId: '2',
      content: 'This is comment 5!' 
    },
    6: {
      id: '6',
      blogPostId: '3',
      userId: '4',
      content: 'This is comment 6!' 
    }
  }
};

const seedDatabase = async (models) => {
  await models.User.create(
    {
      username: 'Top Noob',
      email: 'topnoob@email.com',
      password: 'password',
      blogPosts: [
        {
          title: 'Top Noob BlogPost 1',
          content: 'Pressing Buttonz!'
        }
      ],
      comments: [
        {
          content: 'Comment by Top Noob for Blog Post 1',
          blogPostId: '1'
        }
      ]
    },
    {
      include: [models.BlogPost, models.Comment]
    }
  );

  await models.User.create(
    {
      username: 'Jimmy',
      email: 'jimmy@email.com',
      password: 'password',
      blogPosts: [
        {
          title: 'Jimmy\'s BlogPost',
          content: 'This is a blogpost!!!'
        }
      ],
      comments: [
        {
          content: 'Comment by Jimmy',
          blogPostId: '1'
        }
      ]
    },
    {
      include: [models.BlogPost, models.Comment]
    }
  );

  await models.User.create(
    {
      username: 'Ben',
      email: 'ben@email.com',
      password: 'password',
      blogPosts: [],
      comments: [
        {
          content: 'Comment by Ben for Blog Post 2',
          blogPostId: '2'
        }
      ]
    },
    {
      include: [models.BlogPost, models.Comment]
    }
  );

  await models.User.create(
    {
      username: 'Jamie',
      email: 'jamie@email.com',
      password: 'password',
      blogPosts: [
        {
          title: 'Jamie\'s Blog Post',
          content: 'Blah blah blah'
        }
      ],
      comments: [
        {
          content: 'Jamie\'s first comment!',
          blogPostId: '1'
        },
        {
          content: 'Jamie\'s second comment!!',
          blogPostId: '2'
        }
      ]
    },
    {
      include: [models.BlogPost, models.Comment]
    }
  );

  await models.User.create(
    {
      username: 'Keyboard Kittie',
      email: 'keyboardkat@email.com',
      password: 'password',
      blogPosts: [
        {
          title: 'Meow',
          content: 'Blah blah blah'
        },
        {
          title: 'I like yarn',
          content: 'Yarn, I like it... that is all.'
        }
      ],
      comments: [
        {
          content: 'Hello world!',
          blogPostId: '4'
        },
        {
          content: 'Yes I am just commenting my own Blog Post...',
          blogPostId: '4'
        }
      ]
    },
    {
      include: [models.BlogPost, models.Comment]
    }
  );


};

export default seedDatabase;