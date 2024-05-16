
let score = 0;
let pcScore = 0;
let userTitle = "hanzawa.png"; // プレイヤーの初期タイトル
let pcTitle = "hanzawa.png"; // コンピューターの初期タイトル
const userTitles = ["img_yakushoku/hanzawa.png","img_yakushoku/shima.png","img_yakushoku/ogawa.png","img_yakushoku/daimon.png","img_yakushoku/zaizen.png"];
const pcTitles = ["img_yakushoku/hanzawa.png","img_yakushoku/shima.png","img_yakushoku/ogawa.png","img_yakushoku/daimon.png","img_yakushoku/zaizen.png"];


function janken(user){
    let pcJk = ['rock_re.png','scissers_re.png','paper_re.png'];
    let userJk = ['rock.png', 'scissers.png', 'paper.png'];
    let pc = Math.floor(Math.random() * 3);
    let userImg = document.getElementById("userImg");
    userImg.src = "img_user/" + userJk[user];
    let pcImg = document.getElementById("pcImg");
    pcImg.src = "img_pc/" + pcJk[pc];

    let result;
    if (user === pc) {
        result = "あいこ";
    } else if ((user === 0 && pc === 1) || (user === 1 && pc === 2) || (user === 2 && pc === 0)) {
        result = "勝ち";
        if (score < 4){
            score += 1;
        }
        if (pcScore > 0){
            pcScore -= 1;
        }
        
    } else {
        result = "負け";
        if (score > 0){
            score -= 1;
        }
        if (pcScore < 4){
                pcScore +=1;
            }
    }

    document.getElementById("result").innerText = "結果：" + result;
    document.getElementById("score").innerText = "スコア：" + score; // Display updated score
    updateUserTitle();
    updatePcTitle();
    // 勝敗の結果を使って役職を変更

    // Userのスコアが4に達した場合、特定の画像を表示
    if (score === 4) {
    document.getElementById('container_result').style.display = 'flex';
    }

    if (pcScore === 4) {
    document.getElementById('pc_container_result').style.display = 'flex';
    }

}

function closeResultImageModal(){
    document.getElementById('container_result').style.display = 'none';
}



function closePcResultModal() {
    document.getElementById('pc_container_result').style.display = 'none';
}




function updateUserTitle(){
    let userImg2 = document.getElementById("userImg2");
    if (score >= 0 && score < userTitles.length){
        userImg2.src = userTitles[score];
    }
}

function updatePcTitle(){
    let pcImg2 = document.getElementById("pcImg2");
    if (pcScore >= 0 && pcScore < pcTitles.length){
        pcImg2.src = pcTitles[pcScore];
    }
}

function closeResultImageModal() {
document.getElementById('container_result').style.display = 'none';
// UserとPCのスコアをリセット
score = 0;
pcScore = 0;
// スコア表示を更新
document.getElementById("score").innerText = "score : " + score;
// 役職画像をリセット
updateUserTitle();
updatePcTitle();
}

function closePcResultModal() {
document.getElementById('pc_container_result').style.display = 'none';
// UserとPCのスコアをリセット
score = 0;
pcScore = 0;
// スコア表示を更新
document.getElementById("score").innerText = "score : " + score;
// 役職画像をリセット
updateUserTitle();
updatePcTitle();
}


// ページ読み込み後に実行される処理
window.onload = function() {
    // 1秒後にポップアップを表示する
    setTimeout(function() {
        document.getElementById('modal-overlay').style.display = 'flex';
    }, 1000);
};

// モーダルを閉じるイベントリスナーを追加
document.querySelector('.modal-mask').addEventListener('click', function() {
document.getElementById('modal-overlay').style.display = 'none';
});

