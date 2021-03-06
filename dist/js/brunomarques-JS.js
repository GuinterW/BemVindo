function hideShow(hide,show){
	$(hide).hide();
	$(show).show();
}
function reload(hide,show,replay){
		$(hide).hide();
		$(show).show();
        $(replay).rotate({angle:0,animateTo:180});
}

$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
    $("#border").hide();
    $("#divinit").hide();
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
	$("#showBorder").hide();
	$("#showDivinity").hide();
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
		videoManeva.pause();
		hideShow("#playSoja","#pauseSoja");
		hideShow("#pauseManeva","#playManeva");
	});
	$("#pauseSoja").click(function(){
		videoSoja.pause();
		hideShow("#pauseSoja","#playSoja");
	});
	$("#replaySoja").click(function(){
		videoSoja.load();
		reload("#pauseSoja","#playSoja",this);
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		videoSoja.pause();
		hideShow("#playManeva","#pauseManeva");
		hideShow("#pauseSoja","#playSoja");
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		hideShow("#pauseManeva","#playManeva");
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		reload("#pauseManeva","#playManeva",this);
	});    
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		hideShow("#hideBorder","#showBorder");
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		hideShow("#showBorder","#hideBorder");
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		hideShow("#hideDivinity","#showDivinity");
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		hideShow("#showDivinity","#hideDivinity");
	});
});