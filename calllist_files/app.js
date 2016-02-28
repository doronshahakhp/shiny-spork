/** 
Included Files
/scripts/common/hp-utils.js
/scripts/common/ui-core-min.js
/scripts/molecules/utilities-core-hpe.js
/scripts/common/animated-container.js
/scripts/common/custom-popup.js
/scripts/common/customPopup.js
/scripts/common/form-reset.js
/scripts/common/popup-utils.js 
/scripts/common/selectable.js
/scripts/common/step_descriptor.js
/scripts/common/tabs.js
/scripts/common/under-layed-popup.js
/scripts/molecules/dropdown.js
/scripts/molecules/faceted-nav-hpe.js
/scripts/molecules/forms.js
/scripts/molecules/lightbox-image-gallery.js
/scripts/molecules/links-list-expandable.js
/scripts/molecules/multioverlay.js
/scripts/molecules/MultipleSelectionBox.js
/scripts/molecules/pagination-views.js
/scripts/molecules/pagination.js
/scripts/molecules/print.js
/scripts/molecules/prog-disc.js
/scripts/molecules/radio-checkboxes.js
/scripts/molecules/rating.js
/scripts/molecules/read-more-less.js
/scripts/molecules/secondary-nav.js
/scripts/molecules/spooler-hpe.js
/scripts/molecules/tooltips.js
/scripts/molecules/video-brightcove.js
/scripts/molecules/video-poster.js
/scripts/search/faceted-nav-tree-hpe.js
/scripts/sortableTable.js
/scripts/bp/global.js
/scripts/bp/validations.js
/scripts/bp/hp.ProgressiveDisclosure.js
**/

// hp-utils.js
(function(HP){

	HP.Utils = {
		ready: function (func) {
			document.addEvent('domready', func);
		}
	}
	
})(window.HP||(window.HP={}));
hp = window.hp || {};

function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// ui-core-min.js
/*03-08-2011 21:00 CT */
window.isIE6 = navigator.userAgent.toUpperCase().indexOf("MSIE 6.0") != -1;//IE6
window.isIE7 = navigator.userAgent.toUpperCase().indexOf("MSIE 7.0") != -1;//IE7
window.isIE8 = navigator.userAgent.toUpperCase().indexOf("MSIE 8.0") != -1;//IE8
window.isIE9 = navigator.userAgent.toUpperCase().indexOf("MSIE 9.0") != -1;//IE9
window.isIE10 = navigator.userAgent.toUpperCase().indexOf("MSIE 10.0") != -1;//IE10
window.isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") != -1;//All IE
window.gtIE8 = isIE8 || isIE9; //High End IE

window.rtl = $$('html')[0].getProperty('dir') == 'rtl';

// *********************************************
// CHKOverrides functionality
//      Allows the ability to include alternate functions in the options
// *********************************************
window.CHKOverrides = new Class({
    overrides: null,
    setOverrides: function() {
        if (($defined(this.options)) && ($defined(this.options.overrides))) {
            // take the object and turn it into a hash
            this.overrides = $H(this.options.overrides);
            if (($defined(this.overrides)) && (this.overrides.getLength() > 0)) {
                // cycle through the object and take each of the functions and
                // replace the existing or add new functions in this instance of the object
                this.overrides.each(function(value, key) {
                    if ($type(value) === 'function') {
                        this[key] = value;
                    }
                }.bind(this));
            }
        }
    }
});

function updateScreenReading(parentEl, src_selector) {
    var src_el = parentEl.getElement(src_selector);
    var tar_el = parentEl.getElement('.screenReading');
    if (src_el && tar_el) {
        tar_el.innerHTML = src_el.innerHTML;
    }
}

function getScrollOffsetHeight(el) {
    var result = 0;
    var element = el;
    var offset;
    do {
        element = element.getParent();
        offset = element.getScroll().y;
        if (offset>0) {
            result += offset;
        }
    } while (element != window.document.body);
    return result;
}


function altRow (rows) {
    rows.each(function(el, i) {
        if (i === 0) {
            el.addClass("first");
        }

        if (i % 2) {
            el.removeClass('altRow');
        } else {
            el.addClass('altRow');
        }

        if (i == rows.length -1) {
            el.addClass("last");
        }
    });
}

function initTableInArticle () {
    $$(".article table").each(function (table) {
        altRow(table.getElements("tr"));
    });
}

/*  SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

//utilities-core-hpe.js
// CRT: see ui-core-min.js for duplicate definitions, isIE6, etc
/**IE GLOBAL VARIABLES*/
var isIE6 = navigator.userAgent.toUpperCase().indexOf("MSIE 6.0") != -1;//IE6
var isIE7 = navigator.userAgent.toUpperCase().indexOf("MSIE 7.0") != -1;//IE7
var isIE8 = navigator.userAgent.toUpperCase().indexOf("MSIE 8.0") != -1;//IE8
var isIE9 = navigator.userAgent.toUpperCase().indexOf("MSIE 9.0") != -1;//IE9
var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") != -1;//All IE
var isFF = navigator.userAgent.toUpperCase().indexOf("GECKO") != -1;//All FF
var isOpera = navigator.userAgent.toUpperCase().indexOf("OPERA") != -1;//Opera
var gtIE8 = isIE8 || isIE9; //High End IE

/*03-08-2011 21:00 CT */


// *********************************************
// CHKOverrides functionality
//      Allows the ability to include alternate functions in the options
// *********************************************
// CRT: see duplicate definition: ui-core-min.js
var CHKOverrides = new Class({
    overrides: null,
    setOverrides: function() {
        if (($defined(this.options)) && ($defined(this.options.overrides)))
        {
            // take the object and turn it into a hash
            this.overrides = $H(this.options.overrides);
            if (($defined(this.overrides)) && (this.overrides.getLength() > 0))
            {
                // cycle through the object and take each of the functions and 
                // replace the existing or add new functions in this instance of the object
                this.overrides.each(function(value, key) {
                    if ($type(value) === 'function')
                    {
                        this[key] = value;
                    }
                }.bind(this));
            }
        }
    }
});

// *********************************************
// CHKClassName functionality
//      Adds the function getClassName that returns the 
//      name of the class of the current object.
// *********************************************
var CHKClassName = new Class({
    getClassName: function() { 
        var w = $H(window); 
        return w.keyOf(this.constructor); 
    }
});
// *********************************************
// CHKControl_Base - Base class for controls.  
//      Ensures that the basic object signature exists and implements common code.
//
//      Options: name, showClass, hideClass, useFx, fxOpenStyle, fxCloseStyle, fxWait, fxDuration, fxTransition
//      Properties: uid, isOpen
//      Methods: render, setPosition, show, hide, showDelay, hideDelay 
//      Events: onShow, onHide, onTransitionStart, onTransitionComplete
// *********************************************
var CHKControl_Base = new Class({
    Implements: [Events, Options, CHKOverrides, CHKClassName],
    options: {
        name: null,
        showClass: null,
        hideClass: null,
        selectedClass: null,
        deselectedClass: null,
        enabledClass: null,
        disabledClass: null,
        stopPropagation: true,
        preventDefault: false,
        useFx: false,
        fxOpenStylePre: null,
        fxOpenStyle: null,
        fxOpenStylePost: null,
        fxCloseStylePre: null,
        fxCloseStyle: null,
        fxCloseStylePost: null,
        fxSelectedStylePre: null,
        fxSelectedStyle: null,
        fxSelectedStylePost: null,
        fxDeselectedStylePre: null,
        fxDeselectedStyle: null,
        fxDeselectedStylePost: null,
        fxEnabledStylePre: null,
        fxEnabledStyle: null,
        fxEnabledStylePost: null,
        fxDisabledStylePre: null,
        fxDisabledStyle: null,
        fxDisabledStylePost: null,
        
        fxWait: false,
        fxDuration: 500,
        fxTransition: Fx.Transitions.Sine.easeInOut
    },
    controlEl: null,
    timer: null,
    uid: null,
    isOpen: true,
    isSelected: false,
    isEnabled: true,
    inTransition: false,
    fx: null,
    initialize: function(control, options) {
        this.controlEl = $(control);
        this.setOptions(options);
        this.setOverrides();
        var tempHash, keys, styles, count;

        tempHash = $H({});
        if ($defined(this.controlEl))
        {
                // bubble up the uid from the control element
                this.uid = this.controlEl.uniqueNumber |this.controlEl.uid;
            
            // bubble up the instance name from the element class if it hasn't been assigned already
            if ((!$defined(this.options.name)) && (this.controlEl.className.contains('js_name_')))
            {
                this.controlEl.className.split(' ').each(function(item, index) {
                    if (item.contains('js_name_'))
                    {
                        this.options.name = item.replace('js_name_', '');
                    }
                }.bind(this));
            }
            
            // isOpen detection
            if (($defined(this.options.useFx)) && (this.options.useFx))
            {
                if ($defined(this.options.fxOpenStyle))
                {
                    if ($type(this.options.fxOpenStyle) === 'object')
                    {

                        tempHash = $H(this.options.fxOpenStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.controlEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = true;
                        }
                    }
                }
                
                if ($defined(this.options.fxCloseStyle))
                {
                    if ($type(this.options.fxCloseStyle) === 'object')
                    {
                        tempHash = $H(this.options.fxCloseStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.controlEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = false;
                        }
                    }
                }
            }
            else
            {
                if ($defined(this.options.showClass))
                {
                    switch ($type(this.options.showClass))
                    {
                        case 'string':
                            if ((this.options.showClass !== "") && (this.controlEl.hasClass(this.options.showClass)))
                            {
                                this.isOpen = true;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.showClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.controlEl.getStyles(keys));
                            count = 0;
                            
                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));
                            
                            if (count === keys.length)
                            {
                                this.isOpen = true;
                            }
                            break;
                    }
                }
                
                if ($defined(this.options.hideClass))
                {
                    switch ($type(this.options.hideClass))
                    {
                        case 'string':
                            if ((this.options.hideClass !== "") && (this.controlEl.hasClass(this.options.hideClass)))
                            {
                                this.isOpen = false;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.hideClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.controlEl.getStyles(keys));
                            count = 0;
                            
                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));
                            
                            if (count === keys.length)
                            {
                                this.isOpen = false;
                            }
                            break;
                    }
                }
            }
            
            // instantiate the fx engine, if fx will be used for opening and closing.
            if (this.options.useFx)
            {
                this.fx = new Fx.Morph(this.controlEl, {wait: this.options.fxWait, duration: this.options.fxDuration, transition: this.options.fxTransition});
                this.fx.addEvent('onComplete', this.transitionCompleteHandler.bind(this));
                this.fx.addEvent('onStart', this.transitionStartHandler.bind(this));
            }
            
        }
    },
    render: function(resize) {
        if (!$defined(resize))
        {
            resize = false;
        }
        
        this.fireEvent('onBeginRender', this);
        
        if ($defined(this.customRender))
        {
            this.customRender(resize);
        }
            
        this.fireEvent('onEndRender', this);
    },
    customRender: $empty,
    toggleShow: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            if (this.isOpen)
            {
                this.hide(stopEventFiring);
            }
            else
            {
                this.show(stopEventFiring);
            }
        }
    
    },
    show: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isOpen = true;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxOpenStylePre) && (!this.inTransition))
                {
                    this.controlEl.setStyles(this.options.fxOpenStylePre);
                }
                
                // Show with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxOpenStyle);
            }
            else
            {
                if (!$defined(this.options.showClass))
                {
                    // Show using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'visible', display: 'block' });
                }
                else
                {
                    if ($type(this.options.showClass) === 'object')
                    {
                        // Show using styles
                        this.controlEl.setStyles(this.options.showClass);
                    }
                    else
                    {
                        // Show using class names
                        if (this.options.showClass !== "")
                        {
                            this.controlEl.addClass(this.options.showClass);
                        }
                            
                        if ($defined(this.options.hideClass) && ($type(this.options.hideClass) === 'string') && this.controlEl.hasClass(this.options.hideClass))
                        {
                            this.controlEl.removeClass(this.options.hideClass);
                        }
                    }
                }
            }
        }
        
        // fire the onshow event
        if (!stopEventFiring)
        {
            this.fireEvent('onshow', this);
            this.fireEvent('onShowStateChange', this);
        }
    },
    hide: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isOpen = false;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxCloseStylePre))
                {
                    this.controlEl.setStyles(this.options.fxCloseStylePre);
                }
                    
                // Hide with transitions effects
                this.fx.start(this.options.fxCloseStyle);
            }
            else
            {
                if (!$defined(this.options.hideClass))
                {
                    // Hide using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'hidden', display: 'none' });
                }
                else
                {
                    if ($type(this.options.hideClass) === 'object')
                    {
                        // Hide using styles
                        this.controlEl.setStyles(this.options.hideClass);
                    }
                    else
                    {
                        // Hide using class names
                        if (this.options.hideClass !== "")
                        {
                            this.controlEl.addClass(this.options.hideClass);
                        }
                            
                        if ($defined(this.options.showClass) && ($type(this.options.showClass) === 'string') && this.controlEl.hasClass(this.options.showClass))
                        {
                            this.controlEl.removeClass(this.options.showClass);
                        }
                    }
                }
            }
        }
        
        // fire the onhide event
        if (!stopEventFiring)
        {
            this.fireEvent('onhide', this);
            this.fireEvent('onShowStateChange', this);
        }
    },
    showDelay: function(timeDelay, stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.show(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.show.bind(this).delay(timeDelay);
        }
    },
    hideDelay: function(timeDelay, stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.hide(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.hide.bind(this).delay(timeDelay);
        }
    },
    clearTimer: function() {
        $clear(this.timer);
    },
    toggleSelected: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            if (this.isSelected)
            {
                this.deselect(stopEventFiring);
            }
            else
            {
                this.select(stopEventFiring);
            }
        }
    
    },
    select: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isSelected = true;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxSelectedStylePre) && (!this.inTransition))
                {
                    this.controlEl.setStyles(this.options.fxSelectedStylePre);
                }
                
                // Show with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxSelectedStyle);
            }
            else
            {
                if (!$defined(this.options.selectedClass))
                {
                    // Show using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'visible', display: 'block' });
                }
                else
                {
                    if ($type(this.options.selectedClass) === 'object')
                    {
                        // Show using styles
                        this.controlEl.setStyles(this.options.selectedClass);
                    }
                    else
                    {
                        // Show using class names
                        if (this.options.selectedClass !== "")
                        {
                            this.controlEl.addClass(this.options.selectedClass);
                        }
                            
                        if ($defined(this.options.deselectedClass) && ($type(this.options.deselectedClass) === 'string') && this.controlEl.hasClass(this.options.deselectedClass))
                        {
                            this.controlEl.removeClass(this.options.deselectedClass);
                        }
                    }
                }
            }
        }
        
        // fire the events
        if (!stopEventFiring)
        {
            this.fireEvent('onSelected', this);
            this.fireEvent('onSelectedStateChange', this);
        }
        
    },
    deselect: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isSelected = false;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxDeselectedStylePre))
                {
                    this.controlEl.setStyles(this.options.fxDeselectedStylePre);
                }
                    
                // Hide with transitions effects
                this.fx.start(this.options.fxDeselectedStyle);
            }
            else
            {
                if (!$defined(this.options.deselectedClass))
                {
                    // Hide using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'hidden', display: 'none' });
                }
                else
                {
                    if ($type(this.options.deselectedClass) === 'object')
                    {
                        // Hide using styles
                        this.controlEl.setStyles(this.options.deselectedClass);
                    }
                    else
                    {
                        // Hide using class names
                        if (this.options.deselectedClass !== "")
                        {
                            this.controlEl.addClass(this.options.deselectedClass);
                        }
                            
                        if ($defined(this.options.selectedClass) && ($type(this.options.selectedClass) === 'string') && this.controlEl.hasClass(this.options.selectedClass))
                        {
                            this.controlEl.removeClass(this.options.selectedClass);
                        }
                    }
                }
            }
        }
        
        // fire the events
        if (!stopEventFiring)
        {
            this.fireEvent('onDeselected', this);
            this.fireEvent('onSelectedStateChange', this);
        }
    },
    toggleEnabled: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            if (this.isEnabled)
            {
                this.disable(stopEventFiring);
            }
            else
            {
                this.enable(stopEventFiring);
            }
        }
    
    },
    enable: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isEnabled = true;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxEnabledStylePre) && (!this.inTransition))
                {
                    this.controlEl.setStyles(this.options.fxEnabledStylePre);
                }
                
                // Show with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxEnabledStyle);
            }
            else
            {
                if (!$defined(this.options.enabledClass))
                {
                    // Show using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'visible', display: 'block' });
                }
                else
                {
                    if ($type(this.options.enabledClass) === 'object')
                    {
                        // Show using styles
                        this.controlEl.setStyles(this.options.enabledClass);
                    }
                    else
                    {
                        // Show using class names
                        if (this.options.enabledClass !== "")
                        {
                            this.controlEl.addClass(this.options.enabledClass);
                        }
                            
                        if ($defined(this.options.disabledClass) && ($type(this.options.disabledClass) === 'string') && this.controlEl.hasClass(this.options.disabledClass))
                        {
                            this.controlEl.removeClass(this.options.disabledClass);
                        }
                    }
                }
            }
        }
        
        // fire the events
        if (!stopEventFiring)
        {
            this.fireEvent('onEnabled', this);
            this.fireEvent('onEnabledStateChange', this);
        }
    },
    disable: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the control
        if ($defined(this.controlEl))
        {
            // set the is open flag
            this.isEnabled = false;
            
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxDisabledStylePre))
                {
                    this.controlEl.setStyles(this.options.fxDisabledStylePre);
                }
                    
                // Hide with transitions effects
                this.fx.start(this.options.fxDisabledStyle);
            }
            else
            {
                if (!$defined(this.options.disabledClass))
                {
                    // Hide using the visibility and display styles
                    this.controlEl.setStyles({ visibility: 'hidden', display: 'none' });
                }
                else
                {
                    if ($type(this.options.disabledClass) === 'object')
                    {
                        // Hide using styles
                        this.controlEl.setStyles(this.options.disabledClass);
                    }
                    else
                    {
                        // Hide using class names
                        if (this.options.disabledClass !== "")
                        {
                            this.controlEl.addClass(this.options.disabledClass);
                        }
                            
                        if ($defined(this.options.enabledClass) && ($type(this.options.enabledClass) === 'string') && this.controlEl.hasClass(this.options.enabledClass))
                        {
                            this.controlEl.removeClass(this.options.enabledClass);
                        }
                    }
                }
            }
        }
        
        // fire the onhide event
        if (!stopEventFiring)
        {
            this.fireEvent('onDisabled', this);
            this.fireEvent('onEnabledStateChange', this);
        }
    },
    transitionStartHandler: function() {
        this.fireEvent('onTransitionStart', this);
    },
    transitionCompleteHandler: function() {
        // if a postfx style is available, set it
        if (this.isOpen)
        {
            if ($defined(this.options.fxOpenStylePost))
            {
                this.controlEl.setStyles(this.options.fxOpenStylePost);
            }
        }
        else
        {
            if ($defined(this.options.fxCloseStylePost))
            {
                this.controlEl.setStyles(this.options.fxCloseStylePost);
            }
        }
        
        if (this.isSelected)
        {
            if ($defined(this.options.fxSelectedStylePost))
            {
                this.controlEl.setStyles(this.options.fxSelectedStylePost);
            }
        }
        else
        {
            if ($defined(this.options.fxDeselectedStylePost))
            {
                this.controlEl.setStyles(this.options.fxDeselectedStylePost);
            }
        }
        
        if (this.isEnabled)
        {
            if ($defined(this.options.fxEnabledStylePost))
            {
                this.controlEl.setStyles(this.options.fxEnabledStylePost);
            }
        }
        else
        {
            if ($defined(this.options.fxDisabledStylePost))
            {
                this.controlEl.setStyles(this.options.fxDisabledStylePost);
            }
        }
        
        this.inTransition = false;
        
        this.fireEvent('onTransitionComplete', this);
    },
    getByUid: function(uid) {
        if (($defined(uid)))
        {
            // if I am the requested uid, return myself
            if ($defined(this.uid) && uid === this.uid)
            {
                return this;
            }
        }
        
        // no uid found, return null
        return null;
    },
    getByName: function(name) {
        if (($defined(name)))
        {
            // if I am the requested name, return myself
            if ($defined(this.options.name) && name === this.options.name)
            {
                return this;
            }
        }
        
        // no name found, return null
        return null;
    }

});

// *********************************************
// CHKCustomPopUp - 
// *********************************************
var CHKCustomPopUp = new Class ({
    // Events
    //  onShow
    //  onHide
    //  onTransitionStart
    //  onTransitionComplete
    Implements: [Events, Options, CHKOverrides, CHKClassName],
    options: {
        name: null,
        showEvent: 'mouseenter',
        hideEvent: 'mouseleave',
        enableTriggerToggle: false,
        enableTargetToggle: false,
        showTriggerClass: null,
        hideTriggerClass: null,
        showTargetClass: null,
        hideTargetClass: null,
        showDelay: null,
        hideDelay: null,
        alignment: null, // optional values are horiz_left, horiz_center, horiz_right, vert_top, vert_center, vert_bottom
        stopPropagation: true,
        preventDefault: false,
        enableKeypress: true,
        useFx: false,
        fxOpenStylePre: null,
        fxOpenStyle: null,
        fxOpenStylePost: null,
        fxCloseStylePre: null,
        fxCloseStyle: null,
        fxCloseStylePost: null,
        fxWait: false,
        fxDuration: 500,
        fxTransition: Fx.Transitions.Back.easeOut
    },
    triggerEl: null,
    targetEl: null,
    showEls: [],
    hideEls: [],
    triggerSize: null,
    popupSize: null,
    alignmentSet: false,
    isOpen: false,
    inTransition: false,
    timer: null,
    fx: null,
    uid: null,
    initialize: function(trigger, target, options) {
        var tempHash, keys, styles, count;
        
        this.triggerEl = $(trigger);
        this.targetEl = $(target);
        this.setOptions(options);
        this.setOverrides();
        tempHash = $H({});


        // get the sizes and store them for later.  NOTE: this does not work correctly when the element is hidden, needs work
        if($defined(this.triggerEl))
        {
            // bubble up the uid from the trigger element
            this.uid = this.triggerEl.uniqueNumber |this.triggerEl.uid;
            
            // if the name is not set, check for the name in the class
            if ((!$defined(this.options.name)) && (this.triggerEl.className.contains('js_name_')))
            {
                this.triggerEl.className.split(' ').each(function(item, index) {
                    if (item.contains('js_name_')){
                        this.options.name = item.replace('js_name_', '');
                    }
                }.bind(this));
            }
            
            this.triggerSize = this.triggerEl.getSize();
            
            // if the size x and y comes back as 0, try to extract the size from the style
            if (this.triggerSize.x === 0 && this.triggerSize.y === 0)
            {
                this.triggerSize.x = this.triggerEl.getStyle('width').toInt();
                this.triggerSize.y = this.triggerEl.getStyle('height').toInt();
            }
            
            // isOpen detection
            if ($defined(this.options.showTriggerClass))
            {
                switch ($type(this.options.showTriggerClass))
                {
                    case 'string':
                        if ((this.options.showTriggerClass !== "") && (this.triggerEl.hasClass(this.options.showTriggerClass)))
                        {
                            this.isOpen = true;
                        }
                        break;
                    case 'object':
                        tempHash = $H(this.options.showTriggerClass);
                        keys = tempHash.getKeys();
                        styles = $H(this.triggerEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = true;
                        }
                        break;
                }
            }
            
            if ($defined(this.options.hideTriggerClass))
            {
                switch ($type(this.options.hideTriggerClass))
                {
                    case 'string':
                        if ((this.options.hideTriggerClass !== "") && (this.triggerEl.hasClass(this.options.hideTriggerClass)))
                        {
                            this.isOpen = false;
                        }
                        break;
                    case 'object':
                        tempHash = $H(this.options.hideTriggerClass);
                        keys = tempHash.getKeys();
                        styles = $H(this.triggerEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = false;
                        }
                        break;
                }
            }
            
        }
        
        // initialize the target element
        if($defined(this.targetEl))
        {
            // if there is no trigger, bubble up the uid from the target
            if (!$defined(this.uid))
            {
                this.uid = this.targetEl.uniqueNumber | this.targetEl.uid;
            }
            
            // if the name is not set, check for the name in the class
            if ((!$defined(this.options.name)) && (this.targetEl.className.contains('js_name_')))
            {
                this.targetEl.className.split(' ').each(function(item, index) {
                    if (item.contains('js_name_'))
                    {
                        this.options.name = item.replace('js_name_', '');
                    }
                }.bind(this));
            }
                
            this.popupSize = this.targetEl.getSize();
            
            // if the size x and y comes back as 0, try to extract the size from the style
            if (this.popupSize.x === 0 && this.popupSize.y === 0)
            {
                this.popupSize.x = this.targetEl.getStyle('width').toInt();
                this.popupSize.y = this.targetEl.getStyle('height').toInt();
            }
            
            // isOpen detection
            if (($defined(this.options.useFx)) && (this.options.useFx))
            {
                if ($defined(this.options.fxOpenStyle))
                {
                    if($type(this.options.fxOpenStyle) === 'object')
                    {
                        tempHash = $H(this.options.fxOpenStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.targetEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = true;
                        }
                    }
                }
                
                if ($defined(this.options.fxCloseStyle))
                {
                    if($type(this.options.fxCloseStyle) === 'object')
                    {
                        tempHash = $H(this.options.fxCloseStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.targetEl.getStyles(keys));
                        count = 0;
                        
                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));
                        
                        if (count === keys.length)
                        {
                            this.isOpen = false;
                        }
                    }
                }
            }
            else
            {
                if ($defined(this.options.showTargetClass))
                {
                    switch ($type(this.options.showTargetClass))
                    {
                        case 'string':
                            if ((this.options.showTargetClass !== "") && (this.targetEl.hasClass(this.options.showTargetClass)))
                            {
                                this.isOpen = true;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.showTargetClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.targetEl.getStyles(keys));
                            count = 0;
                            
                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));
                            
                            if (count === keys.length)
                            {
                                this.isOpen = true;
                            }
                            break;
                    }
                }
                
                if ($defined(this.options.hideTargetClass))
                {
                    switch ($type(this.options.hideTargetClass))
                    {
                        case 'string':
                            if ((this.options.hideTargetClass !== "") && (this.targetEl.hasClass(this.options.hideTargetClass)))
                            {
                                this.isOpen = false;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.hideTargetClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.targetEl.getStyles(keys));
                            count = 0;
                            
                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));
                            
                            if (count === keys.length)
                            {
                                this.isOpen = false;
                            }
                            break;
                    }
                }
            }
                        
        }
        
        this.fx = new Fx.Morph(this.targetEl, {wait: this.options.fxWait, duration: this.options.fxDuration, transition: this.options.fxTransition});
        this.fx.addEvent('onComplete', this.transitionCompleteHandler.bind(this));
        this.fx.addEvent('onStart', this.transitionStartHandler.bind(this));
        
        
        // If the trigger is defined, wire up the event handlers.
        if ($defined(this.triggerEl))
        {
            // wire up the show events if they are defined
            if($defined(this.options.showEvent))
            {
                $splat(this.options.showEvent).each(function(event) {
                    this.triggerEl.addEvent(event, this.showHandlerTrigger.bind(this));
                }.bind(this));
            }
            
            // wire up the hide events if they are defined
            if($defined(this.options.hideEvent) && this.options.hideEvent!='')
            {
                $splat(this.options.hideEvent).each(function(event) {
                    this.triggerEl.addEvent(event, this.hideHandlerTrigger.bind(this));
                }.bind(this));
            }
            
            if (this.options.enableKeypress)
            {
                this.triggerEl.addEvent('keypress', this.keypressHandlerTrigger.bind(this));
            }
        }
        
        // If the target is defined, wire up the event handlers.
        // do not wire up the events if the target and the trigger are the same, they will fight with each other.
        if ($defined(this.targetEl) && (this.targetEl !== this.triggerEl))
        {
            // wire up the show events if they are defined
            if($defined(this.options.showEvent))
            {
                $splat(this.options.showEvent).each(function(event) {
                    this.targetEl.addEvent(event, this.showHandler.bind(this));
                }.bind(this));
            }
            
            // wire up the hide events if they are defined
            if($defined(this.options.hideEvent) && this.options.hideEvent!='')
            {
                $splat(this.options.hideEvent).each(function(event) {
                    this.targetEl.addEvent(event, this.hideHandler.bind(this));
                }.bind(this));
            }
            
            if (this.options.enableKeypress)
            {
                this.targetEl.addEvent('keypress', this.keypressHandler.bind(this));
            }
        }
    
        this.render(false); 
    },
    render: function(resize) {
        if (!$defined(resize))
        {
            resize = false;
        }
        
        this.fireEvent('onBeginRender', this);
        
        if ($defined(this.customRender))
        {
            this.customRender(resize);
        }
        
        this.fireEvent('onEndRender', this);
    },
    customRender: $empty,
    addShowElement: function(obj, showEvent) {
        if ($defined(obj))
        {
            // if not defined, default to click
            if (!$defined(showEvent))
            {
                showEvent = 'click';
            }
            
            // wire up the show event handlers, there can be multiple show events
            $splat(showEvent).each(function(event) {
                obj.addEvent(event, this.showHandlerTrigger.bind(this));
            }.bind(this));
            
            // add the obj to the showEls array
            this.showEls.push(obj);
        }
    },
    addHideElement: function(obj, hideEvent) {
        if ($defined(obj))
        {
            // if not defined, default to click
            if (!$defined(hideEvent))
            {
                hideEvent = 'click';
            }
            
            // wire up the hide event handlers, there can be multiple hide events
            $splat(hideEvent).each(function(event) {
                obj.addEvent(event, this.hideHandlerTrigger.bind(this));
            }.bind(this));

            // add the obj to the showEls array
            this.hideEls.push(obj);
        }
    },
    clearTimer: function() {
        $clear(this.timer);
    },
    show: function(stopEventFiring) {
        var triggerCoord, targetCoord, alignmentStyle, widthSign, widthSize, heightSign, heightSize;
            
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }


        // process the trigger
        if ($defined(this.triggerEl) && $defined(this.options.showTriggerClass)) 
        {
            if ($type(this.options.showTriggerClass) === 'object')
            {
                // Show using styles
                this.triggerEl.setStyles(this.options.showTriggerClass);
            }
            else
            {
                // Show using class names
                if(this.options.showTriggerClass !== "")
                {
                    this.triggerEl.addClass(this.options.showTriggerClass);
                }
                    
                if ($defined(this.options.hideTriggerClass) && ($type(this.options.hideTriggerClass) === 'string') && this.triggerEl.hasClass(this.options.hideTriggerClass))
                {
                    this.triggerEl.removeClass(this.options.hideTriggerClass);
                }
            }
        }
        
        // set the is open flag
        this.isOpen = true;
        
        // process the target
        if ($defined(this.targetEl))
        {
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxOpenStylePre) && (!this.inTransition))
                {
                    this.targetEl.setStyles(this.options.fxOpenStylePre);
                }
                    
                // Show with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxOpenStyle);
            }
            else
            {
                if (!$defined(this.options.showTargetClass))
                {
                    // Show using the visibility and display styles
                    this.targetEl.setStyles({ visibility: 'visible', display: 'block' });
                }
                else
                {
                    if ($type(this.options.showTargetClass) === 'object')
                    {
                        //Show using styles
                        this.targetEl.setStyles(this.options.showTargetClass);
                    }
                    else
                    {
                        // Show using class names
                        if (this.options.showTargetClass !== "")
                        {
                            this.targetEl.addClass(this.options.showTargetClass);
                        }
                            
                        if ($defined(this.options.hideTargetClass) && ($type(this.options.hideTargetClass) === 'string') && this.targetEl.hasClass(this.options.hideTargetClass))
                        {
                            this.targetEl.removeClass(this.options.hideTargetClass);
                        }
                    }
                }
            }
        }
        
        if (($defined(this.options.alignment)) && (this.alignmentSet === false))
        {
            if (($defined(this.triggerEl)) && ($defined(this.targetEl)))
            {
                triggerCoord = this.triggerEl.getCoordinates();
                targetCoord = this.targetEl.getCoordinates();
                widthSign = '';
                heightSign = '';

                
                // calculate the width size and sign
                if (targetCoord.width > triggerCoord.width)
                {
                    widthSign = '-';
                    widthSize = (targetCoord.width - triggerCoord.width);
                }
                else
                {
                    widthSize = (triggerCoord.width - targetCoord.width);
                }
                
                // calculate the height size and sign
                if (targetCoord.height > triggerCoord.height)
                {
                    heightSign = '-';
                    heightSize = (targetCoord.height - triggerCoord.height);
                }
                else
                {
                    heightSize = (triggerCoord.height - targetCoord.height);
                }
                
                 // optional values are horiz_left, horiz_center, horiz_right, vert_top, vert_center, vert_bottom
                switch(this.options.alignment)
                {
                    case 'horiz_center':
                        alignmentStyle = { left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'horiz_right':
                        alignmentStyle = { left: widthSign + widthSize + 'px' };
                        break;
                    case 'vert_top':
                        alignmentStyle = { top: '0px' };
                        break;
                    case 'vert_center':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px' };
                        break;
                    case 'vert_bottom':
                        alignmentStyle = { top: heightSign + heightSize + 'px' };
                        break;
                    case 'horiz_left':
                        alignmentStyle = { left: '0px' };
                        break;
                    case 'center_center':
                        alignmentStyle = { left: widthSign + (widthSize/ 2 ) + 'px',  top: heightSign + (heightSize / 2) + 'px' };
                        break;
                    case 'center_left':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px', left: '0px' };
                        break;
                    case 'center_right':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px', left: widthSign + widthSize + 'px' };
                        break;                      
                    case 'top_center':
                        alignmentStyle = { top: '0px', left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'top_left':
                        alignmentStyle = { top: '0px', left: '0px' };
                        break;
                    case 'top_right':
                        alignmentStyle = { top: '0px', left: widthSign + widthSize + 'px' };
                        break;
                    case 'bottom_center':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'bottom_left':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: '0px' };
                        break;
                    case 'bottom_right':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: widthSign + widthSize + 'px' };
                        break;
                    default:
                        alignmentStyle = { left: '0px' };
                        break;
                }
                
                if ($defined(alignmentStyle))
                {
                    this.alignmentSet = true;
                    this.targetEl.setStyles(alignmentStyle);
                }
            }
        }
        
        // fire the onshow event
        if (!stopEventFiring)
        {
            this.fireEvent('onshow', this);
            this.fireEvent('onShowStateChange', this);
            this.fireEvent('onSelected', this);
        }
        
    },
    hide: function(stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the trigger
        if ($defined(this.triggerEl) && $defined(this.options.hideTriggerClass)) 
        {
            if ($type(this.options.hideTriggerClass) === 'object')
            {
                // Hide using styles
                this.triggerEl.setStyles(this.options.hideTriggerClass);
            }
            else
            {
                // Hide using class names
                if (this.options.hideTriggerClass !== "")
                {
                    this.triggerEl.addClass(this.options.hideTriggerClass);
                }
                    
                if ($defined(this.options.showTriggerClass) && ($type(this.options.showTriggerClass) === 'string') && this.triggerEl.hasClass(this.options.showTriggerClass))
                {
                    this.triggerEl.removeClass(this.options.showTriggerClass);
                }
            }
        }
        
        // set the is open flag
        this.isOpen = false;
        
        // process the target
        if ($defined(this.targetEl))
        {
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxCloseStylePre) && (!this.inTransition))
                {
                    this.targetEl.setStyles(this.options.fxCloseStylePre);
                }
                    
                // Hide with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxCloseStyle);
            }
            else
            {
                if (!$defined(this.options.hideTargetClass))
                {
                    // Hide using the visibility and display styles
                    this.targetEl.setStyles({ visibility: 'hidden', display: 'none' });
                }
                else
                {
                    if ($type(this.options.hideTargetClass) === 'object')
                    {
                        // Hide using styles
                        this.targetEl.setStyles(this.options.hideTargetClass);
                    }
                    else
                    {
                        // Hide using class names
                        if (this.options.hideTargetClass !== "")
                        {
                            this.targetEl.addClass(this.options.hideTargetClass);
                        }
                            
                        if ($defined(this.options.showTargetClass) && ($type(this.options.showTargetClass) === 'string') && this.targetEl.hasClass(this.options.showTargetClass))
                        {
                            this.targetEl.removeClass(this.options.showTargetClass);
                        }
                    }
                }
            }
        }
        
        // fire the onhide event
        if (!stopEventFiring)
        {
            this.fireEvent('onhide', this);
            this.fireEvent('onShowStateChange', this);
        }
    },
    showDelay: function(timeDelay, stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.show(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.show.bind(this).delay(timeDelay);
        }
    },
    hideDelay: function(timeDelay, stopEventFiring) {
        
        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.hide(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.hide.bind(this).delay(timeDelay);
        }
    },
    showHandler: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }
        
        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }
        
        // clear the timer delay to prevent it from firing
        $clear(this.timer);
        
        // only process if the popup is not open
        if (this.isOpen === false)
        {
            if ($defined(this.options.showDelay))
            {
                this.showDelay(this.options.showDelay);
            }
            else
            {
                this.show();
            }
        }
        else if (this.options.enableTargetToggle)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    hideHandler: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }
        
        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }
        // clear the timer delay to prevent it from firing
        $clear(this.timer);
        
        // only process if the popup is open
        if (this.isOpen === true)
        {
            
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    showHandlerTrigger: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
             event.stopPropagation();
        }
        
        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }
        
        // clear the timer delay to prevent it from firing
        $clear(this.timer);
        
        // only process if the popup is not open
        if (this.isOpen === false)
        {
            // if a delay is defined, use it.
            if ($defined(this.options.showDelay))
            {
                this.showDelay(this.options.showDelay);
            }
            else
            {
                this.show();
            }
        }
        else if (this.options.enableTriggerToggle)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
        
    },
    hideHandlerTrigger: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }
        
        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }
        
        // clear the timer delay to prevent it from firing
        $clear(this.timer);
        
        // only process if the popup is open
        if (this.isOpen === true)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    keypressHandlerTrigger: function(event) {
        this.keypressHandler(event);
        
        // if the enter key is pressed, set the focus to the target element
//      if (($defined(event.key)) && (event.key == 'enter') && ($defined(this.targetEl)))
//      {
//          this.targetEl.focus();
//      }
    },
    keypressHandler: function(event) {
        if ($defined(event) && $defined(event.key))
        {
            // stop event propagation if the flag is set
            if ((this.options.stopPropagation === true) && (event.key === 'enter' || event.key === 'esc'))
            {
                event.stopPropagation();
            }
            
            // prevent default behaviour if the flag is set
            if ((this.options.preventDefault === true) && (event.key === 'enter' || event.key === 'esc'))
            {
                event.preventDefault();
            }
            
            // clear the timer delay to prevent it from firing
            $clear(this.timer);
            
            switch(event.key)
            {
                case 'enter':
                    // only process if the popup is not open
                    if(this.isOpen === false)
                    {
                        this.show();
                    }
                    break;
                case 'esc':
                    // only process if the popup is open
                    if (this.isOpen === true)
                    {
                        this.hide();
                    }
                    break;
            }
        }
        
    },
    transitionStartHandler: function() {
        this.fireEvent('onTransitionStart', this);
    },
    transitionCompleteHandler: function() {
        // if a postfx style is available, set it
        if (this.isOpen)
        {
            if ($defined(this.options.fxOpenStylePost))
            {
                this.targetEl.setStyles(this.options.fxOpenStylePost);
            }
        }
        else
        {
            if ($defined(this.options.fxCloseStylePost))
            {
                this.targetEl.setStyles(this.options.fxCloseStylePost);
            }
        }
        this.inTransition = false;
        
        this.fireEvent('onTransitionComplete', this);
    }
});

