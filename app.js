
(function(){
var st=document.getElementById('stage');if(!st)return;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce)addEventListener('pointermove',function(e){
 var b=st.getBoundingClientRect(),
 x=Math.max(-1,Math.min(1,(e.clientX-b.left)/b.width*2-1)),
 y=Math.max(-1,Math.min(1,(e.clientY-b.top)/b.height*2-1));
 st.style.setProperty('--rx',(-y*7).toFixed(1)+'deg');
 st.style.setProperty('--ry',(x*9).toFixed(1)+'deg');
 st.style.setProperty('--gx',(-x*10).toFixed(1)+'px');
},{passive:true});
var cta=document.getElementById('cta');
if(cta){
 ['mouseenter','focus','touchstart'].forEach(function(n){cta.addEventListener(n,function(){st.classList.add('merge');},{passive:true});});
 ['mouseleave','blur','touchend','touchcancel'].forEach(function(n){cta.addEventListener(n,function(){st.classList.remove('merge');},{passive:true});});
}
st.addEventListener('click',function(){st.classList.toggle('merge');});
})();


(function(){
if(!matchMedia('(hover:hover)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
document.querySelectorAll('.proj').forEach(function(c){
 c.addEventListener('pointermove',function(e){
  var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width*2-1,y=(e.clientY-b.top)/b.height*2-1;
  c.style.setProperty('--tx',(-y*4).toFixed(2)+'deg');
  c.style.setProperty('--ty',(x*4).toFixed(2)+'deg');
 });
 c.addEventListener('pointerleave',function(){c.style.removeProperty('--tx');c.style.removeProperty('--ty');});
});
})();

(function(){
var f=document.getElementById('enq');if(!f)return;
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='Name: '+d.get('n')+'\nEmail: '+d.get('e')+'\nNeed: '+d.get('t')+'\nBudget: '+d.get('b')+'\n\n'+d.get('m');
location.href='mailto:nexordevstudio@gmail.com?subject='+encodeURIComponent('Project enquiry from '+d.get('n'))+'&body='+encodeURIComponent(body);});
})();