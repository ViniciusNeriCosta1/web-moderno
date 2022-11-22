function teste1(num){
    if(num>7)
        console.log(num)
        console.log('Final') //está fora do if
}

teste1(6)
teste1(8)

function teste2(num){
    if(num>7);//if finaliza no ; por isso executa
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)