// *********************************************
// CHKButton - 
// *********************************************
var CHKButton = new Class({
    Extends: CHKControl_Base,
    options: {
        selectEvent: 'click'
    },
    initialize: function(control, options) {
        this.parent(control, options);
        
        if ($defined(this.controlEl))
        {
            // wire up the selected events if they are defined
            if($defined(this.options.selectEvent))
            {
                $splat(this.options.selectEvent).each(function(event) {
                    this.controlEl.addEvent(event, this.selectedHandler.bind(this));
                }.bind(this));
            }

            // wire up the keypress events
            this.controlEl.addEvent('keypress', this.keypressHandler.bind(this));
        }
        
        this.render(false);
    },
    selectFunc: $empty,
    keypressHandler: function(event) {
        // stop event propagation if the flag is set
        if (event.key === 'enter')
        {
            this.selectedHandler(event);
        }
    },
    selectedHandler: function(event) {
        // stop propogation of the event
        if (this.options.stopPropagation === true)
        {
            event.stopPropagation();
        }
        
        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true)
        {
            event.preventDefault();
        }
        
        // if a function is defined, call it
        if (($defined(this.selectFunc)) && ($type(this.selectFunc) === 'function'))
        {
            this.selectFunc();
        }
        
        // fire off the onSelected Event
        this.fireEvent('onSelected', this);
    }
});

// *********************************************
// CHKTabControl - 
// *********************************************
var CHKTabControl = new Class({
    Extends: CHKControl_Base,
    options: {
        tabClass: null,
        tabTarget: 'rel',
        tabTargetSelector: null,
        display: -1,
        keepHistory: false,
        loop: false,
        rotationDelay: 3000,
        rotationDirection: 'forward', // forward, backward
        tabSettings: {
            showEvent: 'click',
            hideEvent: null,
            showTriggerClass: null,
            hideTriggerClass: null,
            showTargetClass: null,
            hideTargetClass: null,
            showDelay: null,
            hideDelay: null
        }
    },
    tabs: [],
    history: [],
    totalTabs: 0,
    currentTab: null,
    stopHistory: false,
    stopEvent: false,
    rotationTimer: null,
    initialize: function(control, options) {
        var tabindex, target, els, popupOptions, temppopup;
        
        this.parent(control, options);
        
        tabindex = 0;
        
        if ($defined(this.controlEl))
        {
            
            if ($defined(this.options.tabClass))
            {
                this.controlEl.getElements(this.options.tabClass).each(function (item, index){
                    // get the target
                    target = null;
                    switch (this.options.tabTarget)
                    {
                        case 'sibling':
                            // if a Selector has been defined, use it, otherwise just get the next sibling element
                            if ($defined(this.options.tabTargetSelector))
                            {
                                target = item.getNext(this.options.tabTargetSelector);
                            }
                            else
                            {
                                target = item.getNext();
                            }
                            break;
                        case 'child':
                            els = null;
                            // if a Selector has been defined, use it, otherwise get the first child element
                            if ($defined(this.options.tabTargetSelector))
                            {
                                els = item.getChildren(this.options.tabTargetSelector);
                                if (els.length < 1)
                                {
                                    els = item.getElements(this.options.tabTargetSelector);
                                }
                            }
                            else
                            {
                                els = item.getChildren();
                            }
                            if (($defined(els)) && (els.length > 0))
                            {
                                target = els[0];
                            }
                            break;
                        case 'rel':
                            target = $(item.get('rel'));
                            break;
                        default:
                            // get the target based on the value of the rel attribute
                            target = $(item.get('rel'));
                            break;
                    }
                    
                    // added a name to the popup based on the tab index
                    popupOptions = this.options.tabSettings;
                    popupOptions.name = 'tab' + tabindex;
                    
                    // Create the popup
                    temppopup = new CHKCustomPopUp(item, target, popupOptions);
                    
                    if (temppopup.isOpen === true)
                    {
                        this.currentTab = index;
                    }
                    
                    // add it to the tab control and wire up the event handlers
                    this.addTab(temppopup);
                }.bind(this));
            }
        }
        
        if (this.options.display >= 0)
        {
            this.showTab(this.options.display);
        }
            
        this.render(false);
    },
    isTabOpen: function() {
        var output = false;
        if ($defined(this.tabs) && this.tabs.length > 0)
        {
            this.tabs.each(function(item, index) { 
                if ($defined(item.isOpen) && item.isOpen)
                {
                    output = true;
                }
            }.bind(this));
        }
        return output;
    },
    addTab: function(tab) {
        if ($defined(tab))
        {
            // wire up the event handlers
            tab.addEvent('onshow', this.tabShowHandler.bind(this));
            tab.addEvent('onhide', this.tabHideHandler.bind(this));
            tab.addEvent('onSelected', this.selectedHandler.bind(this));
            
            // add it to the collection
            this.tabs.push(tab);
            
            // increment the total variable
            this.totalTabs++;
        }
    },
    back: function() {
        if (($defined(this.history)) && (this.history.length > 0))
        {
            var lastIndex = this.history.getLast();
            this.history.splice((this.history.length -1), 1);
            
            this.stopHistory = true;
            this.showTab(lastIndex);
            this.stopHistory = false;
            
            return lastIndex;
        }
        return null;
    },
    next: function() {
        var showFlag, nextTab;

        showFlag = true;
        // get the next position
        if ($defined(this.currentTab))
        {
            nextTab = this.currentTab + 1;
        }
        else
        {
            nextTab = 0;
        }
        
        // check to see if you have reached the end.
        if (nextTab >= this.totalTabs)
        {
            if (this.options.loop)
            {
                nextTab = 0;
            }
            else
            {
                showFlag = false;
            }
        }
        
        if (showFlag)
        {
            this.showTab(nextTab, false);
            // return the tab number that was shown
            return nextTab;
        }
        
        // no tab was shown, so return null
        return null;
    },
    previous: function() {
        var showFlag, nextTab;

        showFlag = true;
        // get the next position
        if ($defined(this.currentTab))
        {
            nextTab = this.currentTab - 1;
        }
        else
        {
            nextTab = 0;
        }
        // check to see if you have reached the end.
        if (nextTab < 0)
        {
            if (this.options.loop)
            {
                nextTab = this.totalTabs - 1;
            }
            else
            {
                showFlag = false;
            }
        }
        
        if (showFlag)
        {
            this.showTab(nextTab, false);
            // return the tab number that was shown
            return nextTab;
        }
        
        // no tab was shown, so return null
        return null;
    },
    rotate: function() {
        var tabIndex;
        
        $clear(this.rotationTimer);
        
        switch(this.options.rotationDirection)
        {
            case 'backward':
                tabIndex = this.previous();
                break;
            case 'forward':
                tabIndex = this.next();
                break;
            default:
                tabIndex = this.next();
                break;
        }
        
        if ($defined(tabIndex))
        {
            if (($chk(this.options.rotationDelay)) && (this.options.rotationDelay > 0))
            {
                this.rotationTimer = this.rotate.bind(this).delay(this.options.rotationDelay);
            }
        }
    },
    rotateStart: function() {
        if (($chk(this.options.rotationDelay)) && (this.options.rotationDelay > 0))
        {
            this.rotationTimer = this.rotate.bind(this).delay(this.options.rotationDelay);
        }
    },
    rotateStop: function() {
        $clear(this.rotationTimer);
    },
    showTab: function(tabNumber, stopEventFiring) {
        // If the parameter is not defined, default it to true
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = true;
        }
        
        if (($chk(tabNumber)) && (tabNumber < this.tabs.length))
        {
            if (stopEventFiring)
            {
                this.stopEvent = true;
            }
            
            // Show the tab
            this.tabs[tabNumber].show();
            
            if (stopEventFiring)
            {
                this.stopEvent = false;
            }
        }
    },
    hideTab: function(tabNumber, stopEventFiring) {
        // If the parameter is not defined, default it to true
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = true;
        }
        
        if (tabNumber < this.tabs.length)
        {
            if (stopEventFiring)
            {
                this.stopEvent = true;
            }
            
            // Hide the tab
            this.tabs[tabNumber].hide();
            
            if (stopEventFiring)
            {
                this.stopEvent = false;
            }
        }
    },
    hideAllTabs: function(stopEventFiring) {
        // If the parameter is not defined, default it to true
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = true;
        }
        
        if (($defined(this.tabs)) && (this.tabs.length > 0))
        {
            if (stopEventFiring)
            {
                this.stopEvent = true;
            }
            
            // Hide all tabs
            this.tabs.each(function(item, index) {
                item.hide();
            }.bind(this));
            
            if (stopEventFiring)
            {
                this.stopEvent = false;
            }
        }
    },
    tabShowHandler: function(popup) {
        var temppopup = popup;
        
        // cycle through the tabs and close any that are open, other then the one being opened.
        this.tabs.each(function(item, index) {
            if (item.uid !== temppopup.uid)
            {
                item.hide();
            }
            else
            {
                // check to see if we are keeping a history
                if ((this.options.keepHistory) && (!this.stopHistory) && ($chk(this.currentTab)))
                {
                    this.history.push(this.currentTab);
                }
                
                // set the index to the currently open tab
                this.currentTab = index;
                
                // fire the show tab event
                if (!this.stopEvent)
                {
                    this.fireEvent('onShowTab', index);
                }
            }
        }.bind(this));
        
    },
    tabHideHandler: function(popup) {
        var numOpen = 0;
        // cycle through the tabs and if all of the popups are closed, fire off the event
        this.tabs.each(function(item, index) {
            if (item.isOpen)
            {
                numOpen++;
            }
            if ((item.uid === popup.uid) && (!this.stopEvent))
            {
                this.fireEvent('onHideTab', index);
            }
        }.bind(this));
        
        // the onHideAllTab event only get fired if all tabs are closed.
        if ((!this.stopEvent) && (numOpen === 0))
        {
            this.fireEvent('onHideAllTab', this);
        }
    },
    selectedHandler: function(obj) {
        if (($defined(obj)) && (!this.stopEvent))
        {
            this.fireEvent('onSelected', obj);
        }
    }

});


// *********************************************
// CHKQueue - Queue
// *********************************************
var CHKQueue = new Class({
    Implements: [Events, Options, CHKOverrides],
    options: {
        enforceUnique: false
    },
    queue: [],
    initialize: function(options) {
        this.setOptions(options);
        this.setOverrides();
    },
    enqueue: function(item) {
        var enqueueFlag = false;
        
        // check to make sure the item is defined
        if ($defined(item))
        {
            // check to see if the enforceUnique option is on. if so only add the item if it doesn't already exist in the que
            if (this.options.enforceUnique)
            {
                if (!this.queue.contains(item))
                {
                    this.queue.push(item);
                    enqueueFlag = true;
                }
            }
            else
            {
                this.queue.push(item);
                enqueueFlag = true;
            }
        }
        
        // fire off the enqueue event
        this.fireEvent('enqueue', { item: item, success: enqueueFlag, obj: this});
    },
    dequeue: function() {
        var output = null,
        dequeueFlag = false;
        
        // check to make sure that the queue is properly defined and that it has values.
        if ($defined(this.queue) && this.queue.length > 0)
        {
            // shift the first item off of the array and return it in the output variable.
            output = this.queue.shift();
            dequeueFlag = true;
        }
        
        // fire off the dequeue event
        this.fireEvent('dequeue', { item: output, success: dequeueFlag, obj: this});
        
        return output;
    },
    clearQueue: function() {
        if ($defined(this.queue) && this.queue.length > 0)
        {
            this.queue = this.queue.empty();
            
            // fire off the clearqueue event
            this.fireEvent('clearQueue', this);
        }
    },
    getSize: function() {
        // check to make sure that the queue is properly defined and that it has values
        if ($defined(this.queue) && this.queue.length > 0)
        {
            // return the length of the queue
            return this.queue.length;
        }
        
        // the queue was not defined or it had nothing in it.  return 0
        return 0;
    },
    hasItems: function() {
        // if the size is greater than 0, we have items.  return true
        if (this.getSize() > 0)
        {
            return true;
        }
        
        // there are no items, return false
        return false;
    },
    hasItem: function(obj) {
        var output = false;
        
        // check to make sure that the obj and the queue are properly defined.
        if ($defined(obj) && $defined(this.queue) && this.queue.length > 0 && this.queue.contains(obj))
        {
            // a match was found. set the flag
            output = true;
        }
        
        // return the flag
        return output;
    },
    removeItem: function(obj) {
        var output = false;
        
        // only remove the item if it exists in the queue
        if ($defined(obj) && $defined(this.queue) && this.queue.length > 0 && this.queue.contains(obj))
        {
            this.queue = this.queue.erase(obj);
            output = true;
        }
        
        // fire off the removeItem event
        this.fireEvent('removeItem', { item: obj, success: output, obj: this});
        
        return output;
    }
});

// *********************************************
// CHKRequestMulti - Multiple Request object.
// *********************************************
var CHKRequestMulti = new Class({
    Implements: [Events, Options, CHKOverrides, CHKClassName],
    options: {
        poolSize: 1
    },
    requestObjs: null,
    initialize: function(options) {
        this.setOptions(options);
        this.requestObjs = $H({});
        
        if ($defined(this.options.poolSize) && this.options.poolSize > 0)
        {
            // loop through the pool size and set up the event handlers
            for(i=0; i<this.options.poolSize; i++)
            {
                // get a reference to myself for use in the delegate functions below.
                var reqMultiObj = this;
                
                // use the current iteration as a unique id for the request object by passing it in as an option.
                // the parseInt as well as the options breaks the reference binding to the value.
                this.options.uid = parseInt(i,10);
                
                // instantiate a new request object
                var req = new Request(this.options);
                
                // wire up the delegate event handlers using the loop number as an id.
                // binding was not implemented on the delegate so that I could gain access to the current request object
                // and access the unique id (uid).
                req.addEvent('onComplete', function() {
                    reqMultiObj.onCompleteHandler(this.options.uid);
                });
                
                req.addEvent('onCancel', function() {
                    reqMultiObj.onCancelHandler(this.options.uid);
                });
                
                req.addEvent('onSuccess', function(responseText, responseXML) {
                    reqMultiObj.onSuccessHandler(responseText, responseXML, this.options.uid);
                });
                
                req.addEvent('onFailure', function(xhr) {
                    reqMultiObj.onFailureHandler(xhr, this.options.uid);
                });
                
                req.addEvent('onException', function(headerName, value) {
                    reqMultiObj.onExceptionHandler(headerName, value, this.options.uid);
                });
                
                req.addEvent('onTimeout', function() {
                    reqMultiObj.onTimeoutHandler(this.options.uid);
                });
                
                // add the request object to the internal collection.
                this.requestObjs.set(i, { isOpen: true, obj: req });
            }
        }
    },
    send: function(options) {

        if ($defined(this.requestObjs) && this.requestObjs.getLength() > 0)
        {
            var req = null;
            
            // Loop through the requestObjs collection and see if any of them are available to handle a request.
            this.requestObjs.each(function(value, key){
                if (!$defined(req) && $defined(value) && $defined(value.isOpen) && value.isOpen === true && $defined(value.obj))
                {
                    // set the isOpen flag on this request to false.
                    value.isOpen = false;

                    // make the request.
                    req = value.obj;
                }
            }.bind(this));
            
            if ($defined(req))
            {
                return req.send(options);
            }
        }
        
        // none of the request objects were available
        return null;
    },
    isOpen: function() {
        var isOpen = false;
        
        if ($defined(this.requestObjs) && this.requestObjs.getLength() > 0)
        {
            // Loop through the requestObjs collection and see if any of them are available to handle a request.
            this.requestObjs.each(function(value, key){
                if ($defined(value) && $defined(value.isOpen) && value.isOpen === true)
                {
                    isOpen = true;
                }
            }.bind(this));
        }
        
        // none of the request objects were available
        return isOpen;
    },
    onCompleteHandler: function(id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onComplete', [id]);
    },
    onCancelHandler: function(id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onCancel', [id]);
    },
    onSuccessHandler: function(responseText, responseXML, id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onSuccess', [responseText, responseXML, id]);
    },
    onFailureHandler: function(xhr, id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onFailure', [xhr, id]);
    },
    onExceptionHandler: function(headerName, value, id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onException', [headerName, value, id]);
    },
    onTimeoutHandler: function(id) {
        // set the isOpen flag on the request object to true;
        if ($defined(this.requestObjs) && this.requestObjs.has(id) && $defined(this.requestObjs.get(id)))
        {
            var requestObj = this.requestObjs.get(id);
            if ($defined(requestObj.isOpen))
            {
                requestObj.isOpen = true;
            }
        }
        
        // fire the event
        this.fireEvent('onTimeout', [id]);
    }
});

// *********************************************
// CHKCoreEngine_Base - 
// *********************************************
var CHKCoreEngine_Base = new Class({
    Implements: [Events, Options, CHKOverrides, CHKClassName],
    results: null, 
    resizeControl: null,
    toolbar: null, 
    pagemenus: [], 
    headerPopups: [], 
    headerTabControls: [],
    pagePopups: [], 
    pageTabControls: [],
    pageAccordions: [],
    footerPopups: [], 
    footerTabControls: [],
    pageScrollBoxes: [],
    buttons: [],
    sliders: [],
    view: [],
    sorter: null,
    services: [], 
    options: {
    },
    initialize: function(options) {
        this.setOptions(options);
        this.setOverrides();
        
        this.render(false);
    },
    render: function(resize) {
        if (!$defined(resize))
        {
            resize = false;
        }
        
        this.fireEvent('onBeginRender', this);
        
        if ($defined(this.customRender))
        {
            this.customRender(resize);
        }
        
        this.fireEvent('onEndRender', this);
    },
    customRender: $empty,
    setResults: function(obj) {
        if ($defined(obj)) 
        {
            // Save the results object
            obj.addEvent('onPositionChange', this.onPositionChangeReultsHandler.bind(this));
            this.results = obj;
        }
    },
    setResize: function(obj) {
        if ($defined(obj))
        {
            obj.addEvent('onResize', this.resizeHandler.bind(this));
            obj.addEvent('onResizeThreshold', this.resizeHandlerThreshold.bind(this));
            this.resizeControl = obj;
        }
    },
    setToolbar: function(obj) {
        // Save the toolbar object
        if ($defined(obj))
        {
            this.toolbar = obj;
        }
    },
    addSlider: function(obj) {
        if ($defined(obj))
        {
            obj.addEvent('onChange', this.onChangeSliderHandler.bind(this));
            this.sliders.push(obj);
        }
    },
    addView: function(obj) {
        if ($defined(obj)) 
        {
            // Wire up the event handlers
            obj.addEvent('onSelected', this.viewSelectedHandler.bind(this));
            this.view.push(obj);
        }
    },
    addServices: function(obj) {
        if ($defined(obj)) 
        {
            // Wire up the event handlers
            obj.addEvent('getDataSuccess', this.getDataSuccessHandler.bind(this));
            obj.addEvent('getDataFail', this.getDataFailHandler.bind(this));
            this.services.push(obj);
        }
    },
    addMenu: function(obj) {
        if ($defined(obj)) 
        {
            this.pagemenus.push(obj);
        }
    },
    addHeaderPopup: function(obj) {
        if ($defined(obj)) 
        {
            this.headerPopups.push(obj);
        }
    },
    addHeaderTabControls: function(obj) {
        if ($defined(obj)) 
        {
            this.headerTabControls.push(obj);
        }
    },
    addPagePopup: function(obj) {
        if ($defined(obj)) 
        {
            this.pagePopups.push(obj);
        }
    },
    addPageTabControls: function(obj) {
        if ($defined(obj)) 
        {
            this.pageTabControls.push(obj);
        }
    },
    addPageScrollBox: function(obj) {
        if ($defined(obj))
        {
            this.pageScrollBoxes.push(obj);
        }
    },
    addPageAccordions: function(obj) {
        if ($defined(obj)) 
        {
            this.pageAccordions.push(obj);
        }
    },
    addFooterPopup: function(obj) {
        if ($defined(obj)) 
        {
            this.footerPopups.push(obj);
        }
    },
    addFooterTabControls: function(obj) {
        if ($defined(obj)) 
        {
            this.footerTabControls.push(obj);
        }
    },
    addButton: function(obj) {
        if ($defined(obj)) 
        {
            this.buttons.push(obj);
        }
    },
    getBroswerSize: function() {
        if ($defined(this.resizeControl))
        {
            return this.resizeControl.getSize();
        }
        return null;
    },
    viewSelectedHandler: function(obj){
        // If a results obj has been set, set the view
        if (($defined(this.results)) && ($defined(obj)) && ($defined(obj.options)) && ($defined(obj.options.name)))
        {
            this.results.setView(obj.options.name);
            
            if (($defined(this.pageScrollBoxes)) && (this.pageScrollBoxes.length > 0))
            {
                this.pageScrollBoxes.each(function(item, index) { item.render(false); }.bind(this));
            }
        }
    },
    onChangeSliderHandler: function(data) {
        // Update the other sliders
        if (($defined(this.sliders)) && (this.sliders.length > 0))
        {
            this.sliders.each(function(slider, i) {
                if(slider.uid !== data.obj.uid)
                {
                    slider.setPositionByPercentage(data.percentage);
                }
            }.bind(this));
        }
        
        // update the results panel
        if ($defined(this.results))
        {
            this.results.setPosition(data.percentage);
        }
    },
    onPositionChangeReultsHandler: function(data) {
        // update the sliders
        if (($defined(this.sliders)) && (this.sliders.length > 0))
        {
            this.sliders.each(function(slider, i) {
                if(slider.uid !== data.obj.uid)
                {
                    slider.setPositionByPercentage(data.percentage, true);
                }
            }.bind(this));
        }
    },
    onChangeTabbedHandler: function(data) {
        // If a results obj has been set, adjust the position
        if ($defined(this.results))
        {
            this.results.setPosition(data.position);
        }
    },
    getDataSuccessHandler: function(data) {
        if ($defined(this.results))
        {
            this.results.loadData(data);
        }
    },
    getDataFailHandler: function(data) {
        alert('Get Data Failure - ' + JSON.encode(data));
    },
    resizeHandler: function(size) {
    },
    resizeHandlerThreshold: function(size) {
    }
});

var PopupManager = new Class({
    popups: [],

    add: function (popup) {
        this.popups.push(popup);
        popup.addEvent("onshow", function () {
            for (var i = 0; i < this.popups.length; i++) {
                var p = this.popups[i];
                if (p != popup && p.isOpen) {
                    p.hide();
                }
            }
        }.bind(this));

        return popup;
    },

    addAll: function(popups) {
        popups.each(function(popup) {
            this.add(popup);
        }.bind(this))
    }

});

/**
 * this class should be mixed to popup in order to add accessibility functionality
 * */
