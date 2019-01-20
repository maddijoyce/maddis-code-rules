module.exports = {
  extends: ['tslint-config-airbnb', 'tslint-config-prettier'],
  rules: {
    'variable-name': [true, 'ban-keywords', 'check-format', 'allow-pascal-case'],
    'function-name': [
      true,
      {
        'method-regex': '^[a-z][\\w\\d]+$',
        'private-method-regex': '^[a-z_][\\w\\d]+$',
        'protected-method-regex': '^[a-z][\\w\\d]+$',
        'static-method-regex': '^[a-z][\\w\\d]+$',
        'function-regex': '^[a-z][\\w\\d]+$',
      },
    ],
    'no-floating-promises': true,
    'no-unused-expression': true,
  },
};
