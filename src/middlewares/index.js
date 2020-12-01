module.exports = {
  dateNow: (req, res, next) => {
    console.log(new Date().toDateString());
    next();
  },
};
