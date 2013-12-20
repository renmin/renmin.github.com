/* ===========================================================================
 * 测试互联JS sdk的功能
 *
 * @description
 * A CSS animation Engine and Library
 *
 * @author minren 
 * ===========================================================================
 * 
 */

/**
 * @测试互联JS sdk的功能
 * 这是一个全局包。
 */

Jx().$package(function(J){
	console.log('starting...');
	var D = Jx().dom,
		E = Jx().event;

	E.on(D.id('list_album'),'click',function(arguments){
		console.log('list_album...');


	//从页面收集OpenAPI必要的参数
	var paras = {

	};

	//用jssdk调用OpenAPI
	QC.api("list_album", paras)
		.success(function(s){//请自行改写成功回调
			alert(s.albumnum);
		})
		.error(function(f){//请自行改写失败回调
			alert("分享失败！");
		})
		.complete(function(c){//请自行改写完成请求回调
			alert("分享完成！");
		});

	});


});