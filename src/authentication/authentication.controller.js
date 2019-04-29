module.exports = (app, TOKEN) => {
  app.post('/authenticate', (req, res) => {
    if (req.body.username != 'user' && req.body.password != '123456')
      return res.status(401);

    return res.status(200).send({ token: TOKEN });
  })
}