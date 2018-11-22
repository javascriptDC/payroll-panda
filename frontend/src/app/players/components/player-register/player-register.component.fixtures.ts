export const daysOfWeekValues = {
  'Sun': false,
  'Mon': false,
  'Tue': false,
  'Wed': false,
  'Thu': false,
  'Fri': false,
  'Sat': false
};

export const daysOfWeekLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

export const inputVariables = {
  username: {
    pattern: /^([A-Za-z\u0080-\u00FF\s]{2,30})$/,
    errorMessage: 'Invalid value',
    minLength: 2,
    maxLength: 30,
    focused: false,
    instruction: 'Input Full Name'
  },
  email: {
    pattern: /^\S+@\S+\.\S+$/,
    errorMessage: 'Invalid Email',
    focused: false,
    instruction: 'Input Email Address'
  },
  city: {
    label: 'common.city',
    pattern: /^([A-Za-z0-9,\.\-\s\u0080-\u00FF]{2,30})$/,
    errorMessage: 'Invalid value',
    minLength: 2,
    maxLength: 30,
    focused: false,
    instruction: 'Input City'
  }
};
