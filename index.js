function reverse(str) {
    let str1=""
    let ans=""
    for(let i=0;i<str.length;i++){
        if(str[i]!=" "){
            str1=str1+str[i]
        }
        else if(i==str.length-1){
          ans=str1+" "+ans
          str1=""
        }
        else{
            ans=str1+" "+ans
            str1=""
        }


    }
    return ans
    
}