// dynamic tab::: For: http://www.webdeveloper.com/forum/showthread.php?p=1062635#post1062635

var tabCount = 8;

function toggle(info) { 
  var tabIDS = 'sm'+info;
  //var contentIDS = 'Content'+info;
  var tmenu = document.getElementById('tabMenu');	// alert(tmenu.id);
  var divInfo = tmenu.getElementsByTagName('div');   //alert(divInfo.length);  
  for (var i=0; i<divInfo.length; i++) { 			 //alert(divInfo[i].className);
	divInfo[i].className = 'tab'; }
  document.getElementById(tabIDS).className = 'activeTab';
  /*
  for (var i=0; i<tabCount; i++) {
	document.getElementById('Content'+i).style.display = 'none'; }
  sel = document.getElementById(contentIDS);
  if (sel.style.display != 'block') { sel.style.display = 'block'; }
                               else { sel.style.display = 'none'; }	
*/
}
