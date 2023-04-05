
exports.home = async (req, res) => {

  res.render('index', {hours: ['00:30', '00:00', '1:00']});
};
exports.blog = async (req, res) => {
  console.log(req.params)
  res.render('blog/'+req.params.slug.replace('.html', ''));
};

exports.days = async (req, res) => {
res.json(['2023-04-10', '2023-04-17', '2023-04-12','2023-04-19','2023-04-26', '2023-04-24'])};

exports.hours = async (req, res) => {
  let day = new Date(req.query.date).getDay()
res.json(day == 1 ? ['17:30', '18:00', '18:30', '19:00']: day == 3 ? ['19:00', '19:30', '20:00', '20:30'] : [])};


exports.sign = async (req, res) => {
  res.render('sign');
}

exports.summary = async (req, res) => {
  res.render('summary');
}
exports.dziekujemy = async (req, res) => {
  res.render('dziekujemy');
}

