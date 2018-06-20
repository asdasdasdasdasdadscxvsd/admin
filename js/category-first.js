$(function(){
  //页数
  var page = 1;
  //每页条数
  var pageSize = 10;
  $.ajax({
    type:'get',
    url: `${APP.basrUrl}/category/queryTopCategoryPaging`,
    data:{
      page:page,
      pageSize: pageSize
    },
    success:function(msg){
   var html = template('firstBtn',msg);
   $('tbody').html(html);
      
    }
  })


})