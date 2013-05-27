// Created by iWeb 2.0.4 local-build-20130527

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,326),url:'home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'home_files/stroke_1.png'},{rect:new IWRect(5,-5,214,10),url:'home_files/stroke_2.png'},{rect:new IWRect(219,-5,10,10),url:'home_files/stroke_3.png'},{rect:new IWRect(219,5,10,326),url:'home_files/stroke_4.png'},{rect:new IWRect(219,331,10,10),url:'home_files/stroke_5.png'},{rect:new IWRect(5,331,214,10),url:'home_files/stroke_6.png'},{rect:new IWRect(-5,331,10,10),url:'home_files/stroke_7.png'}],new IWSize(224,336))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('home_files/homeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
