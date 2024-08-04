function permutation(str, result) {
    if(str.length === 0) {
        console.log(result);
    }
    for(let i = 0; i < str.length; i ++) {
        let rest = str.substring(0, i) + str.substring(i + 1);
        permutation(rest, result + str[i])
    }
}

// "abc"
// "acb"
// "bac"
// "bca"
// "cba"
// "cab"



// - שלב ראשון ראיון טכני בזום של שעה דיזיין
// יום ראיונות - משימת בית והצגה: 4 שעות
// 2 מראיינים מקצועים קולגה ומנהל
// ראיון בינאישי ומנהלת

// payments
