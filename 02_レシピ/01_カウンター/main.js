const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasuButton = document.getElementById("mainasu-button")
let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

// ボタン要素のonclickハンドラに関数を代入する
mainasuButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}
