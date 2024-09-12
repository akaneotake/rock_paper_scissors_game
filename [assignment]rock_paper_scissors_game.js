console.log("***Rock, Paper, Scissors Game***\nWelcom to Rock, Paper, Scissors Game!");

var input = prompt('いずれかの文字列を入力してくささい。(晴れ or くもり or 雨)', '初期値');

if (input === '晴れ') {
  alert('今日は気持ちの良い一日になりそうですね！');
} else if (input === 'くもり') {
  alert('どんよりした天気ですが今日も一日がんばりましょう！');
} else if (input === '雨') {
  alert('家でゆっくり過ごすのも良いと思いますよ！');
} else {
  alert('晴れ・くもり・雨以外の文字列には対応していません。');
}


console.log(input('晴れ'));