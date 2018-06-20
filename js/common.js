$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

$.ajaxSetup({ crossDomain: true, xhrFields: { withCredentials: true } });

var APP = {
	basrUrl: 'http://fullstack.net.cn:3000'
}

$.fn.serialzeJson = function () {
	// console.log($(this));
	var formAry = this.serializeArray();
	//  console.log(formAry);
	var result = {};
	formAry.forEach(function (item) {
		result[item.name] = item.value;

	})
	return result;
}


function idurl(name) {
	// console.log(name);
	var str = location.search.slice(1).split('&');

	// console.log(str);

	for (var i = 0; i < str.length; i++) {
		// console.log(str[i]);
		var arr = str[i].split('=');
		console.log(arr);
		if (arr[0] == name) {
			return arr[1];
		}
	}
	return -1;
}