var PopupAccessibility = new Class({

    addSimpleAccessibility : function () {
        var links = this.targetEl.getElements("a");
        if (links && links.length > 0) {
            this.addAccessibility(links[0], links[links.length - 1]);
        }
    },

    /**
     *
     * @param firstLink
     * @param lastLink
     * */
    addAccessibility : function (firstLink, lastLink) {
        if (firstLink) {
            this._addFirstLinkEvents(firstLink);
        }

        if (lastLink) {
            this._addLastLinkEvents(lastLink);
        }
    },

    addKeyPressHandler :function () {
        this._triggerLink().addEvent("keypress", function (event) {
            if (event.key != 'enter' || this.inTransition) {
                return true;
            }

            if (this.isOpen) {
                this.hide();
            } else {
                this.show();
            }

            return true;
        }.bind(this));
    },

    _addFirstLinkEvents : function (firstLink) {
        this.addEvent('onshow', function() {
            firstLink.focus();
        });

        firstLink.addEvent('keypress', function(event) {
            if (event.key == 'tab' && event.shift) {
                this.hide();
                this._triggerLink().focus();
            }
        }.bind(this));
    },

    _addLastLinkEvents: function (lastLink) {
        lastLink.addEvent('keypress', function(event) {
            if (event.key == 'tab' && !event.shift) {
                this.hide();
                this._triggerLink().focus();
            }
        }.bind(this));
    },

    _triggerLink: function () {
        return this.triggerEl.nodeName == "A" ? this.triggerEl : this.triggerEl.getElement("a");
    }
});

//load the privacy cookie js
var euck_jsScript;
if(typeof hpeuck_loaded === 'undefined') {
    var hpeuck_loaded = false;
}

if (document.location.protocol == "https:") {
                euck_jsScript = "https://ssl.www8.hp.com/ww/en/system/include/privacy_cookie.JS";
} else {
                euck_jsScript = "http://www8.hp.com/ww/en/system/include/privacy_cookie.JS";
}
var trdnames="www8.hp.com|g4t05.*?\\.houston\\.hp\\.com|www8-itg\\.houston\\.hp\\.com|g9t07.*?\\.houston\\.hp\\.com|g6t0.*?\\.atlanta\\.hp\\.com|d9t01.*?\\.houston\\.hp\\.com|llb1\\.houston\\.hp\\.com";
var dm=trdnames.split('|');
for(var k=dm.length-1;k>=0;k=k-1){
    if (document.location.href.indexOf(dm[k])!=-1||document.location.href.search(new RegExp(dm[k]))!=-1) {
        euck_jsScript = "/ww/en/system/include/privacy_cookie.JS";
        break;
    }
}
function euckLoadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

if(!hpeuck_loaded) {
  euckLoadScript(euck_jsScript,function(){});
}

// animated-container.js/**
 /* @class AnimatedContainer
 *
 * DOM element with animation
 * primary benefit in pre\post actions for show\hide
 * @events:
 *    before-opening
 *    before-closing
 *    after-opening
 *    after-closing
 */
hp.AnimatedContainer = new Class({

    Implements: [Options, CHKOverrides],

    options: {
        opening: {
            state: "opening",

            before: null,       // css styles to apply before effect
            beforeAction: null, // function () {}

            effect: null,       // styles to do effect

            after: null,        // css styles to apply before effect
            afterAction: null   // function () {}
        },
        closing: {
            state: "closing",

            before: null,       // css styles to apply before effect
            beforeAction: null, // function () {}

            effect: null,       // styles for effect

            after: null,        // css styles to apply before effect
            afterAction: null   // function () {}
        },
        effect: {duration: 500, transition: Fx.Transitions.Sine.easeOut, link: 'cancel'}
    },

    /**
     * @param {Element} cnt
     * @param {Hash} options
     */
    initialize: function (cnt, options) {
        this.setOptions(options);
        this.setOverrides();

        cnt.effect = new Fx.Morph(cnt, this.options.effect);
        cnt.effect.addEvent("complete", function () {
            cnt.inprogress = false;
            cnt.open = cnt.effectState == "opening";

            // applay after styles if any
            var afterStyles = cnt.fxOptions.after;
            if (afterStyles) {
                cnt.setStyles(afterStyles);
            }

            // call afterAction if any
            var action = cnt.fxOptions.afterAction;
            if (action) {
                action.bind(cnt)(cnt);
            }
            cnt.fireEvent("after-" + cnt.fxOptions.state);
        });

        cnt.effectShow = this._effectFunction(this.options.opening).bind(cnt);
        cnt.effectHide = this._effectFunction(this.options.closing).bind(cnt);
    },

    _effectFunction: function (options) {
        return function () {
            if (this.inprogress) {
                if (this.effectState != options.state) {
                    this.effect.cancel();
                } else {
                    return;
                }
            }

            this.fxOptions = options;
            if (this.fxOptions.before) {
                this.setStyles(this.fxOptions.before);
            }

            // call beforeAction if any
            var action = this.fxOptions.beforeAction;
            if (action) {
                action.bind(this)(this);
            }
            this.fireEvent("before-" + this.fxOptions.state);

            this.inprogress = true;
            this.effectState = this.fxOptions.state;

            this.effect.start(this.fxOptions.effect);
        }
    }
});

/**
 * @return {Array} - array of created objects
 */
hp.AnimatedContainer.init = function(cntSelector, options) {
    return $(cntSelector).map(function (cnt) {
        return new hp.AnimatedContainer(cnt, options);
    });
};

//customPopup.js
hp.CustomPopup = new Class({
    Extends: hp.AnimatedContainer,
    Implements: Events,
    options:{
        triggerActiveClass:'',
        targetActiveClass:'',
        openEvent:'mouseover',
        closeEvent:'mouseleave',
        keyEvent: window.isIE6 ? 'keyup' : 'keydown',
        showKeys:[13],
        hideKeys:[27],
        showDelay:100,
        hideDelay:100
    },

    initialize:function (trigger, target, options) {
        this.setOptions(options);
        this.parent(target, this.options);
        this.popup = target;
        this.trigger = trigger;
        this.popup.hide();
        this.isOpen = false;

        this.trigger.addEvent(this.options.openEvent ,this.openHandler.bind(this));
        this.trigger.addEvent(this.options.closeEvent,this.closeHandler.bind(this));
        this.trigger.addEvent(this.options.keyEvent ,this.keyHandler.bind(this));

        this.popup.addEvent(this.options.closeEvent,function(){
            if(this.options.openEvent != this.options.closeEvent) this.closeHandler();
        }.bind(this));
        this.popup.addEvent("mouseover", function () {
            clearTimeout(this.timer);
        }.bind(this));
        this.popup.addEvent(this.options.keyEvent ,this.keyHandler.bind(this));
    },

    keyHandler: function(e){
        if (this.options.showKeys || this.options.hideKeys) {
            var key = e.code;
            var showFlag = this.options.showKeys && this.options.showKeys.indexOf(key) != -1;
            var hideFlag = this.options.hideKeys && this.options.hideKeys.indexOf(key) != -1;
            if (showFlag && hideFlag) {
                showFlag = !this.isOpen;
            }
            if (showFlag) {
                this.show();
            } else if (hideFlag) {
                this.hide();
                this.trigger.focus();
                if(isOpera){
                    this.options.closing.afterAction = function(){  //Opera sets focus just after animation
                        this.trigger.focus();
                    }.bind(this);
                }
            }
        }
    },

    closeHandler: function () {
        this.timer = setTimeout(this.hide.bind(this), this.options.hideDelay);
    },

    openHandler: function () {
        setTimeout(this.show.bind(this), this.options.showDelay);
    },

    show:function() {
        clearTimeout(this.timer);
        if(!this.isOpen){
            this.trigger.addClass(this.options.triggerActiveClass);
            this.popup.addClass(this.options.targetActiveClass);
            this.popup.effectShow();
            this.isOpen = true;
            this.fireEvent("onshow");
        }
    },

    hide:function() {
        clearTimeout(this.timer);
        if(this.isOpen){
            this.trigger.removeClass(this.options.triggerActiveClass);
            this.popup.removeClass(this.options.targetActiveClass);
            this.popup.effectHide();
            this.isOpen = false;
            this.fireEvent("onhide");
        }
    },

    toggle:function() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }

});

// custom-popup.js
// *********************************************
// CHKCustomPopUp -
// *********************************************
window.CHKCustomPopUp = new Class ({
    // Events
    //  onShow
    //  onHide
    //  onTransitionStart
    //  onTransitionComplete
    Implements: [Events, Options, CHKOverrides],
    options: {
        name: null,
        showEvent: 'mouseenter',
        hideEvent: 'mouseleave',
        enableTriggerToggle: false,
        enableTargetToggle: false,
        showTriggerClass: null,
        hideTriggerClass: null,
        showTargetClass: null,
        hideTargetClass: null,
        showDelay: null,
        hideDelay: null,
        alignment: null, // optional values are horiz_left, horiz_center, horiz_right, vert_top, vert_center, vert_bottom
        stopPropagation: true,
        preventDefault: false,
        enableKeypress: true,
        useFx: false,
        fxOpenStylePre: null,
        fxOpenStyle: null,
        fxOpenStylePost: null,
        fxCloseStylePre: null,
        fxCloseStyle: null,
        fxCloseStylePost: null,
        fxWait: false,
        fxDuration: 500,
        fxTransition: Fx.Transitions.Back.easeOut
    },
    triggerEl: null,
    targetEl: null,
    showEls: [],
    hideEls: [],
    triggerSize: null,
    popupSize: null,
    alignmentSet: false,
    isOpen: false,
    inTransition: false,
    timer: null,
    fx: null,
    uid: null,
    initialize: function(trigger, target, options) {
        var tempHash, keys, styles, count;

        this.triggerEl = $(trigger);
        this.targetEl = $(target);
        this.setOptions(options);
        this.setOverrides();
        tempHash = $H({});


        // get the sizes and store them for later.  NOTE: this does not work correctly when the element is hidden, needs work
        if($defined(this.triggerEl))
        {
            // bubble up the uid from the trigger element
            this.uid = this.triggerEl.uid;

            // if the name is not set, check for the name in the class
            if ((!$defined(this.options.name)) && (this.triggerEl.className.contains('js_name_')))
            {
                this.triggerEl.className.split(' ').each(function(item, index) {
                    if (item.contains('js_name_')){
                        this.options.name = item.replace('js_name_', '');
                    }
                }.bind(this));
            }

            this.triggerSize = this.triggerEl.getSize();

            // if the size x and y comes back as 0, try to extract the size from the style
            if (this.triggerSize.x === 0 && this.triggerSize.y === 0)
            {
                this.triggerSize.x = this.triggerEl.getStyle('width').toInt();
                this.triggerSize.y = this.triggerEl.getStyle('height').toInt();
            }

            // isOpen detection
            if ($defined(this.options.showTriggerClass))
            {
                switch ($type(this.options.showTriggerClass))
                {
                    case 'string':
                        if ((this.options.showTriggerClass !== "") && (this.triggerEl.hasClass(this.options.showTriggerClass)))
                        {
                            this.isOpen = true;
                        }
                        break;
                    case 'object':
                        tempHash = $H(this.options.showTriggerClass);
                        keys = tempHash.getKeys();
                        styles = $H(this.triggerEl.getStyles(keys));
                        count = 0;

                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));

                        if (count === keys.length)
                        {
                            this.isOpen = true;
                        }
                        break;
                }
            }

            if ($defined(this.options.hideTriggerClass))
            {
                switch ($type(this.options.hideTriggerClass))
                {
                    case 'string':
                        if ((this.options.hideTriggerClass !== "") && (this.triggerEl.hasClass(this.options.hideTriggerClass)))
                        {
                            this.isOpen = false;
                        }
                        break;
                    case 'object':
                        tempHash = $H(this.options.hideTriggerClass);
                        keys = tempHash.getKeys();
                        styles = $H(this.triggerEl.getStyles(keys));
                        count = 0;

                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));

                        if (count === keys.length)
                        {
                            this.isOpen = false;
                        }
                        break;
                }
            }

        }

        // initialize the target element
        if($defined(this.targetEl))
        {
            // if there is no trigger, bubble up the uid from the target
            if (!$defined(this.uid))
            {
                this.uid = this.targetEl.uid;
            }

            // if the name is not set, check for the name in the class
            if ((!$defined(this.options.name)) && (this.targetEl.className.contains('js_name_')))
            {
                this.targetEl.className.split(' ').each(function(item, index) {
                    if (item.contains('js_name_'))
                    {
                        this.options.name = item.replace('js_name_', '');
                    }
                }.bind(this));
            }

            this.popupSize = this.targetEl.getSize();

            // if the size x and y comes back as 0, try to extract the size from the style
            if (this.popupSize.x === 0 && this.popupSize.y === 0)
            {
                this.popupSize.x = this.targetEl.getStyle('width').toInt();
                this.popupSize.y = this.targetEl.getStyle('height').toInt();
            }

            // isOpen detection
            if (($defined(this.options.useFx)) && (this.options.useFx))
            {
                if ($defined(this.options.fxOpenStyle))
                {
                    if($type(this.options.fxOpenStyle) === 'object')
                    {
                        tempHash = $H(this.options.fxOpenStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.targetEl.getStyles(keys));
                        count = 0;

                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));

                        if (count === keys.length)
                        {
                            this.isOpen = true;
                        }
                    }
                }

                if ($defined(this.options.fxCloseStyle))
                {
                    if($type(this.options.fxCloseStyle) === 'object')
                    {
                        tempHash = $H(this.options.fxCloseStyle);
                        keys = tempHash.getKeys();
                        styles = $H(this.targetEl.getStyles(keys));
                        count = 0;

                        keys.each(function(item, index) {
                            if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                            {
                                count++;
                            }
                        }.bind(this));

                        if (count === keys.length)
                        {
                            this.isOpen = false;
                        }
                    }
                }
            }
            else
            {
                if ($defined(this.options.showTargetClass))
                {
                    switch ($type(this.options.showTargetClass))
                    {
                        case 'string':
                            if ((this.options.showTargetClass !== "") && (this.targetEl.hasClass(this.options.showTargetClass)))
                            {
                                this.isOpen = true;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.showTargetClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.targetEl.getStyles(keys));
                            count = 0;

                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));

                            if (count === keys.length)
                            {
                                this.isOpen = true;
                            }
                            break;
                    }
                }

                if ($defined(this.options.hideTargetClass))
                {
                    switch ($type(this.options.hideTargetClass))
                    {
                        case 'string':
                            if ((this.options.hideTargetClass !== "") && (this.targetEl.hasClass(this.options.hideTargetClass)))
                            {
                                this.isOpen = false;
                            }
                            break;
                        case 'object':
                            tempHash = $H(this.options.hideTargetClass);
                            keys = tempHash.getKeys();
                            styles = $H(this.targetEl.getStyles(keys));
                            count = 0;

                            keys.each(function(item, index) {
                                if ((styles.has(item)) && (styles.get(item) === tempHash.get(item)))
                                {
                                    count++;
                                }
                            }.bind(this));

                            if (count === keys.length)
                            {
                                this.isOpen = false;
                            }
                            break;
                    }
                }
            }

        }

        this.fx = new Fx.Morph(this.targetEl, {wait: this.options.fxWait, duration: this.options.fxDuration, transition: this.options.fxTransition});
        this.fx.addEvent('onComplete', this.transitionCompleteHandler.bind(this));
        this.fx.addEvent('onStart', this.transitionStartHandler.bind(this));


        // If the trigger is defined, wire up the event handlers.
        if ($defined(this.triggerEl))
        {
            // wire up the show events if they are defined
            if($defined(this.options.showEvent))
            {
                $splat(this.options.showEvent).each(function(event) {
                    this.triggerEl.addEvent(event, this.showHandlerTrigger.bind(this));
                }.bind(this));
            }

            // wire up the hide events if they are defined
            if($defined(this.options.hideEvent))
            {
                $splat(this.options.hideEvent).each(function(event) {
                    this.triggerEl.addEvent(event, this.hideHandlerTrigger.bind(this));
                }.bind(this));
            }

            if (this.options.enableKeypress)
            {
                this.triggerEl.addEvent('keypress', this.keypressHandlerTrigger.bind(this));
            }
        }

        // If the target is defined, wire up the event handlers.
        // do not wire up the events if the target and the trigger are the same, they will fight with each other.
        if ($defined(this.targetEl) && (this.targetEl !== this.triggerEl))
        {
            // wire up the show events if they are defined
            if($defined(this.options.showEvent))
            {
                $splat(this.options.showEvent).each(function(event) {
                    this.targetEl.addEvent(event, this.showHandler.bind(this));
                }.bind(this));
            }

            // wire up the hide events if they are defined
            if($defined(this.options.hideEvent))
            {
                $splat(this.options.hideEvent).each(function(event) {
                    this.targetEl.addEvent(event, this.hideHandler.bind(this));
                }.bind(this));
            }

            if (this.options.enableKeypress)
            {
                this.targetEl.addEvent('keypress', this.keypressHandler.bind(this));
            }
        }

        this.render(false);
    },
    render: function(resize) {
        if (!$defined(resize))
        {
            resize = false;
        }

        this.fireEvent('onBeginRender', this);

        if ($defined(this.customRender))
        {
            this.customRender(resize);
        }

        this.fireEvent('onEndRender', this);
    },
    customRender: $empty,
    addShowElement: function(obj, showEvent) {
        if ($defined(obj))
        {
            // if not defined, default to click
            if (!$defined(showEvent))
            {
                showEvent = 'click';
            }

            // wire up the show event handlers, there can be multiple show events
            $splat(showEvent).each(function(event) {
                obj.addEvent(event, this.showHandlerTrigger.bind(this));
            }.bind(this));

            // add the obj to the showEls array
            this.showEls.push(obj);
        }
    },
    addHideElement: function(obj, hideEvent) {
        if ($defined(obj))
        {
            // if not defined, default to click
            if (!$defined(hideEvent))
            {
                hideEvent = 'click';
            }

            // wire up the hide event handlers, there can be multiple hide events
            $splat(hideEvent).each(function(event) {
                obj.addEvent(event, this.hideHandlerTrigger.bind(this));
            }.bind(this));

            // add the obj to the hideEls array
            this.hideEls.push(obj);
        }
    },
    clearTimer: function() {
        $clear(this.timer);
    },
    show: function(stopEventFiring) {
        var triggerCoord, targetCoord, alignmentStyle, widthSign, widthSize, heightSign, heightSize;

        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the trigger
        if ($defined(this.triggerEl) && $defined(this.options.showTriggerClass))
        {
            if ($type(this.options.showTriggerClass) === 'object')
            {
                // Show using styles
                this.triggerEl.setStyles(this.options.showTriggerClass);
            }
            else
            {
                // Show using class names
                if(this.options.showTriggerClass !== "")
                {
                    this.triggerEl.addClass(this.options.showTriggerClass);
                }

                if ($defined(this.options.hideTriggerClass) && ($type(this.options.hideTriggerClass) === 'string') && this.triggerEl.hasClass(this.options.hideTriggerClass))
                {
                    this.triggerEl.removeClass(this.options.hideTriggerClass);
                }
            }
        }

        // set the is open flag
        this.isOpen = true;

        // process the target
        if ($defined(this.targetEl))
        {
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxOpenStylePre) && (!this.inTransition))
                {
                    this.targetEl.setStyles(this.options.fxOpenStylePre);
                }

                // Show with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxOpenStyle);
            }
            else
            {
                if (!$defined(this.options.showTargetClass))
                {
                    // Show using the visibility and display styles
                    this.targetEl.setStyles({ visibility: 'visible', display: 'block' });
                }
                else
                {
                    if ($type(this.options.showTargetClass) === 'object')
                    {
                        //Show using styles
                        this.targetEl.setStyles(this.options.showTargetClass);
                    }
                    else
                    {
                        // Show using class names
                        if (this.options.showTargetClass !== "")
                        {
                            this.targetEl.addClass(this.options.showTargetClass);
                        }

                        if ($defined(this.options.hideTargetClass) && ($type(this.options.hideTargetClass) === 'string') && this.targetEl.hasClass(this.options.hideTargetClass))
                        {
                            this.targetEl.removeClass(this.options.hideTargetClass);
                        }
                    }
                }
            }
        }

        if (($defined(this.options.alignment)) && (this.alignmentSet === false))
        {
            if (($defined(this.triggerEl)) && ($defined(this.targetEl)))
            {
                triggerCoord = this.triggerEl.getCoordinates();
                targetCoord = this.targetEl.getCoordinates();
                widthSign = '';
                heightSign = '';


                // calculate the width size and sign
                if (targetCoord.width > triggerCoord.width)
                {
                    widthSign = '-';
                    widthSize = (targetCoord.width - triggerCoord.width);
                }
                else
                {
                    widthSize = (triggerCoord.width - targetCoord.width);
                }

                // calculate the height size and sign
                if (targetCoord.height > triggerCoord.height)
                {
                    heightSign = '-';
                    heightSize = (targetCoord.height - triggerCoord.height);
                }
                else
                {
                    heightSize = (triggerCoord.height - targetCoord.height);
                }

                 // optional values are horiz_left, horiz_center, horiz_right, vert_top, vert_center, vert_bottom
                switch(this.options.alignment)
                {
                    case 'horiz_center':
                        alignmentStyle = { left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'horiz_right':
                        alignmentStyle = { left: widthSign + widthSize + 'px' };
                        break;
                    case 'vert_top':
                        alignmentStyle = { top: '0px' };
                        break;
                    case 'vert_center':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px' };
                        break;
                    case 'vert_bottom':
                        alignmentStyle = { top: heightSign + heightSize + 'px' };
                        break;
                    case 'horiz_left':
                        alignmentStyle = { left: '0px' };
                        break;
                    case 'center_center':
                        alignmentStyle = { left: widthSign + (widthSize/ 2 ) + 'px',  top: heightSign + (heightSize / 2) + 'px' };
                        break;
                    case 'center_left':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px', left: '0px' };
                        break;
                    case 'center_right':
                        alignmentStyle = { top: heightSign + (heightSize / 2) + 'px', left: widthSign + widthSize + 'px' };
                        break;
                    case 'top_center':
                        alignmentStyle = { top: '0px', left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'top_left':
                        alignmentStyle = { top: '0px', left: '0px' };
                        break;
                    case 'top_right':
                        alignmentStyle = { top: '0px', left: widthSign + widthSize + 'px' };
                        break;
                    case 'bottom_center':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: widthSign + (widthSize/ 2 ) + 'px' };
                        break;
                    case 'bottom_left':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: '0px' };
                        break;
                    case 'bottom_right':
                        alignmentStyle = { top: heightSign + heightSize + 'px', left: widthSign + widthSize + 'px' };
                        break;
                    default:
                        alignmentStyle = { left: '0px' };
                        break;
                }

                if ($defined(alignmentStyle))
                {
                    this.alignmentSet = true;
                    this.targetEl.setStyles(alignmentStyle);
                }
            }
        }

        // fire the onshow event
        if (!stopEventFiring)
        {
            this.fireEvent('onshow', this);
            this.fireEvent('onShowStateChange', this);
            this.fireEvent('onSelected', this);
        }

    },
    hide: function(stopEventFiring) {

        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        // process the trigger
        if ($defined(this.triggerEl) && $defined(this.options.hideTriggerClass))
        {
            if ($type(this.options.hideTriggerClass) === 'object')
            {
                // Hide using styles
                this.triggerEl.setStyles(this.options.hideTriggerClass);
            }
            else
            {
                // Hide using class names
                if (this.options.hideTriggerClass !== "")
                {
                    this.triggerEl.addClass(this.options.hideTriggerClass);
                }

                if ($defined(this.options.showTriggerClass) && ($type(this.options.showTriggerClass) === 'string') && this.triggerEl.hasClass(this.options.showTriggerClass))
                {
                    this.triggerEl.removeClass(this.options.showTriggerClass);
                }
            }
        }

        // set the is open flag
        this.isOpen = false;

        // process the target
        if ($defined(this.targetEl))
        {
            if (this.options.useFx)
            {
                // if a prefx style is available, set it
                if ($defined(this.options.fxCloseStylePre) && (!this.inTransition))
                {
                    this.targetEl.setStyles(this.options.fxCloseStylePre);
                }

                // Hide with transitions effects
                this.inTransition = true;
                this.fx.start(this.options.fxCloseStyle);
            }
            else
            {
                if (!$defined(this.options.hideTargetClass))
                {
                    // Hide using the visibility and display styles
                    this.targetEl.setStyles({ visibility: 'hidden', display: 'none' });
                }
                else
                {
                    if ($type(this.options.hideTargetClass) === 'object')
                    {
                        // Hide using styles
                        this.targetEl.setStyles(this.options.hideTargetClass);
                    }
                    else
                    {
                        // Hide using class names
                        if (this.options.hideTargetClass !== "")
                        {
                            this.targetEl.addClass(this.options.hideTargetClass);
                        }

                        if ($defined(this.options.showTargetClass) && ($type(this.options.showTargetClass) === 'string') && this.targetEl.hasClass(this.options.showTargetClass))
                        {
                            this.targetEl.removeClass(this.options.showTargetClass);
                        }
                    }
                }
            }
        }

        // fire the onhide event
        if (!stopEventFiring)
        {
            this.fireEvent('onhide', this);
            this.fireEvent('onShowStateChange', this);
        }
    },
    showDelay: function(timeDelay, stopEventFiring) {

        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.show(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.show.bind(this).delay(timeDelay);
        }
    },
    hideDelay: function(timeDelay, stopEventFiring) {

        // If the parameter is not defined, default it to false
        if (!$defined(stopEventFiring))
        {
            stopEventFiring = false;
        }

        if ($chk(timeDelay))
        {
//          this.timer = this.hide(stopEventFiring).bind(this).delay(timeDelay);
            this.timer = this.hide.bind(this).delay(timeDelay);
        }
    },
    showHandler: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }

        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }

        // clear the timer delay to prevent it from firing
        $clear(this.timer);

        // only process if the popup is not open
        if (this.isOpen === false)
        {
            if ($defined(this.options.showDelay))
            {
                this.showDelay(this.options.showDelay);
            }
            else
            {
                this.show();
            }
        }
        else if (this.options.enableTargetToggle)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    hideHandler: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }

        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }
        // clear the timer delay to prevent it from firing
        $clear(this.timer);

        // only process if the popup is open
        if (this.isOpen === true)
        {

            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    showHandlerTrigger: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
             event.stopPropagation();
        }

        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }

        // clear the timer delay to prevent it from firing
        $clear(this.timer);

        // only process if the popup is not open
        if (this.isOpen === false)
        {
            // if a delay is defined, use it.
            if ($defined(this.options.showDelay))
            {
                this.showDelay(this.options.showDelay);
            }
            else
            {
                this.show();
            }
        }
        else if (this.options.enableTriggerToggle)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }

    },
    hideHandlerTrigger: function(event) {
        // stop event propagation if the flag is set
        if (this.options.stopPropagation === true && $defined(event))
        {
            event.stopPropagation();
        }

        // prevent default behaviour if the flag is set
        if (this.options.preventDefault === true && $defined(event))
        {
            event.preventDefault();
        }

        // clear the timer delay to prevent it from firing
        $clear(this.timer);

        // only process if the popup is open
        if (this.isOpen === true)
        {
            if ($defined(this.options.hideDelay))
            {
                this.hideDelay(this.options.hideDelay);
            }
            else
            {
                this.hide();
            }
        }
    },
    keypressHandlerTrigger: function(event) {
        this.keypressHandler(event);

        // if the enter key is pressed, set the focus to the target element
//      if (($defined(event.key)) && (event.key == 'enter') && ($defined(this.targetEl)))
//      {
//          this.targetEl.focus();
//      }
    },
    keypressHandler: function(event) {
        if ($defined(event) && $defined(event.key))
        {
            // stop event propagation if the flag is set
            if ((this.options.stopPropagation === true) && (event.key === 'enter' || event.key === 'esc'))
            {
                event.stopPropagation();
            }

            // prevent default behaviour if the flag is set
            if ((this.options.preventDefault === true) && (event.key === 'enter' || event.key === 'esc'))
            {
                event.preventDefault();
            }

            // clear the timer delay to prevent it from firing
            $clear(this.timer);

            switch(event.key)
            {
                case 'enter':
                    // only process if the popup is not open
                    if(this.isOpen === false)
                    {
                        this.show();
                    }
                    break;
                case 'esc':
                    // only process if the popup is open
                    if (this.isOpen === true)
                    {
                        this.hide();
                    }
                    break;
            }
        }

    },
    transitionStartHandler: function() {
        this.fireEvent('onTransitionStart', this);
    },
    transitionCompleteHandler: function() {
        // if a postfx style is available, set it
        if (this.isOpen)
        {
            if ($defined(this.options.fxOpenStylePost))
            {
                this.targetEl.setStyles(this.options.fxOpenStylePost);
            }
        }
        else
        {
            if ($defined(this.options.fxCloseStylePost))
            {
                this.targetEl.setStyles(this.options.fxCloseStylePost);
            }
        }
        this.inTransition = false;

        this.fireEvent('onTransitionComplete', this);
    }
});

//form-reset.js
hp.resetForm = function() {
    setTimeout(function() {
        this.widgetsCollection.each(function(el) {
            if (typeof el.reset == 'function') {
                el.reset();
            }
        });
    }.bind(this), 50);
};

hp.addWidgetToFormCollection = function (el,widget) {
    var form = el.getParent("form");
    if (form) {
        if (!form.widgetsCollection) {
            form.widgetsCollection = [];
        }

        form.widgetsCollection.push(widget);
    }
};

// popup-utils.js
hp.PopupManager = new Class({
    popups: [],

    add: function (popup) {
        this.popups.push(popup);
        popup.addEvent("onshow", function () {
            for (var i = 0; i < this.popups.length; i++) {
                var p = this.popups[i];
                if (p != popup && p.isOpen) {
                    p.hide();
                }
            }
        }.bind(this));

        return popup;
    },

    addAll: function(popups) {
        popups.each(function(popup) {
            this.add(popup);
        }.bind(this));
    },

    hide: function () {
        for (var i = 0; i < this.popups.length; i++) {
            var popup = this.popups[i];
            if (popup.isOpen) {
                popup.hide();
            }
        }
    }
});

/**
 * this class should be mixed to popup in order to add accessibility functionality
 * */
