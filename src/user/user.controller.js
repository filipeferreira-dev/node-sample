module.exports = (app) => {
  app.get('/users', (req, res) => {
    let users = [
      {
        uuid: 'bc3653be-c9aa-4f26-851c-272765bf4cfd',
        name: 'Jon Snow'
      },
      {
        uuid: '57bb3b8f-6838-4baa-8e44-e091f6253112',
        name: 'Arya Stark'
      }
    ]

    return res.status(200).send(users);
  });
}