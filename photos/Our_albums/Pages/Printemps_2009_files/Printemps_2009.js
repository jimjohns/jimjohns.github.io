// Created by iWeb 2.0.4 local-build-20130527

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.jkwriters.com/photos/Our_albums/Pages/Printemps_2009_files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,28),new IWSize(216,223),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,10,170),url:'Printemps_2009_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Printemps_2009_files/stroke_1.png'},{rect:new IWRect(5,-5,170,10),url:'Printemps_2009_files/stroke_2.png'},{rect:new IWRect(175,-5,10,10),url:'Printemps_2009_files/stroke_3.png'},{rect:new IWRect(175,5,10,170),url:'Printemps_2009_files/stroke_4.png'},{rect:new IWRect(175,175,10,10),url:'Printemps_2009_files/stroke_5.png'},{rect:new IWRect(5,175,170,10),url:'Printemps_2009_files/stroke_6.png'},{rect:new IWRect(-5,175,10,10),url:'Printemps_2009_files/stroke_7.png'}],new IWSize(180,180)),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Printemps_2009_files/Printemps_2009Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id3');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
