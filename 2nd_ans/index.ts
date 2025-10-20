// 卑劣に型を付けて下さい。
// 配列の平均値を出力して下さい。

const scores: number[] = [70, 80, 90];

// 以下に2通りの回答を示します。  

console.log("=== for文 ===");
let ave1: number = 0;
for (let i = 0; i < scores.length; i++) {
  ave1 += scores[i];
}
ave1 = ave1 / scores.length;
console.log(ave1);


console.log("\n=== forEach文 ===");
let ave2: number = 0;
scores.forEach((score) => {
    ave2 += score;
});
ave2 = ave2 / scores.length;
console.log(ave2);