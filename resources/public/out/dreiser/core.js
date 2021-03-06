// Compiled by ClojureScript 0.0-2371
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
dreiser.core.plans = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"medium",new cljs.core.Keyword(null,"price","price",22129180),(10),new cljs.core.Keyword(null,"name","name",1843675177),"Micro",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products"], null)], null),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"large",new cljs.core.Keyword(null,"price","price",22129180),(19),new cljs.core.Keyword(null,"name","name",1843675177),"Shop",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products","pages"], null)], null),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"extra",new cljs.core.Keyword(null,"price","price",22129180),(25),new cljs.core.Keyword(null,"name","name",1843675177),"Business",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["products","pages","blog posts"], null)], null)], null);
dreiser.core.langs = new cljs.core.PersistentArrayMap(null, 6, ["AmericanEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"American English"], null),"AustralianEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Australian English"], null),"BritishEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"British English"], null),"CanadianEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Canadian English"], null),"NewZealandEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"New Zealand English"], null),"SouthAfricanEnglish",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"South African English"], null)], null);
dreiser.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
dreiser.core.edn_xhr = (function edn_xhr(p__7657){var map__7659 = p__7657;var map__7659__$1 = ((cljs.core.seq_QMARK_.call(null,map__7659))?cljs.core.apply.call(null,cljs.core.hash_map,map__7659):map__7659);var on_error = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));var on_complete = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__7659,map__7659__$1,on_error,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__7659,map__7659__$1,on_error,on_complete,data,url,method))
);
goog.events.listen(xhr,goog.net.EventType.ERROR,((function (xhr,map__7659,map__7659__$1,on_error,on_complete,data,url,method){
return (function (e){return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),xhr.getResponseText()], null));
});})(xhr,map__7659,map__7659__$1,on_error,on_complete,data,url,method))
);
return xhr.send(url,dreiser.core.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
dreiser.core.build_shopify_link = (function build_shopify_link(shop,r){var G__7661 = new cljs.core.Keyword("shopify.resources","type","shopify.resources/type",-405197047).cljs$core$IFn$_invoke$arity$1(r);if(cljs.core._EQ_.call(null,"default",G__7661))
{return "";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"article","article",-21685045),G__7661))
{return ("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shop)+"/admin/blogs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blog-id","blog-id",109948111).cljs$core$IFn$_invoke$arity$1(r))+"/articles/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397),G__7661))
{return ("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shop)+"/admin/pages/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"product","product",1363474257),G__7661))
{return ("https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shop)+"/admin/products/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shopify.resources","type","shopify.resources/type",-405197047).cljs$core$IFn$_invoke$arity$1(r)))));

}
}
}
}
});
dreiser.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shop","shop",-823644406),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"products-num","products-num",38406584),(0),new cljs.core.Keyword(null,"pages-num","pages-num",1575073779),(0),new cljs.core.Keyword(null,"articles-num","articles-num",-1898105774),(0)], null),new cljs.core.Keyword(null,"reports","reports",1629311767),cljs.core.PersistentArrayMap.EMPTY], null));
dreiser.core.start_progress = (function start_progress(){return NProgress.start();
});
dreiser.core.stop_progress = (function stop_progress(){return NProgress.done();
});
/**
* 
*/
dreiser.core.start_check_button_click = (function start_check_button_click(app){dreiser.core.start_progress.call(null);
return dreiser.core.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/start",new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (e){return setTimeout((function (){return window.location.reload();
}),(30000));
}),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (res){dreiser.core.stop_progress.call(null);
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"reports","reports",1629311767),(function (_){return res;
}));
})], null));
});
/**
* Component that renders 'Start check' button
*/
dreiser.core.start_check_button = (function start_check_button(app,owner){if(typeof dreiser.core.t7665 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7665 = (function (owner,app,start_check_button,meta7666){
this.owner = owner;
this.app = app;
this.start_check_button = start_check_button;
this.meta7666 = meta7666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7665.cljs$lang$type = true;
dreiser.core.t7665.cljs$lang$ctorStr = "dreiser.core/t7665";
dreiser.core.t7665.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7665");
});
dreiser.core.t7665.prototype.om$core$IRenderState$ = true;
dreiser.core.t7665.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": "col-xs-8 center-block start-panel"},React.DOM.div({"className": "text-center"},React.DOM.h3(null,"Thanks for joining!"),React.DOM.h4(null,"We are going to automatically proof-read your Shopify text content."),React.DOM.p(null,"Select language, press Start Check and comeback in few minutes."),cljs.core.apply.call(null,om.dom.select,null,cljs.core.map.call(null,((function (___$2){
return (function (lang,lang_key){return om.dom.option.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,lang)));
});})(___$2))
,dreiser.core.langs)),React.DOM.button({"onClick": ((function (___$2){
return (function (){return dreiser.core.start_check_button_click.call(null,self__.app);
});})(___$2))
, "className": "button success", "id": "start-check-button"},"Start check")));
});
dreiser.core.t7665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7667){var self__ = this;
var _7667__$1 = this;return self__.meta7666;
});
dreiser.core.t7665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7667,meta7666__$1){var self__ = this;
var _7667__$1 = this;return (new dreiser.core.t7665(self__.owner,self__.app,self__.start_check_button,meta7666__$1));
});
dreiser.core.__GT_t7665 = (function __GT_t7665(owner__$1,app__$1,start_check_button__$1,meta7666){return (new dreiser.core.t7665(owner__$1,app__$1,start_check_button__$1,meta7666));
});
}
return (new dreiser.core.t7665(owner,app,start_check_button,null));
});
dreiser.core.render_pricing_block = (function render_pricing_block(plan){return React.DOM.ul({"className": "pricing-table col-xs-12 col-md-4 fly-in-animation"},React.DOM.li({"className": "title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plan)),React.DOM.li({"className": "description"},React.DOM.strong(null,"check"),React.DOM.span(null,clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(plan)))),React.DOM.li({"className": "bullet-item"},"Daily reports"),React.DOM.li({"className": "bullet-item"},"Support via email"),React.DOM.li({"className": "price"},React.DOM.strong(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(plan)),React.DOM.p(null,"USD/month")),React.DOM.li({"className": "cta-button"},React.DOM.a({"href": ("/shopify/payment?plan="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plan))), "className": "button green-button"},"Subscribe")));
});
dreiser.core.render_all_pricing = (function render_all_pricing(){new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dreiser.core.app,dreiser.core.owner], null);
if(typeof dreiser.core.t7671 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7671 = (function (render_all_pricing,meta7672){
this.render_all_pricing = render_all_pricing;
this.meta7672 = meta7672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7671.cljs$lang$type = true;
dreiser.core.t7671.cljs$lang$ctorStr = "dreiser.core/t7671";
dreiser.core.t7671.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7671");
});
dreiser.core.t7671.prototype.om$core$IRenderState$ = true;
dreiser.core.t7671.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": "pricing-block white-block"},React.DOM.div({"className": "row"},React.DOM.header({"className": "text-center col-xs-12"},React.DOM.h2(null,"Pricing"),React.DOM.p(null,"Please select your plan. We have 30 days money back guarantee.")),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2){
return (function (plan){return dreiser.core.render_pricing_block.call(null,cljs.core.val.call(null,plan));
});})(___$2))
,dreiser.core.plans))));
});
dreiser.core.t7671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7673){var self__ = this;
var _7673__$1 = this;return self__.meta7672;
});
dreiser.core.t7671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7673,meta7672__$1){var self__ = this;
var _7673__$1 = this;return (new dreiser.core.t7671(self__.render_all_pricing,meta7672__$1));
});
dreiser.core.__GT_t7671 = (function __GT_t7671(render_all_pricing__$1,meta7672){return (new dreiser.core.t7671(render_all_pricing__$1,meta7672));
});
}
return (new dreiser.core.t7671(render_all_pricing,null));
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
dreiser.core.resource_report = (function resource_report(data,owner){if(typeof dreiser.core.t7677 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7677 = (function (owner,data,resource_report,meta7678){
this.owner = owner;
this.data = data;
this.resource_report = resource_report;
this.meta7678 = meta7678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7677.cljs$lang$type = true;
dreiser.core.t7677.cljs$lang$ctorStr = "dreiser.core/t7677";
dreiser.core.t7677.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7677");
});
dreiser.core.t7677.prototype.om$core$IRenderState$ = true;
dreiser.core.t7677.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;var resource_id = cljs.core.first.call(null,self__.data);var resource = cljs.core.second.call(null,self__.data);var reports = cljs.core.nth.call(null,self__.data,(2),cljs.core.PersistentVector.EMPTY);var num_of_errors = cljs.core.nth.call(null,self__.data,(3),(0));var title = cljs.core.first.call(null,cljs.core.filter.call(null,((function (resource_id,resource,reports,num_of_errors,___$2){
return (function (r){return cljs.core._EQ_.call(null,"title",cljs.core.first.call(null,r));
});})(resource_id,resource,reports,num_of_errors,___$2))
,reports));var description = cljs.core.first.call(null,cljs.core.filter.call(null,((function (resource_id,resource,reports,num_of_errors,title,___$2){
return (function (r){return (cljs.core._EQ_.call(null,"description",cljs.core.first.call(null,r))) || (cljs.core._EQ_.call(null,"content",cljs.core.first.call(null,r)));
});})(resource_id,resource,reports,num_of_errors,title,___$2))
,reports));var description_html = dreiser.core.htmlify_str.call(null,cljs.core.second.call(null,description));var shopname = new cljs.core.Keyword(null,"shopname","shopname",-911713205).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));var link = dreiser.core.build_shopify_link.call(null,shopname,resource);return React.DOM.li({"className": "resource-report"},React.DOM.div(null,React.DOM.span({"title": "Number of warnings", "className": "label label-warning pull-right"},num_of_errors),React.DOM.h4(null,React.DOM.a({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(resource)}, "href": link})),React.DOM.div({"dangerouslySetInnerHTML": {"__html": description_html}, "className": "report-property-content"})));
});
dreiser.core.t7677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7679){var self__ = this;
var _7679__$1 = this;return self__.meta7678;
});
dreiser.core.t7677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7679,meta7678__$1){var self__ = this;
var _7679__$1 = this;return (new dreiser.core.t7677(self__.owner,self__.data,self__.resource_report,meta7678__$1));
});
dreiser.core.__GT_t7677 = (function __GT_t7677(owner__$1,data__$1,resource_report__$1,meta7678){return (new dreiser.core.t7677(owner__$1,data__$1,resource_report__$1,meta7678));
});
}
return (new dreiser.core.t7677(owner,data,resource_report,null));
});
dreiser.core.render_reports_list = (function render_reports_list(type_key,app){return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (res){return om.core.build.call(null,dreiser.core.resource_report,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shopname","shopname",-911713205),new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(app))], null)], null));
}),new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(app),type_key))));
});
dreiser.core.render_tab_header = (function render_tab_header(app,tab_id,tab_name,type_key,total_key){return React.DOM.a({"data-toggle": "tab", "href": tab_id},React.DOM.span(null,tab_name),React.DOM.span({"className": "badge"},new cljs.core.Keyword(null,"num-of-errors","num-of-errors",41388829).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(app),type_key))));
});
/**
* Component that renders reports
*/
dreiser.core.reports_groups = (function reports_groups(app,owner){if(typeof dreiser.core.t7683 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7683 = (function (owner,app,reports_groups,meta7684){
this.owner = owner;
this.app = app;
this.reports_groups = reports_groups;
this.meta7684 = meta7684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7683.cljs$lang$type = true;
dreiser.core.t7683.cljs$lang$ctorStr = "dreiser.core/t7683";
dreiser.core.t7683.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7683");
});
dreiser.core.t7683.prototype.om$core$IRenderState$ = true;
dreiser.core.t7683.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": "col-xs-12"},React.DOM.ul({"className": "nav nav-pills"},React.DOM.li({"className": "active"},dreiser.core.render_tab_header.call(null,self__.app,"#products-report","Products",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.Keyword(null,"products-num","products-num",38406584))),React.DOM.li(null,dreiser.core.render_tab_header.call(null,self__.app,"#pages-report","Pages",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pages-num","pages-num",1575073779))),React.DOM.li(null,dreiser.core.render_tab_header.call(null,self__.app,"#articles-report","Articles",new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"articles-num","articles-num",-1898105774)))),React.DOM.div({"className": "tab-content"},React.DOM.div({"className": "tab-pane active", "id": "products-report"},React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of products' descriptions with possible errors. Please review them")),dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"product","product",1363474257),self__.app)),React.DOM.div({"className": "tab-pane", "id": "pages-report"},(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app)),"large")) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app)),"extra")))?(function (){React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of pages' contents with possible errors. Please review them"));
return dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"page","page",849072397),self__.app);
})():React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"You are on the ",new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app))," plan. Please upgrade to get report about your pages content")))),React.DOM.div({"className": "tab-pane", "id": "articles-report"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app)),"extra"))?(function (){React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"Below are the list of blog posts' contents with possible errors. Please review them"));
return dreiser.core.render_reports_list.call(null,new cljs.core.Keyword(null,"article","article",-21685045),self__.app);
})():React.DOM.div({"className": "alert alert-warning"},React.DOM.p(null,"You are on the ",new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app))," plan. Please upgrade to get report about your blog posts content"))))));
});
dreiser.core.t7683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7685){var self__ = this;
var _7685__$1 = this;return self__.meta7684;
});
dreiser.core.t7683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7685,meta7684__$1){var self__ = this;
var _7685__$1 = this;return (new dreiser.core.t7683(self__.owner,self__.app,self__.reports_groups,meta7684__$1));
});
dreiser.core.__GT_t7683 = (function __GT_t7683(owner__$1,app__$1,reports_groups__$1,meta7684){return (new dreiser.core.t7683(owner__$1,app__$1,reports_groups__$1,meta7684));
});
}
return (new dreiser.core.t7683(owner,app,reports_groups,null));
});
/**
* Component that renders reports
*/
dreiser.core.reports_view = (function reports_view(app,owner){if(typeof dreiser.core.t7689 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7689 = (function (owner,app,reports_view,meta7690){
this.owner = owner;
this.app = app;
this.reports_view = reports_view;
this.meta7690 = meta7690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7689.cljs$lang$type = true;
dreiser.core.t7689.cljs$lang$ctorStr = "dreiser.core/t7689";
dreiser.core.t7689.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7689");
});
dreiser.core.t7689.prototype.om$core$IRenderState$ = true;
dreiser.core.t7689.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": "row"},((!((new cljs.core.Keyword(null,"shopify_id","shopify_id",1154983288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app)) == null)))?(((new cljs.core.Keyword(null,"charge_id","charge_id",473562705).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop","shop",-823644406).cljs$core$IFn$_invoke$arity$1(self__.app)) == null))?(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(self__.app))) || (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(self__.app))))))?om.core.build.call(null,dreiser.core.start_check_button,self__.app):om.core.build.call(null,dreiser.core.reports_groups,self__.app)):React.DOM.div(null)):null));
});
dreiser.core.t7689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7691){var self__ = this;
var _7691__$1 = this;return self__.meta7690;
});
dreiser.core.t7689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7691,meta7690__$1){var self__ = this;
var _7691__$1 = this;return (new dreiser.core.t7689(self__.owner,self__.app,self__.reports_view,meta7690__$1));
});
dreiser.core.__GT_t7689 = (function __GT_t7689(owner__$1,app__$1,reports_view__$1,meta7690){return (new dreiser.core.t7689(owner__$1,app__$1,reports_view__$1,meta7690));
});
}
return (new dreiser.core.t7689(owner,app,reports_view,null));
});
dreiser.core.dreiser_app = (function dreiser_app(app,owner){if(typeof dreiser.core.t7698 !== 'undefined')
{} else
{
/**
* @constructor
*/
dreiser.core.t7698 = (function (owner,app,dreiser_app,meta7699){
this.owner = owner;
this.app = app;
this.dreiser_app = dreiser_app;
this.meta7699 = meta7699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dreiser.core.t7698.cljs$lang$type = true;
dreiser.core.t7698.cljs$lang$ctorStr = "dreiser.core/t7698";
dreiser.core.t7698.cljs$lang$ctorPrWriter = (function (this__4186__auto__,writer__4187__auto__,opt__4188__auto__){return cljs.core._write.call(null,writer__4187__auto__,"dreiser.core/t7698");
});
dreiser.core.t7698.prototype.om$core$IRenderState$ = true;
dreiser.core.t7698.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": "container"},om.core.build.call(null,dreiser.core.reports_view,self__.app));
});
dreiser.core.t7698.prototype.om$core$IDidUpdate$ = true;
dreiser.core.t7698.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return jQuery("[data-toggle=\"popover\"]").popover((function (){var obj7702 = {"html":true,"placement":"bottom"};return obj7702;
})());
});
dreiser.core.t7698.prototype.om$core$IWillMount$ = true;
dreiser.core.t7698.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;dreiser.core.start_progress.call(null);
dreiser.core.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/reports",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (p1__7692_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"reports","reports",1629311767),((function (___$1){
return (function (___$2){return p1__7692_SHARP_;
});})(___$1))
);
});})(___$1))
], null));
return dreiser.core.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/stats",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (e){dreiser.core.stop_progress.call(null);
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"shop","shop",-823644406),((function (___$1){
return (function (___$2){return e;
});})(___$1))
);
});})(___$1))
], null));
});
dreiser.core.t7698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7700){var self__ = this;
var _7700__$1 = this;return self__.meta7699;
});
dreiser.core.t7698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7700,meta7699__$1){var self__ = this;
var _7700__$1 = this;return (new dreiser.core.t7698(self__.owner,self__.app,self__.dreiser_app,meta7699__$1));
});
dreiser.core.__GT_t7698 = (function __GT_t7698(owner__$1,app__$1,dreiser_app__$1,meta7699){return (new dreiser.core.t7698(owner__$1,app__$1,dreiser_app__$1,meta7699));
});
}
return (new dreiser.core.t7698(owner,app,dreiser_app,null));
});
om.core.root.call(null,dreiser.core.dreiser_app,dreiser.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
