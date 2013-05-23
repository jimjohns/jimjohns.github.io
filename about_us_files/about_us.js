// Created by iWeb 2.0.4 local-build-20130523

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,187),url:'about_us_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'about_us_files/stroke_1.png'},{rect:new IWRect(5,-5,208,10),url:'about_us_files/stroke_2.png'},{rect:new IWRect(213,-5,11,10),url:'about_us_files/stroke_3.png'},{rect:new IWRect(213,5,11,187),url:'about_us_files/stroke_4.png'},{rect:new IWRect(213,192,11,10),url:'about_us_files/stroke_5.png'},{rect:new IWRect(5,192,208,10),url:'about_us_files/stroke_6.png'},{rect:new IWRect(-5,192,10,10),url:'about_us_files/stroke_7.png'}],new IWSize(218,197))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('about_us_files/about_usMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
