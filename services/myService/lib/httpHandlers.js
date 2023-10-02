//ایجاد object مورد انتظار پارت فریم ورک از handlerها
exports.httpHandlers = {
  //به ازای هر Api نیاز است مانند نمونه زیر عمل شود
  myServiceApi: {
    //درخواست های GET مربوط به این Api توسط myServicGetFunction دریافت و پردازش می شود
    GET: {
      function: myServiceGetFunction
    },
    POST: {
      function: myServicePostFunction
    }
  }
};

//این تابع مقدار زمان timeout را بر حسب میلی ثانیه از بدنه درخواست کاربر دریافت میکند، و پس از سپری شدن آن مقدار،زمان سیستم را در پاسخ باز می گرداند
function myServicePostFunction(request, response) {
  console.log('===============myServicePostFunction');
  let v= setTimeout(function () {
    let today = new Date();
    //دریافت زمان سیستم
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log(time);
    response.sendOk({timeOut: time, status: 'success'});
  }, request.data.milisecond);
  console.log(v);
  //ارسال پاسخ موفق به کاربر
}

//بازگرداندن زمان  فعلی سیستم
function myServiceGetFunction(request, response) {
  console.log('===============myServiceGetFunction');
  let today = new Date();
  //دریافت زمان سیستم
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  console.log(time);
  //ارسال پاسخ موفق به کاربر
  response.sendOk({ time, status: 'success'});
}