(function () {
    'use strict';
    // 問題名を配列に
    const problem_names_Elements = document.getElementById('select-task').children;

    //問題ごとにループ
    for (var i = 0; i < problem_names_Elements.length; i++) {
        const problem_name = problem_names_Elements[i].innerHTML

        // ボタンの作成
        const button_txt = `<input type="radio" value="ボタン2" name="quiz" onclick="clickBtn(${i});" />${problem_name}<br>`
        // ボタンの挿入位置
        const button_place = document.querySelector('div.col-sm-12 span.error');
        // ボタンの挿入
        button_place.insertAdjacentHTML('beforebegin', button_txt);
    };

    // scriptの作成
    const script_elem = document.createElement("script");
    // scriptの中身
    script_elem.innerText = `function clickBtn(index) {
        document.getElementById('select-task').selectedIndex = index;
    };`
    // buttonの下の挿入
    const button_place = document.querySelector('div.col-sm-12 span.error');
    button_place.appendChild(script_elem);
})();