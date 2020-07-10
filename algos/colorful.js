function colorful(A) {
    var num = String(A),
        hash = {};

    for (var i = 0; i < num.length; i++) {
        var c = 1;
        for (var j = i; j < num.length; j++) {
            c *= Number(num[j]);

            if (hash[c]) {
                return 0;
            }
            hash[c] = 1;
        }
    }

    return 1;
}
