function isIsomorphic(s,t){
    if(s.length !== t.length){
        return false
    }
    const sMap = new Map();
    const tMap = new Map();
    for(let i=0; i<s.length; i++){
        const sChar = s[i];
        const tChar = t[i];
        if(sMap.has(sChar)){
            if(sMap.get(sChar) !== tChar){
                return false
            }
        } else{
            sMap.set(sChar, tChar)
        }
        if(tMap.has(tChar)){
            if(tMap.get(tChar) !== sChar){
                return false;
            }
        }
        else{
            tMap.set(tChar, sChar)
        }
    }
    return true

};

const s = "egg";
const t = "add";
console.log(isIsomorphic(s,t));