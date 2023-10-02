exports.SingnUp = {


  "type": "object",
  "properties": {
    "id": {
      // "alpha": [" "],
      // "errorMessages": {
      //   "alpha": "شماره شناسنایی معتبر نمی‌باشد!"
      "type": "string",
      "pattern": "^[A-Za-z0-9-_.]+$",
      "errorMessages": {
        "string": "شماره *شناسنایی* معتبر نمی‌باشد!!! "

      }
    },
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "alpha": [" "],
          "errorMessages": {
            "alpha": "مقدار وارد شده برای *نوع*نمی‌باشد!!! "
          }
        },
        "firstName": {
          "persianAlpha": [" "],
          "errorMessages": {
            "persianAlpha": "مقدار وارد شده برای *نام* نمی‌باشد!!! "
          }
        },
        "lastName": {
          "persianAlpha": [" "],
          "errorMessages": {
            "persianAlpha": "مقدار وارد شده برای *نام خانوادگی* نمی‌باشد!!! "
          }
        },
        "gender": {
          "inArray": [0, 1],
          "errorMessages": {
            "inArray": "مقدار وارد شده برای *جنسیت* نمی‌باشد!!! "
          }
        },
        "idNumber": {
          "nationalCode": [],
          "errorMessages": {
            "NationalCode": "مقدار وارد شده برای *کد ملی* نمی‌باشد!!! "
          }

        },
        "education": {
          "persianAlpha": [" "],
          "errorMessages": {
            "persianAlpha": " مقدار وارد شده برای *تحصیلات* نمی‌باشد!!! "
          }
        },
        "email": {
          "email": [],
          "errorMessages": {
            "email": "مقدار وارد شده برای *رایانامه* نمی‌باشد!!! "
          }
        },
        "username": {
          "type": "string",

          "errorMessages": {
            "string": "مقدار وارد شده برای *نام کاربری* معتبر نمی‌باشد!!! "

          }
          //         "alpha": [" "],
          //   "errorMessages": {
          //     "alpha": "مقدار وارد شده برای نام معتبر نمی‌باشد!"
          //   }
        },
        "password": {
          "type": "string",
          "errorMessages": {
            "string": "مقدار وارد شده برای *رمزعبور* معتبر نمی‌باشد!!! "


          }
        }
      },
      "required": [
        "type",
        "firstName",
        "lastName",
        "gender",
        "idNumber",
        "education",
        "email",
        "username",
        "password"
      ]
    },
    "parent": {
      "type": "string",
      "errorMessages": {
        "string": "مقدار وارد شده برای *مدیر* معتبر نمی‌باشد!!! "


      }
    }
  },
  "required": [
    "id",
    "data",
    "parent"
  ]
}



exports.LogIn = {

  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",

          "errorMessages": {
            "string": "مقدار وارد شده برای *نام کاربری* معتبر نمی‌باشد!!! "

          }
        },
        "password": {
          "type": "string",
          "errorMessages": {
            "string": "مقدار وارد شده برای *رمزعبور* معتبر نمی‌باشد!!! "


          }
        }
      },
      "required": [
        "username",
        "password"
      ]
    }
  },
  "required": [
    "data"
  ]

}