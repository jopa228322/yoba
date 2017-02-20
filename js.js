$(document).ready(function(){
	var result = 0;
	$(".plus1").hide(000);
	$(".min1").hide(000);
	$(".chsv1").click(function(){
		$(".plus1").show(1000);
		$(".plus1").animate({top: "0px",left: "20px"},1000);
		$(".plus1").hide(0000);
		$(".plus1").animate({top: "-196px"},000);
		result =  result + 1;
		$(".howChsv").text(result);
	});
	$(".chsv2").click(function(){
		$(".min1").attr('style','');
		$(".min1").show(1000);
		$(".min1").animate({top: "-196px"},000);
		$(".min1").show(1000);
		$(".min1").animate({right: "20px",top: "10px"},2000);
		$(".min1").hide(000);
		$(".min1").animate({top: "-196px"},000);
		result =  result - 1;
		$(".howChsv").text(result);
	});

}); 




