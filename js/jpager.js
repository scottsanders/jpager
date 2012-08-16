(function($){
  $.fn.jpager = function(options) {

    var opts = $.extend({}, $.fn.jpager.defaults, options);
    var count = $(this).children().size();
    var pages = Math.ceil(count / opts.limit);
    var type = "ul";

    return this.each(function() {
		
		type = this.nodeName;

		$(this).wrap("<div class=\"jpager\">");
		
		for(i=1;i<=pages;i++){
			
			$(this).parent().append("<"+type+" class=\""+$(this).parent().attr("class")+" page page-"+i+"\">");
		
		}

		$(this).children().each(function(i){
			
			$(this).appendTo(type+".page-"+Math.ceil((i+1) / opts.limit));

		});
		
		$(this).remove();
	});

  };

  $.fn.jpager.defaults = {limit: 4};

})(jQuery);