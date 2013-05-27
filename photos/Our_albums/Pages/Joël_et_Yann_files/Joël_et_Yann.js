// Created by iWeb 2.0.4 local-build-20130527

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.jkwriters.com/photos/Our_albums/Pages/Jo%C3%ABl_et_Yann_files/rss.xml",true,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,31),new IWSize(229,237),27,27,0,new IWSize(-2,16)),new IWPhotoFrame([IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_01.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_02.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_01.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_01.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_09.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_08.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_07.png'),IWCreateImage('Jo%C3%ABl_et_Yann_files/GraphPaper_01.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Jo%C3%ABl_et_Yann_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Joël_et_Yann_files/Joël_et_YannMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
