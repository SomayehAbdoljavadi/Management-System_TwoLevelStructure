exports.SchemaSignUp = {


        "type": "object",
        "properties": {

            "data": {
                "type": "object",
                "properties": {

                    "uniqueKey": {
                        "integer": [],
                        "errorMessages": {
                            "persianAlpha": "مقدار وارد شده  معتبر نمی‌باشد!"
                        }
                    },
                    "type": {
                        "alpha": [" "],
                        "errorMessages": {
                            "alpha": "مقدار وارد شده معتبر نمی‌باشد!"
                        }
                    },
                    "firstName": {
                        "persianAlpha": [" "],
                        "errorMessages": {
                            "persianAlpha": "مقدار وارد شده برای نام معتبر نمی‌باشد!"
                        }
                    },
                    "lastName": {
                        "alpha": [" "],
                        "errorMessages": {
                            "alpha": "مقدار وارد شده برای نام خانوادگی معتبر نمی‌باشد!"
                        }
                    },
                    "gender": {
                        "inArray": [0, 1],
                        "errorMessages": {
                            "inArray": "جنسیت معتبر نمی‌باشد!"
                        }
                    },
                    "idNumber": {
                        "nationalCode": [],
                        "errorMessages": {
                            "nationalCode": "کد ملی معتبر نمی‌باشد!"
                        }
                    },
                    "education": {
                        "alpha": [" "],
                        "errorMessages": {
                            "alpha": "مقدار وارد شده برای نام تحصیلات نمی‌باشد!"
                        }



                    },
                    "email": {
                        "email": [],
                        "errorMessages": {
                            "email": "رایانامه معتبر نمی‌باشد!"
                        }
                    },
                    "userName": {
                        "alpha": [" "],
                        "errorMessages": {
                            "alpha": "مقدار وارد شده برای نام کاربری معتبر نمی‌باشد!"
                        }
                    },
                    "password": {
                        "string": [],
                        "errorMessages": {
                            "string": "رمز وارده شده معتبر نمی‌باشد!"
                        }
                    },



                },


                "id": {
                    "integer": [],
                    "errorMessages": {
                        "integer": "شماره شناسنایی معتبر نمی‌باشد!"
                    }
                },
                "parent": {
                    "integer": [],
                    "errorMessages": {
                        "integer": "شماره معتبر نمی‌باشد!"
                    }
                },
            },
        },
        "required": [
            "id",
            "parent"
        ],
        "additionalProperties": "false"
    }
