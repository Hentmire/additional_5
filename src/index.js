module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 == 1) {
		return false;
	}
        var counter = 0;
		for (var j = 0; j < bracketsConfig.length; j++) {
			var a = bracketsConfig[j][0];
			var b = bracketsConfig[j][1];
			var arr = [];
			for (var m = 0; m < str.length; m++) {
				arr[m] = 0;
			}
			for (var i = 0; i < str.length; i++) {
				for (var l = i + 1; l <= str.length; l++) {
					if (a == str[i] && b == str[l] && arr[i] != 1 && arr[l] != 1) {
						if ( (l - i) % 2 == 1) {
							arr[i] = 1;
							arr[l] = 1;
							counter += 2;
						}
					}
				}
			}
		}

	if (counter == str.length) {
		return true;
	}
	return false;
}
