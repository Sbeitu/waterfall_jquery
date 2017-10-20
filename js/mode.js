$(window).on("load", function() {
	function init() {
		var boxW = $("#bigbox>.box").outerWidth(),
			cloumn = Math.floor($(window).width() / boxW),
			heightArr = [];
		$(".bigbox").width(cloumn*boxW)
		for(var i = 0; i < $("#bigbox>.box").length; i++) {
			if(heightArr.length < cloumn) {
				heightArr.push(0)
			}
			var boxH = $("#bigbox>.box").eq(i).outerHeight(),
				numMin = Math.min.apply(Math, heightArr),
				index = $.inArray(numMin, heightArr);
			$("#bigbox>.box").eq(i).animate({ left: boxW * index, top: heightArr[index] },1000)
			heightArr[index] += boxH;
		}
	}
	init();
	function render() {
		for(var i = 0; i < 10; i++) {
			var newbox = $("<div></div>").addClass("box"),
				newpic = $("<div></div>").addClass("pic"),
				newimg = $("<img>").attr("src", "img/(" + i + ").jpg");
			newimg.appendTo(newpic);
			newpic.appendTo(newbox);
			newbox.appendTo(".bigbox")
		}
	}
	$(window).on("scroll", function() {
		var top = $(document).height() - $(window).height();
		if($(this).scrollTop() >= top) {
			render()
			init()
		}
	})
	$(window).on("resize",function(){
		init()
	})
})