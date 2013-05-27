// Created by iWeb 2.0.4 local-build-20130527

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.jkwriters.com/photos/Our_albums/Pages/Jo%C3%ABl_files/rss.xml",true,true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.jkwriters.com/photos/Our_albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,48),new IWSize(229,254),27,27,0,new IWSize(11,20)),new IWPhotoFrame([IWCreateImage('Jo%C3%ABl_files/Scrapbook2_01.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_02.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_03.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_06.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_09.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_08.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_07.png'),IWCreateImage('Jo%C3%ABl_files/Scrapbook2_04.png')],null,2,0.400000,31.000000,2.000000,25.000000,2.000000,45.000000,19.000000,38.000000,35.000000,282.000000,320.000000,282.000000,320.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Joël_files/JoëlMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