hp.PopupAccessibility = new Class({

    addSimpleAccessibility : function (selector) {

        this._initLinks(selector);

        if (this.links && this.links.length > 0) {
            this.addAccessibility(this.links[0], this.links[this.activeLinksNum]);
            this.addKeyPressHandler();
        }

        this.links.each(function(el){
           el.addEvent("keydown", function(event){
               if (event.key  == 'esc'){
                    if (this.isOpen) {
                        this.hide();
                        this._triggerLink().focus();
               }}
               if (event.key  == 'up' || event.key  == 'left' || event.key  == 'tab' && event.shift){this._nextTargetLink(-1); return false;}
               if (event.key  == 'down' || event.key  == 'right' || event.key  == 'tab'){this._nextTargetLink(+1); return false;}
               if (event.key  == 'home'){this._nextTargetLink(0); return false;}
               if (event.key  == 'end'){this._nextTargetLink('last'); return false;}

           }.bind(this));
        }.bind(this));

    },

    addAutoCompleteAccessibility: function(){
        this.triggerEl.addEvent("keydown", function(event){
            if (this._isCharKey(event.key)){
                if (!this.isOpen) {
                    this._getLinksByFirstChar(event.key.toLowerCase());
                    this.show();
                    this.links[this.activeLink].focus();
                }
            }
        }.bind(this));

        this.addEvent("onhide", function() {
                this._removeDisabledState();
        });
    },

    /**
     *
     * @param firstLink
     * @param lastLink
     * */
    addAccessibility : function (firstLink, lastLink) {
        if (firstLink) {
            this._addFirstLinkEvents(firstLink);
        }

        if (lastLink) {
            this._addLastLinkEvents(lastLink);
        }
    },

    addKeyPressHandler :function () {
        this._triggerLink().addEvent("keypress", function (event) {
            if (event.key != 'enter' || this.inTransition) {
                return true;
            }

            if (this.isOpen) {
                this.hide();
            } else {
                this.show();
                this.links[this.activeLink].focus();

            }

            return false;
        }.bind(this));
    },

    _addFirstLinkEvents : function (firstLink) {
        firstLink.addEvent('keypress', function(event) {
            if (event.key == 'tab' && event.shift) {
                this.hide();
                this._triggerLink().focus();
            }
        }.bind(this));
    },

    _addLastLinkEvents: function (lastLink) {
        lastLink.addEvent('keypress', function(event) {
            if (event.key == 'tab' && !event.shift) {
                this.hide();
                this.activeLink = 0;
            }
        }.bind(this));
    },

    _triggerLink: function () {
        return this.triggerEl.nodeName == "A" ? this.triggerEl : this.triggerEl.getElement("a");
    },

    _nextTargetLink: function (dir) {
        if(dir != 'last' && dir !== 0){
            this.activeLink += dir;
            this._checkActiveLink();
        }
        else if(dir === 0){
            this.activeLink = 0;
        }
        else if(dir == 'last'){
            this.activeLink = this.activeLinksNum;
        }

        if (this.isOpen){
            this.links[this.activeLink].focus();
        }
        else{ /* if popup not opened just UP DOWN event on trigger*/
          return  this.activeLink;
        }

    },

    _checkActiveLink:function(){
        if(this.activeLink < 0){
            this.activeLink = this.activeLinksNum;
        }
        else if(this.activeLink > this.activeLinksNum){
            this.activeLink = 0;
        }
    },

    _initLinks: function(selector){
        this.links = this.targetEl.getElements(selector || "a:not(.disable):not(.js_disable):not(.hidden)");
        this.activeLinksNum = this.links.length - 1;

        var selectedEl = this.targetEl.getElement(".selected");

        if(selectedEl && selectedEl.getElement("a:not(.disable):not(.js_disable)")){
            this.activeLink = selectedEl.getAllPrevious().length;
        }
        else{
            this.activeLink = 0;
        }

    },

    /* addAutoCompleteAccessibility functions */

    _isCharKey: function(key){
        if(key == 'enter' ||
            key == 'up' ||
            key == 'down' ||
            key == 'left' ||
            key == 'right' ||
            key == 'space' ||
            key == 'backspace' ||
            key == 'tab' ||
            key == 'delete' ||
            key == 'shift' ||
            key == 'control' ||
            key == 'alt' ||
            key == 'capslock' ||
            key == 'pageup' ||
            key == 'pagedown' ||
            key == 'end' ||
            key == 'home' ||
            key == 'numlock' ||
            key == 'scrolllock' ||
            key == ';' ||
            key == '=' ||
            key == ',' ||
            key == '-' ||
            key == '.' ||
            key == '/' ||
            key == '`' ||
            key == '[' ||
            key == '\\' ||
            key == ']' ||
            key == '\'' ||
            key == '+'){
            return false;
        }
        return true;
    },

    _getLinksByFirstChar: function(char){

        var linksFound = false;

        this.links.map(function(link){
            var linkTrim = link.getProperty("text").trim().toLocaleLowerCase();

            if(linkTrim.charAt(0)!= char){
                link.addClass('js_disable');
            }
            else{
                linksFound = true;
            }
        });

        if(linksFound){
            this._initLinks();
        }
        else {
            this._removeDisabledState();
        }
    },

    _removeDisabledState: function(){
        this._initLinks("a:not(.disable)");
        this.links.each(function(link){
            if(link.hasClass('js_disable')){
                link.removeClass('js_disable');
            }
        });
        this._initLinks();   // to properly set of  activeLink

    }
});

hp.HeaderFooterPopup = new Class({
    preventFastClosing: function () {
        this.targetEl.addEvents({
            mouseleave: this.hideWithDelay.bind(this),
            mouseenter: this.openIfClosed.bind(this)
        });
    },

    openIfClosed: function () {
        if (!this.isOpen) {
            this.show();
        }
    },

    hideWithDelay: function () {
        if (this.isOpen) {
            this.hideDelay(this.options.hideDelay);
        }
    }
});

//selectable.js
/**
 * @class SelectableItem
 *
 * @events:
 *      selectItem -
 *      unselectItem -
 * */
hp.SelectableItem = new Class({
    Implements: [Options, Events],

    options: {
        selectionClass: "selected",
        selectionEvent: "click",
        hasKeyDownEvent:"true"
    },

    /**
     * @constructor
     *
     * @param {Element} itemEl
     * @param {Hash} options
     * */
    initialize: function (itemEl, options) {
        if (!itemEl) {
            return;
        }
        this.itemEl = itemEl;
        this.setOptions(options);

        var select = this.select.bind(this);

        itemEl.addEvent(this.options.selectionEvent, select);
        if(this.options.hasKeyDownEvent === "true"){
            itemEl.addEvent("keydown",
                function (event) {
                    if(event.key == "enter") {
                        select();
                    }

                    return true;
                }
            );
        }
    },

    select: function () {
        if (this.isSelected()) {
            return false;
        }

        this.itemEl.addClass(this.options.selectionClass);
        this.fireEvent("selectItem", this);
        return true;
    },

    /**
     * @memberOf SelectableItem
     * */
    unselect: function () {
        if (!this.isSelected()) {
            return;
        }

        this.itemEl.removeClass(this.options.selectionClass);
        this.fireEvent("unselectItem", this);
    },

    /**
     * @memberOf SelectableItem
     * */
    isSelected: function () {
        return this.itemEl.hasClass(this.options.selectionClass);
    }
});

/**
 * @class SelectableItemWithSubMenu
 * */
hp.SelectableItemWithSubMenu = new Class({
    Extends: hp.SelectableItem,

    options: {
        isFocusFirstLink: true
    },

    initialize: function (itemEl, options) {
        this.parent(itemEl, options);

        var container =  $(this.getSubMenuContainerId());
        if (!container) {
            return;
        }

        if (this.options.container) {
            this.initAnimateContainer(container);
        } else {
            this.initSimpleContainer(container);
        }
    },

    initSimpleContainer: function (cnt) {
        this.addEvents({
            selectItem: function () {
                cnt.show();

                if (this.options.isFocusFirstLink) {
                    this.focusFirstLink(cnt);
                }
            },

            unselectItem: function () {
                cnt.hide();
            }
        });
    },

    focusFirstLink: function (cnt) {
        var firstLink = cnt.getElement("a");
        if (firstLink) {
            if (isIE6 || isIE7 || isIE8) {
                (function () {
                    if (firstLink.isVisible()) {
                        firstLink.focus();
                    }
                }).delay(100)
            } else {
                firstLink.focus();
            }
        }
    },

    initAnimateContainer: function (cnt) {
        new hp.AnimatedContainer(cnt, this.options.container);

        this.addEvents({
            selectItem: function () {
                cnt.effectShow();
            },
            unselectItem: function () {
                cnt.effectHide();
            }
        });

        if (cnt) {
            cnt.addEvent("after-opening", function () {
                this.getElement("a").focus();
            });
        }
    },

    /**
     * @memberOf SelectableItemWithSubMenu
     * */
    getSubMenuContainerId: function() {
        var el = this.itemEl.getElement("a");
        return el ? el.get("rel") : "";
    },

    /**
     * @memberOf SelectableItemWithSubMenu
     * */
    getSubMenuEl: function () {
        var subMenuContainer = $(this.getSubMenuContainerId());
        if (!subMenuContainer) {
            return null;
        }

        if (subMenuContainer.hasClass("js_menu")) {
            return subMenuContainer;
        }

        return subMenuContainer.getElement(".js_menu");
    }
});

/**
 * fire events
 * */
hp.Selectable = new Class({
    Implements: [Options, Events, CHKOverrides],

    selectedItem: null,

    options: {
        itemsSelector: null,
        itemConstructor:hp.SelectableItem
    },

    initialize: function (menu, options) {
        this.setOptions(options);
        this.setOverrides();

        this.menuItems = this.getItemElements(menu).map(function (itemEl) {
            if (!itemEl.hasClass("disabled")) {
                var item = this.createMenuItem(itemEl, this.options.item);
                item.addEvents({
                    selectItem: this.onSelectItem.bind(this),
                    unselectItem: this.onUnSelectItem.bind(this)
                });

                if (item.isSelected()) {
                    this.selectedItem = item;
                }
                return item;
            }
        }.bind(this));

        this.handleTabNavigation();

    },

    /**
     *  TODO should be done as strategy
     *
     **/
    onUnSelectItem: function (item) {
        if (this.selectedItem == item) {
            this.selectedItem = null;
            this.setDividers(item.itemEl, "active");
        }
    },

    onSelectItem: function (item) {
        var event = {
            previousItem: this.selectedItem,
            currentItem : item
        };

        if (this.selectedItem) {
            this.selectedItem.unselect();
        }
        this.selectedItem = item;
        this.setDividers(item.itemEl, "active");
        this.fireEvent("selectItem", event);
    },

    getItemElements: function (menuEl) {
        if (this.options.itemsSelector) {
            return menuEl.getElements(this.options.itemsSelector);
        } else {
            return menuEl.getChildren();
        }
    },

    createMenuItem: function (itemEl, options) {
        return new this.options.itemConstructor(itemEl, options);
    },

    handleTabNavigation : function () {
        this._addFirstItemEvents(this.menuItems[0]);
        this._addLastItemEvents(this.menuItems.getLast());
    },

    _addFirstItemEvents : function (firstItem) {
        if(firstItem){
            firstItem.itemEl.getElement("a").addEvent('keydown', function(event) {
                if (event.key == 'tab' && event.shift) {
                    this.fireEvent("leaveToPrev");
                    this.fireEvent("leave");
                }

                return true;
            }.bind(this));
        }
    },

    _addLastItemEvents: function (lastItem) {
        if(lastItem){
            lastItem.itemEl.getElement("a").addEvent('keydown', function(event) {
                if (event.key == 'tab' && !event.shift) {
                    this.fireEvent("leaveToNext");
                    this.fireEvent("leave");
                }

                return true;
            }.bind(this));
        }
    },

    setDividers: function(itemEl, className){
        if(!itemEl.hasClass("disabled")) {
            var prevDivider = itemEl.getPrevious(".js_tabs_divider");
            this.toggleDivider(prevDivider, className);
            var nextDivider = itemEl.getNext(".js_tabs_divider");
            this.toggleDivider(nextDivider, className);
        }
    },

    toggleDivider: function(dividerEl, className){
        if (dividerEl != null) {
            if(dividerEl.hasClass(className)) {
                dividerEl.removeClass(className);
            } else {
                dividerEl.addClass(className);
            }
        }
    }
});

hp.MultiSelectable = new Class({
    Extends: hp.Selectable,

    initialize: function (item, options) {
        this.parent(item, options);
    },

    onSelectItem: function (item) {
        var event = {
            previousItem: this.selectedItem,
            currentItem : item
        };

        if (this.selectedItem && this.selectedItem !=  item) {
            this.selectedItem.unselect();
        }
        this.selectedItem = item;
        this.setDividers(item.itemEl, "active");
        this.fireEvent("selectItem", event);
    }
});

//step_descriptor.js
/**
 * @class Steps
 */
hp.Steps = new Class({

    Implements: [Options, CHKOverrides],

    options: {
        itemConstructor: hp.SelectableItemWithSubMenu,
        isSelectTabFromUrl: true,
        isFocusFirstLink: false,
        item:{
            selectionEvent:"null",
            hasKeyDownEvent:"false"
        }
    },

    /**
     * @param {Element} stepsEl
     * @param {Hash} options
     */
    initialize: function (stepsEl, options) {
        this.setOptions(options);
        this.setOverrides();


        this.setSelectedStepFromUrlParam(stepsEl);

        stepsEl.getElements(".js_step_content").hide();


        this.prevButton = stepsEl.getElement(".js_prev");
        this.nextButton = stepsEl.getElement(".js_next");

        this.prevButton.addEvent("click", function(){
            this.switchStep(-1);
        }.bind(this));
        this.nextButton.addEvent("click", function(){
            this.switchStep(1);
        }.bind(this));

        this.menu = new hp.Selectable(stepsEl, this.options || {});
        this.menu.addEvent('selectItem', function (event) {
            this.nextStepAction();
        }.bind(this));

        if (this.menu.selectedItem) {
            var cnt = this.menu.selectedItem.getSubMenuContainerId();
            var cntWrapper = $(cnt);
            if (cntWrapper) {
                cntWrapper.show();
            }
        } else {
            var items = this.menu.menuItems;
            if (items && items.length > 0) {
                items[0].select()
            }
        }

        this.nextStepAction();

        return this.menu;
    },

    switchStep: function(step) {
        for (var i = 0; i < this.menu.menuItems.length; i++) {
            if(this.menu.menuItems[i] == this.menu.selectedItem) {
                 try {this.menu.menuItems[i+step].select(); 
                    this.nextStepAction();
                    this.updateHash(this.menu.menuItems[i+step].itemEl);
                    break;
                }catch(e){}
            }
        }
    },

    updateHash: function(selectedMenuItem) {
        var newHash = selectedMenuItem.getElement(".js_step_link").get("href");
        newHash = newHash.substr(1);
        window.location.hash = newHash;
    },

    nextStepAction: function() {
        var currentItem;
        this.menu.menuItems.each(function(menuItem, i) {
            if (menuItem == this.menu.selectedItem) {
                currentItem = menuItem;
                if (i == 0) {
                    this.prevButton.addClass("hidden");
                    this.nextButton.removeClass("hidden");
                } else if (i > 0 && i < this.menu.menuItems.length - 1) {
                    this.prevButton.removeClass("hidden");
                    this.nextButton.removeClass("hidden");
                } else {
                    this.prevButton.removeClass("hidden");
                    this.nextButton.addClass("hidden");
                }
            }else if(currentItem){
                menuItem.itemEl.removeClass("selected");
            }else if(!currentItem && !menuItem.itemEl.hasClass("selected")){
                menuItem.itemEl.addClass("selected");
            }
        }.bind(this));
    },

    setSelectedStepFromUrlParam: function (stepsEl) {
        var stepContentMather = /#step=([^=&$]+)/i.exec(window.location.href);
        if (!stepContentMather) {
            return;
        }

        var link = stepsEl.getElement(".js_step_trigger a[rel=step" + stepContentMather[1] + "]");
        if (!link) {
            return;
        }

        link.getParent("div").addClass("current");
    }
});

/**
 *
 * @param {String} stepsSelector
 * @param {Hash} options
 *
 * @return {Steps[]} - array of created objects
 */
hp.Steps.init = function(stepsSelector, options) {
    return $$(stepsSelector || ".step_descriptor").map(function (steps) {
        return new hp.Steps(steps, options);
    });
};

//tabs.js
/**
 * @class Tabs
 */
hp.Tabs = new Class({

    Implements: [Options, CHKOverrides],

    options: {
        itemConstructor: hp.SelectableItemWithSubMenu,
        isSelectTabFromUrl: true
    },

    /**
     * @param {Element} tabsEl
     * @param {Hash} options
     */
    initialize: function (tabsEl, options) {

        this.setOptions(options);
        this.setOverrides();

        this.setSelectedTabFromUrlParam();

        var tabs_element = tabsEl;

        while (tabs_element && !tabs_element.hasClass("js_tabs")) {
            tabs_element = tabs_element.getParent();
        }

        tabs_element.getElements(".js_tab_content").hide();

        var menu = new hp.Selectable(tabsEl, this.options || {});
        menu.addEvent('selectItem', function (event) {
            if (event.previousItem) {
                updateScreenReading(event.previousItem.itemEl, '.js_unselectedTab');
            }

            if (event.currentItem) {
                updateScreenReading(event.currentItem.itemEl, '.js_selectedTab');
            }
        });

        if (menu.selectedItem) {
            var cnt = menu.selectedItem.getSubMenuContainerId();
            var cntWrapper = $(cnt);
            if (cntWrapper) {
                cntWrapper.show();
            }
        } else {
            var items = menu.menuItems;
            if (items && items.length > 0) {
                items[0].select();
            }
        }

        return menu;
    },

    setSelectedTabFromUrlParam: function () {
        var tabContentMather = /#tab=([^=&$]+)/i.exec(window.location.href);
        if (!tabContentMather) {
            return;
        }

        //var rel =  "tab" + tabContentMather[1];
        var link = $$(".tabs .js_tab_trigger a[rel=" + tabContentMather[1] + "]");
        if (!link) {
            return;
        }

        link.getParent("div").addClass("current");
    }

});

/**
 *
 * @param {String} tabsSelector
 * @param {Hash} options
 *
 * @return {Tabs[]} - array of created objects
 */
hp.Tabs.init = function(tabsSelector, options) {
    return $$(tabsSelector || ".tabs").map(function (tabs) {
        return new hp.Tabs(tabs, options);
    });
};

//under-layed-popup.js
var UnderLayedPopup = new Class({

    Extends : CHKCustomPopUp,

    options : {
        syncFlash: false,
        popupOptions : {
            tabIndex : 10,
            showEvent : 'click',
            hideEvent : null,
            useFx : true,
            fxOpenStyle : {
                opacity : 1
            },
            fxOpenStylePre : {
                opacity : 0,
                display : 'block',
                visibility : 'visible'
            },
            fxCloseStyle : {
                opacity : 0
            },
            fxCloseStylePost : {
                opacity : 0,
                display : 'none',
                visibility : 'hidden'
            },
            fxDuration : 100,
            fxTransition : Fx.Transitions.Sine.easeInOut,
            enableKeypress : false
        },
        closeElsClass : '.js_pop_close',
        closeIfClickOnDarkenLayer : false
    },

    initialize : function(triggerEl, targetEl, options) {
        triggerEl = $(triggerEl);
        targetEl = $(targetEl);

        if (!triggerEl || !targetEl) {
            return;
        }

        this.setOptions(options || {});
        this.parent(triggerEl, targetEl, this.options.popupOptions);

        this.initDarkenLayer();
        this.initCloseButtons();

        this.bindEvents();
        this.checkFlash();
        this.hide(true);
        this.targetEl.inject($(document.body));
    },

    initDarkenLayer : function() {
        UnderLayedPopup.DARKEN_LAYER.init();
        if (this.options.closeIfClickOnDarkenLayer) {
            this.addHideElement(UnderLayedPopup.DARKEN_LAYER.darkenEl);
        }
    },

    /**
     * @method initCloseButtons
     * @description initialize close button(s) with events
     */
    initCloseButtons : function() {
        var closeEls = this.targetEl.getElements(this.options.closeElsClass);
        closeEls.setProperty('tabindex', this.options.tabIndex + 1);
        closeEls.addEvent('click', function(event) {
            try {event.stop();}catch(e){} 
            this.hide();
        }.bind(this));
    },

    /**
     * @method bindEvents
     * @description setup show/hide events to control darken layer, its height
     *              and also opens proper accordion element
     */
    bindEvents : function() {
        this.addEvent('onshow', this.onPopupShow.bind(this));
        this.addEvent('onhide', this.onPopupHide.bind(this));
    },

    /**
     * @method checkFlash
     * @description if flash sync fix needed (flash keeps playing in ie when element is hidden)
     * it stores flash object as a string that will be used to insert flash object when popup is opened
     */
    checkFlash: function() {
        if (this.options.syncFlash) {
            var flashEl = this.targetEl.getElement('object');
            if (flashEl) {
                this.flashWrapEl = (new Element('div')).addClass('fsh-syn').wraps(flashEl);
                this.flashContentEl = this.flashWrapEl.get('html');
            }
        }
    },

    /**
     * @method syncFlash
     * @param display {Boolean} - if true - will inject flash string, otherwise - remove it from flash wrapper
     * @description if flash sync fix needed (flash keeps playing in ie when element is hidden)
     * it stores flash object as a string that will be used to insert flash object when popup is opened
     */
    syncFlash: function(display) {
        if (this.options.syncFlash && this.flashWrapEl) {
            this.flashWrapEl.set('html', display ? this.flashContentEl : '');
        }
    },

    /**
     * @method onPopupHide
     * @description popup hide event handler
     */
    onPopupHide: function() {
        UnderLayedPopup.DARKEN_LAYER.hide();
        this.syncFlash(false);
    },

    /**
     * @method onPopupShow
     * @description popup showing event handler
     */
    onPopupShow : function() {
        UnderLayedPopup.DARKEN_LAYER.showFor(this.targetEl);
        this.syncFlash(true);
    }

});

UnderLayedPopup.DARKEN_LAYER = {

    layerClass : "pop_drk",

    init : function() {
        if (!this.darkenEl) {
            this.darkenEl = (new Element('div')).set({
                'class' : this.layerClass,
                'opacity' : ' 0.8'
            });
            this.darkenEl.inject($(document.body));
            this.darkenEl.hide();
        }
    },

    /**
     * @method showFor
     * @description initialize darken layer as a static variable, coz no need to
     *              create the same for each popup
     */
    showFor : function(targetEl) {
        var bodyEl = $(document.body);
        var dir =  bodyEl.getStyle('direction');
        if (dir == 'rtl') {
            targetEl.setStyles({
                top : bodyEl.getScrollTop(),
                marginRight : -targetEl.getWidth() / 2
            });
        } else {
            targetEl.setStyles({
                top : bodyEl.getScrollTop(),
                marginLeft : -targetEl.getWidth() / 2
            });
        }

        this.darkenEl.setStyle('height', bodyEl.getScrollHeight());
        this.darkenEl.show();
    },

    hide : function() {
        this.darkenEl.hide();
    }
};

function initUnderLayedPopup(triggerClass, targetAttr, options) {
    triggerClass = triggerClass || '.js_overlay_trigger';
    targetAttr = targetAttr || 'rel';
    options = options || {};
    options.syncFlash = true;

    var groupByRel = {};

    $$(triggerClass).each(function(triggerEl) {
        var rel = triggerEl.getProperty(targetAttr);
        var targetEl = $(rel);
        var aElemTabindex, inputElemTabindex = new Array();
        

        if (!groupByRel[rel]) {
            var popup = new UnderLayedPopup(triggerEl, targetEl, options);
            popup.addEvents({
                onTransitionComplete: function (popup) {
                    if (!popup.isOpen) {
                        return;
                    }

                    var link = targetEl.getElement("a");
                    if (link) {
                        link.focus();
                    }
                    
                    if($$('a').get('tabindex').length > 0 ) {
                            aElemTabindex = $$('a').get('tabindex');
                            $$('a').setProperty('tabindex','-1');
                    }
                    
                    if($$('input').get('tabindex').length > 0 ) {
                        inputElemTabindex = $$('input').get('tabindex');
                        $$('input').setProperty('tabindex','-1');
                    }
                    popup.targetEl.getElements('a').setProperty('tabindex','251');
                    popup.targetEl.getElements('input').setProperty('tabindex','251');
                    
                },

                onhide: function () {
                    triggerEl.focus();
                    if(aElemTabindex.length > 0 ) 
                        $$('a').each(function(el,i){el.setProperty('tabindex',aElemTabindex[i])});
                    if(inputElemTabindex.length > 0 ) 
                        $$('input').each(function(el,i){el.setProperty('tabindex',inputElemTabindex[i])});
                        
                    $$('.js_overlay_trigger').setProperty('tabindex','250');    
                }
                
                
            });

            groupByRel[rel] = popup;
        } else {
            groupByRel[rel].addShowElement(triggerEl);
        }
    });

    return groupByRel;
}

function initUnderLayedPopupWithBrithcove(triggerClass, targetAttr, options) {
    var groupByRel = initUnderLayedPopup(triggerClass, targetAttr, options);
    if (typeof brightcove == "undefined") {
        return;
    }

    for (var rel in groupByRel) {
        groupByRel[rel].addEvent("onshow", function () {
            if (typeof brightcove != "undefined") {
                brightcove.createExperiences();
            }
        })
    }
}

//dropdown.js
hp.BasicDropdown = new Class({

    Extends: CHKCustomPopUp,

    Implements: [hp.PopupAccessibility],

    options: {
        isSortType: false
    },


    initialize: function (dd) {

        var trigger = dd.getElement('.js_dd_trigger');
        var target = dd.getElement('.js_dd_target');

        //need to prevent default keypress
        this.parent(trigger, target, {showEvent: null, hideEvent: null, enableTargetToggle: true, enableKeypress: false});

        if(dd.hasClass("js_disabled")){
            return;
        }

        trigger.addEvent('click',this.showHandler.bind(this));

        this.addHideElement(target.getElement('.js_dd_header'), 'click');

        this.addEvents({
            onshow: function() {
                dd.removeClass("dd_close");
                dd.addClass("dd_open");
                dd.setStyle('z-index', 3);
                if (this.targetEl.getElements(".dd_list_items").length > 0 || this.targetEl.getElements(".dd_item").length > 0) {
                    this.checkDirection();
                }
            },

            onhide: function() {
                dd.removeClass("dd_open");
                dd.addClass("dd_close");
                dd.setStyle('z-index', 2);

                this.removeDirectionClasses();
            }
        });

        this.targetEl.addEvent('click', function () {
            this.hide();
            this.triggerEl.getElement("a").focus();
        }.bind(this));

        this.addSimpleAccessibility();
        this.addAutoCompleteAccessibility();
    },

    checkDirection: function () {
        var itemsList = this.targetEl.getElements(".dd_list_items");
        var listHeight = 0;
        if (itemsList[0]) {
            listHeight = itemsList[0].getCoordinates().height;
        } else {
            itemsList = this.targetEl.getElements(".dd_item");
            for (var i = 0, len = itemsList.length; i < len; i++) {
                listHeight += itemsList[i].offsetHeight;
            }
        }
//Adding a try and catch in case we dont have .dd_label     
    try{
        var label = this.triggerEl.getElement(".dd_label");
        var toUp = label.getCoordinates().top - window.getScroll().y;
        var toDown = window.getSize().y - toUp;

        if (toDown < listHeight && toUp >= listHeight) { // if to down does not fit
            var labelHeight = label.offsetHeight;

            var marginTop = -listHeight - labelHeight;
            itemsList[0].setStyle('margin-top', marginTop + 'px');
            this.changeDirectionClasses("up");

            var labelTri = this.triggerEl.getElement(".dd_label");
            var gap = labelTri.offsetHeight - labelHeight;
            label.setStyle('margin-top', gap + 'px');
        } else {
            itemsList[0].setStyle('margin-top', 0);
            this.changeDirectionClasses("down");

            label.setStyle('margin-top', 0);
        }
    } catch(e){
        if (window.console && window.console.log) {
            console.log("ERROR (file_name.js): " + e.message);
        }
    }
    },

    changeDirectionClasses: function(direction){
        if(direction == "up"){
            this.targetEl.addClass('dd_upside');
            this.triggerEl.addClass('dd_trigger_upside');
            this.targetEl.removeClass('dd_downside');
            this.triggerEl.removeClass('dd_trigger_downside');
        }else{
            this.targetEl.addClass('dd_downside');
            this.triggerEl.addClass('dd_trigger_downside');
            this.targetEl.removeClass('dd_upside');
            this.triggerEl.removeClass('dd_trigger_upside');
        }
    },

    removeDirectionClasses: function(){
        this.targetEl.removeClass('dd_downside');
        this.triggerEl.removeClass('dd_trigger_downside');
        this.targetEl.removeClass('dd_upside');
        this.triggerEl.removeClass('dd_trigger_upside');
    }

});

hp.SortDropdown = new Class({

    Extends: hp.BasicDropdown,

    options: {
        selected: null,
        onChange: null
    },

    initialize: function(dd,options) {
        this.parent(dd);
        this.dd = dd;

        this.isSortType = true;
        this.setOptions(options || {});

        // NOTE: set first value from input value
        this.input = dd.getElement('.js_dd_input');
        this.reset();

        this.isError = false;
        this.preLabel = dd.getElement(".js_prelabel") || false;
        if(dd.hasClass("js_error")){
            this.isError = true;
            if(this.preLabel){
                this.preLabel.setStyle("display","none");
            }
        }

        var self = this;
        this.items = this.targetEl.getElements('.dd_item a');

        this.findSelectedItem();


        this.items.addEvent("click", function () {
            self.selectItem(this.get('text'), this.get('data-value'));
            self.addSelectedClass(this.getParent()); // select current item

            if(self.isError === true){
                var el = self.dd.getElement(".dd_error");
                if(el && el.removeClass("dd_error")){}
                if(self.preLabel){
                    self.preLabel.setStyle("display","inline");
                }
            }
            self.fireEvent("onChange");
        });


        if(this.options.onChange){
            this.addEvent("onChange", this.options.onChange);
        }

        hp.addWidgetToFormCollection(this.dd, this);

        this.addExtraAccessibility();
    },

    findSelectedItem: function(){
            if(this.options.selected){ //select item from options
                this.items.each(function(item){
                   var dd_item = item.getParent();
                   if(item.get('text') == this.options.selected){
                       this.selectItem(item.get('text'), item.get('data-value'));
                       this.addSelectedClass(dd_item);
                   }else{
                       this.removeSelectedClass("selected");
                   }
                }.bind(this));
            }else{ //select item with class "selected"
                this.items.each(function(item){
                   if(item.getParent().hasClass("selected")){
                       this.selectItem(item.get('text'), item.get('data-value'));
                       this.addSelectedClass();
                   }
                }.bind(this));
            }
    },

    selectItem: function(text,value){
        this.input.value = value;
        this.reset(text);
    },

    addSelectedClass: function(dd_item){
        this.items.getParent().removeClass("selected"); //unselect all items
        if(dd_item){
            dd_item.addClass("selected");  // select current item
        }
        this.targetEl.addClass('selected');
        this.triggerEl.addClass('selected');
    },

    removeSelectedClass: function(dd_item){
        if(dd_item){
            dd_item.removeClass("selected");
        }
        this.targetEl.removeClass('selected');
        this.triggerEl.removeClass('selected');
    },

    reset: function (text) {
        this.dd.getElements(".js_dd_input_value").each(function (e) {
            var height = e.getHeight();
            this.cropTextByHeight(text || this.input.value,e,e,height+Math.floor(height/2));
            //e.set("text", text || this.input.value);
            if(!text && this.items){
                this.items.getParent().removeClass("selected"); //unselect all items
                this.removeSelectedClass();
            }
        }.bind(this));
    },

    cropTextByHeight:function (text, targetEl, heightEl, maxHeight) {
        if (!targetEl) {
            return;
        }
        targetEl.set('text', text);
        if (heightEl.offsetHeight > maxHeight && text.length > 0) {
            var newText = '';
            targetEl.innerHTML = '';
            var i = 0;
            while (heightEl.offsetHeight <= maxHeight && i < text.length) {
                i += 1;
                newText = targetEl.innerHTML;
                targetEl.innerHTML = text.substr(0, i) + '...';
            }
            targetEl.innerHTML = newText;
        }
    },

    addExtraAccessibility: function(){
        this.triggerEl.addEvent('keydown', function(event){
            if (event.key  == 'up' || event.key  == 'left'){
                this._setNextTargetLink(-1);
                return false;
            }
            if (event.key  == 'down' || event.key  == 'right'){
                this._setNextTargetLink(1);
                return false;
            }
        }.bind(this));
    },

    _setNextTargetLink: function(dir){
        var curLink = this._nextTargetLink(dir);
        var item =  this.items[curLink];
        this.selectItem(item.get('text'), item.get('data-value'));
        this.addSelectedClass(item.getParent());
    }
});

