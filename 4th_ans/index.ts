// 次の課題は仮想的なWebサーバーの実装を行います。
// GETリクエストでは数字 x が与えられるので、x番目のユーザー情報を返します。
// POSTリクエストでは「名前 name」と「年齢 age」が与えられるので、
// 新しいユーザーをUsers配列に追加します。

// 型定義
type User = {
  id: number;
  name: string;
  age: number;
};

// 初期ユーザー配列
let Users: User[] = [
  { id: 1, name: "太郎", age: 20 },
  { id: 2, name: "花子", age: 22 },
];

// GET処理
// 出力は { id: 1, name: "太郎", age: 20 } のようにオブジェクト全体で構いません。
function get(index: number) {
  const user = Users[index - 1]; // indexは1始まり
  if (user) {
    console.log(user);
  } else {
    console.log("該当するユーザーはいません。");
  }
}

// POST処理
function post(name: string, age: number) {

  const newUser: User = {
    id: Users.length + 1,
    name,
    age,
  };

  Users.push(newUser);
  console.log(`ユーザー「${name}（${age}歳）」を追加しました。`);
}

// リクエストハンドラ
function handleRequest(command: string) {
  const parts = command.split(" ");
  const method = parts[0];

  if (method === "GET") {
    const index = Number(parts[1]);
    get(index);
  }

  else if (method === "POST") {
    const name = parts[1];
    const age = Number(parts[2]);
    post(name, age);
  }

  else {
    console.log("不正なコマンドです。");
  }
}

// 実行例
handleRequest("GET 1");
handleRequest("POST 次郎 25");
handleRequest("GET 3");
handleRequest("GET 4");
