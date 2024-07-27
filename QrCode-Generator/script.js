const btn=document.getElementById('btn');
const text=document.getElementById('text');
const qr_img=document.getElementById('qr-img');

btn.addEventListener('click',()=>{
   if(!text.value)
    {
        alert("please enter the url");
        return;
    }
    else{
        qr_img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
        qr_img.alt=text.value;
    }
});
