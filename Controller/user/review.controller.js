const Product = require('../../model/product.model');
const Review = require('../../model/review.model');

exports.addReview = async (req, res) => {
    try {
        {
            let review = await Review.findOne({
                user: req.user._id,
                productId: req.body.productId,
                isDelete: false,
            });
            review = await Review.create({
                user: req.user._id,
                ...req.body,
            });
            res.status(201).json({ message: "Product Review Added In Review list", review })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
