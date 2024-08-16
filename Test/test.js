const str1 = "hello123"
const str2 = "world"

const res = (s1,s2) => {
    let newStr = "";
    for(let i=0 , j=0;i<s1.length || j<s2.length ;i++ , j++){
        if(!(s1[i]-'0' >= 0 && s1[i] <= 9)){
            newStr = newStr + s1[i];
        }else{
            while((s1[i]-'0' >= 0 && s1[i] <= 9)){
                newStr = newStr + s1[i]-'0';
            }
        }
        if(!(s2[j]-'0' >= 0 && s2[j] <= 9)){
            newStr = newStr + s2[j];
        }
    }

    return newStr;
}

console.log(res(str1,str2));