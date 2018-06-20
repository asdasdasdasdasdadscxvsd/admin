$(function (){
  //点击登陆按钮
  $('#dlBtn').on('click',function(){
  
    //获取用户输入的数据
    //--------
   var result =   $('#dlForm').serialzeJson();
   console.log(result);
    if (!$.trim(result.username)){
      alert('请输入用户名');
      return ;
    }
//==---------
    if (!$.trim(result.password)) {
      alert('请输入密码');
      return;
    }
//---
    $.ajax({
      type:'post',
      url: `${APP.basrUrl}/employee/employeeLogin`,
      data:result,
      success:function(msg){
        // console.log(msg);
        if(msg.success){
          location.href = 'user.html';
        }else{
          alert(msg.message);
        }
      
      }
    })

  })

})