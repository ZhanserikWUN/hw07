//task 1;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));
  

  //task 2;

  // Результатом выполнения кода будет alert, показывающее "1".

  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);


  // task 3

  // ДОни  по сути одинаковы
  // В JavaScript Promises метод .catch() используется для обработки ошибок, возникающих во время выполнения обещания. Он может быть привязан после метода .then(),
  // чтобы перехватывать любые отклоненные обещания или ошибки, возникающие в обратных вызовах .then().
