// Compiled by ClojureScript 0.0-2202
goog.provide('dreiser.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
dreiser.core.plans = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"medium","medium",4230841063),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"medium",new cljs.core.Keyword(null,"price","price",1120838843),10,new cljs.core.Keyword(null,"name","name",1017277949),"Micro",new cljs.core.Keyword(null,"features","features",723244975),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),new cljs.core.Keyword(null,"large","large",1116647085),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"large",new cljs.core.Keyword(null,"price","price",1120838843),19,new cljs.core.Keyword(null,"name","name",1017277949),"Shop",new cljs.core.Keyword(null,"features","features",723244975),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products","pages"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),new cljs.core.Keyword(null,"extra","extra",1110869890),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"extra",new cljs.core.Keyword(null,"price","price",1120838843),25,new cljs.core.Keyword(null,"name","name",1017277949),"Business",new cljs.core.Keyword(null,"features","features",723244975),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products","pages","blog posts"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null));
dreiser.core.langs = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, ["AmericanEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"American English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),"AustralianEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"Australian English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),"BritishEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"British English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),"CanadianEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"Canadian English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),"NewZealandEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"New Zealand English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),"SouthAfricanEnglish",cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"South African English"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null));
dreiser.core.meths = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null));
dreiser.core.edn_xhr = (function edn_xhr(p__9218){var map__9220 = p__9218;var map__9220__$1 = ((cljs.core.seq_QMARK_.call(null,map__9220))?cljs.core.apply.call(null,cljs.core.hash_map,map__9220):map__9220);var on_error = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__9220,map__9220__$1,on_error,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__9220,map__9220__$1,on_error,on_complete,data,url,method))
);
goog.events.listen(xhr,goog.net.EventType.ERROR,((function (xhr,map__9220,map__9220__$1,on_error,on_complete,data,url,method){
return (function (e){return on_error.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),xhr.getResponseText()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
});})(xhr,map__9220,map__9220__$1,on_error,on_complete,data,url,method))
);
return xhr.send(url,dreiser.core.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
dreiser.core.build_shopify_link = (function build_shopify_link(shop,r){var G__9222 = new cljs.core.Keyword("shopify.resources","type","shopify.resources/type",2940548200).cljs$core$IFn$_invoke$arity$1(r);if(cljs.core._EQ_.call(null,"default",G__9222))
{return "";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"article","article",4576493672),G__9222))
{return [cljs.core.str("https://"),cljs.core.str(shop),cljs.core.str("/admin/blogs/"),cljs.core.str(new cljs.core.Keyword(null,"blog-id","blog-id",992525976).cljs$core$IFn$_invoke$arity$1(r)),cljs.core.str("/articles/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(r))].join('');
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",1017337345),G__9222))
{return [cljs.core.str("https://"),cljs.core.str(shop),cljs.core.str("/admin/pages/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(r))].join('');
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"product","product",704430177),G__9222))
{return [cljs.core.str("https://"),cljs.core.str(shop),cljs.core.str("/admin/products/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(r))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword("shopify.resources","type","shopify.resources/type",2940548200).cljs$core$IFn$_invoke$arity$1(r))].join('')));
} else
{return null;
}
}
}
}
}
});
dreiser.core.app_state = cljs.core.atom.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shop","shop",1017433704),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"products-num","products-num",2044826383),0,new cljs.core.Keyword(null,"pages-num","pages-num",1914143087),0,new cljs.core.Keyword(null,"articles-num","articles-num",635993960),0], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)),new cljs.core.Keyword(null,"reports","reports",2108507441),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
dreiser.core.start_progress = (function start_progress(){return NProgress.start();
});
dreiser.core.stop_progress = (function stop_progress(){return NProgress.done();
});
/**
* 
*/
dreiser.core.start_check_button_click = (function start_check_button_click(app){dreiser.core.start_progress.call(null);
return dreiser.core.edn_xhr.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/start",new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (e){return setTimeout((function (){return window.location.reload();
}),30000);
}),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){dreiser.core.stop_progress.call(null);
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"reports","reports",2108507441),(function (_){return res;
}));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
});
/**
* Component that renders 'Start check' button
*/
dreiser.core.start_check_button = (function start_check_button(app,owner){if(typeof dreiser.core.t9226 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9226 = (function (owner,app,start_check_button,meta9227){
this.owner = owner;
this.app = app;
this.start_check_button = start_check_button;
this.meta9227 = meta9227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9226.cljs$lang$type = true;
dreiser.core.t9226.cljs$lang$ctorStr = "dreiser.core/t9226";
dreiser.core.t9226.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9226");
});
dreiser.core.t9226.prototype.om$core$IRender$ = true;
dreiser.core.t9226.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-xs-8 center-block start-panel"},React.DOM.div({"className": "text-center"},React.DOM.h3(null,"Thanks for joining!"),React.DOM.h4(null,"We are going to automatically proof-read your Shopify text content."),React.DOM.p(null,"Select language, press Start Check and comeback in few minutes."),cljs.core.apply.call(null,om.dom.select,null,cljs.core.map.call(null,((function (___$1){
return (function (lang,lang_key){return om.dom.option.call(null,null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,lang)));
});})(___$1))
,dreiser.core.langs)),React.DOM.button({"onClick": ((function (___$1){
return (function (){return dreiser.core.start_check_button_click.call(null,self__.app);
});})(___$1))
, "className": "button success", "id": "start-check-button"},"Start check")));
});
dreiser.core.t9226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9228){var self__ = this;
var _9228__$1 = this;return self__.meta9227;
});
dreiser.core.t9226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9228,meta9227__$1){var self__ = this;
var _9228__$1 = this;return (new dreiser.core.t9226(self__.owner,self__.app,self__.start_check_button,meta9227__$1));
});
dreiser.core.__GT_t9226 = (function __GT_t9226(owner__$1,app__$1,start_check_button__$1,meta9227){return (new dreiser.core.t9226(owner__$1,app__$1,start_check_button__$1,meta9227));
});
}
return (new dreiser.core.t9226(owner,app,start_check_button,null));
});
dreiser.core.render_pricing_block = (function render_pricing_block(plan){return React.DOM.ul({"className": "pricing-table col-xs-12 col-md-4 fly-in-animation"},React.DOM.li({"className": "title"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(plan)),React.DOM.li({"className": "description"},React.DOM.strong(null,"check"),React.DOM.span(null,clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(plan)))),React.DOM.li({"className": "bullet-item"},"Daily reports"),React.DOM.li({"className": "bullet-item"},"Support via email"),React.DOM.li({"className": "price"},React.DOM.strong(null,new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(plan)),React.DOM.p(null,"USD/month")),React.DOM.li({"className": "cta-button"},React.DOM.a({"href": [cljs.core.str("/shopify/payment?plan="),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(plan))].join(''), "className": "button green-button"},"Subscribe")));
});
dreiser.core.render_all_pricing = (function render_all_pricing(){cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dreiser.core.app,dreiser.core.owner], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null));
if(typeof dreiser.core.t9232 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9232 = (function (render_all_pricing,meta9233){
this.render_all_pricing = render_all_pricing;
this.meta9233 = meta9233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9232.cljs$lang$type = true;
dreiser.core.t9232.cljs$lang$ctorStr = "dreiser.core/t9232";
dreiser.core.t9232.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9232");
});
dreiser.core.t9232.prototype.om$core$IRender$ = true;
dreiser.core.t9232.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pricing-block white-block"},React.DOM.div({"className": "row"},React.DOM.header({"className": "text-center col-xs-12"},React.DOM.h2(null,"Pricing"),React.DOM.p(null,"Please select your plan. We have 30 days money back guarantee.")),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (plan){return om.core.build.call(null,dreiser.core.render_pricing_block,cljs.core.val.call(null,plan));
});})(___$1))
,dreiser.core.plans))));
});
dreiser.core.t9232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9234){var self__ = this;
var _9234__$1 = this;return self__.meta9233;
});
dreiser.core.t9232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9234,meta9233__$1){var self__ = this;
var _9234__$1 = this;return (new dreiser.core.t9232(self__.render_all_pricing,meta9233__$1));
});
dreiser.core.__GT_t9232 = (function __GT_t9232(render_all_pricing__$1,meta9233){return (new dreiser.core.t9232(render_all_pricing__$1,meta9233));
});
}
return (new dreiser.core.t9232(render_all_pricing,null));
});
dreiser.core.htmlify_str = (function htmlify_str(s){if((s == null))
{return "";
} else
{return clojure.string.replace.call(null,s,/\n/,"<br>");
}
});
/**
* 
*/
dreiser.core.resource_report = (function resource_report(data,owner){if(typeof dreiser.core.t9238 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9238 = (function (owner,data,resource_report,meta9239){
this.owner = owner;
this.data = data;
this.resource_report = resource_report;
this.meta9239 = meta9239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9238.cljs$lang$type = true;
dreiser.core.t9238.cljs$lang$ctorStr = "dreiser.core/t9238";
dreiser.core.t9238.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9238");
});
dreiser.core.t9238.prototype.om$core$IRender$ = true;
dreiser.core.t9238.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var resource_id = cljs.core.first.call(null,self__.data);var resource = cljs.core.second.call(null,self__.data);var reports = cljs.core.nth.call(null,self__.data,2,cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));var num_of_errors = cljs.core.nth.call(null,self__.data,3,0);var title = cljs.core.first.call(null,cljs.core.filter.call(null,((function (resource_id,resource,reports,num_of_errors,___$1){
return (function (r){return cljs.core._EQ_.call(null,"title",cljs.core.first.call(null,r));
});})(resource_id,resource,reports,num_of_errors,___$1))
,reports));var description = cljs.core.first.call(null,cljs.core.filter.call(null,((function (resource_id,resource,reports,num_of_errors,title,___$1){
return (function (r){return (cljs.core._EQ_.call(null,"description",cljs.core.first.call(null,r))) || (cljs.core._EQ_.call(null,"content",cljs.core.first.call(null,r)));
});})(resource_id,resource,reports,num_of_errors,title,___$1))
,reports));var description_html = dreiser.core.htmlify_str.call(null,cljs.core.second.call(null,description));var shopname = new cljs.core.Keyword(null,"shopname","shopname",669375987).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));var link = dreiser.core.build_shopify_link.call(null,shopname,resource);return React.DOM.li({"className": "resource-report"},React.DOM.div(null,React.DOM.span({"title": "Number of warnings", "className": "label label-warning pull-right"},num_of_errors),React.DOM.h4(null,React.DOM.a({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(resource)}, "href": link})),React.DOM.div({"dangerouslySetInnerHTML": {"__html": description_html}, "className": "report-property-content"})));
});
dreiser.core.t9238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9240){var self__ = this;
var _9240__$1 = this;return self__.meta9239;
});
dreiser.core.t9238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9240,meta9239__$1){var self__ = this;
var _9240__$1 = this;return (new dreiser.core.t9238(self__.owner,self__.data,self__.resource_report,meta9239__$1));
});
dreiser.core.__GT_t9238 = (function __GT_t9238(owner__$1,data__$1,resource_report__$1,meta9239){return (new dreiser.core.t9238(owner__$1,data__$1,resource_report__$1,meta9239));
});
}
return (new dreiser.core.t9238(owner,data,resource_report,null));
});
dreiser.core.render_reports_list = (function render_reports_list(type_key,app){return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (res){return om.core.build.call(null,dreiser.core.resource_report,res,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shopname","shopname",669375987),new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(app))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
}),new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(app),type_key))));
});
dreiser.core.render_tab_header = (function render_tab_header(app,tab_id,tab_name,type_key,total_key){return React.DOM.a({"data-toggle": "tab", "href": tab_id},React.DOM.span(null,tab_name),React.DOM.span({"className": "badge"},new cljs.core.Keyword(null,"num-of-errors","num-of-errors",1072115212).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(app),type_key))));
});
/**
* Component that renders reports
*/
dreiser.core.reports_groups = (function reports_groups(app,owner){if(typeof dreiser.core.t9244 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9244 = (function (owner,app,reports_groups,meta9245){
this.owner = owner;
this.app = app;
this.reports_groups = reports_groups;
this.meta9245 = meta9245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9244.cljs$lang$type = true;
dreiser.core.t9244.cljs$lang$ctorStr = "dreiser.core/t9244";
dreiser.core.t9244.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9244");
});
dreiser.core.t9244.prototype.om$core$IRender$ = true;
dreiser.core.t9244.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-xs-12"},React.DOM.ul({"className": "nav nav-pills"},React.DOM.li({"className": "active"},dreiser.core.render_tab_header.call(null,self__.app,"#products-report","Products",new cljs.core.Keyword(null,"product","product",704430177),new cljs.core.Keyword(null,"products-num","products-num",2044826383))),React.DOM.li(null,dreiser.core.render_tab_header.call(null,self__.app,"#pages-report","Pages",new cljs.core.Keyword(null,"page","page",1017337345),new cljs.core.Keyword(null,"pages-num","pages-num",1914143087))),React.DOM.li(null,dreiser.core.render_tab_header.call(null,self__.app,"#articles-report","Articles",new cljs.core.Keyword(null,"article","article",4576493672),new cljs.core.Keyword(null,"articles-num","articles-num",635993960)))),React.DOM.div({"className": "tab-content"},React.DOM.div({"className": "tab-pane active", "id": "products-report"},React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of products' descriptions with possible errors. Please review them")),dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"product","product",704430177),self__.app)),React.DOM.div({"className": "tab-pane", "id": "pages-report"},(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1017347739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app)),"large")) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1017347739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app)),"extra")))?(function (){React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of pages' contents with possible errors. Please review them"));
return dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"page","page",1017337345),self__.app);
})():React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"You are on the ",new cljs.core.Keyword(null,"plan","plan",1017347739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app))," plan. Please upgrade to get report about your pages content")))),React.DOM.div({"className": "tab-pane", "id": "articles-report"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1017347739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app)),"extra"))?(function (){React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of blog posts' contents with possible errors. Please review them"));
return dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"article","article",4576493672),self__.app);
})():React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"You are on the ",new cljs.core.Keyword(null,"plan","plan",1017347739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app))," plan. Please upgrade to get report about your blog posts content"))))));
});
dreiser.core.t9244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9246){var self__ = this;
var _9246__$1 = this;return self__.meta9245;
});
dreiser.core.t9244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9246,meta9245__$1){var self__ = this;
var _9246__$1 = this;return (new dreiser.core.t9244(self__.owner,self__.app,self__.reports_groups,meta9245__$1));
});
dreiser.core.__GT_t9244 = (function __GT_t9244(owner__$1,app__$1,reports_groups__$1,meta9245){return (new dreiser.core.t9244(owner__$1,app__$1,reports_groups__$1,meta9245));
});
}
return (new dreiser.core.t9244(owner,app,reports_groups,null));
});
/**
* Component that renders reports
*/
dreiser.core.reports_view = (function reports_view(app,owner){if(typeof dreiser.core.t9250 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9250 = (function (owner,app,reports_view,meta9251){
this.owner = owner;
this.app = app;
this.reports_view = reports_view;
this.meta9251 = meta9251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9250.cljs$lang$type = true;
dreiser.core.t9250.cljs$lang$ctorStr = "dreiser.core/t9250";
dreiser.core.t9250.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9250");
});
dreiser.core.t9250.prototype.om$core$IRender$ = true;
dreiser.core.t9250.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row"},((!((new cljs.core.Keyword(null,"shopify_id","shopify_id",4791527206).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app)) == null)))?(((new cljs.core.Keyword(null,"charge_id","charge_id",2583680504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",1017433704).cljs$core$IFn$_invoke$arity$1(self__.app)) == null))?om.core.build.call(null,dreiser.core.render_all_pricing,self__.app):(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(self__.app))) || (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"product","product",704430177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reports","reports",2108507441).cljs$core$IFn$_invoke$arity$1(self__.app))))))?om.core.build.call(null,dreiser.core.start_check_button,self__.app):om.core.build.call(null,dreiser.core.reports_groups,self__.app))):null));
});
dreiser.core.t9250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9252){var self__ = this;
var _9252__$1 = this;return self__.meta9251;
});
dreiser.core.t9250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9252,meta9251__$1){var self__ = this;
var _9252__$1 = this;return (new dreiser.core.t9250(self__.owner,self__.app,self__.reports_view,meta9251__$1));
});
dreiser.core.__GT_t9250 = (function __GT_t9250(owner__$1,app__$1,reports_view__$1,meta9251){return (new dreiser.core.t9250(owner__$1,app__$1,reports_view__$1,meta9251));
});
}
return (new dreiser.core.t9250(owner,app,reports_view,null));
});
dreiser.core.dreiser_app = (function dreiser_app(app,owner){if(typeof dreiser.core.t9257 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t9257 = (function (owner,app,dreiser_app,meta9258){
this.owner = owner;
this.app = app;
this.dreiser_app = dreiser_app;
this.meta9258 = meta9258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t9257.cljs$lang$type = true;
dreiser.core.t9257.cljs$lang$ctorStr = "dreiser.core/t9257";
dreiser.core.t9257.cljs$lang$ctorPrWriter = (function (this__4070__auto__,writer__4071__auto__,opt__4072__auto__){return cljs.core._write.call(null,writer__4071__auto__,"dreiser.core/t9257");
});
dreiser.core.t9257.prototype.om$core$IRender$ = true;
dreiser.core.t9257.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "container"},om.core.build.call(null,dreiser.core.reports_view,self__.app));
});
dreiser.core.t9257.prototype.om$core$IDidUpdate$ = true;
dreiser.core.t9257.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return jQuery(document).foundation();
});
dreiser.core.t9257.prototype.om$core$IWillMount$ = true;
dreiser.core.t9257.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;dreiser.core.start_progress.call(null);
dreiser.core.edn_xhr.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"/reports",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (___$1){
return (function (p1__9253_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"reports","reports",2108507441),((function (___$1){
return (function (___$2){return p1__9253_SHARP_;
});})(___$1))
);
});})(___$1))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
return dreiser.core.edn_xhr.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"/stats",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (___$1){
return (function (e){dreiser.core.stop_progress.call(null);
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shop","shop",1017433704),((function (___$1){
return (function (___$2){return e;
});})(___$1))
);
});})(___$1))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
});
dreiser.core.t9257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9259){var self__ = this;
var _9259__$1 = this;return self__.meta9258;
});
dreiser.core.t9257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9259,meta9258__$1){var self__ = this;
var _9259__$1 = this;return (new dreiser.core.t9257(self__.owner,self__.app,self__.dreiser_app,meta9258__$1));
});
dreiser.core.__GT_t9257 = (function __GT_t9257(owner__$1,app__$1,dreiser_app__$1,meta9258){return (new dreiser.core.t9257(owner__$1,app__$1,dreiser_app__$1,meta9258));
});
}
return (new dreiser.core.t9257(owner,app,dreiser_app,null));
});
om.core.root.call(null,dreiser.core.dreiser_app,dreiser.core.app_state,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),"/Users/podviaznikov/assembly/dreiser/src/cljs/dreiser/core.cljs"], null)));
