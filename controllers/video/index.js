const pick = require('lodash.pick')


const Videos = require("../../models/videos")

const getVideos = async (req, res, next) => {
    try {
        let { pageNumber } = pick(req.body, ['pageNumber'])


        let nPerPage = 10

        let videoes = await Videos.find().skip((pageNumber - 1) * nPerPage).limit(nPerPage)
        let totalCount = await Videos.find().count()

        res.status(200).send({ success: true, videos: videoes, totalCount: totalCount })

    } catch (e) {
        console.log(e)
        res.send({
            success: false,
            error: e.message || "Error Occured"
        })
    }
}


module.exports = {
    getVideos
}