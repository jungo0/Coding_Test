function solution(arr) {
  const arr2 = [...new Set(arr)]; // 중복값 제거
  arr2.sort((a, b) => b - a); // 내림차순 정렬
  return arr2;
}
