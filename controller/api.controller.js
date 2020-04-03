const customerDetails = require('../models/costomerDetails');

exports.label_show = (req,res,next) => {
    customerDetails.find({available: true, category: req.params.label })
        .then(details => {
            res.send(details)
        })
        .catch(next)
}
