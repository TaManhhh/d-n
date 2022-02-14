// Lấy giá trị của một input
function getValue(id){
    return document.getElementById(id).value.trim();
}
 
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}
function validate()
{
    var flag = true;
    var password = getValue('password');
  
    if (password == '' || password.length < 8 ){
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }
    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
         
        showError('email', 'Vui lòng kiểm tra lại Email');
    }
     
    return flag;
}