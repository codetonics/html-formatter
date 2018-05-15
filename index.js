const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

const jsonLd = require('./json-ld');
const microData = require('./microdata');

async function getContent({
    html
}) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const dataFromJsonLd = await jsonLd.getData(document);
    const dataFromMicroData = await microData.getData(document);
    return dataFromMicroData;
}

module.exports = {
    getContent
}

const html = `
<!DOCTYPE html><html lang="en-US" prefix="og: http://ogp.me/ns#" class="html_stretched responsive av-preloader-enabled av-default-lightbox  html_header_tophtml_logo_left html_main_nav_header html_menu_right html_slim html_header_sticky html_header_shrinking html_mobile_menu_phone html_header_searchicon html_content_align_center html_header_unstick_top_disabled html_header_stretch_disabled html_minimal_header html_minimal_header_shadow html_elegant-blog html_av-overlay-side html_av-overlay-side-minimal html_av-submenu-noclone html_entry_id_5039 av-no-preview html_text_menu_active  avia_desktop  js_active  avia_transform  avia_transform3d  avia_transform  avia_transform3d  avia-webkit avia-webkit-67 avia-chrome avia-chrome-67 avia-mac"><head>
<meta charset="UTF-8">


<!-- mobile setting -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- Scripts/CSS and wp_head hook -->
<title>Gulaabo Lyrics - Shaandaar - LyricsNOW</title>

<!-- This site is optimized with the Yoast SEO plugin v7.4.2 - https://yoast.com/wordpress/plugins/seo/ -->
<link rel="canonical" href="http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="Gulaabo Lyrics - Shaandaar - LyricsNOW">
<meta property="og:description" content="Hey surma lagaa ke Latein uljha ke Haath jiya pe mal-mal Tere chhajje ke niche khade hain Phans gaye jaise dal-dalTere chhajje ke niche hi khade hain Phans gaye jaise dal-dal Gulabo.. zara itr gira do Gulabo.. zara itr gira do Hey, naino ka nishana mujh pe laga ke Golichalai dhaayein dhaayein Jhootha …">
<meta property="og:url" content="http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/">
<meta property="og:site_name" content="LyricsNOW">
<meta property="article:publisher" content="https://www.facebook.com/LyricsNOW-2030422017180706/?ref=bookmarks">
<meta property="article:tag" content="Amit Trivedi">
<meta property="article:tag" content="Anusha Mani">
<meta property="article:tag" content="Anvita Dutt">
<meta property="article:tag" content="Shaandaar">
<meta property="article:tag" content="Vishal Dadlani">
<meta property="article:section" content="Shaandaar">
<meta property="article:published_time" content="2018-05-04T22:57:09+05:30">
<meta name="twitter:card" content="summary">
<meta name="twitter:description" content="Hey surma lagaa ke Latein uljha ke Haath jiya pe mal-mal Tere chhajje ke niche khade hain Phans gaye jaise dal-dal Tere chhajje ke niche hi khade hain Phans gaye jaise dal-dal Gulabo.. zara itr gira do Gulabo.. zara itr gira do Hey, naino ka nishana mujh pe laga ke Goli chalai dhaayein dhaayein Jhootha […]">
<meta name="twitter:title" content="Gulaabo Lyrics - Shaandaar - LyricsNOW">
<div class="fit-vids-style" id="fit-vids-style" style="display: none;">­<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style></div><script src="https://pagead2.googlesyndication.com/pagead/js/r20180430/r20180504/osd.js"></script><script type="text/javascript" id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflj3RSGk/www-widgetapi.js" async=""></script><script src="https://pagead2.googlesyndication.com/pub-config/r20160913/ca-pub-2515612602855586.js"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"Organization","url":"http:\/\/www.lyricsnow.in\/","sameAs":["https:\/\/www.facebook.com\/LyricsNOW-2030422017180706\/?ref=bookmarks"],"@id":"http:\/\/www.lyricsnow.in\/#organization","name":"LyricsNOW","logo":"http:\/\/www.lyricsnow.in\/wp-content\/uploads\/2018\/04\/LyricsNOW.png"}</script>
<!-- / Yoast SEO plugin. -->

<link rel="dns-prefetch" href="//s.w.org">
<link rel="alternate" type="application/rss+xml" title="LyricsNOW » Feed" href="http://www.lyricsnow.in/feed/">
<link rel="alternate" type="application/rss+xml" title="LyricsNOW » Comments Feed" href="http://www.lyricsnow.in/comments/feed/">
<link rel="alternate" type="application/rss+xml" title="LyricsNOW » Gulaabo Lyrics Comments Feed" href="http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/feed/">

<!-- google webfont font replacement -->
<link rel="stylesheet" id="avia-google-webfont" href="//fonts.googleapis.com/css?family=Open+Sans:400,600" type="text/css" media="all">
                <script type="text/javascript">
                        window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.lyricsnow.in\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.5"}};
                        !function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56692,8205,9792,65039],[55357,56692,8203,9792,65039]),!b}return!1}function f(a){varc=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
                </script><script src="http://www.lyricsnow.in/wp-includes/js/wp-emoji-release.min.js?ver=4.9.5" type="text/javascript" defer=""></script>
                <style type="text/css">
img.wp-smiley,
img.emoji {
        display: inline !important;
        border: none !important;
        box-shadow: none !important;
        height: 1em !important;
        width: 1em !important;
        margin: 0 .07em !important;
        vertical-align: -0.1em !important;
        background: none !important;
        padding: 0 !important;
}
</style>
<link rel="stylesheet" id="front-css-yuzo_related_post-css" href="http://www.lyricsnow.in/wp-content/plugins/yuzo-related-post/assets/css/style.css?ver=5.12.74" type="text/css" media="all">
<link rel="stylesheet" id="avia-grid-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/grid.css?ver=4.1" type="text/css" media="all">
<link rel="stylesheet" id="avia-base-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/base.css?ver=4.1" type="text/css" media="all">
<link rel="stylesheet" id="avia-layout-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/layout.css?ver=4.1" type="text/css" media="all">
<link rel="stylesheet" id="avia-scs-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/shortcodes.css?ver=4.1" type="text/css" media="all">
<link rel="stylesheet" id="avia-popup-css-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/aviapopup/magnific-popup.css?ver=4.1" type="text/css" media="screen">
<link rel="stylesheet" id="avia-media-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/mediaelement/skin-1/mediaelementplayer.css?ver=4.1" type="text/css" media="screen">
<link rel="stylesheet" id="avia-print-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/print.css?ver=4.1" type="text/css" media="print">
<link rel="stylesheet" id="avia-dynamic-css" href="http://www.lyricsnow.in/wp-content/uploads/dynamic_avia/enfold.css?ver=5aed3758d85da" type="text/css" media="all">
<link rel="stylesheet" id="avia-custom-css" href="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/css/custom.css?ver=4.1" type="text/css" media="all">
<link rel="stylesheet" id="__EPYT__style-css" href="http://www.lyricsnow.in/wp-content/plugins/youtube-embed-plus/styles/ytprefs.min.css?ver=4.9.5" type="text/css" media="all">
<style id="__EPYT__style-inline-css" type="text/css">

                .epyt-gallery-thumb {
                        width: 33.333%;
                }

</style>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/jquery/jquery.js?ver=1.12.4"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/avia-compat.js?ver=4.1"></script>
<script type="text/javascript">
var mejsL10n = {"language":"en","strings":{"mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen-off":"Turn off Fullscreen","mejs.fullscreen-on":"Go Fullscreen","mejs.download-video":"Download Video","mejs.fullscreen":"Fullscreen","mejs.time-jump-forward":["Jump forward 1 second","Jump forward %1 seconds"],"mejs.loop":"Toggle Loop","mejs.play":"Play","mejs.pause":"Pause","mejs.close":"Close","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.time-skip-back":["Skip back 1 second","Skip back %1 seconds"],"mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.mute-toggle":"Mute Toggle","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.ad-skip":"Skip ad","mejs.ad-skip-info":["Skip in 1 second","Skip in %1 seconds"],"mejs.source-chooser":"Source Chooser","mejs.stop":"Stop","mejs.speed-rate":"Speed Rate","mejs.live-broadcast":"Live Broadcast","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.6-78496d1"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=4.9.5"></script>
<script type="text/javascript">
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type="text/javascript">
/* <![CDATA[ */
var _EPYT_ = {"ajaxurl":"http:\/\/www.lyricsnow.in\/wp-admin\/admin-ajax.php","security":"d31abcb388","gallery_scrolloffset":"20","eppathtoscripts":"http:\/\/www.lyricsnow.in\/wp-content\/plugins\/youtube-embed-plus\/scripts\/","epresponsiveselector":"[\"iframe[src*='youtube.com']\",\"iframe[src*='youtube-nocookie.com']\",\"iframe[data-ep-src*='youtube.com']\",\"iframe[data-ep-src*='youtube-nocookie.com']\",\"iframe[data-ep-gallerysrc*='youtube.com']\"]","epdovol":"1","version":"11.8.6.1","evselector":"iframe.__youtube_prefs__[src], iframe[src*=\"youtube.com\/embed\/\"], iframe[src*=\"youtube-nocookie.com\/embed\/\"]","ajax_compat":"","stopMobileBuffer":"1"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/youtube-embed-plus/scripts/ytprefs.min.js?ver=4.9.5"></script><script src="//www.youtube.com/iframe_api" type="text/javascript"></script>
<link rel="https://api.w.org/" href="http://www.lyricsnow.in/wp-json/">
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.lyricsnow.in/xmlrpc.php?rsd">
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.lyricsnow.in/wp-includes/wlwmanifest.xml">
<meta name="generator" content="WordPress 4.9.5">
<link rel="shortlink" href="http://www.lyricsnow.in/?p=5039">
<link rel="alternate" type="application/json+oembed" href="http://www.lyricsnow.in/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.lyricsnow.in%2Fmovies%2Fshaandaar%2Fgulaabo-lyrics%2F">
<link rel="alternate" type="text/xml+oembed" href="http://www.lyricsnow.in/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.lyricsnow.in%2Fmovies%2Fshaandaar%2Fgulaabo-lyrics%2F&amp;format=xml">
<!-- Markup (JSON-LD) structured in schema.org ver.4.2.1 START -->
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "http://www.lyricsnow.in/movies/",
                "name": "Movies"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id": "http://www.lyricsnow.in/movies/shaandaar/",
                "name": "Shaandaar"
            }
        }
    ]
}
</script>
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/"
    },
    "headline": "Gulaabo Lyrics",
    "datePublished": "2018-05-04T22:57:09+0530",
    "dateModified": "2018-05-04T22:57:09+0000",
    "author": {
        "@type": "Person",
        "name": "Nikita"
    },
    "description": "Hey surma lagaa keLatein uljha keHaath jiya pe mal-malTere chhajje ke niche khade hainPhans gaye jaise dal-dal",
    "publisher": {
        "@type": "Organization",
        "name": "LyricsNOW"
    }
}
</script>
<!-- Markup (JSON-LD) structured in schema.org END -->
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="alternate" type="application/rss+xml" title="LyricsNOW RSS2 Feed" href="http://www.lyricsnow.in/feed/">
<link rel="pingback" href="http://www.lyricsnow.in/xmlrpc.php">
<!--[if lt IE 9]><script src="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/html5shiv.js"></script><![endif]-->
<link rel="icon" href="http://www.lyricsnow.in/wp-content/uploads/2018/04/LyricsNOW.png" type="image/png">

<!-- BEGIN GADWP v5.3.2 Universal Analytics - https://deconf.com/google-analytics-dashboard-wordpress/ -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-117778627-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- END GADWP Universal Analytics -->
                <style type="text/css" id="wp-custom-css">
                        .avia-content-slider .slide-entry-excerpt{
        display: none;
}

.html_elegant-blog #top .post-entry .post-meta-infos, .html_elegant-blog .avia-content-slider .slide-meta{
        display: none;
}

.style-3 .yuzo-list:before{display:none;}

.style-3 .yuzo-list a{padding-left:0;}

.yuzo_related_post .relatedthumb{
        padding: 5px 0!important;
}               </style>


<!--
Debugging Info for Theme support:

Theme: Enfold
Version: 6.1.1
Installed: Enfold/enfold
AviaFramework Version: 4.6
AviaBuilder Version: 0.9.5
ML:128-PU:37-PLA:14
WP:4.9.5
Updates: disabled
-->

<style type="text/css">
@font-face {font-family: 'entypo-fontello'; font-weight: normal; font-style: normal;
src: url('http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/config-templatebuilder/avia-template-builder/assets/fonts/entypo-fontello.eot?v=3');
src: url('http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/config-templatebuilder/avia-template-builder/assets/fonts/entypo-fontello.eot?v=3#iefix')format('embedded-opentype'),
url('http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/config-templatebuilder/avia-template-builder/assets/fonts/entypo-fontello.woff?v=3') format('woff'),
url('http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/config-templatebuilder/avia-template-builder/assets/fonts/entypo-fontello.ttf?v=3') format('truetype'),
url('http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/config-templatebuilder/avia-template-builder/assets/fonts/entypo-fontello.svg?v=3#entypo-fontello') format('svg');
} #top .avia-font-entypo-fontello, body .avia-font-entypo-fontello, html body [data-av_iconfont='entypo-fontello']:before{ font-family: 'entypo-fontello'; }
</style>
<script async="" type="text/javascript" src="https://lyricsnow.disqus.com/count.js"></script><script type="text/javascript" async="" src="https://lyricsnow.disqus.com/embed.js"></script><link rel="preload" href="https://adservice.google.co.in/adsid/integrator.js?domain=www.lyricsnow.in" as="script"><script type="text/javascript" src="https://adservice.google.co.in/adsid/integrator.js?domain=www.lyricsnow.in"></script><link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=www.lyricsnow.in" as="script"><script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=www.lyricsnow.in"></script><script type="text/javascript" src="//html5.onl/nav.php?0.9722567074659476"></script><link rel="preload" as="style" href="https://c.disquscdn.com/next/embed/styles/lounge.188f59a1df04c219bf32da7f76545092.css"><link rel="preload" as="script" href="https://c.disquscdn.com/next/embed/common.bundle.037f55c32651d22255e90738c195e946.js"><link rel="preload" as="script" href="https://c.disquscdn.com/next/embed/lounge.bundle.2fd6d206c06cd51584499fe8219aa635.js"><link rel="preload" as="script" href="https://disqus.com/next/config.js"><script src="https://c.disquscdn.com/next/embed/alfalfa.4a5fcca1fe50a757044dfd331b660625.js" async="" charset="UTF-8"></script><script src="//lyricsnow.disqus.com/count-data.js?1=5039%20http%3A%2F%2Fwww.lyricsnow.in%2F%3Fp%3D5039"></script></head>




<body id="top" class="post-template-default single single-post postid-5039 single-format-standard stretched open_sans " itemscope="itemscope" itemtype="https://schema.org/WebPage">

        <div class="av-siteloader-wrap av-transition-enabled" style="transition: none; opacity: 0; transform: translateZ(0px);"><div class="av-siteloader-inner"><div class="av-siteloader-cell"><div class="av-siteloader"><div class="av-siteloader-extra"></div></div></div></div></div>
        <div id="wrap_all">


<header id="header" class="all_colors header_color light_bg_color av_header_top av_logo_left av_main_nav_header av_menu_right av_slim av_header_sticky av_header_shrinking av_header_stretch_disabled av_mobile_menu_phone av_header_searchicon av_header_unstick_top_disabled av_minimal_header av_minimal_header_shadow av_bottom_nav_disabled av_alternate_logo_active av_header_border_disabled" role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">

                <div id="header_main" class="container_wrap container_wrap_logo">

        <div class="container av-logo-container" style="height: 90px; line-height: 90px;"><div class="inner-container"><span class="logo"><a href="http://www.lyricsnow.in/" style="max-height: 90px;"><img height="100" width="300" src="http://www.lyricsnow.in/wp-content/uploads/2018/04/LyricsNOW.png" alt="LyricsNOW" style="max-height: 90px;"></a></span><nav class="main_menu" data-selectname="Select a page" role="navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"><div class="avia-menu av-main-nav-wrap"><ul id="avia-menu" class="menu av-main-nav"><li id="menu-item-search" class="noMobile menu-item menu-item-search-dropdown menu-item-avia-special">
                                                        <a href="?s=" data-avia-search-tooltip="

<form action=&quot;http://www.lyricsnow.in/&quot; id=&quot;searchform&quot; method=&quot;get&quot; class=&quot;&quot;>
        <div>
                <input type=&quot;submit&quot; value=&quot;&quot; id=&quot;searchsubmit&quot; class=&quot;button avia-font-entypo-fontello&quot; />
                <input type=&quot;text&quot; id=&quot;s&quot; name=&quot;s&quot; value=&quot;&quot; placeholder='Search' />
                        </div>
</form>" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" style="height: 90px; line-height: 90px;"><span class="avia_hidden_link_text">Search</span></a>
                                   </li><li class="av-burger-menu-main menu-item-avia-special av-small-burger-icon">
                                        <a href="#" style="height: 90px; line-height: 90px;">
                                                        <span class="av-hamburger av-hamburger--spin av-js-hamburger">
                                                <span class="av-hamburger-box">
                                                          <span class="av-hamburger-inner"></span>
                                                          <strong>Menu</strong>
                                                </span>
                                                        </span>
                                                </a>
                                   </li></ul></div></nav></div> </div>
                <!-- end container_wrap-->
                </div>

                <div class="header_bg"></div>

<!-- end header -->
</header>

        <div id="main" class="all_colors" data-scroll-offset="88">

        <div class="stretch_full container_wrap alternate_color dark_bg_color empty_title  title_container"><div class="container"><div class="breadcrumb breadcrumbs avia-breadcrumbs"><div class="breadcrumb-trail" xmlns:v="http://rdf.data-vocabulary.org/#"><span class="trail-before"><span class="breadcrumb-title">You are here:</span></span> <a href="http://www.lyricsnow.in" title="LyricsNOW" rel="home" class="trail-begin">Home</a> <span class="sep">/</span> <span><a rel="v:url" property="v:title" href="http://www.lyricsnow.in/movies/shaandaar/">Shaandaar</a></span> <span class="sep">/</span> <span class="trail-end">Gulaabo Lyrics</span></div></div></div></div>
                <div class="container_wrap container_wrap_first main_color sidebar_right">

                        <div class="container template-blog template-single-blog ">

                                <main class="content units av-content-small alpha  av-blog-meta-author-disabled av-blog-meta-date-disabled av-blog-meta-html-info-disabled" role="main" itemscope="itemscope" itemtype="https://schema.org/Blog">

                    <article class="post-entry post-entry-type-standard post-entry-5039 post-loop-1 post-parity-odd post-entry-last single-big  post-5039 post type-post status-publish format-standard hentry category-shaandaar tag-amit-trivedi tag-anusha-mani tag-anvita-dutt tag-shaandaar tag-vishal-dadlani" itemscope="itemscope" itemtype="https://schema.org/BlogPosting" itemprop="blogPost"><div class="blog-meta"></div><div class="entry-content-wrapper clearfix standard-content"><header class="entry-content-header"><span class="blog-categories minor-meta"><a href="http://www.lyricsnow.in/movies/shaandaar/" rel="tag">Shaandaar</a> </span><h1 class="post-title entry-title" itemprop="headline">     <a href="http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/" rel="bookmark" title="Permanent Link: Gulaabo Lyrics">Gulaabo Lyrics                     <span class="post-format-icon minor-meta"></span>       </a></h1><span class="av-vertical-delimiter"></span><div class="entry-content" itemprop="text">
<!-- Quick Adsense WordPress Plugin: http://quickadsense.com/ -->
<div style="float: none; margin:10px 0 10px 0; text-align:center;">
<script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display: block; text-align: center; height: 116px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2515612602855586" data-ad-slot="3707009322" data-adsbygoogle-status="done"><ins id="aswift_0_expand" style="display:inline-table;border:none;height:116px;margin:0;padding:0;position:relative;visibility:visible;width:461px;background-color:transparent;"><ins id="aswift_0_anchor" style="display:block;border:none;height:116px;margin:0;padding:0;position:relative;visibility:visible;width:461px;background-color:transparent;"><iframe width="461" height="116" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_0" name="aswift_0" style="left:0;position:absolute;top:0;width:461px;height:116px;"></iframe></ins></ins></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
<p>Hey surma lagaa ke<br>
Latein uljha ke<br>
Haath jiya pe mal-mal<br>
Tere chhajje ke niche khade hain<br>
Phans gaye jaise dal-dal</p>
<p>Tere chhajje ke niche hi khade hain<br>
Phans gaye jaise dal-dal<br>
Gulabo.. zara itr gira do<br>
Gulabo.. zara itr gira do</p>
<p>Hey, naino ka nishana mujh pe laga ke<br>
Goli chalai dhaayein dhaayein<br>
Jhootha fasaana mujhko suna ke<br>
Jaal bichhaya why? why?</p>
<p>Jhootha fasaana mujhko suna ke<br>
Jaal bichhaya why? why?<br>
Gulabo.. zara itr gira do<br>
Gulabo.. zara itr gira do</p>
<p>Tauba tauba tu to mitha sa murabba<br>
Tauba tauba tu to shehad ka dabba<br>
Bhen ki takki oye<br>
Wow so lucky oye<br>
Sab ki dain aur tu bole dhabba</p>
<p>Cocktail menu me bas tera naam – in the bar<br>
Poster chhap gaye nikle – ishtehaar<br>
Abki baar – oye<br>
Teri sarkaar – oye<br>
Chipak chipak lets kiss you pooh in the car</p>
<p>Oye….</p>
<p>Chal nawabi, haal sharabi<br>
Thutt nashe mein, choor choor yun hi<br>
Honth lag ja, ghatt se pi loon haan..<br>
Oye patakha, kar dhamaka<br>
Bekhabar yoon ghoom ghoom rahi<br>
Mere sang tu jal zara si haan</p>
<p>Gulaabo…. zara gandh phaila do<br>
Gulaabo.. zara gandh phaila do</p>
<p>Surma lagaa ke<br>
Latein uljha ke<br>
Haath jiya pe mal-mal<br>
Tere chhajje ke niche hi khade hain<br>
Phans gaye jaise dal-dal</p>
<p>O tere chhajje ke niche hi khade hain<br>
Phans gaye jaise dal-dal<br>
Gulaabo.. zara gandh phaila do (oye…)<br>
Gulaabo.. zara gandh phaila do (oye…)</p>
<p>&nbsp;</p>
<p><strong>Singers</strong>: Vishal Dadlani, Anusha Mani<br>
<strong>Music</strong>: Amit Trivedi<br>
<strong>Lyrics</strong>: Anvita Dutt</p>

<!-- Quick Adsense WordPress Plugin: http://quickadsense.com/ -->
<div style="float: none; margin:10px 0 10px 0; text-align:center;">
<script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display: block; text-align: center; height: 0px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2515612602855586" data-ad-slot="3707009322" data-adsbygoogle-status="done"><ins id="aswift_1_expand" style="display: inline-table; border: none; height: 0px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 461px; background-color: transparent;"><ins id="aswift_1_anchor" style="display: block; border: none; height: 0px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 461px; background-color: transparent; overflow: hidden; opacity: 0;"><iframe width="461" height="116" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;width:461px;height:116px;"></iframe></ins></ins></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div><!-- Begin Yuzo --><div class="yuzo_related_post style-3" data-version="5.12.74"><!-- with result --><div class="yuzo_clearfixed yuzo__title"><h3>Related Post</h3></div><div class="yuzo_wraps">
                                        <div class="relatedthumb yuzo-list">
                                                <a class="link-list yuzo__text--title" href="http://www.lyricsnow.in/movies/shaandaar/neend-na-mujhko-aaye-lyrics/" style="font-size:13px;;line-height:21px;"> Neend Na Mujhko Aaye Lyrics </a>

                                        </div>
                                        <div class="relatedthumb yuzo-list">
                                                <a class="link-list yuzo__text--title" href="http://www.lyricsnow.in/movies/shaandaar/raitaa-phailgaya-lyrics/" style="font-size:13px;;line-height:21px;"> Raitaa Phailgaya Lyrics </a>

                                        </div>
                                        <div class="relatedthumb yuzo-list">
                                                <a class="link-list yuzo__text--title" href="http://www.lyricsnow.in/movies/shaandaar/senti-wali-mental-lyrics/" style="font-size:13px;;line-height:21px;"> Senti Wali Mental Lyrics </a>

                                        </div>
                                        <div class="relatedthumb yuzo-list">
                                                <a class="link-list yuzo__text--title" href="http://www.lyricsnow.in/movies/shaandaar/nazdeekiyaan-lyrics/"style="font-size:13px;;line-height:21px;"> Nazdeekiyaan Lyrics </a>

                                        </div>
                                        <div class="relatedthumb yuzo-list">
                                                <a class="link-list yuzo__text--title" href="http://www.lyricsnow.in/movies/shaandaar/shaam-shaandaar-lyrics/" style="font-size:13px;;line-height:21px;"> Shaam Shaandaar Lyrics </a>

                                        </div></div> <!-- end wrap -->
</div> <style>
                                                        .yuzo_related_post .relatedthumb{background: !important; -webkit-transition: background 0.2s linear; -moz-transition: background 0.2s linear; -o-transition: background 0.2s linear; transition: background 0.2s linear;;color:!important;}
                                                        .yuzo_related_post .relatedthumb:hover{background:#fcfcf4 !important; -webkit-transition: background 0.2s linear; -moz-transition: background 0.2s linear; -o-transition: background 0.2s linear; transition: background 0.2s linear;;color:!important;}
                                                        .yuzo_related_post .yuzo_text, .yuzo_related_post .yuzo_views_post {color:!important;}
                                                        .yuzo_related_post .relatedthumb:hover .yuzo_text, .yuzo_related_post:hover .yuzo_views_post {color:!important;}
                                                        .yuzo_related_post .relatedthumb a{color:!important;}
                                                        .yuzo_related_post .relatedthumb a:hover{color:!important;}
                                                        .yuzo_related_post .relatedthumb:hover a{ color:!important;}
                                                        .yuzo_related_post .relatedthumb{  margin: 0px  0px  0px  0px;   padding: 5px  5px  5px  5px;  }
                                                        </style>  <!-- End Yuzo :) --></div><span class="post-meta-infos"><time class="date-container minor-meta updated">May 4, 2018</time><span class="text-sep text-sep-date">/</span><span class="comment-container minor-meta"><a href="http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/#disqus_thread" class="comments-link" data-disqus-identifier="5039 http://www.lyricsnow.in/?p=5039">0 Comments</a></span><spanclass="text-sep text-sep-comment">/</span><span class="blog-author minor-meta">by <span class="entry-author-link"><span class="vcard author"><span class="fn"><a href="http://www.lyricsnow.in/author/jaynik/" title="Posts by Nikita" rel="author">Nikita</a></span></span></span></span></span></header><footer class="entry-footer"><span class="blog-tags minor-meta"><strong>Tags:</strong><span> <a href="http://www.lyricsnow.in/tag/amit-trivedi/" rel="tag">Amit Trivedi</a>, <a href="http://www.lyricsnow.in/tag/anusha-mani/" rel="tag">Anusha Mani</a>, <a href="http://www.lyricsnow.in/tag/anvita-dutt/" rel="tag">Anvita Dutt</a>, <a href="http://www.lyricsnow.in/tag/shaandaar/" rel="tag">Shaandaar</a>, <a href="http://www.lyricsnow.in/tag/vishal-dadlani/" rel="tag">Vishal Dadlani</a></span></span><div class="av-share-box"><h5 class="av-share-link-description">Share this entry</h5><ul class="av-share-box-list noLightbox"><li class="av-share-link av-social-link-facebook"><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/&amp;t=Gulaabo%20Lyrics" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title="" data-avia-related-tooltip="Share on Facebook"><spanclass="avia_hidden_link_text">Share on Facebook</span></a></li><li class="av-share-link av-social-link-twitter"><a target="_blank" href="https://twitter.com/share?text=Gulaabo%20Lyrics&amp;url=http://www.lyricsnow.in/?p=5039" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title="" data-avia-related-tooltip="Share on Twitter"><span class="avia_hidden_link_text">Share on Twitter</span></a></li><li class="av-share-link av-social-link-gplus"><a target="_blank" href="https://plus.google.com/share?url=http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title="" data-avia-related-tooltip="Share on Google+"><span class="avia_hidden_link_text">Share on Google+</span></a></li><liclass="av-share-link av-social-link-pinterest"><a target="_blank" href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.lyricsnow.in%2Fmovies%2Fshaandaar%2Fgulaabo-lyrics%2F&amp;description=Gulaabo%20Lyrics&amp;media=" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title=""data-avia-related-tooltip="Share on Pinterest"><span class="avia_hidden_link_text">Share on Pinterest</span></a></li><li class="av-share-link av-social-link-reddit"><a target="_blank" href="http://reddit.com/submit?url=http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/&amp;title=Gulaabo%20Lyrics" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title="" data-avia-related-tooltip="Share on Reddit"><span class="avia_hidden_link_text">Share on Reddit</span></a></li><li class="av-share-link av-social-link-mail"><a href="mailto:?subject=Gulaabo%20Lyrics&amp;body=http://www.lyricsnow.in/movies/shaandaar/gulaabo-lyrics/" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello" title="" data-avia-related-tooltip="Share by Mail"><span class="avia_hidden_link_text">Share by Mail</span></a></li></ul></div></footer><div class="post_delimiter"></div></div><div class="post_author_timeline"></div><span class="hidden">
                        <span class="av-structured-data" itemscope="itemscope" itemtype="https://schema.org/ImageObject" itemprop="image">
                                           <span itemprop="url">http://www.lyricsnow.in/wp-content/uploads/2018/04/LyricsNOW.png</span>
                                           <span itemprop="height">0</span>
                                           <span itemprop="width">0</span>
                                  </span><span class="av-structured-data" itemprop="publisher" itemtype="https://schema.org/Organization" itemscope="itemscope">
                                <span itemprop="name">Nikita</span>
                                <span itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                                   <span itemprop="url">http://www.lyricsnow.in/wp-content/uploads/2018/04/LyricsNOW.png</span>
                                 </span>
                          </span><span class="av-structured-data" itemprop="author" itemscope="itemscope" itemtype="https://schema.org/Person"><span itemprop="name">Nikita</span></span><span class="av-structured-data" itemprop="datePublished" datetime="2018-05-04T22:57:09+00:00">2018-05-04 22:57:09</span><spanclass="av-structured-data" itemprop="dateModified" itemtype="https://schema.org/dateModified">2018-05-04 22:57:09</span><span class="av-structured-data" itemprop="mainEntityOfPage" itemtype="https://schema.org/mainEntityOfPage"><span itemprop="name">Gulaabo Lyrics</span></span></span></article><div class="single-big"></div>
<div id="disqus_thread"><iframe id="dsq-app63" name="dsq-app63" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&amp;f=lyricsnow&amp;t_i=5039%20http%3A%2F%2Fwww.lyricsnow.in%2F%3Fp%3D5039&amp;t_u=http%3A%2F%2Fwww.lyricsnow.in%2Fmovies%2Fshaandaar%2Fgulaabo-lyrics%2F&amp;t_e=Gulaabo%20Lyrics&amp;t_d=Gulaabo%20Lyrics%20-%20Shaandaar%20-%20LyricsNOW&amp;t_t=Gulaabo%20Lyrics&amp;s_o=default#version=b4ade52be270eec89bb1fc840f280424" style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 403px !important;" horizontalscrolling="no" verticalscrolling="no"></iframe></div>

                                <!--end content-->
                                </main>

                                <aside class="sidebar sidebar_right smartphones_sidebar_active alpha units" role="complementary" itemscope="itemscope" itemtype="https://schema.org/WPSideBar"><div class="inner_sidebar extralight-border">
<!-- Quick Adsense Wordpress Plugin: http://quickadsense.com/ -->
<section id="adswidget2-quick-adsense-2" class="widget clearfix widget_adswidget2-quick-adsense"><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2515612602855586" data-ad-slot="3707009322" data-adsbygoogle-status="done"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><span class="seperator extralight-border"></span></section></div></aside>

                        </div><!--end container-->

                </div><!-- close default .container_wrap element -->








                                <footer class="container_wrap socket_color" id="socket" role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
                    <div class="container">

                        <span class="copyright">© Copyright - LyricsNOW</span>


                    </div>

                    <!-- ####### END SOCKET CONTAINER ####### -->
                                </footer>


                                        <!-- end main -->
                </div>

                <a class="avia-post-nav avia-post-prev without-image" href="http://www.lyricsnow.in/movies/jazbaa/jaane-tere-shehar-lyrics/">    <span class="label iconfont" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"></span>    <span class="entry-info-wrap">        <span class="entry-info">            <span class="entry-title">Jaane Tere Shehar Lyrics</span>        </span>    </span></a><a class="avia-post-nav avia-post-next without-image" href="http://www.lyricsnow.in/movies/shaandaar/shaam-shaandaar-lyrics/">    <span class="label iconfont" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"></span>    <span class="entry-info-wrap">        <span class="entry-info">            <span class="entry-title">Shaam Shaandaar Lyrics</span>        </span>    </span></a><!-- end wrap_all --></div>


 <script type="text/javascript">
 /* <![CDATA[ */
var avia_framework_globals = avia_framework_globals || {};
    avia_framework_globals.frameworkUrl = 'http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/framework/';
    avia_framework_globals.installedAt = 'http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/';
    avia_framework_globals.ajaxurl = 'http://www.lyricsnow.in/wp-admin/admin-ajax.php';
/* ]]> */
</script>

 <script type="text/javascript">
/* <![CDATA[ */
var countVars = {"disqusShortname":"lyricsnow"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/disqus-comment-system/public/js/comment_count.js?ver=3.0.15"></script>
<script type="text/javascript">
/* <![CDATA[ */
var embedVars = {"disqusConfig":{"integration":"wordpress 3.0.15"},"disqusIdentifier":"5039 http:\/\/www.lyricsnow.in\/?p=5039","disqusShortname":"lyricsnow","disqusTitle":"Gulaabo Lyrics","disqusUrl":"http:\/\/www.lyricsnow.in\/movies\/shaandaar\/gulaabo-lyrics\/","postId":"5039"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/disqus-comment-system/public/js/comment_embed.js?ver=3.0.15"></script>
<script type="text/javascript">
/* <![CDATA[ */
var viewsCacheL10n = {"admin_ajax_url":"http:\/\/www.lyricsnow.in\/wp-admin\/admin-ajax.php","post_id":"5039","is_singular":"1"};
/* ]]> */
</script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/yuzo-related-post/assets/js/yuzo-postviews-cache.js?ver=5.12.74"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/yuzo-related-post/assets/js/jquery.equalizer.js?ver=5.12.74"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/avia.js?ver=4.1"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/shortcodes.js?ver=4.1"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/themes/Enfold/enfold/js/aviapopup/jquery.magnific-popup.min.js?ver=4.1"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=4.9.5"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/comment-reply.min.js?ver=4.9.5"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-content/plugins/youtube-embed-plus/scripts/fitvids.min.js?ver=4.9.5"></script>
<script type="text/javascript" src="http://www.lyricsnow.in/wp-includes/js/wp-embed.min.js?ver=4.9.5"></script>
<a href="#top" title="Scroll to top" id="scroll-top-link" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"><span class="avia_hidden_link_text">Scroll to top</span></a>

<div id="fb-root"></div>



<!-- Dynamic page generated in 0.810 seconds. -->
<!-- Cached page generated by WP-Super-Cache on 2018-05-07 13:25:19 -->

<!-- Compression = gzip --><iframe id="google_osd_static_frame_7625866169877" name="google_osd_static_frame" style="display: none; width: 0px; height: 0px;"></iframe><iframe style="display: none;"></iframe></body></html>
`;

getContent({html: html})