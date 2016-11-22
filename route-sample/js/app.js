//コンポーネントを宣言
let myApp = {
    //コントローラのプロパティ作成
    controller: function () {},

    //ビューのプロパティ作成
    view: function () {
        //htmlの要素作成
        //<h1>hello world</h1>と同等の要素を作成する
        return m("h1", "hello world!");
    }
};

//idがrootの要素の中に、ビューの要素を追加する。
m.mount(document.getElementById("root"), myApp);
