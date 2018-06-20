//判断用户是否登陆
$.ajax({
  type:'get',
  url: `${APP.basrUrl} /employee/checkRootLogin`,
  async:false,
  success:function(mag){
    console.log(msg);
  }
})


$(function () {

  //发送ajax请求数据渲染页面
  $.ajax({ 
    type: 'get',
    url: `${APP.basrUrl}/user/queryUser`,
   data:{
     page:1,
     pageSize:100
   },
    success:function(mag){
      // console.log(mag);
      //模板渲染
      var html = template('Tpl',mag);
      $('tbody').html(html);
     
    }


  })

  //点击按钮切换状态
  $('tbody').on('click','.changeStatus',function(){
      //获取当前id和状态
    var id = $(this).data('user-id');
    var isDelete = $(this).attr('user-isdelete');
    
    console.log(id,status);
    $.ajax({
      data:{
        id:id,
        isDelete: isDelete==1?0:1
      },
      type:'post',
      url: `${APP.basrUrl}/user/updateUser`,
      success:function(msg){
        console.log(msg);
        if(msg.error){
          location.href='login.html';
        }else{
          location.reload();
        }
      }
    })
  })
  
})