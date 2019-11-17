/**
 * 앞뒤가 같은 10진수&2진수&8진수 찾기
 * - 10이상 10진수에서 최소값을 구하라
 */

/**
 * * 문자열을 역으로 바꾸는 함수
 * ! 문자열을 reverse 하는 함수가 없으므로 배열의 reverse 함수를 활용하자.
 */
String.prototype.reverse = function() {
  return this.split("")
    .reverse()
    .join("");
};

// 11부터 탐색 개시
let num = 11;
while (true) {
  if (
    num.toString() === num.toString().reverse() &&
    num.toString(8) === num.toString(8).reverse() &&
    num.toString(2) === num.toString(2).reverse()
  ) {
    console.log(num);
    break;
  }
  num += 2;
}