function initDropDownsSelects(dropdownSelector,options) {
    var manager = new hp.PopupManager();

    options = options || {};

    var dropDownClass = this;
    $$(dropdownSelector || '.js_dd').each(function (dd) {
        manager.add(new dropDownClass(dd,options));
    });

    $$(document.body).addEvent('click', function() {
        manager.hide();
    });
}

hp.BasicDropdown.init = initDropDownsSelects;
hp.SortDropdown.init = initDropDownsSelects;

//faceted-nav-hpe.js
hp = hp || {};
function cropTextByHeight(text, targetEl, heightEl, maxHeight) {
    if (!targetEl) {
        return;
    }
    var params = {
        cropChars : 1,
        noneStyles : {
            visibility : 'hidden',
            display : 'inline'
        },
        restoreStyles : {
            visibility : '',
            display : ''
        }
    };
    if (targetEl.getStyle('display') == 'none') {
        targetEl.setStyles(params.noneStyles);
    }
    targetEl.set('text', text);
    if (heightEl.offsetHeight > maxHeight && text.length > 0) {
        var newText = '';
        targetEl.innerHTML = '';
        var i = 0;
        while (heightEl.offsetHeight <= maxHeight && i < text.length) {
            i += params.cropChars;
            newText = targetEl.innerHTML;
            targetEl.innerHTML = text.substr(0, i) + '...';
        }
        targetEl.innerHTML = newText;
    }
    targetEl.setStyles(params.restoreStyles);
}
var DefaultFacetWidthSettingStrategy = new Class({
        setFacetWidths : function (navigationWidth, facets, moreFacet) {
            var facetsNumber = facets.length;
            var facetSpace = facets[0].facet.getStyle('margin-right').toInt() || facets[0].facet.getStyle('margin-left').toInt() || 10;
            var facetWidth = 0;
            if (moreFacet) {
                var moreFacetMaxWidth = moreFacet.facet.getStyle('max-width');
                moreFacetMaxWidth = moreFacetMaxWidth ? moreFacetMaxWidth.toInt() : null;
                if (moreFacetMaxWidth)
                    moreFacet.setWidth(moreFacetMaxWidth);
                else {
                    facetWidth = Math.floor((navigationWidth - facetSpace * facetsNumber) / (facetsNumber + 2));
                    moreFacet.setWidth(navigationWidth - ((facetWidth + facetSpace) * facetsNumber));
                }
            } else {
                facetWidth = Math.floor((navigationWidth + facetSpace) / facetsNumber - facetSpace);
                facets[facets.length - 1].facet.addClass('facet_last');
            }
            facets.each(function (facet) {
                var facetMaxWidth = facet.facet.getStyle('max-width');
                facetMaxWidth = facetMaxWidth ? facetMaxWidth.toInt() : null;
                if (facetMaxWidth && facetMaxWidth > 0)
                    facet.setWidth(facetMaxWidth);
                else
                    facet.setWidth(facetWidth);
            });
        },
        setWidthForSingleShownFacet : function (facetOptions, calculatedWidth) {
            facetOptions.setStyle('width', calculatedWidth + 'px');
        }
    });
var SearchFacetWidthSettingStrategy = new Class({
        setFacetWidths : function (navigationWidth, facets, moreFacet) {
            var facetAdditionalSpace = parseInt(facets[0].facet.getStyle("margin-left")) + parseInt(facets[0].facet.getStyle("margin-right"));
            var facetWidth = (navigationWidth / 5) - facetAdditionalSpace;
            if (moreFacet) {
                var moreFacetWidth = parseInt(moreFacet.facet.getStyle('max-width'));
                if (!moreFacetWidth) {
                    moreFacetWidth = facetWidth;
                }
                facetWidth = ((navigationWidth - moreFacetWidth) / 4) - facetAdditionalSpace;
                moreFacet.setWidth(moreFacetWidth);
            }
            facets.each(function (facet) {
                facet.setWidth(facetWidth);
            });
        },
        setWidthForSingleShownFacet : function (facetOptionsEl, calculatedWidth) {
            facetOptionsEl.setStyle('width', calculatedWidth + 'px');
        }
    });
var FixedFacetWidthSettingStrategy = new Class({
        setFacetWidths : function (navigationWidth, facets, moreFacet) {
            var facetWidth = 226;
            facets[facets.length - 1].facet.addClass('facet_last');
            if (moreFacet) {
                moreFacet.setWidth(facetWidth);
                moreFacet.facet.setStyle('margin-left', '20px');
            }
            facets.each(function (facet) {
                facet.setWidth(facetWidth);
                if (!facet.facet.hasClass('facet_last'))
                    facet.facet.setStyle('margin-right', '20px');
                else
                    facet.facet.setStyle('margin-right', '0px');
            });
        },
        setWidthForSingleShownFacet : function (facetOptionsEl, calculatedWidth) {
            facetOptionsEl.setStyle('width', calculatedWidth + 'px');
            var width = facetOptionsEl.getParent().getSize().x;
        }
    });
var DefaultFacetsDataAdapter = new Class({
        adapt : function (facets) {
            var result = [];
            var size = facets.length;
            for (var i = 0; i < size; i++) {
                var facet = facets[i];
                result.push(this.adaptFacet(facet));
            }
            return result;
        },
        adaptFacet : function (data) {
            var facet = {};
            var name = data[0];
            facet.name = name;
            facet.caption = data[1];
            facet.allOption = {
                caption : data[2],
                value : 'all',
                name : name,
                checked : true,
                id : name + '_all'
            };
            var optionsData = data[3];
            facet.width = data[4];
            var size = optionsData.length;
            facet.columns = size > 10 ? 2 : 1;
            facet.isOneColumn = facet.columns == 2 ? false : true;
            var options = [];
            for (var i = 0; i < size; i++) {
                var optionData = optionsData[i];
                var value = optionData[0];
                var id = name + '_' + this._sanitize(value);
                var checked = optionData[3];
                options.push({
                    caption : optionData[1],
                    value : value,
                    name : name,
                    disabled : optionData[2],
                    id : id,
                    checked : checked
                });
                if (checked) {
                    facet.allOption.checked = false;
                }
            }
            facet.options = options;
            return facet;
        },
        _sanitize : function (string) {
            return string.replace(/\W/g, '').replace(/\s/g, '')
        }
    });
var DisableAllEnableActiveStrategy = new Class({
        initialize : function (controller) {
            this.controller = controller;
        },
        process : function (facets) {
            var size = facets.length;
            var optionsToEnable = [];
            for (var i = 0; i < size; i++) {
                var facet = facets[i];
                var options = facet.options;
                var optionsSize = options.length;
                for (var j = 0; j < optionsSize; j++) {
                    var option = options[j];
                    if (!option.disabled) {
                        optionsToEnable.push(option.id);
                    }
                }
            }
            return {
                toDisable : this._getOptionsToDisable(),
                toEnable : optionsToEnable
            };
        },
        _getOptionsToDisable : function () {
            var optionsToDisable = [];
            this.controller.facetsOptions.each(function (facetOptions) {
                facetOptions._getOptions().each(function (option) {
                    if (!option.isAll) {
                        optionsToDisable.push(option.getElement('input').id);
                    }
                });
            });
            return optionsToDisable;
        }
    });
var DisableInactiveEnableActiveStrategy = new Class({
        process : function (facets) {
            var size = facets.length;
            var optionsToEnable = [];
            var optionsToDisable = [];
            for (var i = 0; i < size; i++) {
                var facet = facets[i];
                var options = facet.options;
                var optionsSize = options.length;
                for (var j = 0; j < optionsSize; j++) {
                    var option = options[j];
                    if (option.disabled) {
                        optionsToDisable.push(option.id);
                    } else {
                        optionsToEnable.push(option.id);
                    }
                }
            }
            return {
                toDisable : optionsToDisable,
                toEnable : optionsToEnable
            };
        }
    });
var FacetedNavigation = new Class({
        Implements : [Events, Options],
        updateStrategy : null,
        options : {
            facetsDataAdapter : new DefaultFacetsDataAdapter(),
            facetWidthSettingStrategy : new DefaultFacetWidthSettingStrategy(),
            createStrategyClass : DisableInactiveEnableActiveStrategy,
            updateStrategyClass : DisableAllEnableActiveStrategy,
            moreThreshold : 6,
            titleOnTop : true,
            titleLittle : false,
            aboveHeight : 7,
            hideResultsCount : false,
            placeTitleOnPaginatorLine : false,
            facetsAccessibilitySelector : ".facet_option:not(.disabled) a"
        },
        initialize : function (labels, modifiers, options) {
            this.setOptions(options);
            this.labels = labels;
            this.modifiers = modifiers;
            this.renderer = new FacetedNavigationRenderer(labels, this.options.moreThreshold);
        },
        create : function (title, data) {
            var facets = this.options.facetsDataAdapter.adapt(data.facets);
            var facetedNavigation = this.renderer.render({
                    title : data.title || title,
                    count : data.count,
                    facets : facets,
                    titleOnTop : this.options.titleOnTop,
                    titleLittle : this.options.titleLittle,
                    hideResultsCount : this.options.hideResultsCount
                });
            var placeholder = this.options.placeholderEl;
            placeholder.set('html', facetedNavigation);
            var root = placeholder.getChildren()[0];
            this.modifiers.each(function (modifier) {
                root.addClass('faceted_navigation_' + modifier);
            });
            if (this.options.placeTitleOnPaginatorLine) {
                var titleEl = root.getChildren()[2];
                if (titleEl) {
                    titleEl.dispose();
                    var targetTitleEl = document.getElement('.js_paging');
                    if (targetTitleEl) {
                        targetTitleEl.getParent().grab(titleEl, 'top');
                        targetTitleEl.getParent().setStyle('width', '100%');
                    }
                }
            }
            if (data.facets.length === 0)
                return;
            this.controller = new FacetedNavigationController(root, this.labels, this.options.facetWidthSettingStrategy, this.options.aboveHeight);
            this._update(facets, new this.options.createStrategyClass(this.controller));
            this.updateStrategy = new this.options.updateStrategyClass(this.controller);
            this._cropFacetsTitles();
            this.controller.facets.each(function (facet) {
                facet.cropSelectedContent();
                facet.addSimpleAccessibility(this.options.facetsAccessibilitySelector);
            }
                .bind(this));
            if (this.controller.moreFacet) {
                this.controller.moreFacet.cropSelectedContent();
                this.controller.moreFacet.addSimpleAccessibility(this.options.facetsAccessibilitySelector);
            }
            this.controller.addEvent('selectionChanged', function (e) {
                this.fireEvent('selectionChanged', e);
            }
                .bind(this));
        },
        _cropFacetsTitles : function () {
            var self = this;
            var placeholder = this.options.placeholderEl;
            placeholder.getElements('.js_facet_trigger a').each(function (el) {
                el.setAttribute('hideFocus', true);
                self._cropFacetTitle(el);
            });
            placeholder.getElements('.js_facet_target').each(function (el) {
                el.show();
                var title = el.getElement('.js_facet_options_header a');
                self._cropFacetTitle(title);
                el.hide();
            });
            (placeholder.getElements('a.js_clear_all_button') || document.getElement('.res_page .js_clear_all_button')).each(function (el) {
                el.setAttribute('hideFocus', true);
            });
        },
        _cropFacetTitle : function (facetTitle) {
            var label = facetTitle.get('text');
            facetTitle.set('text', '.');
            var height = facetTitle.getHeight();
            cropTextByHeight(label, facetTitle, facetTitle, height + Math.floor(height / 2));
        },
        update : function (data) {
            if (this.controller) {
                this.controller.updateCount(data.count);
                this.controller.updateTitle(data.title);
            }
            var facets = this.options.facetsDataAdapter.adapt(data.facets);
            this._update(facets, this.updateStrategy);
        },
        _update : function (facets, disableEnableStrategy) {
            if (this.controller) {
                var options = disableEnableStrategy.process(facets);
                this.controller.disableOptions(options.toDisable);
                this.controller.enableOptions(options.toEnable);
            }
        },
        dispose : function () {
            var facetesList = this.options.placeholderEl.getElement('.js_faceted_navigation');
            if (facetesList != null)
                facetesList.dispose();
        },
        hide : function () {
            this.options.placeholderEl.addClass("hidden");
        },
        show : function () {
            this.options.placeholderEl.removeClass("hidden");
        }
    });
var FacetedNavigationController = new Class({
        Implements : [Events],
        facets : [],
        moreFacet : null,
        facetsOptions : [],
        initialize : function (root, labels, facetWidthSettingStrategy, aboveHeight) {
            this.root = root;
            root.getElements(".js_facet").each(function (el) {
                var facet = new Facet(el, labels, facetWidthSettingStrategy, aboveHeight);
                facet.addEvent('selectionChanged', function (e) {
                    var anySimpleFacetSelected = this._isAnySimpleFacetOptionSelected();
                    this._updateClearButtonState(e.isAll && !anySimpleFacetSelected);
                    this._notifyAboutChangedSelection();
                }
                    .bind(this));
                this.facets.push(facet);
                this.facetsOptions.push(facet.facetOptions);
            }
                .bind(this));
            var clearAllInitState = false;
            var popupManager = new hp.PopupManager();
            this.facets.each(function (facet) {
                popupManager.add(facet);
                if (facet.facetOptions.isAllState)
                    clearAllInitState = true;
            });
            var moreFacetEl = root.getElement(".js_more_facet");
            if (moreFacetEl) {
                this.moreFacet = new MoreFacet(moreFacetEl, labels, aboveHeight);
                this.moreFacet.addEvent('selectionChanged', function (e) {
                    var anySimpleFacetSelected = this._isAnySimpleFacetOptionSelected();
                    this._updateClearButtonState(e.isAll && !anySimpleFacetSelected);
                    this._notifyAboutChangedSelection();
                }
                    .bind(this));
                this.moreFacet.facetOptions.each(function (options) {
                    if (options.isAllState)
                        clearAllInitState = true;
                });
                this.facetsOptions.combine(this.moreFacet.facetOptions);
                popupManager.add(this.moreFacet);
            }
            var navigationWidth = root.getSize().x;
            facetWidthSettingStrategy.setFacetWidths(navigationWidth, this.facets, this.moreFacet);
            this.clearAllInitState = clearAllInitState;
            this.clearAllButton = this._initClearButton();
        },
        _isAnySimpleFacetOptionSelected : function () {
            var result = false;
            this.facets.each(function (facet) {
                var options = facet._getSelectedOptions();
                result = result || (options.length != 0);
            });
            return result;
        },
        _notifyAboutChangedSelection : function () {
            var selectedOptions = [];
            this.facets.each(function (facet) {
                var options = facet.getSelectedOptions();
                if (options[1].length != 0) {
                    selectedOptions.push(options);
                }
            });
            if (this.moreFacet) {
                var moreOptions = this.moreFacet.getSelectedOptions();
                moreOptions.each(function (options) {
                    if (options[1].length != 0) {
                        selectedOptions.push(options);
                    }
                });
            }
            this.fireEvent('selectionChanged', {
                data : selectedOptions
            });
        },
        _updateClearButtonState : function (disable) {
            if (disable) {
                this.clearAllButton.addClass('disabled');
            } else {
                this.clearAllButton.removeClass('disabled');
            }
        },
        _initClearButton : function () {
            var button = this.root.getElement('.js_clear_all_button') || document.getElement('.res_page .js_clear_all_button');
            if (!this.clearAllInitState)
                button.addClass('disabled');
            button.addEvent('click', function () {
                if (!button.hasClass('disabled')) {
                    button.addClass('disabled');
                    if (this.moreFacet) {
                        this.moreFacet.reset();
                    }
                    this.facets.each(function (facet) {
                        facet.reset();
                    }
                        .bind(this));
                    this._updateClearButtonState(true);
                    this._notifyAboutChangedSelection();
                }
            }
                .bind(this));
            return button;
        },
        updateCount : function (count) {
            var el = this.root.getElement('.js_results_count');
            if (el) {
                el.set('text', count);
            }
        },
        updateTitle : function (count) {
            var el = this.root.getElement('.js_title') || document.getElement('.res_page .js_title');
            if (el) {
                el.set('text', count);
            }
        },
        disableOptions : function (options) {
            options.each(function (option) {
                var el = $(option);
                if (el) {
                    this._disableOption(el.getParent());
                }
            }
                .bind(this));
        },
        enableOptions : function (options) {
            options.each(function (option) {
                var el = $(option);
                if (el) {
                    this._enableOption(el.getParent());
                }
            }
                .bind(this));
        },
        _disableOption : function (option) {
            option.addClass('disabled');
        },
        _enableOption : function (option) {
            option.disabled = false;
            option.removeClass('disabled');
        }
    });
var AbstractFacet = new Class({
        Extends : CHKCustomPopUp,
        Implements : [Events, hp.PopupAccessibility],
        isWidthInit : false,
        initialize : function (facet, labels) {
            this.facet = facet;
            this.labels = labels;
            var trigger = facet.getElement('.js_facet_trigger');
            var target = facet.getElement('.js_facet_target');
            this.parent(trigger, target, {
                showEvent : ['click'],
                hideEvent : []
            });
            this.addHideElement(target, 'mouseleave');
            var bodyEl = document.getElements('.body');
            this.addEvent('onshow', function () {
                if (isIE7 || isIE6) {
                    trigger.setStyle('display', 'none');
                }
                if (isIE7 && bodyEl.length > 0) {
                    bodyEl[0].setStyle("z-index", 10000);
                }
                facet.setStyle('z-index', 4);
            });
            this.addEvent('onhide', function () {
                if (isIE7 || isIE6) {
                    trigger.setStyle('display', 'block');
                }
                if (isIE7 && bodyEl.length > 0) {
                    bodyEl[0].setStyle("z-index", 0);
                }
                facet.setStyle('z-index', 3);
            });
            this._initOptions();
        },
        setWidth : function (width) {
            if (!isNaN(width)) {
                this.facet.setStyle('width', width + 'px');
                this.isWidthInit = true;
            }
        },
        setAboveHeight : function (aboveHeight) {
            this.targetEl.setStyle('top', '-' + aboveHeight + 'px');
        },
        _createOptions : function (optionsEl, facetName) {
            var options = new FacetOptions(optionsEl, this.labels, facetName);
            options.addEvent('selectionChanged', function () {
                this._updateState();
            }
                .bind(this));
            return options;
        },
        _updateState : function () {
            this._updateStateSilently();
            this.fireEvent('selectionChanged', {
                isAll : this.isAll
            });
        },
        _updateStateSilently : function () {
            var selectedOptions = this._getSelectedOptions();
            var numberOfSelectedOptions = selectedOptions.length;
            this.isAll = (numberOfSelectedOptions == 0);
            if (this.isWidthInit) {
                this.cropSelectedContent();
            }
            if (typeof this._updateSpecificState == 'function') {
                this._updateSpecificState();
            }
        },
        _withoutAllOption : function (options) {
            if (options.length == 1 && options[0].isAll)
                return [];
            return options;
        },
        cropSelectedContent : function () {
            var selectedOptions = this._getSelectedOptions();
            var numberOfSelectedOptions = selectedOptions.length;
            this.isAll = (numberOfSelectedOptions == 0);
            var label;
            if (this.isAll) {
                label = this.labels.allOption;
            } else if (numberOfSelectedOptions == 1) {
                var selectedOption = selectedOptions[0];
                label = this._getLabel(selectedOption);
            } else if (numberOfSelectedOptions > 1) {
                label = (numberOfSelectedOptions + ' ' + this.labels.selected);
            } else {
                throw "incorrect number of selected options: " + numberOfSelectedOptions;
            }
            var selectedContentLabel = this.facet.getElement(".js_selected_content");
            selectedContentLabel.set('text', '.');
            var height = selectedContentLabel.getHeight();
            cropTextByHeight(label, selectedContentLabel, selectedContentLabel, height + Math.floor(height / 2));
        }
    });
var MoreFacet = new Class({
        Extends : AbstractFacet,
        facetOptions : [],
        DEFAULT_FACET_WIDTH : 176,
        initialize : function (facet, labels, aboveHeight) {
            this.parent(facet, labels);
            var _this = this;
            this._getClearButton().addEvent('click', function (e) {
                e.stopPropagation();
                if (!this.hasClass('disabled')) {
                    _this.reset();
                    _this.fireEvent('selectionChanged', {
                        isAll : true
                    });
                }
            });
            var target = this.targetEl;
            this.addHideElement(target.getElement('.more_facet_header'), 'click');
            target.setStyle('width', this.DEFAULT_FACET_WIDTH * this.facetOptions.length + 'px');
            this.setAboveHeight(aboveHeight);
        },
        reset : function () {
            this._clearOptions();
            this._updateStateSilently();
        },
        _initOptions : function () {
            var facetsContainer = this.facet.getElement('.js_facets');
            var facetTitles = facetsContainer.getElements('.js_facet_title');
            facetTitles.each(function (el) {
                el.getParent('th').setStyle('width', this.DEFAULT_FACET_WIDTH + 'px');
                var facetName = el.id.replace('js_facet_', '');
                var options = this._createOptions(facetsContainer, facetName);
                this.facetOptions.push(options);
            }
                .bind(this));
            this._updateState();
        },
        _clearOptions : function () {
            this.facetOptions.each(function (options) {
                options.clear();
            }
                .bind(this));
        },
        _updateSpecificState : function () {
            this._setClearButtonEnabled(!this.isAll);
        },
        _setClearButtonEnabled : function (enabled) {
            var clearButton = this._getClearButton();
            if (enabled) {
                clearButton.removeClass("disabled");
            } else {
                clearButton.addClass("disabled");
            }
        },
        _getClearButton : function () {
            return this.facet.getElement('.js_more_facet_clear_button');
        },
        _getSelectedOptions : function () {
            var result = [];
            this.facetOptions.each(function (options) {
                var selectedOptions = options.getSelectedOptions();
                result.combine(this._withoutAllOption(selectedOptions));
            }
                .bind(this));
            return result;
        },
        getSelectedOptions : function () {
            var result = [];
            this.facetOptions.each(function (options) {
                var selectedOptions = options.getSelectedOptions();
                var name = options.facetName;
                result.push([name, this._withoutAllOption(selectedOptions).map(function (el) {
                            return el.getElement('input').value;
                        })]);
            }
                .bind(this));
            return result;
        },
        _getLabel : function (option) {
            return option.title + ': ' + option.get('text').trim();
        }
    });
var Facet = new Class({
        Extends : AbstractFacet,
        initialize : function (facet, labels, facetWidthSettingStrategy, aboveHeight) {
            this.parent(facet, labels);
            this.facetWidthSettingStrategy = facetWidthSettingStrategy;
            this.addHideElement(this.targetEl.getElement('.js_facet_options_header'), 'click');
            this.setAboveHeight(aboveHeight);
        },
        _initOptions : function () {
            var header = this.targetEl.getElement('.js_facet_title');
            var facetName = header.id.replace('js_facet_', '');
            this.facetOptions = this._createOptions(this._getFacetOptionsElement(), facetName);
            this._updateState();
        },
        _getSelectedOptions : function () {
            return this._withoutAllOption(this.facetOptions.getSelectedOptions());
        },
        getSelectedOptions : function () {
            var selected = this._getSelectedOptions();
            var name = this.facetOptions.facetName;
            return [name, selected.map(function (el) {
                    return el.getElement('input').value;
                })];
        },
        setWidth : function (width) {
            this.parent(width);
            var columnsNumber = this._getNumberOfColumns();
            if (columnsNumber == 2) {
                this._doublePopupWidth(width);
            } else {
                this._widenPopupToFitContent(width);
            }
        },
        _widenPopupToFitContent : function (width) {
            var optionsEl = this._getFacetOptionsElement();
            var idealRowHeight = this._getIdealRowHeight(optionsEl);
            var row = this._getRowWithTheLongestOptionTitle(optionsEl);
            function getRowHeight() {
                optionsEl.show();
                var size = row.getSize();
                var height = size.y;
                optionsEl.hide();
                return height;
            }
            function getTableWidth() {
                optionsEl.show();
                var size = optionsEl.getElement('.values').getSize();
                var width = size.x;
                optionsEl.hide();
                return width;
            }
            var calculatedWidth = width;
            var maxWidth = width * 2;
            if (getRowHeight() > idealRowHeight) {
                while (calculatedWidth < maxWidth) {
                    calculatedWidth++;
                    this.facetWidthSettingStrategy.setWidthForSingleShownFacet(optionsEl, calculatedWidth);
                    if (getRowHeight() <= idealRowHeight) {
                        break;
                    }
                }
            } else {
                var optionsWidth = getTableWidth();
                if (calculatedWidth < optionsWidth) {
                    calculatedWidth = optionsWidth;
                    this.facetWidthSettingStrategy.setWidthForSingleShownFacet(optionsEl, calculatedWidth);
                }
            }
        },
        _getIdealRowHeight : function (optionsEl) {
            optionsEl.show();
            var row = optionsEl.getElements('tr')[1];
            var labelEl = row.getElement('label');
            var realValue = labelEl.get('text');
            labelEl.set("text", "A");
            var idealRowHeight = row.getSize().y;
            labelEl.set("text", realValue);
            optionsEl.hide();
            return idealRowHeight;
        },
        _getRowWithTheLongestOptionTitle : function (optionsEl) {
            var rows = optionsEl.getElements('tr');
            var neededRow = rows[0];
            var neededOptionValue = "";
            rows.each(function (row) {
                var optionValue = row.getElement('label').get('text');
                if (optionValue.length > neededOptionValue.length) {
                    neededRow = row;
                    neededOptionValue = optionValue;
                }
            });
            return neededRow;
        },
        _doublePopupWidth : function (width) {
            this.facetWidthSettingStrategy.setWidthForSingleShownFacet(this._getFacetOptionsElement(), width * 2 + 1);
        },
        _getFacetOptionsElement : function () {
            return this.facet.getElement(".js_facet_options");
        },
        _getNumberOfColumns : function () {
            var table = this.facet.getElement('table');
            var firstRow = table.getElements('tr')[0];
            var singleColumn = firstRow.getElement('td');
            var columnsNumber = singleColumn.get('colspan');
            return columnsNumber;
        },
        _getLabel : function (option) {
            return option.get('text').trim();
        },
        reset : function () {
            this.facetOptions.clear();
            this._updateStateSilently();
        }
    });
var FacetOptions = new Class({
        Implements : Events,
        labels : null,
        initialize : function (facetOptions, labels, facetName) {
            this.options = facetOptions;
            this.labels = labels;
            this.facetName = facetName;
            this.isAllState = true;
            this.facetTitleSelector = facetName ? '.js_' + facetName : '.js_facet_title';
            this.facetOptionsSelector = facetName ? '.js_facet_option_' + facetName : '.js_facet_option';
            var title = this.options.getElement(this.facetTitleSelector).get('text').trim();
            var items = this._getOptions();
            items.each(function (item) {
                item.isAll = (item.getElement('input').value == 'all');
                item.title = title;
                item.addEvent("valueChange", (item.isAll ? this._allItemSelectionHandler : this._changeEventHandler).bind(this));
            }
                .bind(this));
            this._initItems(items);
        },
        clear : function () {
            this._setAllCheckboxValue(true);
            this._clearSimpleOptions();
        },
        getSelectedOptions : function () {
            return this.options.getElements(this.facetOptionsSelector + ".selected");
        },
        _initItems : function (items) {
            this.isAllState = true;
            var allItem;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.isAll) {
                    allItem = item;
                    var checked = item.getElement("input").checked;
                    if (checked)
                        this.isAllState = false;
                } else {
                    this._initItem(item);
                }
            }
            if (allItem) {
                this._initItem(allItem);
            }
        },
        _initItem : function (item) {
            item.disabled = false;
            var checkbox = item.getElement("input");
            if (checkbox.checked) {
                item.addClass("selected");
            }
            var _this = this;
            item.addEvents({
                mouseover : function (e) {
                    this.addClass("hover")
                },
                mouseout : function (e) {
                    this.removeClass("hover")
                },
                click : function (e) {
                    e.stop();
                    if (item.hasClass('disabled')) {
                        return;
                    }
                    var checked = checkbox.checked;
                    if (item.isAll && checked) {
                        return;
                    }
                    if (_this._setCheckboxValue(item, checkbox, !checked)) {
                        item.fireEvent("valueChange", {
                            selected : !checked,
                            text : item.get("text").trim()
                        });
                    }
                }
            });
        },
        _changeEventHandler : function (e) {
            if (e.selected) {
                this._setAllCheckboxValue(false);
            }
            var selectedItems = this.getSelectedOptions();
            if (selectedItems.length == 0) {
                this._setAllCheckboxValue(true);
            }
            this._fireSelectionChangedEvent();
        },
        _allItemSelectionHandler : function (e) {
            if (!e.selected) {
                return false;
            }
            this._clearSimpleOptions();
            this._fireSelectionChangedEvent();
        },
        _clearSimpleOptions : function () {
            var items = this.getSelectedOptions();
            items.each(function (item) {
                if (!item.isAll) {
                    this._setCheckboxValue(item, item.getElement('input'), false);
                }
            }
                .bind(this));
        },
        _fireSelectionChangedEvent : function () {
            this.fireEvent("selectionChanged");
        },
        _setAllCheckboxValue : function (checked) {
            var allItem;
            this._getOptions().each(function (item) {
                if (item.isAll) {
                    allItem = item;
                }
            }
                .bind(this));
            if (allItem) {
                var checkbox = allItem.getElement('input');
                this._setCheckboxValue(allItem, checkbox, checked);
            }
        },
        _setCheckboxValue : function (item, checkbox, checked) {
            if (checkbox.checked == checked) {
                return false;
            }
            checkbox.checked = checked;
            item.toggleClass("selected");
            return true;
        },
        _getOptions : function () {
            return this.options.getElements(this.facetOptionsSelector);
        }
    });
