(function($){
  $.fn.jpager = function(options) {

    var opts = $.extend({}, $.fn.jpager.defaults, options);
    var count = $(this).children().size();
    var pages = Math.ceil(count / opts.limit);
    var type = "ul";

    if(options == 'sort')
        return jpage_sort();
    else {
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
				pagination += "<li><a class=\"jpaginate";
				if(i==1) pagination += " jpaginate-current";
				pagination += "\" rel=\"jpage-"+i+"\" href=\"#jpage-"+i+"\">"+i+"</a></li>";
			}
			//pagination += "<li>&raquo;</li>";
			pagination += "</ul>";
			$(".jpager").append(pagination);
			
			$(".jpaginate").click(function(){
				$(".jpaginate").removeClass("jpaginate-current");
				$(".jpage").removeClass("jpage-current");
				$(this).addClass("jpaginate-current");
				$("."+$(this).attr("rel")).addClass("jpage-current");
				return false;
			});

			sorting = "<select class=\"jpagesortable\">";
			sorting += "<option value=\"data-name\">Name</option>";
			sorting += "<option value=\"data-price\">Price</option>";
			sorting += "</select>";
			$(".jpager").append(sorting);
		});
	}

	function jpage_sort(){
		alert("sort");
	}

  };

  $.fn.jpager.defaults = {limit: 5};

  $.fn.jpager_sort = function(options) {

    var opts = $.extend({}, $.fn.jpager_sort.defaults, options);

    return this.each(function() {
		var elems = $(this).find(".jpage").children();
		elems.sort(function(a,b){
			if($(a).attr(opts.sort) > $(b).attr(opts.sort))
				return 1;
			else if ($(a).attr(opts.sort) < $(b).attr(opts.sort))
				return -1;
			else
				return 0;
		});
		elems.each(function(i){
			$(this).appendTo(".jpage-"+Math.ceil((i+1) / opts.limit));
		});
		

	});

  };

  $.fn.jpager_sort.defaults = {sort: "title",limit: 5};


})(jQuery);