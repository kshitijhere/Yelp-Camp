const express = require('express');
const reviews = require('../controllers/reviews')
const router = express.Router({ mergeParams: true });

const catchAsync = require('../utils/catchAsync')
const expressError = require('../utils/expressError')

const Review = require('../models/review')
const Campground = require('../models/campground')

const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.makeReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;