var FacetedNavigationRenderer = new Class({
        initialize : function (labels, moreThreshold) {
            this.labels = labels;
            this.containerTemplate = Handlebars.compile($('faceted-nav-container').innerHTML);
            var facetItemTemplate = Handlebars.compile($('facet-item').innerHTML);
            var facetTemplate = Handlebars.compile($('facet').innerHTML);
            var moreFacetTemplate = Handlebars.compile($('more-facet').innerHTML);
            Handlebars.registerHelper('facetItem', function (context) {
                return facetItemTemplate(context);
            });
            Handlebars.registerHelper('facet', function () {
                return facetTemplate(this);
            });
            Handlebars.registerHelper('eachOption', function (options, columns, block) {
                var result = "";
                var numberOfOptions = options.length;
                var isOneColumn = (columns == 1);
                for (var i = 0; i < numberOfOptions; i += columns) {
                    var context = {
                        isOneColumn : isOneColumn
                    };
                    if (isOneColumn) {
                        context.option = options[i];
                    } else {
                        context.first = options[i];
                        if (i + 1 < numberOfOptions) {
                            context.second = options[i + 1];
                        }
                        context.needEmptyCell = (numberOfOptions % 2 == 1) && (i + 1 == numberOfOptions);
                    }
                    result = result + block(context);
                }
                return result;
            });
            Handlebars.registerHelper('forEach', function (collection, block) {
                var result = '';
                var size = collection.length;
                for (var i = 0; i < size; i++) {
                    var status = {
                        last : (i == size - 1)
                    };
                    var element = collection[i];
                    element.status = status;
                    result = result + block(element);
                }
                return result;
            });
            Handlebars.registerHelper('forEachIndex', function (start, end, block) {
                var result = '';
                for (var i = 0; i < end; i++) {
                    result = result + block({
                            index : i
                        });
                }
                return result;
            });
            Handlebars.registerHelper('forEachIndexedOption', function (facets, index, block) {
                var result = '';
                var size = facets.length;
                for (var i = 0; i < size; i++) {
                    result = result + block({
                            option : facets[i].options[index],
                            status : {
                                last : (i == size - 1)
                            }
                        });
                }
                return result;
            });
            var _labels = this.labels;
            Handlebars.registerHelper('facetedNavigation', function (facets) {
                var numberOfFacets = facets.length;
                function renderSimpleFacets(facetsToRender) {
                    var result = '';
                    var size = facetsToRender.length;
                    for (var i = 0; i < size; i++) {
                        result = result + facetTemplate(facetsToRender[i]);
                    }
                    return result;
                }
                if (numberOfFacets <= moreThreshold) {
                    return renderSimpleFacets(facets);
                } else {
                    var numberOfSimpleFacets = moreThreshold - 1;
                    var simpleFacets = facets.slice(0, numberOfSimpleFacets);
                    var facetsInMore = facets.slice(numberOfSimpleFacets);
                    var maxOptionsCount = 0;
                    var size = facetsInMore.length;
                    for (var i = 0; i < size; i++) {
                        var facet = facetsInMore[i];
                        var optionsCount = facet.options.length;
                        if (optionsCount > maxOptionsCount) {
                            maxOptionsCount = optionsCount;
                        }
                    }
                    return renderSimpleFacets(simpleFacets) + moreFacetTemplate({
                        facets : facetsInMore,
                        maxOptionsCount : maxOptionsCount,
                        labels : _labels,
                        width : facet.width
                    });
                }
            });
        },
        render : function (data) {
            data.labels = this.labels;
            return this.containerTemplate(data);
        }
    });
function initFacetedNav(data, options) {
    var disabled = false;
    function disableEnableOptions() {
        disabled = !disabled;
        data.count = disabled ? 5 : 419;
        var facets = data.facets;
        for (var i = 0; i < facets.length; i++) {
            var facet = facets[i];
            var options = facet[3];
            for (var j = 0; j < options.length; j++) {
                var option = options[j];
                var id = option[0];
                if (id == 'isv' || id == 'nvidia' || id == 'amd' || id == '1000x800') {
                    option[2] = disabled;
                }
            }
        }
    }
    var labels = {
        clear_all : "Clear all",
        more : "More",
        clear : "Clear all",
        allOption : 'All',
        selected : 'selected'
    };
    var facetedNav = new FacetedNavigation(labels, [], options);
    facetedNav.create(data.title, data);
    facetedNav.addEvent('selectionChanged', function (e) {
        disableEnableOptions();
        facetedNav.update(data);
    });
    return facetedNav;
}

//forms.js
hp.AutoResizableTextarea = new Class({

    targetEl: null,
    targetPaddingTop: null,
    targetPaddingBottom: null,
    targetHeight: null,
    patternEl: null,
    storedHeight: false,


    initialize: function(targetEl) {
        this.targetEl = targetEl;
        this.patternEl = new Element("textarea");
        this.targetPaddingTop = parseInt(this.targetEl.getStyle("padding-top"));
        this.targetPaddingBottom = parseInt(this.targetEl.getStyle("padding-bottom"));
        this.targetHeight = parseInt(this.targetEl.getStyle("height"));
        var targetCoordinates = this.targetEl.getCoordinates();

        var patternStyles = {
            "display": "block",
            "position": "absolute",
            "visibility": "hidden",
            "z-index": "10",
            "left": targetCoordinates.left+"px",
            "top": targetCoordinates.top+"px",
            "background-color": "red",
            "height": this.targetEl.getStyle("height"),
            "width": this.targetEl.getStyle("width"),
            "padding": this.targetEl.getStyle("padding"),
            "font-size": this.targetEl.getStyle("font-size"),
            "font-family": this.targetEl.getStyle("font-family"),
            "line-height": this.targetEl.getStyle("line-height"),
            "overflow": this.targetEl.getStyle("overflow"),
            "resize": this.targetEl.getStyle("resize")
        };

        this.updatePatternContent();
        this.patternEl.setStyles(patternStyles);
        this.patternEl.inject($$("body")[0]);

        this.targetEl.addEvent("keyup", this.buttonPressHandler.bind(this));
    },

    updatePatternContent: function(){
        this.patternEl.set("value", this.targetEl.get("value"));
    },

    buttonPressHandler: function(){
        this.updatePatternContent();
        var patternHeight = this.patternEl.getScrollSize().y;
        var height = (patternHeight > this.targetHeight ? patternHeight : this.targetHeight);
        if(this.storedHeight != height){
            this.storedHeight = height;
            this.targetEl.tween("height", height);
        }
    }
});

function initAutoResizableTextareas(targetClass){
    var targetClass = targetClass || "js_auto_resize";
    $$("." + targetClass).each(function(targetEl) {
        new hp.AutoResizableTextarea(targetEl);
    });
}

function inputColorChange(){
    var inputs = $$('.js_color_change');

    inputs.each(function(el){
        var placeholder
        if(el.get("rel"))
            placeholder = el.get("rel");
        else
            placeholder = el.value;

        el.addEvents({
            focus: function(){
                    if(this.value == placeholder){
                    this.value = '';
                }
            },
            blur: function(){
                if (this.value == ''){
                    this.value = placeholder;
                    if(!this.hasClass('pre-active')) this.addClass('pre-active');
                }
                else{
                    this.removeClass('pre-active').removeClass('pre-active-search');
                }
            }

        });
    });
}

//lightbox-image-gallery.js
hp.ImageSelector = new Class({

    selectedItemIndex: null,

    initialize: function (thumbnails, contentElements) {
        this.thumbnails = thumbnails;
        this.contentElements = contentElements;
        var self = this;
        this.thumbnails.each(function(el, index) {
            el.addEvent('click', function () {
                self.select(index);
            });
        });
    },

    select: function(itemIndex) {
        var selectedItemIndex = this.selectedItemIndex;
        if (selectedItemIndex != null) {
            this.hide(selectedItemIndex);
        }

        this.selectedItemIndex = itemIndex;

        this.show(itemIndex);
    },

    show: function(itemIndex) {
        var imageEl = this.thumbnails[itemIndex].getElement('img');
        imageEl.removeClass('drk');
        var contentEl = this.contentElements[itemIndex];
        contentEl.removeClass('hidden');
        var relatedImage = imageEl.get('rel');
        if (relatedImage) {
            contentEl.getElement('img').set('src', relatedImage);
            imageEl.erase('rel');
        }
    },

    hide: function(itemIndex) {
        this.thumbnails[itemIndex].getElement('img').addClass('drk');
        this.contentElements[itemIndex].addClass('hidden');
    }

});

var initImagesOverlay = function (popupId, triggerCntSelector) {
    var popupEl = $(popupId);
    var containerEl = popupEl.getElement('.js_images_popup_items');
    var elementToClone = containerEl.getFirst().dispose();
    var popupImages = [];

    var updateImages = function(el) {
        var newEl = elementToClone.clone();
        popupImages.push(newEl);

        newEl = newEl.getElement('img');
        newEl.set('src', el.get('src'));
        newEl.set('rel', el.get('rel'));
        el.erase('rel');

        newEl.addClass('drk');
    };

    $$(triggerCntSelector || '.js_images_overlay').each(function(el) {
        // clone image items in popup and update images
        el.getElements('img').each(updateImages);
        containerEl.adopt(popupImages);

        var selector = new hp.ImageSelector($$(popupImages).getElements('a'), popupEl.getElement('.js_images_popup_content').getChildren());
        el.getElements('a').each(function(trigger, index) {
            trigger.addEvent('click', function() {
                selector.select(index);
            });
        });
    });
};

function initGalleryOverlay(triggerSelector) {
    var GALLERIES = {};

    $$(triggerSelector).each(function (trigger) {
        var popupId = trigger.get("rel");
        if (!popupId) {
            return;
        }

        if (!GALLERIES[popupId]) {
            var popup = $(popupId);
            popup.getElements('.js_images_popup_items img').addClass('drk');
            GALLERIES[popupId] = new hp.ImageSelector(popup.getElements('.js_images_popup_items a'), popup.getElement('.js_images_popup_content').getChildren());
        }

        trigger.addEvent('click', function() {
            GALLERIES[popupId].select(0);
        });
    });
}

//links-list-expandable.js
hp.LinkListExpandable = new Class({

    Implements: [Options],

    options: {
        toggleEvent: "click",
        targetClass: ".js_list_expandable_target"
    },

    triggerEl: null,

    initialize : function(triggerEl, options) {
        this.setOptions(options);
        this.triggerEl = triggerEl;
        this.targetEl = this.triggerEl.getNext(this.options.targetClass);
        this.triggerEl.addEvent(this.options.toggleEvent, this.toggle.bind(this));
    },

    toggle: function(){
        if(this.targetEl.getStyle("display") == "none"){
            this.targetEl.show();
        } else {
            this.targetEl.hide();
        }
        this.triggerEl.getFirst("a").toggleClass("expanded");
    }
});

function initLinkListExpandable(triggerClass, options){
    var triggerClass = triggerClass || ".js_list_expandable_trigger";
    $$(triggerClass).each(function(triggerEl){
        new hp.LinkListExpandable(triggerEl, options);
    });
}

//multioverlay.js
function do_cookie(){
  if ($('cookie-msg').getParent("a").hasClass('chkd')){
   Cookie.write('cookie-msg', 'yes', {duration: 30});
  }
  else{
    Cookie.dispose("cookie-msg");
  }
  reset_tool();
  msg_reset_hide();  
}


function reset_tool(){
$$(".multioverlay .form-input").each(function(el,i){
  if(!el.getParent(".dd_wrap"))
    el.value="";
});
}

function pre_reset_tool(){
  if (Cookie.read('cookie-msg')=="yes"){
    reset_tool(); 
  }
  else {
    msg_reset_show();
  }
}

function msg_reset_show(){
  $("msg_reset").removeClass('hidden');

}

function msg_reset_hide(){
  $("msg_reset").addClass('hidden');

}
function checkForm() {
  var allCorrect = true;
  $$('.required').each(function(myval, index) {
    var myLabelToValidate = $(myval.getParent());
    var myItemToValidate = $(myval.getParent().getProperty('for'));
    if (myItemToValidate.hasClass('js_dd_input')) {
      if (myItemToValidate.value == "Please select one") {
        myItemToValidate.getParent().addClass('dd_error');
        allCorrect = false;
      }
      else{
        myItemToValidate.getParent().removeClass('dd_error');
      }
    }
    if (myItemToValidate.value == "") {
      myLabelToValidate.addClass("label-error");
      myItemToValidate.removeClass("form-input");
      myItemToValidate.addClass("form-input-error");
      allCorrect = false;
    } 
    else {
      myLabelToValidate.removeClass("label-error");
      myItemToValidate.addClass("form-input");
      myItemToValidate.removeClass("form-input-error");
    }
  });
  if (allCorrect) {
    $$('.js_next')[0].fireEvent('click');
  }
}

//MultipleSelectionBox.js
/**
 *  MultipleSelectionItem Class
 */
hp.MultipleSelectionItem = new Class({

    Implements: [Options],

    options: {
        selectionClass: "selected"
    },

    itemEl: null,

    initialize: function(itemEl, options) {
        if (!itemEl) {
            return;
        }

        this.itemEl = itemEl;
        this.setOptions(options);

        var selectionHandler = this.selectionHandler.bind(this);

        itemEl.addEvents({
            "click": selectionHandler,
            "keypress": function (event) {
                if(event.key == "enter") {
                    selectionHandler(event);
                }
            }
        });
    },

    selectionHandler: function (e) {
        e.stopPropagation();
        if (this.isSelected()) {
           this.unselectItem();
        } else {
            if( !this.itemEl.hasClass("disabled") && !this.itemEl.getParent("ul").getParent("div").getParent("div").hasClass("multiselect_disabled") ) {
                this.selectItem();
            } 
        }
    },

    selectItem: function(){
        this.itemEl.addClass(this.options.selectionClass);
        this.setValue(this.itemEl.getParent().getParent().getElement(".js_ms_value"), this.itemEl.getElement(".js_multiselect_item"));
    },

    unselectItem: function(){
       this.itemEl.removeClass(this.options.selectionClass);
       this.itemEl.getElement("a").blur();
       this.setValue(this.itemEl.getParent().getParent().getElement(".js_ms_value"), this.itemEl.getElement(".js_multiselect_item"));
    },


    isSelected: function () {
        return this.itemEl.hasClass(this.options.selectionClass);
    },

    setValue: function(valueEl, selectedEl) {
        var currentValues = this.itemEl.getParent().getElements('li.multiselect_item.selected input.js_multiselect_item').get('value');

        if (currentValues.length > 0) {
            valueEl.setProperty('value', JSON.encode(currentValues));
        } else {
            valueEl.setProperty('value', '');
        }
        /* Not needed as this method was overkill
        var currentValue = valueEl.getProperty("value");
        var selectedValue = selectedEl.getProperty("value");
        if (currentValue == "") {
            currentValue = "'" + selectedValue +"'";
        } else {
            currentValue = currentValue.substr(1,currentValue.length-2);
            currentValue += ",'" + selectedValue +"'";
        }
        valueEl.setProperty("value", "["+currentValue+"]");*/

    },
    /* Not needed and was broken
    removeValue: function(valueEl, selectedEl){
        var currentValue = valueEl.getProperty("value");
        var selectedValue = selectedEl.getProperty("value");
        if (currentValue == "") {
            return;
        } else {
            currentValue = currentValue.split(";");
            var j;
            currentValue.each(function(value, i){
                if(value == selectedValue){
                    j = i;
                }
            });
            currentValue.splice(j, 1);
            currentValue = currentValue.join(";");
            valueEl.setProperty("value", currentValue);
        }
    }*/

});

hp.MultipleSelectionBox = new Class({

    boxEl: null,
    disabled: false,
    boxClass: null,

    initialize: function(options) {

        this.disabled = options.disabled;
        this.boxClass = options.boxClass;
        this.boxEl = $(document.body).getElement("." + this.boxClass);
        this.itemBox = [];
        this.boxEl.getElements("li").each(function(item) {
                var msItem = new hp.MultipleSelectionItem(item);
                this.itemBox.push(msItem);
        }.bind(this));

        hp.addWidgetToFormCollection(this.boxEl, this);
    },

    getSelectedItems: function() {
        // TODO implicit declaration!
        if(!this.disabled){
            values = this.boxEl.getParent().getElement(".js_ms_value").getProperty("value");
        } else {
            values = false;
        }

        return values;
    },

    addItem: function(title, value, disabled) {
        var copy = this.boxEl.getElement(".js_ms_template").clone();
        copy.removeClass("hidden");
        copy.removeClass("js_ms_template");
        copy.getElement("a").set('html', title);
        copy.getElement("span").set('html', title);
        if(disabled === true){
            copy.addClass("disabled");
            copy.getElement("a").addClass("hidden");
            copy.getElement("span").removeClass("hidden");
        }
        new hp.MultipleSelectionItem(copy);
        copy.getElement(".js_multiselect_item").setProperty("value", value);

        copy.inject(this.boxEl.getElement("ul"), "bottom");
    },

    isBoxEnabled: function(){
        return this.boxEl.getParent().hasClass("multiselect_enabled");
    },

    disableBox: function() {
        var boxParent = this.boxEl.getParent();
        //boxParent.getElement(".js_ms_value").setProperty("name", "");
        //boxParent.getElement(".js_ms_value").setProperty("disabled", "disabled");
        boxParent.removeClass("multiselect_enabled");
        boxParent.addClass("multiselect_disabled");

        this.boxEl.getElements("a").each(function(link) {
            if (!link.hasClass("hidden")) {
                link.addClass("hidden");
            }
        });
        this.boxEl.getElements("span").each(function(span) {
            if (span.hasClass("hidden")) {
                span.removeClass("hidden");
            }
        });
        this.disabled = true;
    },

    enableBox: function() {
        var boxParent = this.boxEl.getParent();
        //boxParent.getElement(".js_ms_value").setProperty("name", this.boxClass);
        //boxParent.getElement(".js_ms_value").setProperty("disabled", "");
        boxParent.removeClass("multiselect_disabled");
        boxParent.addClass("multiselect_enabled");

        this.boxEl.getElements("li").each(function(item) {
            if (item.hasClass("disabled")) {
                item.removeClass("disabled");
            }
        });

        this.boxEl.getElements("a").each(function(link) {
            if (link.hasClass("hidden")) {
                link.removeClass("hidden");
            }
        });

        this.boxEl.getElements("span").each(function(span) {
            if (!span.hasClass("hidden")) {
                span.addClass("hidden");
            }
        });
        this.disabled = false;
    },

    reset: function(){
         this.itemBox.each(function(item) {
            item.unselectItem();
        }.bind(this));
    }

});

var boxes = [];

hp.MultipleSelectionBox.init = function (options){
    return boxes.push(new hp.MultipleSelectionBox(options))
};

//pagination-views.js
(function(hp) {
    hp.PaginationViews = new Class({
        Implements: [Options],

        options: {
            leftButtonClass: "js_left_button",
            rightButtonClass: "js_right_button",
            leftButtonActiveClass: "icn_left_active",
            rightButtonActiveClass: "icn_right_active",
            leftButtonViewType: "list-view",
            rightButtonViewType: "grid-view"
        },

        element: null,
        leftButton: null,
        rightButton: null,

        initialize: function(element, options) {
            this.setOptions(options);
            this.element = element;

            var self = this;
            this.leftButton = this.element.getElement("." + this.options.leftButtonClass);
            this.leftButton.addEvent("click", function() {
                if (!this.hasClass(self.options.leftButtonActiveClass)) {
                    self._activateLeftButton();
                    self._triggerChangeViewEvent(self.options.leftButtonViewType);
                }
            });
            this.rightButton = this.element.getElement("." + this.options.rightButtonClass);
            this.rightButton.addEvent("click", function() {
                if (!this.hasClass(self.options.rightButtonActiveClass)) {
                    self._activateRightButton();
                    self._triggerChangeViewEvent(self.options.rightButtonViewType);
                }
            });
        },

        _activateLeftButton: function() {
            this.leftButton.addClass(this.options.leftButtonActiveClass);
            this.rightButton.removeClass(this.options.rightButtonActiveClass);
        },

        _activateRightButton: function() {
            this.rightButton.addClass(this.options.rightButtonActiveClass);
            this.leftButton.removeClass(this.options.leftButtonActiveClass);
        },

        _triggerChangeViewEvent: function(viewType) {
            this.element.fireEvent(hp.PaginationViews.EVENT_NAME, { view: viewType });
        }
    });
    hp.PaginationViews.EVENT_NAME = "changeView";
})(window.hp || (window.hp = {}));

hp.PaginationViews.init = function(rootElementSelector, options) {
    $$(rootElementSelector).each(function(element) {
        new hp.PaginationViews(element, options);
    });
};

//pagination.js
(function(hp) {
    var integerDivision = function(x, y) {
        return (x - x % y) / y;
    };

    hp.PaginationBase = new Class({
        Implements: [Options],

        options: {
            to: 1,
            from: 1,
            itemsAmount: 1,
            changePageEvent: "changePage"
        },

        rootElement: null,
        currentPage: null,
        lastPage: null,
        step: null,

        initialize: function(options) {
            this.setOptions(options);

            this.step = this.options.to - this.options.from + 1;
            this.currentPage = integerDivision(this.options.to, this.step) - 1;

            var pagesAmount = integerDivision(this.options.itemsAmount, this.step);
            this.lastPage = (this.options.itemsAmount % this.step) ? pagesAmount : pagesAmount - 1;
        },

        changePage: function(page) {
            this.currentPage = page;
            this._triggerChangePageEvent();
        },

        _triggerChangePageEvent: function() {
            var currentStep = this._getCurrentStep(),
                startingItem = this._getStartingItem();

            this.rootElement.fireEvent(this.options.changePageEvent, {
                from: startingItem,
                amount: currentStep
            });
        },

        _getCurrentStep: function() {
            return (this.currentPage == this.lastPage) ? this.options.itemsAmount % this.step || this.step : this.step;
        },

        _getStartingItem: function() {
            return this.currentPage * this.step + 1;
        }
    });

    hp.PaginationWidget = new Class({
        Extends: hp.PaginationBase,

        Implements: [Options],

        options: {
            label: "~~from~~ - ~~to~~ items of ~~countAll~~",
            type: "text_and_arrows",

            rootElementClass: "js_paging",
            labelElementClass: "js_paging_cnt",
            backButtonClass: "js_page_back",
            forwardButtonClass: "js_page_forward",
            backButtonDisabledClass: "disabled_back",
            forwardButtonDisabledClass: "disabled_forward",
            bothButtonsDisabledClass: "disabled_both"
        },

        TEXT_AND_ARROWS_TYPE: "text_and_arrows",
        ARROWS_ONLY_TYPE: "arrows_only",
        TEXT_ONLY_TYPE: "text_only",

        labelElement: null,
        backButtonElement: null,
        forwardButtonElement: null,
        backButtonDisabled: false,
        forwardButtonDisabled: false,

        initialize: function(options) {
            this.parent(options);
            this.setOptions(options);
            this.rootElement = $$("." + this.options.rootElementClass);
            this.changePage(this.currentPage);

            if (this.options.type != this.TEXT_ONLY_TYPE) {
                // Attaching event handlers
                var backButtonElement = this.rootElement.getElement("." + this.options.backButtonClass),
                    forwardButtonElement = this.rootElement.getElement("." + this.options.forwardButtonClass);

                backButtonElement.addEvent("click", function() {
                    if (!this.backButtonDisabled) {
                        this.changePage(this.currentPage - 1);
                    }
                }.bind(this));

                forwardButtonElement.addEvent("click", function() {
                    if (!this.forwardButtonDisabled) {
                        this.changePage(this.currentPage + 1);
                    }
                }.bind(this));
            }
        },

        changePage: function(page) {
            this.parent(page);
            this._changeLabel();
            this._changeButtonsState();
        },

        _changeLabel: function() {
            if (this.options.type == this.TEXT_AND_ARROWS_TYPE
                || this.options.type == this.TEXT_ONLY_TYPE) {
                var currentStep = this._getCurrentStep(),
                    startingItem = this._getStartingItem(),
                    endingItem = startingItem + currentStep - 1;

                this.labelElement = this.labelElement || this.rootElement.getElement("." + this.options.labelElementClass);
                this.labelElement.set("html",
                    this.options.label
                        .replace("~~from~~", startingItem)
                        .replace("~~to~~", endingItem)
                        .replace("~~countAll~~", this.options.itemsAmount)
                );
            }
        },

        _changeButtonsState: function() {
            this.backButtonDisabled = (this.currentPage == 0);
            this.forwardButtonDisabled = (this.currentPage == this.lastPage);

            if (this.backButtonDisabled && this.forwardButtonDisabled) {
                this.rootElement.addClass(this.options.bothButtonsDisabledClass);
                return;
            }

            this.rootElement.removeClass(this.options.bothButtonsDisabledClass);
            this.rootElement.toggleClass(this.options.backButtonDisabledClass, this.backButtonDisabled);
            this.rootElement.toggleClass(this.options.forwardButtonDisabledClass, this.forwardButtonDisabled);
        }
    });

    hp.PaginationDotWidget = new Class({
        Extends: hp.PaginationBase,

        Implements: [Options],

        options: {
            rootElementClass: "js_dot_paging",
            inactiveDotClass: 'icn_pag_dot_inactive',
            activeDotClass: 'icn_pag_dot_active'
        },

        activeDot: null,

        initialize: function(options) {
            this.parent(options);
            this.rootElement = $$("." + this.options.rootElementClass);
            this.activeDot = this.rootElement.getElement("span." + this.options.activeDotClass);
            var currentPage = this.activeDot.getParent("a").getProperty("rel");
            this.changePage(currentPage);

            var self = this;
            this.rootElement.getElements("a").each(function(dot) {
                dot.addEvent("click", function() {
                    var nextPage = this.getProperty("rel");
                    self.changePage(nextPage);
                });
            })
        },

        changePage: function(page) {
            if (page != this.currentPage) {
                this.parent(page);
                this._activateDot(page);
            }
        },

        _activateDot: function(page) {
            var newDotElement = this.rootElement.getElement('a[rel="' + page + '"] > span');
            if (newDotElement != this.activeDot) {
                this.activeDot.addClass(this.options.inactiveDotClass);
                this.activeDot.removeClass(this.options.activeDotClass);

                newDotElement.addClass(this.options.activeDotClass);
                newDotElement.removeClass(this.options.inactiveDotClass);

                this.activeDot = newDotElement;
            }
        }
    });
}(window.hp || (window.hp = {})));

hp.PaginationWidget.init = function(options) {
    new hp.PaginationWidget(options);
};
hp.PaginationDotWidget.init = function(options) {
    new hp.PaginationDotWidget(options);
};

//print.js
/*Printable version code*/
function printPage(printableClass) {
    $$(printableClass).each(function(el) {
        el.addEvents({
            click: function(e) {
                new Event(e).stop();
                window.print();
            },
            keypress: function(e) {
                if (e.key == 'enter') {
                    new Event(e).stop();
                    window.print();
                }
            }
        });
    });
}

