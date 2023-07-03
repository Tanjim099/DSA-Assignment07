function reverseWords(s) {
    return s.split(' ').map(reverse).join(' ');
  };
  
  var reverse = function (word) {
    var len = word.length;
    var res = '';
    for (var i = 0; i < len; i++) {
      res += word[len - i - 1];
    }
    return res;
  };

  const  s = "Let's take LeetCode contest";

  console.log(reverseWords(s))
