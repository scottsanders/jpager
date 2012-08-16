(function($){
  $.fn.jpager = function(options) {

    var opts = $.extend({}, $.fn.jpager.defaults, options);
    var count = $(this).children().size();
    var pages = Math.ceil(count / opts.limit);
    var type = "ul";

    return this.each(function() {
		
		type = this.nodeName;

		$(this).wrap("<div class=\"jpager\">");

		for(i=2;i<=pages;i++){
			
			$(this).parent().append("<"+type+" class=\""+$(this).attr("class")+" jpage jpage-"+i+"\">");
		
		}

		$(this).addClass("jpage jpage-1 jpage-current");

		$(this).children().each(function(i){
			
			$(this).appendTo(type+".jpage-"+Math.ceil((i+1) / opts.limit));

		});

		pagination = "<ul class=\"jpagination\">";
		//pagination += "<li>&laquo;</li>";
		for(i=1;i<=pages;i++){
			pagination += "<li><a class=\"jpaginate\" rel=\"jpage-"+i+"\" href=\"#jpage-"+i+"\">"+i+"</a></li>";
		}
		//pagination += "<li>&raquo;</li>";
		pagination += "</ul>";
		$(".jpager").append(pagination);
		$(".jpager").prepend(pagination);
		
		$(".jpaginate").click(function(){
			$(".jpaginate").removeClass("jpaginate-current");
			$(".jpage").removeClass("jpage-current");
			$(this).addClass("jpaginate-current");
			$("."+$(this).attr("rel")).addClass("jpage-current");
			return false;
		});
	});

  };

  $.fn.jpager.defaults = {limit: 4};

})(jQuery);