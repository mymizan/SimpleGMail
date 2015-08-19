jQuery(document).ready(function($) {

	// uncheck all checked box on pageload 
	$('input:checkbox').removeAttr('checked');

	//mark box checked
	$('input[type="checkbox"]').click(function(event) {
		var $this = $(this);
		if($this.is(":checked")){
			$this.parents("tr").addClass("marked");
		} else{
			$this.parents("tr").removeClass("marked");
		}
	});

	// favorite icon
	$(".favorite span").click(function(event) {
		var $this = $(this);
		if($this.hasClass("glyphicon-star-empty")){
			$this.removeClass("glyphicon-star-empty").addClass("glyphicon-star");
		} else{
			$this.removeClass("glyphicon-star").addClass("glyphicon-star-empty");
		}
	});

	// label icon color change
	$("span.glyphicon-stop").each(function(event){
		var colors = ["red", "green", "blue", "pink", "violet", "yellow", "black"];
		i=0;
		$(this).click(function(event) {
			$(this).css('color', colors[i++]);
			if(i > colors.length){i = 0;}
		});		
	});
});