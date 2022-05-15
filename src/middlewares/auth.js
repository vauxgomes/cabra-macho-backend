const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { authorization: token } = req.headers

    if (!token) {
        return res.json({
            success: false,
            message: 'user.authentication.required'
        })
    }

    try {
        req.user = jwt.verify(token, process.env.KEY)
    } catch (err) {
        return res.status(401).send({
            success: false,
            message: 'user.authentication.fail'
        })
    }

    next()
}
