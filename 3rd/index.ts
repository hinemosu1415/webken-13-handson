// 次の課題は仮想的なWebサーバーの実装を行います。
// GETリクエストでは数字 x が与えられるので、x番目のユーザー名を返します。
// POSTリクエストでは名前 name が与えられるので、ユーザー名リストの末尾に name を追加します。

let Users: string[] = ["太郎", "花子"];

function get(index: number): void {
    // 実装してみましょう
}

function post(name: string): void {
    // 実装してみましょう
}

function handleRequest(command: string): void {
    // 空白で分割
    const parts = command.split(" ");
    const method = parts[0]; // "GET" or "POST"

    if (method === "GET") {
        const index = Number(parts[1]); // 配列は0始まり
        get(index);
    }

    else if (method === "POST") {
        const name = parts[1];
        post(name);
    }

    else {
        console.log("不正なコマンドです。");
    }
}

// 実行例
handleRequest("GET 1");
handleRequest("POST 次郎");
handleRequest("GET 3");
handleRequest("GET 4");
