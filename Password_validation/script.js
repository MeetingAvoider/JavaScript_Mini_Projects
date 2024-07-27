const text=document.getElementById('password');
const span=document.getElementsByTagName("span");
console.log(span);
console.log(text);
text.addEventListener('change',function(){
   console.log(text.value);
});