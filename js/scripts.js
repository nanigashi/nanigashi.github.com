(function(c){var t=c("#search-form-wrap"),a=false,e=200;var n=function(){a=true};var i=function(t){setTimeout(function(){a=false;t&&t()},e)};var r=['<div style="display: none;">','<script src="https://s11.cnzz.com/z_stat.php?id=1260716016&web_id=1260716016" language="JavaScript"><\/script>',"</div>"].join("");var o=c(r);c("#container").append(o);c("#nav-search-btn").on("click",function(){if(a)return;n();t.addClass("on");i(function(){c(".search-form-input").focus()})});c(".search-form-input").on("blur",function(){n();t.removeClass("on");i()});c("body").on("click",function(){c(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var a=c(this),e=a.attr("data-url"),n=encodeURIComponent(e),i="article-share-box-"+a.attr("data-id"),r=a.offset();if(c("#"+i).length){var o=c("#"+i);if(o.hasClass("on")){o.removeClass("on");return}}else{var s=['<div id="'+i+'" class="article-share-box">','<input class="article-share-input" value="'+e+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+n+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+n+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+n+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+n+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join("");var o=c(s);c("body").append(o)}c(".article-share-box.on").hide();o.css({top:r.top+25,left:r.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){c(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});c(".article-entry").each(function(t){c(this).find("img").each(function(){if(c(this).parent().hasClass("fancybox"))return;if(c(this).parent().parent().hasClass("entry-thumbnail"))return;var t=this.alt;if(t)c(this).after('<span class="caption">'+t+"</span>");c(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')});c(this).find(".fancybox").each(function(){c(this).attr("rel","article"+t)})});if(c.fancybox){c(".fancybox").fancybox()}var s=c("#container"),l=false,f=200;var h=function(){l=true};var u=function(){setTimeout(function(){l=false},f)};c("#main-nav-toggle").on("click",function(){if(l)return;h();s.toggleClass("mobile-nav-on");u()});c("#wrap").on("click",function(){if(l||!s.hasClass("mobile-nav-on"))return;s.removeClass("mobile-nav-on")})})(jQuery);