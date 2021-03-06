const service = require("./movies.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
    const data = await service.list(req.query.is_showing) 
    res.json({data});
  }
async function movieExists(req, res, next) {
    const movie = await service.read(req.params.movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({ status: 404, message: `Movie cannot be found.`});
}

async function read(req, res) {
    const data = await service.read(req.params.movieId)
    res.json({ data })
}


module.exports = {
    list,
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
}