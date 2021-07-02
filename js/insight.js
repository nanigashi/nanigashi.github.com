(function(i,s){var e=i(".ins-search");var n=e.find(".ins-search-input");var a=e.find(".ins-section-wrapper");var o=e.find(".ins-section-container");e.parent().remove(".ins-search");i("body").append(e);function c(n){return i("<section>").addClass("ins-section").append(i("<header>").addClass("ins-section-header").text(n))}function u(n,t,e,r,a){return i("<div>").addClass("ins-selectable").addClass("ins-search-item").append(i("<header>").append(i("<i>").addClass("fa").addClass("fa-"+n)).append(t!=null&&t!=""?t:s.TRANSLATION["UNTITLED"]).append(e?i("<span>").addClass("ins-slug").text(e):null)).append(r?i("<p>").addClass("ins-search-preview").text(r):null).attr("data-url",a)}function r(t,n){var e;var r;if(n.length===0)return null;e=s.TRANSLATION[t];switch(t){case"POSTS":case"PAGES":r=n.map(function(n){return u("file",n.title,null,n.text.slice(0,150),s.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":r=n.map(function(n){return u(t==="CATEGORIES"?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return c(e).append(r)}function l(n,t){var e={};var r=n.pages.concat(n.posts);r.forEach(function(n){if(n[t]){n[t].forEach(function(n){e[n.name]=n})}});var a=[];for(var t in e){a.push(e[t])}return a}function f(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function p(n,e,r){var t=false;var a=f(n);var i=a.filter(function(t){var n=r.filter(function(n){if(!e.hasOwnProperty(n))return false;if(e[n].toUpperCase().indexOf(t)>-1)return true});if(n.length>0)return true;return false});return i.length===a.length}function d(t){return{POST:function(n){return p(t,n,["title","text"])},PAGE:function(n){return p(t,n,["title","text"])},CATEGORY:function(n){return p(t,n,["name","slug"])},TAG:function(n){return p(t,n,["name","slug"])}}}function h(n,a,t,i){var s=0;f(n).forEach(function(n){var r=new RegExp(n,"img");t.forEach(function(n,t){if(a.hasOwnProperty(n)){var e=a[n].match(r);s+=e?e.length*i[t]:0}})});return s}function v(t){return{POST:function(n){return h(t,n,["title","text"],[3,1])},PAGE:function(n){return h(t,n,["title","text"],[3,1])},CATEGORY:function(n){return h(t,n,["name","slug"],[1,1])},TAG:function(n){return h(t,n,["name","slug"],[1,1])}}}function T(n,t){var e=v(t);var r=d(t);var a=n.posts;var i=n.pages;var s=l(n,"tags");var o=l(n,"categories");return{posts:a.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}).slice(0,5),pages:i.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}).slice(0,5),categories:o.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}).slice(0,5),tags:s.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)}).slice(0,5)}}function g(n){o.empty();for(var t in n){o.append(r(t.toUpperCase(),n[t]))}}function C(n){if(n.length===0)return;var t=a[0].clientHeight;var e=n.position().top-a.scrollTop();var r=n[0].clientHeight+n.position().top;if(r>t+a.scrollTop()){a.scrollTop(r-a[0].clientHeight)}if(e<0){a.scrollTop(n.position().top)}}function t(n){var t=i.makeArray(o.find(".ins-selectable"));var e=-1;t.forEach(function(n,t){if(i(n).hasClass("active")){e=t;return}});var r=(t.length+e+n)%t.length;i(t[e]).removeClass("active");i(t[r]).addClass("active");C(i(t[r]))}function m(n){if(n&&n.length){location.href=n.attr("data-url")}}i.getJSON(s.CONTENT_URL,function(t){if(location.hash.trim()==="#ins-search"){e.addClass("show")}n.on("input",function(){var n=i(this).val();g(T(t,n))});n.trigger("input")});i(document).on("click focus",".search-field",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click focus",".search-form-submit",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){m(i(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(!e.hasClass("show"))return;switch(n.keyCode){case 27:e.removeClass("show");break;case 38:t(-1);break;case 40:t(1);break;case 13:m(o.find(".ins-selectable.active").eq(0));break}})})(jQuery,window.INSIGHT_CONFIG);