module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 1) {
  	return false;
  }
  for (var j = 0; j < bracketsConfig.length; j++) {
	var a = bracketsConfig[j][0];
	var b = bracketsConfig[j][1];
	for (var m = 1; m <= str.length; m += 2) {
		for (var i = 0; i < str.length; i++) {
			for (var l = i + 1; l <= str.length; l++) {
				if (a == str[i] && b == str[l]) {
					if (l - i == m) {
						str = str.slice(0, i) + str.slice(i+1, l) + str.slice(l+1);
						i = -1; //после вырезки открыв. и закрыв. символа запускает цикл заново;
					}
				}
			}
		}
	}
}

  if (str.length == 0) {
  	return true;
  }
  return false;
}
