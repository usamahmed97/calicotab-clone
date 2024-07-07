export const FormRule = {
  NAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid name!",
      min: 3,
      max: 50,
    },
  ],
  LINK: [
    {
      required: false,
      pattern: /^(http:\/\/|https:\/\/).*$/,
      message: "Please enter a valid link!",
      max: 100,
    },
  ],
  FIRSTNAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid first name!",
      min: 3,
      max: 50,
    },
  ],
  LASTNAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid last name!",
      min: 3,
      max: 50,
    },
  ],
  COUNTRY: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{2,50}$/,
      message: "Please enter a valid country name!",
      min: 3,
      max: 50,
    },
  ],
  STATE: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{2,50}$/,
      message: "Please enter a valid state name!",
      min: 2,
      max: 2,
    },
  ],
  EMAIL: [
    {
      required: true,
      type: "email",
      message: "Please enter a valid email!",
      validator: (_, value) => {
        const lowercaseRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!lowercaseRegex.test(value) || /[A-Z]/.test(value)) {
          return Promise.reject(
            new Error(
              "Please enter a valid email address with lowercase letters only."
            )
          );
        }
        return Promise.resolve();
      },
    },
  ],

  PASSWORD: [
    {
      required: true,
      message: "Please enter password!",
    },
  ],

  OLD_PASSWORD: [
    {
      required: true,
      message: "Please enter old password!",
    },
  ],

  NEW_PASSWORD: [
    {
      required: true,
      message: "Please enter new password!",
    },
  ],
  RE_ENTER_PASSWORD: [
    {
      required: true,
      message: "Please re-enter new password!",
    },
  ],

  SELECT: [
    {
      required: true,
      message: "Please select some value!",
    },
  ],

  PHONENUMBER: [
    {
      required: true,
      message: "Please enter your phone number!",
    },
    {
      min: 10,
      message: "The phone number must have 10 digits!",
    },
  ],
  PHONENUMBER_NOT_REQUIRED: [
    {
      required: false,
    },
    {
      min: 10,
      message: "The phone number must have 10 digits!",
    },
  ],
  PHONENUMBER_TABLE: [
    {
      pattern: /^(\d{10}|N\/A)$/,
      message: "Phone number must be 10 digits.",
    },
    {
      required: true,
      message: "Please enter your phone number!",
    },
  ],
  PHONENUMBER_TABLE_NOT_REQUIRED: [
    {
      pattern: /^(\d{10}|N\/A)$/,
      message: "Phone number must be 10 digits.",
    },
    {
      required: false,
    },
  ],

  CODE: [
    {
      required: true,
      message: "Please enter a 6 digit valid code!",
      pattern: /^[0-9]{6}$/,
    },
  ],
  COUNT: [
    {
      required: true,
      message: "Please enter a valid number!",
      pattern: /^\d{1,2}$/,
    },
  ],
  COUNT_SELECT: [
    {
      required: true,
      message: "Please select a range!",
    },
  ],
  FOUR_DIGIT_COUNT: [
    {
      required: true,
      message: "Please enter a valid number!",
      pattern: /^\d{1,4}$/,
    },
  ],
  NAME_NOT_REQUIRED: [
    {
      required: false,
    },
  ],
  LANGUAGE: [
    {
      required: false,
    },
  ],

  GROUP_NAME: [
    {
      required: true,
      message: "Please enter group name!",
    },
  ],
  ZIP_CODE: [
    {
      required: true,
      message: "Please enter your zip code!",
    },
  ],
  LEGAL_NAME: [
    {
      required: true,
      message: "Please enter valid brokerage legal name!",
      max: 150,
    },
  ],
  CITY: [
    {
      required: true,
      message: "Please enter a valid city name!",
      pattern: /^[a-zA-Z ]{3,50}$/,
    },
  ],

  AGE: [
    {
      required: true,
      message: "Age is required!",
    },
  ],
  ABOUT_YOU: [
    {
      required: true,
      message: "About you is required!",
    },
  ],

  BROKEAGENAME: [
    {
      required: true,
      message: "Please enter valid brokerage name!",
      pattern: /^[a-zA-Z ]{3,50}$/,
      min: 3,
      max: 50,
    },
  ],

  BROKERAGEMCNUMBER: [
    {
      required: false,
      message: "Please enter brokerage mc number!",
      min: "0",
      pattern: "[0-9]",
    },
  ],
  BROKERAGE_DOTNUMBER: [
    {
      required: true,
      message: "Please enter brokerage mc number!",
      min: "0",
      pattern: "[0-9]",
    },
  ],
  MC_NUMBER: [
    {
      required: false,
      message: "Please enter a valid MC Number!",
      pattern: /^\d+$/,
    },
  ],
  DOT_NUMBER: [
    {
      required: false,
      message: "Please enter a valid DOT Number!",
      pattern: /^\d+$/,
    },
  ],
  OFFICE_LOCATION: [
    {
      required: true,
      message: "Please enter valid location!",
      pattern: /^[a-zA-Z ]{2,50}$/,
    },
  ],
  ADDRESS: [
    {
      required: true,
      message: "Please enter address!",
    },
  ],
  COMPANY_NAME: [
    {
      required: true,
      message: "Company Name is required!",
    },
  ],
  none: [
    {
      required: false,
    },
  ],
  BOND_INSURANCE: [
    {
      required: true,
    },
  ],
  CARGO_INSURANCE: [
    {
      required: true,
    },
  ],
  BROKER_AUTHORITY_STATUS: [
    {
      required: true,
    },
  ],
  COMMENT: [
    {
      required: false,
    },
  ],
  RATING: [
    {
      required: true,
      message: "Rating required!",
    },
  ],
};
