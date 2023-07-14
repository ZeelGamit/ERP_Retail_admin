const { check, validationResult } = require('express-validator'); // Used for data validation

const validateAccountManager = [
    check('name')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Name can not be empty!')
      .bail()
      .isLength({min: 3})
      .withMessage('Please enter a name at least 3 character long!')
      .bail(),
    check('email')
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage('Email address can not be empty!')
      .isEmail()
      .withMessage('Please enter valid email address!')
      .bail(),
    check('password')
      .isString()
      .isLength({ min: 8 })
      .withMessage('Please enter a password at least 8 character long!')
      .not()
      .isEmpty()
      .withMessage('Password can not be empty!')
      .not()
      .isLowercase()
      .withMessage('Please enter a password contain at least one uppercase!')
      .not()
      .isUppercase('Please enter a password contain at least one lowercase!')
      .withMessage()
      .not()
      .isNumeric()
      .withMessage()
      .not()
      .isAlpha()
      .withMessage('Please enter a password contain at least one number!'),
    check('mobileno')
      .not()
      .isEmpty()
      .withMessage('Mobile number can not be empty!')
      .isNumeric()
      .withMessage('Please enter valid mobile number!')
      .isLength({min: 10})
      .withMessage('Please enter valid mobile number!')
      .isLength({max: 12})
      .withMessage('Please enter valid mobile number!'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];

  const validateBusiness = [
    check('business_name')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Business name can not be empty!')
      .bail()
      .isLength({min: 3})
      .withMessage('Please enter a name at least 3 character long!')
      .bail(),
    check('email')
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage('Email address can not be empty!')
      .isEmail()
      .withMessage('Please enter valid email address!')
      .bail(),
    check('password')
      .isString()
      .isLength({ min: 8 })
      .withMessage('Please enter a password at least 8 character long!')
      .not()
      .isEmpty()
      .withMessage('Password can not be empty!')
      .not()
      .isLowercase()
      .withMessage('Please enter a password contain at least one uppercase!')
      .not()
      .isUppercase('Please enter a password contain at least one lowercase!')
      .withMessage()
      .not()
      .isNumeric()
      .withMessage()
      .not()
      .isAlpha()
      .withMessage('Please enter a password contain at least one number!'),
    check('mobileno')
      .not()
      .isEmpty()
      .withMessage('Mobile number can not be empty!')
      .isNumeric()
      .withMessage('Please enter valid mobile number!')
      .isLength({min: 10})
      .withMessage('Please enter valid mobile number!')
      .isLength({max: 12})
      .withMessage('Please enter valid mobile number!'),
    check('your_name')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Name can not be empty!')
      .bail()
      .isLength({min: 3})
      .withMessage('Please enter a name at least 3 character long!')
      .bail(),
    check('city')
      .not()
      .isEmpty()
      .withMessage('City can not be empty!'),
    check('full_address')
      .not()
      .isEmpty()
      .withMessage('Address can not be empty!'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];

  const validateCoupon = [
    check('coupon_code')
      .not()
      .isEmpty()
      .withMessage('Coupon code can not be empty!'),
    check('valid_times')
      .not()
      .isEmpty()
      .withMessage('Validity times can not be empty!')
      .isNumeric()
      .withMessage('Please enter valid validity time.'),
    check('valid_days')
      .not()
      .isEmpty()
      .withMessage('Validity days can not be empty!')
      .isNumeric()
      .withMessage('Please enter valid validity days.'),
    check('discount_value')
      .not()
      .isEmpty()
      .withMessage('Discount value can not be empty!')
      .isNumeric()
      .withMessage('Please enter valid discount value.'),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
      },
  ];

module.exports = { 
  validateAccountManager,
  validateBusiness,
  validateCoupon };