//prog-disc.js
hp.ProgressiveDisclosure = new Class({
	 Extends: CHKControl_Base,
    initialize: function(progDisc, showCountLabels) {
        this.parent(progDisc,{showCountLabels:showCountLabels})
        var openItemIndex = this.openByUrlParam()
        var items = progDisc.getElements('.prog-disc-item-header');
        this.items = items.map(function(itemElement, index) {
            var item = new hp.ProgressiveDisclosureItem(itemElement, {opened:(openItemIndex!=null && openItemIndex == index)});
            item.addEvent("itemStateChanged", this.buttonState.bind(this));

            return item;
        }.bind(this));

        this.expButon = this.initAllButton(progDisc.getElement('.js_prg_dsc_exp'), "openItem");
        this.clpButon = this.initAllButton(progDisc.getElement('.js_prg_dsc_clp'), "closeItem");

        this.buttonState();
    },

    setCountLabels: function() {

    },

    initAllButton: function (button, itemAction) {
        if (button) {
            button.itemAction = itemAction;

            button.addEvent('click', function() {
                this.toggleAll(button);
            }.bind(this));
        }
        return button;
    },

    toggleAll:function(btn) {
        if (this.isEnableButton(btn)) {
            this.items.each(function(elem) {
                elem[btn.itemAction]();
            });
        }
    },

    //toggle +/- button
    buttonState :function() {
        var allClosed = true;
        var allOpened = true;
        this.items.each(function(elem) {
            var isOpen = elem.isOpen();
            allOpened = allOpened && isOpen;
            allClosed = allClosed && !isOpen;
        });

        this.disable(this.clpButon, allClosed);
        this.disable(this.expButon, allOpened);
    },

    isEnableButton: function(btn) {
        return !btn.hasClass('disabled');
    },

    disable: function (element, isDisabled) {
        if (element) {
            if (isDisabled) {
                element.addClass('disabled');
            } else {
                element.removeClass('disabled');
            }
        }
    },

    openByUrlParam: function () {
        var pdContentMather = /[?#&][\/]?pd=([^=&$]+)/i.exec(window.location.href);
        if (!pdContentMather || isNaN(pdContentMather[1])) {
            return null;
        }

        return parseInt(pdContentMather[1], 10)-1;
    }
});

hp.ProgressiveDisclosureItem = new Class({

    Implements: [Options, Events],

    options: {
        fx: {wait: false, duration: 500, transition: Fx.Transitions.Sine.easeInOut},
        closeStyles: {display:"none", height : 0, 'padding-bottom' : 0, 'padding-top' : 0},
        closeEffect: {height : 0},
        opened:false
    },

    initialized: false,

    initialize: function(item, options) {
        this.setOptions(options);

        this.item = item;
        this.toggler = this.item.getElement('.js_prg_dsc_trg');
        this.content = this.item.getNext('.js_prg_dsc_cnt');
        this.content.setStyles(this.options.closeStyles);
        if (this.options.opened || this.isOpen()) {
            this.openItem(true);
        }

        this.toggler.addEvent('click', this.toggleItem.bind(this));
    },

    _popupHeight: function () {
        this.fx = new Fx.Morph(this.content, this.options.fx);

        this.fx.addEvent('complete', function() {
            if (!this.isOpen()) {
                this.content.hide();
            }
            this.fireEvent("itemStateChanged");
        }.bind(this));

        this.content.show();

        var res = this.content.getScrollHeight();

        return  res <= 0 ? 0 : res;

    },

    openItem :function(skipFx) {
        if(!this.initialized){
            this.popupHeight = this._popupHeight();
            this.initialized = true;
        }

        if (skipFx) {
            this.content.setStyles({display:"block", height : this.popupHeight});
        } else {
            this.fx.start({display:"block", height : this.popupHeight});
        }
        this.toggler.addClass('opened');
    },

    closeItem :function() {
        this.toggler.removeClass('opened');
        this.fx.start(this.options.closeEffect);
    },

    toggleItem :function() {
        if(this.isOpen()) {
            this.closeItem();
        } else {
            this.openItem();
        }
    },

    isOpen:function() {
        return this.toggler.hasClass('opened');
    }
});

hp.ProgressiveDisclosure.init = function (selector, showCountLabels) {
    return $$(selector || '.js_prog_disc').map(function(progDisc) {
        return new hp.ProgressiveDisclosure(progDisc, showCountLabels);
    });
};

//radio-checkboxes.js
(function () {

    function applyInputValue(value, setError) {
        if (value == undefined) {
            value = this.getElement("input").checked;
        }
        if ((setError == undefined || setError === true) && this.hasClass('js_error')) {
            this.addClass("error");
        }

        if (value) {
            this.removeClass("unchkd");
            this.addClass("chkd");
            if(navigator.userAgent.toUpperCase().indexOf("MSIE 6.0") != -1){
                if (this.hasClass("error")) {
                    this.removeClass("error_unchkd");
                    this.addClass("error_chkd");
                }
            }
        } else {
            this.addClass("unchkd");
            this.removeClass("chkd");
            if(navigator.userAgent.toUpperCase().indexOf("MSIE 6.0") != -1){
                if (this.hasClass("error")) {
                    this.addClass("error_unchkd");
                    this.removeClass("error_chkd");
                }
            }
        }
    }

    var RADIO_BUTTONS = {};

    function initRadio(inputEl, enclosingSpan) {
        var parentForm = inputEl.getParent("form");
        var parentName =  inputEl.name || inputEl.id || parentForm || "null";

        if (!RADIO_BUTTONS[parentName]) {
            RADIO_BUTTONS[parentName] = [];
        }
        RADIO_BUTTONS[parentName].push(enclosingSpan);

        initCheckBox(inputEl, enclosingSpan);

        inputEl.addEvent('change', function () {
            RADIO_BUTTONS[parentName].each(function (span) {
                span.reset(span.getElement("input").checked, false);
            });
        });

        inputEl.addEvent('removeError', function () {
            if(RADIO_BUTTONS[parentName].length > 1){
                RADIO_BUTTONS[parentName].each(function (span) {
                    if (span.hasClass("error")) {
                        span.removeClass("error").removeClass("error_chkd").removeClass("error_unchkd");
                    }
                });
            }
        });
    }

    function initCheckBox(inputEl, enclosingSpan) {
        enclosingSpan.reset = applyInputValue;
        enclosingSpan.reset(inputEl.checked, true);

        /*ie6 multi-class bug fix*/
        if (enclosingSpan.hasClass("unchkd") && enclosingSpan.hasClass("dis")) {
            enclosingSpan.addClass("unchkd_dis");
        }

        if (enclosingSpan.hasClass("dis")) {
            inputEl.disabled = true;
        }

        enclosingSpan.addEvent("click", function () {
            if (!enclosingSpan.hasClass("dis") && !enclosingSpan.hasClass("unchkd_dis")) {
                if((inputEl.get("type") == "radio" && !inputEl.checked) || inputEl.get("type") == "checkbox"){
                    inputEl.checked = !inputEl.checked;

                    this.reset(inputEl.checked, false);

                    if (this.hasClass("error")) {
                        inputEl.fireEvent('removeError', inputEl);
                    }
                    inputEl.fireEvent('change', inputEl);
                }
            }
        });
    }

    function initFormWidget(selector, initFunction) {
        $$(selector).each(function (el) {
            initFunction(el.getElement("input"), el);

            hp.addWidgetToFormCollection(el, el);
        });
    }

    window.initRadioButtons = function(selector) {
        initFormWidget(selector ? selector : ".rbtn", initRadio);
    };

    window.initCheckBoxes = function () {
        initFormWidget(".chbx", initCheckBox);
    };

})();

//rating.js
function initRatings(){
    var ratings = $(document.body).getElements(".js_rating");
    var rating_stars = $(document.body).getElements(".js_rating_star");

    rating_stars.each(function(star){
        if(!star.getParent(".js_rating_locked")){
            star.addEvent("click", ratingStarClick);
        }
    });

    ratings.each(function(rating) {
        if (rating.getElements(".js_rating_hoverable")[0]) {
            rating.addEvent("mouseover", ratingHover);
            rating.addEvent("mouseout", ratingUnHover);
        }
    });

    if(isIE6){
        ratings.each(function(rating){
            var unvoted = rating.getElement(".js_rating_unvoted");
            if(unvoted){
                unvoted.addEvent("mouseover", ratingMouseover);
                unvoted.addEvent("mouseout", ratingMouseout);
            }
        });
    }
}

function ratingHover(event){
    this.getElements(".js_rating_hoverable")[0].hide();
    this.getElements(".js_rating_holder")[0].show();
}

function ratingUnHover(event){

    this.getElements(".js_rating_holder")[0].hide();
    this.getElements(".js_rating_hoverable")[0].show();
}

function ratingStarClick(event) {
    event.stop();
    var topLevelParent = this.getParent(".js_rating");
    topLevelParent.getElements(".js_rating_star").removeClass("active");
    this.addClass("active");
    this.getParents(".js_rating_star").addClass("active");
    var parent = this.getParent(".js_rating_unvoted");
    if (parent) {
        parent.removeClass("unvoted");
        parent.removeEvent("mouseover", ratingMouseover);
        parent.removeEvent("mouseout", ratingMouseout);
    }

    topLevelParent.removeEvents("mouseout");
    topLevelParent.removeEvents("mouseover");
}

function ratingMouseover(event){
    event.stop();
    this.getElement(".js_rating_label").addClass("label_hide");
    this.getElements(".js_rating_star").addClass("star_show");
    this.getElements(".js_rating_counter").addClass("counter_show");


}

function ratingMouseout(event){
    event.stop();
    this.getElement(".js_rating_label").removeClass("label_hide");
    this.getElements(".js_rating_star").removeClass("star_show");
    this.getElements(".js_rating_counter").removeClass("counter_show");
}

function ratingAddIEHover(event){
    event.stop();
    this.addClass("star_hovered");
    this.getParents(".js_rating_star").addClass("star_hovered");
}

function ratingRemoveIEHover(event){
    event.stop();
    this.removeClass("star_hovered");
    this.getParents(".js_rating_star").removeClass("star_hovered");
}

//read-more-less.js
function initReadMoreLessWidget (selector) {
    $$(selector || '.js_read_more_less').map(function(toggler) {
        toggler.getElement('a').addClass("more");
        toggler.getElement('a').addEvent('click', function() {
            if (this.hasClass("more")) {
                this.removeClass("more");
                this.addClass("less");
            } else {
                this.removeClass("less");
                this.addClass("more");
            }
        });
    });
}

//secondary-nav.js
hp.SecondaryNavItem = new Class({
    Extends: hp.SelectableItemWithSubMenu,

    initialize: function (item, options) {
        this.parent(item, options);
    },

    select: function () {
        this.itemEl.addClass(this.options.selectionClass);
        this.fireEvent("selectItem", this);
        return true;
    },

    initAnimateContainer: function (cnt) {
        new hp.AnimatedContainer(cnt, this.options.container);

        this.addEvents({
            selectItem: function () {
                var snav = $(cnt).getParent(".secondary_nav");
                if (snav.hasClass("js-opened")) {
                    cnt.show();
                } else {
                    cnt.effectShow();
                }
            },
            unselectItem: function () {
                var snav = $(cnt).getParent(".secondary_nav");
                if (snav.hasClass("js-opened")) {
                    //cnt.hide();
                } else {
                    //cnt.effectHide();
                }
            }
        });

        if (cnt) {
            cnt.addEvent("after-opening", function () {
                this.getElement("a").focus();
            });
        }
    }

});

/**
 * @class SecondaryNav
 */
hp.SecondaryNav = new Class({

    Implements: [Options, CHKOverrides],

    options: {
        dockRoot: null,
        docked: false,
        isExpandable : false,
        dockInitOffset: 0,
        level2Selector: ".level2 .js_menu",
        itemConstructor: hp.SecondaryNavItem,
        item: {
            container: {
                opening: {
                    state: "opening",
                    before: {opacity: 0, height: 0, 'padding-top':0, display: 'block'},
                    effect: {opacity: 1, height: null, 'padding-top':18 },
                    beforeAction: function (cnt) {
                        if(!isIE6){
                            cnt.getElement("a").focus();
                        }
                        var parent = $(cnt).getParent(".secondary_nav");
                        parent.addClass("js-opened");
                        parent.removeClass("js-closed");
                    }
                },
                closing: {
                    state: "closing",
                    effect: {opacity : 0,height:0, 'padding-top':0 },
                    after: {opacity: 1, height:null, 'padding-top':null, display:'none'},
                    beforeAction: function (cnt) {
                        var parent = $(cnt).getParent(".secondary_nav");
                        parent.addClass("js-closed");
                        parent.removeClass("js-opened");
                    }
                },
                options: {duration: 0, transition: Fx.Transitions.Sine.easeOut, link: 'cancel'}
            }
        },
        level3: {
            itemsSelector: ".js_menu li",
            itemConstructor: hp.SelectableItemWithSubMenu,
            level4: {}
        }
    },

    /**
     * @param {Element} nav
     * @param {Hash} options
     */
    initialize: function (nav, options) {

        this.nav = nav;
        this.setOptions(options);
        this.setOverrides();

        var menu_items = nav.getElement(this.options.level2Selector),
            menu       = null;

        if(menu_items){

            menu = new hp.MultiSelectable(menu_items, this.options);

            menu.addEvent("selectItem", function (event) {

                var prevContainer = event.previousItem && event.previousItem.getSubMenuContainerId();
                var currentContainer = event.currentItem.getSubMenuContainerId();

                var currCntWrapper = $(currentContainer);
                var prevCntWrapper = $(prevContainer);
                if (currCntWrapper) {
                    if (nav.hasClass("js-opened") && prevContainer && currentContainer) {
                        prevCntWrapper.hide();
                        currCntWrapper.show();
                        return;
                    }
                }

                if (currCntWrapper) {
                    if (currCntWrapper.effectShow) {
                        currCntWrapper.effectShow();
                    } else {
                        currCntWrapper.show();
                        var link = currCntWrapper.getElement("a");
                        if (link && link.isVisible()) {
                            link.focus();
                        }
                    }
                }
            });

            if (menu.selectedItem) {
                var cnt = menu.selectedItem.getSubMenuContainerId();
                var cntWrapper = $(cnt);

                if (cntWrapper) {
                    cntWrapper.show();
                    cntWrapper.open = true;
                    this.options.item.container.opening.beforeAction(cntWrapper);
                    cntWrapper.addClass("js-first-time");

                    (function () {
                        if (cntWrapper.open && cntWrapper.hasClass("js-first-time")) {
                            cntWrapper.removeClass("js-first-time");
                            cntWrapper.effectHide()
                        }
                    }).delay(2500)
                }
            }

            nav.addEvent("mouseleave", function () {
                if (nav.hasClass("js-opened")) {
                    var subMenuEl = $(menu.selectedItem.getSubMenuContainerId());
                    if (subMenuEl && !cntWrapper.hasClass("js-first-time")) {
                        subMenuEl.effectHide();
                    }
                }
            });

            menu.menuItems.each(this.initLevel1Item.bind(this));
        }


        this.dockRoot = (menu_items ? menu_items.getParent(".js_dock") : (nav.hasClass("js_dock") ? nav : null));

        if(this.dockRoot != null) {
            this.initDock();
        }
    },

    /**
     * @memberOf SecondaryNav
     *
     * */
    initDock: function() {
        this.dockInitOffset = this.dockRoot.offsetTop;
        window.addEvent("scroll", function(){
            //console.log(this.dockRoot.getCoordinates().top, $$("body")[0].getScrollTop())
            if (!this.docked && (this.dockRoot.getCoordinates().top - $$("body")[0].getScrollTop() < 0)) {

                this.dockRoot.addClass("docked");
                this.docked = true;
            } else if (this.docked && $$("body")[0].getScrollTop() <= this.dockInitOffset) {

                this.dockRoot.removeClass("docked");
                this.docked = false;
            }
        }.bind(this));
    },

    /**
     * @memberOf SecondaryNav
     *
     * @param {SelectableItem} item -
     * */
    initLevel1Item: function (item) {
        var container = $(item.getSubMenuContainerId());
        if (!container) {
            return;
        }

        item.itemEl.addEvent("enter", function () {
            if (item.isSelected() && this.nav.hasClass("js-closed")) {
                container.effectShow();
            }
        }.bind(this));

        var menuL2 = new hp.Selectable(container.getElement(".level3"), this.options.level3);
        menuL2.menuItems.each(function (item) {
            var subMenuEl = item.getSubMenuEl();
            if (subMenuEl) {
                new hp.Selectable(subMenuEl);
            }
        });

        container.getElement(".snav_arr").addEvent("click", function () {
            container.effectHide();
        });
    }
});

/**
 * @return {SecondaryNav[]} - array of created objects
 */
hp.SecondaryNav.init = function(secondaryNavSelector, options) {
    return $$(secondaryNavSelector || ".secondary_nav").map(function (secondaryNav) {

        return new hp.SecondaryNav(secondaryNav, options);
    });
};

//spooler-hpe.js
var Spooler = new Class({
        Implements : Options,
        options : {
            activeClass : 'active',
            relClass : 'active',
            considerScroll : true
        },
        initialize : function (targetEl, relSelector, options) {
            if (!targetEl) {
                return;
            }
            this.setOptions(options || {});
            var o = this.options;
            var getScrollOffsetHeight = function (el) {
                var result = 0;
                var element = el;
                var offset;
                do {
                    element = element.getParent();
                    offset = element.getScroll().y;
                    if (offset > 0) {
                        result += offset;
                    }
                } while (element != window.document.body);
                return result;
            };
            var considerScroll = this.options.considerScroll;
            var wrapper = false;
            if (targetEl.getParent().getProperty('class').contains('spooler_wrapper')) {
                wrapper = true;
                considerScroll = false;
            }
            targetEl.addEvents({
                'show' : function (e) {
                    if (wrapper)
                        $$('.spooler_wrapper_650').setStyle('display', 'block');
                    this.addClass(o.activeClass);
                    var img = this.getFirst();
                    var height = window.getSize().y;
                    var parentSize = this.getParent().getSize();
                    if (height > parentSize.y) {
                        height = parentSize.y;
                    } else {
                        height -= this.getPosition().y;
                    }
                    var topOffset = Math.floor((height - img.getSize().y + (considerScroll ? getScrollOffsetHeight(this) : 0)) / 2);
                    var maxTopOffset = height - img.getSize().y;
                    img.setStyle('top', (topOffset > maxTopOffset) ? maxTopOffset : topOffset);
                    var width = parentSize.x ? parentSize.x + 'px' : 'auto';
                    var height = parentSize.y ? parentSize.y + 'px' : 'auto';
                    this.setStyles({
                        'width' : width,
                        'height' : height
                    });
                    $$(relSelector).each(function (el) {
                        el.addClass(o.relClass);
                        var size = el.getParent().getSize();
                        var width = size.x ? size.x + 'px' : 'auto';
                        var height = size.y ? size.y + 'px' : 'auto';
                        el.setStyles({
                            'width' : width,
                            'height' : height
                        });
                        el.set('tween', {
                            duration : 100
                        });
                        el.tween('opacity', 0.7)
                    });
                },
                'hide' : function (e) {
                    this.removeClass(o.activeClass);
                    $$(relSelector).each(function (el) {
                        el.set('tween', {
                            duration : 100
                        });
                        el.tween('opacity', 0);
                        el.removeClass(o.relClass);
                        if (wrapper)
                            $$('.spooler_wrapper_650').setStyle('display', 'none');
                    });
                }
            });
        }
    });
hp.SpoolerMixIn = new Class({
        showSpooler : function () {
            var spooler = $(this.options.spoolerId);
            if (spooler) {
                spooler.fireEvent('show');
            }
        },
        hideSpooler : function () {
            var spooler = $(this.options.spoolerId);
            if (spooler) {
                spooler.fireEvent('hide');
            }
        }
    });
var initSpoolers = function (elementSelector, options) {
    $$(elementSelector || '.js_spooler').each(function (targetEl) {
        new Spooler(targetEl, targetEl.get('rel'), options);
    });
};

//tooltips.js
function initTooltip(cnt, trigger, opt) {
    $$(cnt).map(function (tooltip) {
        var trg = tooltip.getPrevious($(trigger));
        var options = {
            showDelay: 100,
            hideDelay: 200,
            openEvent: 'mouseenter',
            opening: {
                before: {display: 'block'},
                effect: {opacity: 1}
            },
            closeEvent: 'mouseleave',
            closing: {
                effect: {opacity: 0},
                after: {display: 'none'}
            },
            effect: {duration: 100, transition: Fx.Transitions.Sine.easeOut, link: 'cancel'}
        };
        Object.append(options,opt);//This method is an object-specific equivalent of $extend from MooTools 1.2.
        return new hp.CustomPopup(trg, tooltip, options);
    })
}
document.addEvent('domready',function(){
    $$(".tooltip_main a.link_icn").addEvent('focus',function(){
        this.fireEvent('mouseenter');
    });
    $$(".tooltip_main a.link_icn").addEvent('blur',function(){
        this.fireEvent('mouseleave');
    });  
    $$(".tooltip_main a.inline").addEvent('focus',function(){
        this.fireEvent('mouseenter');
    });
    $$(".tooltip_main a.inline").addEvent('blur',function(){
        this.fireEvent('mouseleave');
    });
});


//video-brightcove.js
(function(HP){
    var hasFlash = function(version) {
        // swfobject library is used to detect flash
        return swfobject.hasFlashPlayerVersion(version);
    };

    HP.Brightcove = {
        videoPlayer: null,

        initPlayers: function() {
            brightcove.createExperiences();
        },

        onTemplateReady: function(id) {
            if (this.videoPlayer){
                if(this.videoPlayer.autoPlay == "true"){
                    if (hasFlash('10')) {
                        this.videoPlayer.play();
                    } else {
                        (function() {
                            this.videoPlayer.play();
                        }).delay(50);
                    }
                }

                if(this.videoPlayer.spooler) {
                    this.videoPlayer.spooler.hide();
                }
            }
        },

        onTemplateLoaded: function(id) {
            var playerObjEl = $(id),
                playerParamsEl;

            if (playerObjEl.getParent) {
                playerParamsEl = playerObjEl.getParent('.js_brightcove_player');
            } else {  // IE7-8 fix
                playerParamsEl = $(playerObjEl.parentNode);
                while (!playerParamsEl.hasClass('js_brightcove_player')) {
                    playerParamsEl = $(playerParamsEl.parentNode);
                }
            }

            // get a reference to the player, these functions won't work with HTML5 players
            var player = hasFlash('10') ? brightcove.getExperience(id) : brightcove.api.getExperience(id);
            // get references to the experience and video player modules
            this.videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);

            if(this.videoPlayer && playerParamsEl){
                this.videoPlayer.autoPlay = playerParamsEl.get("data-autoPlay");
                this.videoPlayer.spooler = playerParamsEl.getElement(".cs_spooler");
            }
        }
    };
}(window.HP || (window.HP = {})));

//video-poster.js
function initVideoPoster(triggerClass, targetClass) {
    $$("." + triggerClass).each(function (trigger) {
        var target = trigger.getParent().getNext("." + targetClass);
        //target.hide();
        trigger.addEvent('click', function () {
            target.show();
        });
    });
}

//faceted-nav-tree-hpe.js
var DefaultFacetsDataAdapter = new Class({

    adapt: function(facets, maxFacetsCount, facetValuesThreshold, lastSelectedFacet) {
        var result = [];
        var size = facets.length;
        if(maxFacetsCount && maxFacetsCount <= facets.length) {
            size = maxFacetsCount;
        }

        for (var i = 0; i < size; i++) {
            var facet = facets[i];
//            if(typeof lastSelectedFacet != "undefined" && facet[0] == lastSelectedFacet.facetName && !facet[4]) {
//                facet[3] = this.forceEnableFacetOptions(lastSelectedFacet)
//            }
            result.push(this.adaptFacet(facet, facetValuesThreshold));
        }
        return result;
    },

    forceEnableFacetOptions: function(facet) {
        var options = $$(facet.facetOptionsSelector);
        var preparedOptions = [];
        options.each(function(option){
            var optionName = option.getElement("input").get("value").trim();
            if(optionName != "all") {
                var preparedOption = [
                    optionName,
                    option.get("text").trim(),
                    option.hasClass("disabled"),
                    false
                ];

                preparedOptions.push(preparedOption);
            }
        });

        return preparedOptions;
    },

    adaptFacet: function(data, facetValuesThreshold) {
        var type;
        var optionsData = data[3];
        var isRadio = !data[4];

        var facet = {};
        var name = data[0];

        if(!isRadio) {
            type = "checkbox";
        } else {
            type = "radio";
        }

        facet.hasMore = false;
        if(optionsData.length > facetValuesThreshold) {
            facet.hasMore = true;
        }

        facet.isRadio = isRadio;
        facet.name = name;
        facet.caption = data[1];

        if(isRadio) {
            facet.allOption = {caption: data[2], value: 'all', name: name, checked: true, id: name + '_all', isRadio: isRadio};
        }

        facet.type = type;

        var size = optionsData.length;

        var options = [];
        for (var i = 0; i < size; i++) {
            var optionData = optionsData[i];
            var value = optionData[0];
            var id = name + '_' + this._sanitize(value);
            var checked = optionData[3];
            var hidden = false;

            if(i >= facetValuesThreshold) {
                hidden = true;
            }

            options.push({caption: optionData[1], value: value, name: name, disabled: optionData[2], id: id, checked: checked, isRadio: isRadio, hidden: hidden});
            if (checked && isRadio) {
                facet.allOption.checked = false;
            }
        }

        facet.options = options;
        return facet;
    },

    _sanitize: function(string) {
        return string.replace(/\W/g, '').replace(/\s/g, '')
    }

});


/**
 * Disable All - Enable Active strategy
 *
 * @description Strategy, which provides all options for disabling and active options for enabling
 */
var DisableAllEnableActiveStrategy = new Class({

    initialize: function(controller) {
        this.controller = controller;
    },

    process: function(facets) {
        var size = facets.length;
        var optionsToEnable = [];
        for (var i = 0; i < size; i++) {
            var facet = facets[i];
            var options = facet.options;
            var optionsSize = options.length;

            for (var j = 0; j < optionsSize; j++) {
                var option = options[j];
                if (!option.disabled) {
                    optionsToEnable.push(option.id);
                }
            }
        }
        return {toDisable: this._getOptionsToDisable(), toEnable: optionsToEnable};
    },

    _getOptionsToDisable: function() {
        var optionsToDisable = [];

        this.controller.facetsOptions.each(function(facetOptions) {
            facetOptions._getOptions().each(function(option) {
                if (!option.isAll) {
                    optionsToDisable.push(option.getElement('input').id);
                }
            });
        });
        return optionsToDisable;
    }

});

/**
 * Disable Inactive - Enable Active strategy
 *
 * @description Strategy, which provides inactive options for disabling and active options for enabling
 */
var DisableInactiveEnableActiveStrategy = new Class({

    process: function(facets) {
        var size = facets.length;
        var optionsToEnable = [];
        var optionsToDisable = [];
        for (var i = 0; i < size; i++) {
            var facet = facets[i];
            var options = facet.options;
            var optionsSize = options.length;

            for (var j = 0; j < optionsSize; j++) {
                var option = options[j];
                if (option.disabled) {
                    optionsToDisable.push(option.id);
                } else {
                    optionsToEnable.push(option.id);
                }
            }
        }
        return {toDisable: optionsToDisable, toEnable: optionsToEnable};
    }

});


var FacetedNavigation = new Class({

    Implements: [Events, Options],

    updateStrategy: null,

    options: {
        facetsDataAdapter: new DefaultFacetsDataAdapter(),
        createStrategyClass: DisableInactiveEnableActiveStrategy,
        updateStrategyClass: DisableAllEnableActiveStrategy,
        hideResultsCount: false,
        categoryFacetsLimit: false,
        facetValuesThreshold: 5,
        useTree: false,
        treeOptions: {
            treeObject: null,
            placeHolderClassName: "js_cn_facets_holder"
        }
    },

    selections: [],
    currentCategoryLabel: null,

    /**
     *
     * @constructs
     * @param {Object} labels localized labels
     * @param {Array} modifiers used to customize presentation of the navigation
     * @param {Object} options define common configuration
     */
    initialize: function(labels, modifiers, options) {
        this.labels = labels;
        this.setOptions(options);
        this.modifiers = modifiers;
        this.renderer = new FacetedNavigationRenderer();
    },

    create: function(title, data) {
        var placeholder;
        var savedSelections = false;

        if(this.options.useTree) {
            placeholder = this.prepareTreePlaceholder(facetedNavigation);
            savedSelections = this.saveCurrentFacetsData(data.facets);
        } else {
            placeholder = this.options.placeholderEl;
            savedSelections = data.facets;
        }

        var facets = this.options.facetsDataAdapter.adapt(savedSelections, this.options.categoryFacetsLimit, this.options.facetValuesThreshold);

        if(facets.length == 0) {
            placeholder.dispose();
            return;
        }

        var facetedNavigation = this.renderer.render({ title: title, count: data.count, facets: facets, hideResultsCount: this.options.hideResultsCount });

        placeholder.set('html', facetedNavigation);

        var root = placeholder.getChildren()[0];
        this.modifiers.each(function(modifier) {
            root.addClass('faceted_navigation_' + modifier);
        });
        if( data.facets.length === 0 )
            return;

        this.controller = new FacetedNavigationController(root, this.labels, savedSelections);
        this._update(facets, new this.options.createStrategyClass(this.controller));

        this.updateStrategy = new this.options.updateStrategyClass(this.controller);

        this.controller.addEvent('selectionChanged', function(e) {
            this.fireEvent('selectionChanged', e);
            this.lastSelectedFacet = e.initiatorFacet;
        }.bind(this));

        this.updateSelections();
        this.controller.openActiveItems();

    },

    getSavedSelectionsForCategory: function() {
        return this.selections[this.currentCategoryLabel] || false;
    },

    getFacetsDataForSelectedCategory: function(category, facetsData) {
        var returnValue = false;
        var selectedFacets = [];
        var facets = facetsData || this.selections[category];
        if (facets) {
            for(var i = 0; i < facets.length; i++){
                var facetOptions = facets[i][3];
                for(var k = 0; k < facetOptions.length; k++) {
                    var option = facetOptions[k];
                    if(option[3]) {
                        selectedFacets.push(option[0]);
                    }
                }
            }
        }

        if(selectedFacets.length > 0) {
            returnValue = selectedFacets.join('|');
        }

        return returnValue;
    },

    saveCurrentFacetsData:  function(facetsData) {
        var savedFacets = this.selections[this.currentCategoryLabel];
        if (!savedFacets ||
            (this.getFacetsDataForSelectedCategory(this.currentCategoryLabel, savedFacets)!=this.getFacetsDataForSelectedCategory(this.currentCategoryLabel, facetsData))) {

            this.selections[this.currentCategoryLabel] = savedFacets = facetsData;
        }

        return savedFacets || facetsData;
    },

    updateSelections: function() {
        var categorySelection = this.selections[this.currentCategoryLabel];
        if (categorySelection) {
            this.updateCategorySelections(categorySelection);
        }
    },

    updateCategorySelections: function(categorySelections) {
        for (var i = 0; i < categorySelections.length; i++) {
            categorySelections[i][5] = !this.controller.facets[i].isAll;
            var facetSelectionName = categorySelections[i][0];
            var facetSelectionData = categorySelections[i][3];
            for (var j = 0; j < this.controller.facets.length; j++) {
                if (this.controller.facets[j].facetOptions.facetName == facetSelectionName) {
                    facetSelectionData = this.updateFacetSelection(facetSelectionData, this.controller.facets[j].facetOptions.options);
                    categorySelections[i][3] = facetSelectionData;
                    break;
                }
            }
        }

        return categorySelections;
    },

    updateFacetSelection: function(facetSelectionData, facetOptions) {

        for(var i = 0; i < facetSelectionData.length; i++) {
            facetOptions.getElements(".facet_option").each(function(optionEl) {
                if(optionEl.getElement("input").get("value") == facetSelectionData[i][0]) {
                    facetSelectionData[i][3] = optionEl.hasClass("selected");
                    facetSelectionData[i][2] = optionEl.hasClass("disabled");
                }
            });
        }

        return facetSelectionData;
    },

    removeSelections: function() {
        this.currentCategoryLabel = null;
        this.selections = [];
    },

    prepareTreePlaceholder: function(facetedNavigation) {

        var selectedCategoryEl = this.options.treeOptions.treeObject.getSelectedTrigger();

        this.previousCategoryLabel = this.currentCategoryLabel;
        this.currentCategoryLabel = selectedCategoryEl.getParent().get("rel");

        var placeholder = new Element("div");
        placeholder.addClass(this.options.treeOptions.placeHolderClassName);
        placeholder.addClass("temp_faceted_navigation");
        placeholder.inject(document.body);
        placeholder.set("html", facetedNavigation);
        this.options.treeOptions.treeObject.prepareFacetsPlaceholder(placeholder.getScrollSize().y);
        placeholder = placeholder.dispose();
        placeholder.inject(selectedCategoryEl, "after");
        placeholder.removeClass("temp_faceted_navigation");

        return placeholder;
    },

    update: function(data) {
        var facets = this.options.facetsDataAdapter.adapt(data.facets, this.options.categoryFacetsLimit, this.facetValuesThreshold, this.lastSelectedFacet);
        this._update(facets, this.updateStrategy);
    },

    _update: function(facets, disableEnableStrategy) {
        if (this.controller) {
            var options = disableEnableStrategy.process(facets);
            this.controller.disableOptions(options.toDisable);
            this.controller.enableOptions(options.toEnable);
        }
    },

    dispose: function() {
        if(this.options.useTree) {
            var placeholderEl = $$("." + this.options.treeOptions.placeHolderClassName)[0];
            if(typeof placeholderEl != "undefined") {
                this.updateSelections();
                $$("." + this.options.treeOptions.placeHolderClassName).dispose();
            }
        } else {
            var facetesList = this.options.placeholderEl.getElement('.js_faceted_navigation');
            if( facetesList != null ) {
                facetesList.dispose();
            }
        }
    },

    hide: function() {
        this.options.placeholderEl.addClass("hidden");
    },

    show: function() {
        this.options.placeholderEl.removeClass("hidden");
    }

});

var FacetedNavigationController = new Class({
    Implements: [Events],

    facets: [],
    facetsOptions: [],
    accordions: [],
    savedSelections: false,

    initialize: function (root, labels, savedSelections) {
        this.savedSelections = savedSelections;
        this.root = root;
        triggers = [];
        targets = [];
        root.getElements(".js_facet").each(function(el) {
            var facet = new Facet(el, labels);
            facet.addEvent('selectionChanged', function(e) {
                var anySimpleFacetSelected = this._isAnySimpleFacetOptionSelected();
                this._notifyAboutChangedSelection(facet.facetOptions);
            }.bind(this));
            this.facets.push(facet);
            this.facetsOptions.push(facet.facetOptions);
            triggers.push(facet.triggerEl);
            targets.push(facet.targetEl.getParent(".js_facet_slider"));
        }.bind(this));

        if (triggers.length > 0) {
            this.initAccordion(root, triggers, targets, {});
        }

        var clearAllInitState = false;

        var popupManager = new PopupManager();
        this.facets.each(function(facet) {
            popupManager.add(facet);

           if(facet.facetOptions.isAllState)
                clearAllInitState = true;
        });

        this.clearAllInitState = clearAllInitState;
    },

    _isAnySimpleFacetOptionSelected: function() {
        var result = false;
        this.facets.each(function(facet) {
            var options = facet._getSelectedOptions();
            result = result || (options.length != 0);
        });
        return result;
    },

    _notifyAboutChangedSelection: function(initiatorFacet) {
        var selectedOptions = [];
        this.facets.each(function(facet) {
            var options = facet.getSelectedOptions();
            if (options[1].length != 0) {
                selectedOptions.push(options);
            }
        });

        this.fireEvent('selectionChanged', {data: selectedOptions, initiatorFacet: initiatorFacet});
    },

    disableOptions: function(options) {
        options.each(function(option) {
            var el = $(option);
            if (el) {
                this._disableOption(el.getParent());
            }
        }.bind(this));
    },

    enableOptions: function(options) {
        options.each(function(option) {
            var el = $(option);
            if (el) {
                this._enableOption(el.getParent());
            }
        }.bind(this));
    },

    _disableOption: function(option) {
       // option.disabled = true;         //NOTE: occure to bug in ie (drop shadow 6031QC)
        option.addClass('disabled');

    },

    _enableOption: function(option) {
        option.disabled = false;
        option.removeClass('disabled');
    },

    initAccordion:function (root, triggers, targets, options) {
        targets.each(function(target, i) {
            this.accordions.push(new Fx.Tween(target, {property: 'height', duration:300,
                onComplete:function() {
                    if (!this.isOpen(triggers[i])) {
                        target.hide();
                    }else{
                        target.setStyle('height',null);
                    }
                }.bind(this)
            }));
            this.facets[i].popupHeight = this.popupHeight(target);
            target.setStyles({display:"none", height : 0});
        }.bind(this));

        triggers.each(function(trigger, i) {
            trigger.addEvent("click", function() {
                this.toggleSlide(trigger, i);
            }.bind(this));
        }.bind(this));
    },
    toggleSlide:function(trigger, i) {
        var itemEffect = this.accordions[i];
        if (this.isOpen(trigger)) {
            itemEffect.start(this.facets[i].popupHeight, 0);
            trigger.getFirst("a").removeClass("active");

        } else {
            targets[i].show();
            itemEffect.start(0, this.facets[i].popupHeight);
            trigger.getFirst("a").addClass("active");
        }
    },
    popupHeight: function (content) {
        content.show();
        var res = content.getScrollHeight();
        return  res <= 0 ? 0 : res;

    },
    isOpen:function(trigger) {
        return trigger.getFirst("a").hasClass("active");
    },
    openActiveItems: function() {
        var isSliderInitialized = false;

        for (var i = 0; i < this.savedSelections.length; i++) {
            if (this.savedSelections[i][5]) {
                this.toggleSlide(triggers[i], i);
                isSliderInitialized = true;
            }
        }

        if (!isSliderInitialized) {
            this.toggleSlide(triggers[0], 0);
        }
    }
});

