$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 17293cd98d977d99c2532caa9402b82f93e0a259
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
	$("#showBorder").hide();
	$("#showDivinity").hide();
=======
>>>>>>> ajuste videos
	$("#personal").click(function(){
		$("#personalTitle>.content").stop().slideToggle("slow");
	});
	$("#professional").click(function(){
		$("#professionalTitle>.content").stop().slideToggle("slow");
	});
	$("#hobby").click(function(){
		$("#hobbyTitle>.content").stop().slideToggle("slow");
	});
	$("#contact").click(function(){
		$("#contactTitle>.content").stop().slideToggle("slow");
	});
	$("#playSoja").click(function(){
		videoSoja.play();
		$("#playSoja").hide();
		$("#pauseSoja").show();
	});
	$("#pauseSoja").click(function(){
		videoSoja.pause();
		$("#pauseSoja").hide();
		$("#playSoja").show();
	});
	$("#replaySoja").click(function(){
		videoSoja.load();
		$("#pauseSoja").hide();
		$("#playSoja").show();
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
});