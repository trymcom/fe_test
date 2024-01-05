$(function(){
	console.log("ens");

  /*click main slider img*/
  $('.slider-item01').on('click',function(){
		window.location.href = 'other.html';
	});
  $('.slider-item02').on('click',function(){
    window.location.href = 'other.html';
  });
  $('.slider-item03').on('click',function(){
    window.location.href = 'other.html';
  });


  /*click coordinate img*/
  $('.coordinate01').on('click',function(){
    window.location.href = 'other.html';
  });
  $('.coordinate02').on('click',function(){
    window.location.href = 'other.html';
  });
  $('.coordinate03').on('click',function(){
    window.location.href = 'other.html';
  });



  /*click button goto top*/
  $('.btn_gototop').click(function(){
    //画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
    $('html, body').animate({scrollTop: 0}, 500);
  });


});