var AbstractFacet = new Class({
    Implements: [Events, PopupAccessibility],
    isWidthInit: false,

    initialize: function (facet, labels) {
        this.facet = facet;
        this.labels = labels;

        this.triggerEl = facet.getElement('.js_facet_trigger');
        this.targetEl = facet.getElement('.js_facet_target');
        this.hasMore = (facet.getElement('.js_more') != null);

        this._initOptions();

        if(this.hasMore) {
            this.moreButton = facet.getElement('.js_more');
            this.lessButton = facet.getElement('.js_less');
            this.initMoreButtons();
        }
    },

    initMoreButtons: function() {
        this.setLabel(this.moreButton.getElement(".js_more_less_label"), this.labels.showMore);
        this.setLabel(this.lessButton.getElement(".js_more_less_label"), this.labels.showLess);

        this.moreButton.addEvent("click", function() {
            this.toggleHiddenOptions($$(this.facetOptions.facetOptionsSelector));
        }.bind(this));

        this.lessButton.addEvent("click", function() {
            this.toggleHiddenOptions($$(this.facetOptions.facetOptionsSelector));
        }.bind(this));
    },

    setLabel: function(el, label) {
        el.set("text", label);
    },

    toggleHiddenOptions: function(options) {
        options.each(function(optionEl) {
            if(optionEl.hasClass("js_hidden_option")) {
                if(optionEl.hasClass("hidden")) {
                    optionEl.removeClass("hidden");
                } else {
                    optionEl.addClass("hidden");
                }
            }
        }.bind(this));

        if(this.moreButton.hasClass("hidden")){
            this.lessButton.addClass("hidden");
            this.moreButton.removeClass("hidden");
        } else {
            this.moreButton.addClass("hidden");
            this.lessButton.removeClass("hidden");
        }
    },

    _createOptions: function(optionsEl, facetName) {
        var options = new FacetOptions(optionsEl, this.labels, facetName);
        options.addEvent('selectionChanged', function() {
            this._updateState();
        }.bind(this));
        return options;
    },

    _updateState: function() {
        this._updateStateSilently();

        this.fireEvent('selectionChanged', {isAll: this.isAll});
    },

    _updateStateSilently: function() {
        var selectedOptions = this._getSelectedOptions();
        var numberOfSelectedOptions = selectedOptions.length;
        this.isAll = (numberOfSelectedOptions == 0);

        if (this.isWidthInit) {
            this.cropSelectedContent();
        }

        if (typeof this._updateSpecificState == 'function') {
            this._updateSpecificState();
        }
    },

    _withoutAllOption: function(options) {
        if (options.length == 1 && options[0].isAll) return [];
        return options;
    }

});


var Facet = new Class({
    Extends: AbstractFacet,

    initialize: function (facet, labels) {
        this.parent(facet, labels);
    },

    _initOptions: function() {
        var facetName = this.targetEl.id.replace('js_facet_', '');
        this.facetOptions = this._createOptions(this._getFacetOptionsElement(), facetName);
        this._updateState();
        this._addAccessibility();
    },

    _addAccessibility: function () {
        var optionsForAccessibility = this.facetOptions._getOptions();
        var firstLink = optionsForAccessibility[0].getElement("a");
        var lastLink = optionsForAccessibility[optionsForAccessibility.length - 1].getElement("a");
        this.addAccessibility(firstLink, lastLink);
    },

    _getSelectedOptions: function() {
        return this._withoutAllOption(this.facetOptions.getSelectedOptions());
    },

    getSelectedOptions: function() {
        var selected = this._getSelectedOptions();

        var name = this.facetOptions.facetName;

        return [name, selected.map(function(el) {
            return el.getElement('input').value;
        })];
    },

    _getFacetOptionsElement : function() {
        return this.facet.getElement(".js_facet_options");
    },

    _getLabel: function(option) {
        return option.get('text').trim();
    },

    reset: function() {
        this.facetOptions.clear();
        this._updateStateSilently();
    }

});

var FacetOptions = new Class({
    Implements:Events,

    labels: null,

    initialize: function(facetOptions, labels, facetName) {
        this.options = facetOptions;
        this.labels = labels;
        this.facetName = facetName;
        this.isAllState = true;

        this.facetTitleSelector = facetName ? '.js_' + facetName : '.js_facet_title';
        this.facetOptionsSelector = facetName ? '.js_facet_option_' + facetName : '.js_facet_option';
        var title = this.options.getElement(this.facetTitleSelector).get('text').trim();

        var items = this._getOptions();
        items.each(function (item) {
            item.isAll = (item.getElement('input').value == 'all');
            item.isRadio = (item.getElement('.radio') != null);
            item.title = title;

            item.addEvent("valueChange", function(e) {
                if(item.isAll) {
                    this._allItemSelectionHandler(e);
                } else if(item.isRadio){
                    this._radioItemSelectionHandler(e, item);
                } else {
                    this._changeEventHandler(e);
                }

            }.bind(this));
        }.bind(this));

        this._initItems(items);
    },

    clear: function() {
        this._setAllCheckboxValue(true);
        this._clearSimpleOptions();
    },

    getSelectedOptions: function () {
        return this.options.getElements(this.facetOptionsSelector + ".selected");
    },

    _initItems: function (items) {
        this.isAllState = true;
        var allItem;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isAll) {
                allItem = item;
                var checked = item.getElement("input").checked;
                if(checked)
                    this.isAllState = false;
            } else {
                this._initItem(item);
            }
        }
        if (allItem) {
            this._initItem(allItem);
        }


    },

    /**
     * This function will be used as detached, it is mean this will pointed to window.
     * It is initialize general list item: add event handlers, ...
     *
     * @private
     * @param {Element} item - mootools element object
     * */
    _initItem: function (item) {
        item.disabled = false;
        var checkbox = item.getElement("input");
        if (checkbox.checked) {
            item.addClass("selected");
        }

        var _this = this;
        item.addEvents({
            mouseover: function (e) {
                this.addClass("hover")
            },
            mouseout: function (e) {
                this.removeClass("hover")
            },

            click: function (e) {
                e.stop();
                if (item.hasClass('disabled') || (item.isRadio && checkbox.checked)) {
                    return;
                }
                var checked = checkbox.checked;

                if (item.isAll && checked) {
                    return;
                }

                if (_this._setCheckboxValue(item, checkbox, !checked)) {
                    item.fireEvent("valueChange", {selected: !checked, text: item.get("text").trim()});
                }
            }
        });
    },

    /**
     * @private
     * */
    _changeEventHandler: function (e) {
        if (e.selected) {
            this._setAllCheckboxValue(false);
        }

        var selectedItems = this.getSelectedOptions();
        if (selectedItems.length == 0) {
            this._setAllCheckboxValue(true);
        }

        this._fireSelectionChangedEvent();
    },

    _radioItemSelectionHandler: function (e, item) {
        if (!e.selected) {
            return false;
        }

        this._clearRadioOptions();
        this._setCheckboxValue(item, item.getElement('input'), true);
        this._fireSelectionChangedEvent();
    },

    _allItemSelectionHandler: function (e) {
        if (!e.selected) {
            return false;
        }

        this._clearSimpleOptions();

        this._fireSelectionChangedEvent();
    },

    _clearSimpleOptions: function() {
        var items = this.getSelectedOptions();
        items.each(function(item) {
            if (!item.isAll) {
                this._setCheckboxValue(item, item.getElement('input'), false);
            }
        }.bind(this));
    },

    _clearRadioOptions: function() {
        var items = this.getSelectedOptions();
        items.each(function(item) {
            this._setCheckboxValue(item, item.getElement('input'), false);
        }.bind(this));
    },

    _fireSelectionChangedEvent: function () {
        this.fireEvent("selectionChanged");
    },

    _setAllCheckboxValue: function (checked) {
        var allItem;
        this._getOptions().each(function (item) {
            if (item.isAll) {
                allItem = item;
            }
        }.bind(this));

        if (allItem) {
            var checkbox = allItem.getElement('input');
            this._setCheckboxValue(allItem, checkbox, checked);
        }
    },

    _setCheckboxValue : function (item, checkbox, checked) {
        if (checkbox.checked == checked) {
            return false;
        }
        checkbox.checked = checked;

        if(checked) {
            item.addClass("selected");
        } else {
            item.removeClass("selected");
        }

        return true;
    },

    _getOptions: function() {
        return this.options.getElements(this.facetOptionsSelector);
    }

});

var FacetedNavigationRenderer = new Class({

    initialize : function(labels) {
        this.labels = labels;
        this.containerTemplate = Handlebars.compile($('faceted-nav-container').innerHTML);
        var facetItemTemplate = Handlebars.compile($('facet-item').innerHTML);
        var facetTemplate = Handlebars.compile($('facet').innerHTML);

        Handlebars.registerHelper('facetItem', function(context) {
            return facetItemTemplate(context);
        });

        Handlebars.registerHelper('facet', function() {
            return facetTemplate(this);
        });

        Handlebars.registerHelper('eachOption', function(options) {
            var result = "";
            var numberOfOptions = options.length;

            for (var i = 0; i < numberOfOptions; i ++) {
                result = result + facetItemTemplate(options[i]);
            }

            return result;
        });

        Handlebars.registerHelper('forEach', function(collection, block) {
            var result = '';
            var size = collection.length;
            for (var i = 0; i < size; i++) {
                var status = { last: (i == size - 1) };
                var element = collection[i];
                element.status = status;
                result = result + block(element);
            }
            return result;
        });

        Handlebars.registerHelper('forEachIndex', function(start, end, block) {
            var result = '';
            for (var i = 0; i < end; i++) {
                result = result + block({ index: i });
            }
            return result;
        });

        Handlebars.registerHelper('forEachIndexedOption', function(facets, index, block) {
            var result = '';
            var size = facets.length;
            for (var i = 0; i < size; i++) {
                result = result + block({ option: facets[i].options[index], status : {last: (i == size - 1) }});
            }
            return result;
        });

        var _labels = this.labels;
        Handlebars.registerHelper('facetedNavigation', function(facets) {
            var result = '';
            var size = facets.length;
            for (var i = 0; i < size; i++) {
                result = result + facetTemplate(facets[i]);
            }
            return result;
        });
    },

    render : function(data) {
        data.labels = this.labels;
        return this.containerTemplate(data);
    }

});

function initFacetedNav(data, options) {
    var disabled = false;

    function disableEnableOptions() {
        disabled = !disabled;
        data.count = disabled ? 5 : 419;
        var facets = data.facets;
        for (var i = 0; i < facets.length; i++) {
            var facet = facets[i];
            var options = facet[3];
            for (var j = 0; j < options.length; j++) {
                var option = options[j];
                var id = option[0];
                if (id == 'isv' || id == 'nvidia' || id == 'amd' || id == '1000x800') {
                    option[2] = disabled;
                }
            }
        }
    }

    var labels = {clear_all: "Clear all", more: "More", clear: "Clear all", allOption: 'All', selected: 'selected'};

    var facetedNav = new FacetedNavigation(labels, [], options);
    facetedNav.create(data.title, data);

    facetedNav.addEvent('selectionChanged', function(e) {
        disableEnableOptions();
        facetedNav.update(data);
    });
    return facetedNav;
}

function initFacetedNavigation(data, title, placeholderEl) {
    var facetedNav = new FacetedNavigation(
            {showMore: "Show More", showLess: "Show Less"},
            ['white', 'search'],
            {useTree: false, placeholderEl: placeholderEl});

    facetedNav.create("", {title: "Updated title", count: 872, facets: data});
}

//sortableTable.js
hp.SortableTable = new Class({

    getOptions: function() {
        return {
            overCls: false,
            onClick: false,
            sortOn: 0,
            sortOrder: 'ASC',
            filterHide: true,
            filterHideCls: 'hide',
            filterSelectedCls: 'selected'
        };
    },

    /**
     * @param {HTMLElement} table
     * @param {Hash} options
     * */
    initialize: function(table, options) {
        this.setOptions(this.getOptions(), options);
        this.table = table;
        this.tHead = this.table.getElement('thead');
        this.tBody = this.table.getElement('tbody');
        this.tFoot = this.table.getElement('tfoot');
        this.elements = this.tBody.getElements('tr');
        this.filtered = false;

        this.elements.each(function(el) {
            if (this.options.overCls) {
                el.addEvent('mouseover', function() {
                    el.addClass(options.overCls);
                }, this);
                el.addEvent('mouseout', function() {
                    el.removeClass(options.overCls);
                });
            }
            if (this.options.onClick) {
                el.addEvent('click', options.onClick);
            }
        }, this);

        //setup header
        this.tHead.getElements('th').each(function(el, i) {
            if (!el.hasClass('js_sort_col')) {
                return;
            }

            el.addEvent('click', this.sort.bind(this, i));
            el.addEvent('mouseover', function() {
                el.addClass('tableHeaderOver');
            });
            el.addEvent('mouseout', function() {
                el.removeClass('tableHeaderOver');
            });

            var axis = el["data-axis"];
            if (!axis || !SortableTable.DATA_COMPARATORS[axis]) {
                axis = "string"
            }

            el.compare = function(row1, row2) {
                function findData(elem) {
                    var child = elem.getFirst();
                    if (child) {
                        return findData(child);
                    } else {
                        return elem.innerHTML.trim();
                    }
                }

                var var1 = findData(row1.getChildren()[i]);
                var var2 = findData(row2.getChildren()[i]);

                return hp.SortableTable.DATA_COMPARATORS[axis](el.sortOrder, var1, var2);
            };

            if (i == this.options.sortOn) {
                el.fireEvent('click');
            }
        }, this);
    },

    sort: function(index) {
        if (this.options.onStart) {
            this.fireEvent('onStart');
        }

        //
        this.options.sortOn = index;
        var header = this.tHead.getElements('th');
        var el = header[index];

        header.each(function(e, i) {
            if (i != index) {
                e.removeClass('sortedASC');
                e.removeClass('sortedDESC');
            }
        });

        if (el.hasClass('sortedASC')) {
            el.removeClass('sortedASC');
            el.addClass('sortedDESC');
            el.sortOrder = 'DESC';
        } else if (el.hasClass('sortedDESC')) {
            el.removeClass('sortedDESC');
            el.addClass('sortedASC');
            el.sortOrder = 'ASC';
        } else {
            if (this.options.sortOrder == 'ASC') {
                el.addClass('sortedASC');
                el.sortOrder = 'ASC';
            } else if (this.options.sortOrder == 'DESC') {
                el.addClass('sortedDESC');
                el.sortOrder = 'DESC';
            }
        }

        //
        this.elements.sort(el.compare);
        this.elements.injectInside(this.tBody);

        //

        if (this.filtered) {
            this.filteredAltRow();
        } else {
            this.altRow();
        }

        this.elements.getElements('.sorted').each(function(e) {
            e.removeClass('sorted');
        });

        for(var i=0,num=this.elements.length; i<num; i++){
            this.elements[i].getChildren()[index].addClass('sorted')
        }

        //
        if (this.options.onComplete) {
            this.fireEvent('onComplete');
        }
    },

    altRow: function() {
        altRow(this.elements);
    },

    filteredAltRow: function() {
        altRow(this.table.getElements('.' + this.options.filterSelectedCls));
    },

    filter: function(form) {
        var form = $(form);
        var col = 0;
        var key = '';

        form.getChildren().each(function(el) {
            if (el.id == 'column') {
                col = Number(el.value);
            }
            if (el.id == 'keyword') {
                key = el.value.toLowerCase();
            }
            if (el.type == 'reset') {
                el.addEvent('click', this.clearFilter.bind(this));
            }
        }, this);

        if (key) {
            this.elements.each(function(el) {
                if (this.options.filterHide) {
                    el.removeClass('altRow');
                }
                if (el.getChildren()[col].firstChild.data.toLowerCase().indexOf(key) > -1) {
                    el.addClass(this.options.filterSelectedCls);
                    if (this.options.filterHide) {
                        el.removeClass(this.options.filterHideCls);
                    }
                } else {
                    el.removeClass(this.options.filterSelectedCls);
                    if (this.options.filterHide) {
                        el.addClass(this.options.filterHideCls);
                    }
                }
            }, this);
            if (this.options.filterHide) {
                this.filteredAltRow();
                this.filtered = true;
            }
        }
    },

    clearFilter: function() {
        this.elements.each(function(el) {
            el.removeClass(this.options.filterSelectedCls);
            if (this.options.filterHide) {
                el.removeClass(this.options.filterHideCls);
            }
        }, this);
        if (this.options.filterHide) {
            this.altRow();
            this.filtered = false;
        }
    }

});

hp.SortableTable.implement(new Events);
hp.SortableTable.implement(new Options);

hp.SortableTable.DATA_COMPARATORS = {
    number: function (sortOrder, var1, var2) {
        var1 = parseFloat(var1);
        var2 = parseFloat(var2);

        if (sortOrder == 'ASC') {
            return var1 - var2;
        } else {
            return var2 - var1;
        }
    },

    string: function (sortOrder, var1, var2) {
        var1 = var1.toUpperCase();
        var2 = var2.toUpperCase();

        if (var1 == var2) {
            return 0
        }

        if (sortOrder == 'ASC') {
            if (var1 < var2) {
                return -1
            }

        } else {
            if (var1 > var2) {
                return -1
            }

        }
        return 1;
    },

    data: function (sortOrder, var1, var2) {
        function getDate(str) {
            // inner util function to convert 2-digit years to 4
            function fixYear(yr) {
                yr = +yr;
                if (yr < 50) {
                    yr += 2000;
                }
                else if (yr < 100) {
                    yr += 1900;
                }
                return yr;
            }

            var strTime;
            if (str.length > 12) {
                strTime = str.substring(str.lastIndexOf(' ') + 1);
                strTime = strTime.substring(0, 2) + strTime.substr(-2)
            } else {
                strTime = '0000';
            }

            var ret;
            // YYYY-MM-DD
            if (ret = str.match(/(\d{2,4})-(\d{1,2})-(\d{1,2})/)) {
                return (fixYear(ret[1]) * 10000) + (ret[2] * 100) + (+ret[3]) + strTime;
            }
            // DD/MM/YY[YY] or DD-MM-YY[YY]
            if (ret = str.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})/)) {
                return (fixYear(ret[3]) * 10000) + (ret[2] * 100) + (+ret[1]) + strTime;
            }
            return 999999990000; // So non-parsed dates will be last, not first
        }

        var1 = parseFloat(getDate(var1));
        var2 = parseFloat(getDate(var2));

        if (sortOrder == 'ASC') {
            return var1 - var2;
        } else {
            return var2 - var1;
        }
    },

    currency: function (sortOrder, var1, var2) {
        var1 = parseFloat(var1.substr(1).replace(',', ''));
        var2 = parseFloat(var2.substr(1).replace(',', ''));

        if (sortOrder == 'ASC') {
            return var1 - var2;
        } else {
            return var2 - var1;
        }
    }
};

function initSortableTables() {
    $$('.js_sortable_table').each(function (el) {
        new hp.SortableTable(el);
    });
}
// bp/global.js
(function(bp){
   
})(window.bp||(window.bp={}));
(function(BP){
   
})(window.BP||(window.BP={}));

// bp/validations.js
;(function (bp){
   bp.validatedForm = new Class({
      Extends: Form.Validator.Inline,
      
      // default some options
      /*
       * these options can be overriden when creating
       * a new bp.validatedForm.
       * if no overrides are provided, these will be the default
       * for all validated forms.
       */
      options: {
         evaluateFieldsOnBlur  : false,
         evaluateFieldsOnChange: false,
         errorPrefix           : "",
         ignoreHidden          : false,
         autoSubmit            : true,
         autoHideTimeout       : 0
      },
      initialize: function(form,inopts){
         
         var newopts = Object.merge({}
               ,this.options,
               { onElementValidate     : this.cbElementValidate,
                 onElementFail         : this.cbElementFail,
                 onElementPass         : this.cbElementPass,
                 onFormValidate        : this.cbFormValidate
               }
               ,inopts||{}
               );
         
         this.parent(form, newopts);
         
         if (!!this.options.autoHideTimeout && 
               this.options.autoHideTimeout > 0){
            this.addEvent('showAdvice',function(el,advice,classname){
               this.hideAdvice.delay(this.options.autoHideTimeout,this,[classname,el]);
            });
         }
         
         
      }, //initialize
      cbFormValidate: function(passed,form,event){
         if (!!passed && passed === true ) {
            if (this.options.autoSubmit === false ){ 
               if (event) event.preventDefault();
            }
            else {
               form.submit();
            }
         } else {
            if (event)
              event.preventDefault();
            
         }
      }, //cbFormValidate
      cbElementValidate:function(passed, element, validator, is_warn) {
         // Note: This callback will not return hidden fields
      }, // cbElementValidate
      cbElementFail: function(element, validators) {
         // If dropdown or multiselect fail
         if (element.hasClass('js_dd_input hidden') || element.hasClass('js_ms_value hidden')) {

             var validator = validators[0] // Get name of validator
             var erroMessage = this.validators[validator].options.errorMsg() // Get validation errorMsg
             var selectCont = element.getParent().getParent()

             if (!selectCont.hasClass('dd_error')) { // Error does not exist
                 new Element('div', {
                     class: 'validation-advice',
                     'html': erroMessage,
                     'style': 'display: none;'
                 }).inject(selectCont, 'after');
                 var slide = new Fx.Reveal(selectCont.getNext('.validation-advice'))
                 slide.reveal();

                 selectCont.addClass('dd_error')
             }

         }
         // Adds validation to radioset
         // Expects the radioSet is wrapped in a .radioSet class
         if (element.hasClass('hidden') && element.getProperty('type')=='radio') {
             var validator = validators[0] // Get name of validator
             var erroMessage = this.validators[validator].options.errorMsg() // Get validation errorMsg
             var radioSet = element.getParent('.radioSet')

             if (!element.getParent('.rbtn').hasClass('error')) { // If error does not exist
                 radioSet.grab(
                     new Element('div', {
                         class: 'validation-advice',
                         'html': erroMessage,
                         'style': 'display: none;'
                     }), 'bottom');
                 var slide = new Fx.Reveal(radioSet.getElement('.validation-advice'))
                 slide.reveal();

                 radioSet.getElements('.rbtn').each(function(radio){
                     radio.addClass('error')
                 });

             }
         }
         
         // Adds validation to checkbox
         // Expects the Check Box Set is wrapped in a .chbxSet class
         if (element.hasClass('hidden') && element.getProperty('type')=='checkbox') {
             var validator = validators[0] // Get name of validator
             var erroMessage = this.validators[validator].options.errorMsg(element, element.get('type')) 
             var checkBoxSet = element.getParent('.chbxSet')

             if (!element.getParent('.chbx').hasClass('error')) { // If error does not exist
                 checkBoxSet.grab(
                     new Element('div', {
                         class: 'validation-advice m-t-sm',
                         'html': erroMessage,
                         'style': 'display: none;'
                     }), 'bottom');
                 var slide = new Fx.Reveal(checkBoxSet.getElement('.validation-advice'))
                 slide.reveal();

                 checkBoxSet.getElements('.chbx').each(function(chbx){
                     chbx.addClass('error')
                 });

             }
         }

     }, //cbElementFail
     cbElementPass: function(element, validators) {
        
        // Removes validations for select
        if (element.hasClass('js_dd_input hidden') || element.hasClass('js_ms_value hidden')) {

            var selectCont = element.getParent().getParent()
            var validCont = selectCont.getNext('.validation-advice')
            if (validCont) {
                var slide = new Fx.Reveal(validCont)
                slide.dissolve();
            }

            selectCont.removeClass('dd_error')

        }

        // Removes validations for radio
        if (element.hasClass('hidden') && element.getProperty('type')=='radio') {
            var radioSet = element.getParent('.radioSet')
            
            if (radioSet.getElement('.validation-advice')) { // If error exists

                var slide = new Fx.Reveal(radioSet.getElement('.validation-advice'))
                slide.dissolve().chain(function() {
                    radioSet.getElement('.validation-advice').destroy()
                });
                radioSet.getChildren('.rdbut').each(function(radio){
                    radio.removeClass('error')
                });
            }

        }
        // Removes validations for checkbox
        if (element.hasClass('hidden') && element.get('type')=='checkbox') {
            var checkBoxSet = element.getParent('.chbxSet')
            
            if (checkBoxSet.getElement('.validation-advice')) { // If error exists
                var chbxSlide = new Fx.Reveal(checkBoxSet.getElement('.validation-advice'))

                chbxSlide.dissolve().chain(function() {
                    checkBoxSet.getElement('.validation-advice').destroy()
                });
                checkBoxSet.getElements('.chbx').each(function(chbx){
                    chbx.removeClass('error')
                });
            }
        }
     } // cbElementPass
     
     // backward compat
     ,resetForm: function (){
        //validations.reset()
        this.reset();
        
        this.element.getElements('.dd_error').removeClass('dd_error')
        this.element.getElements('.error').removeClass('error')
        this.element.getElements('.validation-advice').destroy()
     }
   });
   
   /* Custom Validator: cannotContain */
   Form.Validator.add('cannotContain', {
       errorMsg: function(element, props) {
           return Form.Validator.getMsg('required');
       },
       test: function(element, props) {

           if (element.value == props.cannotContain) {
               return false;
           }

           return true;
       }
   });
   
   Form.Validator.add('gtzero', {
      errorMsg: function(element, props) {
         // 'FormValidator.gtzero'
         // 'A quantity more than zero needs to be added' 
         return Form.Validator.getMsg('gtzero');
      },
      test: function(element, props) {
         /* run the validator that enforces this element at-least has a number in it.
          * then make sure that number is greater than zero: number  > 0
          */
         //CRT: leave the "+" below -- it enforces an actual "number" type vs "string"
         return (Form.Validator.getValidator('IsEmpty').test(element)) 
                 ? true 
                 : (Form.Validator.getValidator('validate-numeric').test(element) &&
                    +element.get('value') > 0 || false);               
      }
   });
   
   Form.Validator.add('requiredbyother', {
      errorMsg: function(element, props) {
          //'This field needs a value, too'
          return Form.Validator.getMsg('requiredbyother');
      },
      test: function(element, props) {
         var otherelement = props.otherId || null;
         return  ($defined(otherelement) && Form.Validator.getValidator('IsEmpty').test(otherelement))
                  ? true
                  : !Form.Validator.getValidator('IsEmpty').test(element);
      }
   });

   Form.Validator.add('maxval', {
      errorMsg: function(element, props) {
         // ['Value cannot be more than ',props.maxval].join('');
         // 'Value cannot be more than {maxval}'
         if (typeOf(props.maxval) != 'null')
            return Form.Validator.getMsg('maxval').substitute({maxval: props.maxval});
         else return '';
      },
      test: function(element, props) {
         return (Form.Validator.getValidator('IsEmpty').test(element) ||
                 !$defined(props.maxval))
                 ? true
                 : (Form.Validator.getValidator('validate-numeric').test(element) &&
                    +element.get('value') <= +props.maxval || false);
      }
   });

   Form.Validator.add('matchval', {
      errorMsg: function(element, props) {
         //['Value must match ',props.matchval].join('');
         if (typeOf(props.matchval) != 'null')
            return Form.Validator.getMsg('matchval').substitute({matchval: props.matchval});
         else return '';
      },
      test: function(element, props) {
         return (Form.Validator.getValidator('IsEmpty').test(element) ||
                 !$defined(props.matchval))
                 ? true
                 : (Form.Validator.getValidator('validate-numeric').test(element) &&
                    +element.get('value') == +props.matchval || false);
      }
   });
   
   /*
    * convenience methods that allows multiple forms to have
    * the validator features called.
    * forms can be selected by id, element, or class selector
    * options is the default options [overrides] that will be applied
    * to the form(s) selected
    * **
    * typeOf $$('selector') === 'elements'
    * typeOf $('idselector') === 'element'
    * typeOf 'selector' === 'string'
    */
   bp.formvalidator = {
    resetForm : function resetForm (formsel){
       if ($defined(formsel)) {
          var frmlist = [];
          var objlist = null;
          
          // string: 'thisID' || '.thisselector' 
          if (typeOf(formsel) === 'string') {
            objlist  = $(formsel) || $$(formsel);
          } else {
            objlist = formsel;
          }
          
          if (typeOf(objlist) === 'element')
             frmlist.push(objlist);
          else
             frmlist = objlist.flatten();
          
          frmlist.each(function(frm,idx){
             var validator = frm.get('validator');
             if (validator)
                validator.resetForm();
                //validator.reset();
          });
       }
    },
    add : function add (formsel,options){
      if ($defined(formsel)){
         var frmlist = [];
         var objlist = null;
         
         // string: 'thisID' || '.thisselector' 
         if (typeOf(formsel) === 'string') {
           objlist  = $(formsel) || $$(formsel);
         } else {
           objlist = formsel;
         }
         
         if (typeOf(objlist) === 'element')
            frmlist.push(objlist);
         else
            frmlist = objlist.flatten();
         
         frmlist.each(function(frm,idx){
            var formcls = new bp.validatedForm(frm,options);
         });
      }
    }//add
  }
   
   
})(window.bp || (window.bp = {}));

// bp: hp.ProgressiveDisclosure.js
hp.ProgressiveDisclosure.implement({
   //see: utilities-core-hpe.js
   removeItem : function(entry) {
      //entry: str, obj, or int?
      // int: items[int].remove();
      // str: items.some(contains($(str))).remove();
      // obj: items.some(contains(obj)).remove()
      //    instanceOf(entry,hp.ProgressiveDisclosureItem)
      //console.log('remove item with: ', entry,typeOf(entry));
      
      var objremove;
      var idxremove;
      
      objremove = (typeof entry === 'number')? objremove = this.items[entry].item : entry;
      
      this.items.some(function(itm,idx){
         var found = Object.contains(itm,$(objremove)) || false;
         if (!!found) {
            itm.remove();
            idxremove = idx;
         }
         return found;
      });
      
      if (idxremove >=0)
         this.items.splice(idxremove,1);
         
      // check empty, remove master element
      this.removeContainer(); 
   },
   removeAll : function() {
      var self = this;
      this.items.each(function(itm,idx,ary) {
         itm.remove();
         ary[idx] = null;
      });
      this.items = this.items.clean();
      // remove master element when all items are gone 
      this.removeContainer(true);
      return null; 
   },
   removeContainer: function (force){
      //remove the wrapping node
      if ($defined(this.controlEl)){
         var destroy = ($defined(force))? force : (this.items.clean().length <= 0) ;
         
         //console.log('items: ',this.items.clean().length);
         if (destroy) this.controlEl.destroy();
      }
      // see: Element.destroy()   
   }  
});

hp.ProgressiveDisclosureItem.implement({
   remove : function() {
      //find all 'contents' - remove
      // remove self
      if (!!this.content) {
         this.content.destroy();
         delete this.content;
      }
      //this.toggler.destroy();
      this.item.destroy();
      delete this.item;
   }
});
