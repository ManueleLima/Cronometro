
var sec=0;
var min=0;
var hr=0;

var sessao=0;

var interval;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit);
    }else{
        return(digit);
    }
    
}
function start(){
    if(sessao==0 || sessao==2 || sessao==3){
        sessao=1;
        time();
        interval= setInterval(time,1);
        console.log('iniciou');
    }   
}

function pause(){
    if(sessao==1){
        sessao=2;
        clearInterval(interval); 
        console.log('pausou');
    }   
}
function stop(){
    if(sessao==1 || sessao==2){
    sessao=3;
    clearInterval(interval);
    sec=0;
    min=0;
    hr=0;
    console.log('finalizou');
    document.getElementById('time').innerText = twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec);
    }
}



function time(){
    sec++;
    if(sec==60){
        min++;
        sec=0;
    if(min==60){
        hr++;
        min=0;
    }
    }
    document.getElementById('time').innerText = twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec);
    
}