   function isAestheticTree(treeArr) {
        console.log(treeArr);
        for(let i = 0; i < treeArr.length; i += 2) {
            let currDiff = treeArr[i] - treeArr[i + 1];
            if (currDiff => 0 ) return 0;
        }
        return 1;
    }
    
    function findCutIndex(treeArr) {
        let countCuts = 0;
        let copy = [...treeArr];
        for(let j = 0; j < treeArr.length; j ++) {
            treeArr.splice(j, 1);
            countCuts += isAestheticTree(treeArr);
            treeArr = [...copy];
        }
        console.log(countCuts);
        return countCuts;
    }

