// //モデル
// let myModel = function(data) {
//     this.hoge  = "";
// };
//
// //ビューモデル
// let myVM = {
//     init:function() {
//         myModel.hoge  = "初回読み込み";
//     },
//     btnClick: function() {
//         myModel.hoge  = "ボタン読み込み";
//     }
// };
//
// //コントローラ
// let myCont = function() {
//     myVM.init();
// };
//
// //ビュー
// let myView = function(ctrl) {
//     return [
//         m("button", {onclick: myVM.btnClick}, "ボタン"),
//         m("input[id=hello]",{value: myModel.hoge})
//     ]
// }
//
// //コンポーネント
// let myComponent = {
//     controller: myCont,
//     view: myView
// };
//
// //描写
// m.mount(document.getElementById("root"), myComponent);



// //双方向データバインディングのサンプル
// let myComponent = {
//     model: function(name) {
//         this.name = m.prop(name);
//     },
//     controller: function() {
//         this.user = new myComponent.model("");
//     },
//     view: function(ctrl) {
//         return [
//             m("p",[
//                 m("div","setter"),
//                 m("input", {onkeyup: m.withAttr("value", ctrl.user.name)})
//             ]),
//             m("p", [
//                 m("div", "getter" ),
//                 m("input",{value:ctrl.user.name()})
//             ])
//         ]
//     }
// };
// // 描写
// m.mount(document.getElementById("root"), myComponent);

// //双方向データバインディング
// //モデル
// let myModel = function(name) {
//     this.text = m.prop(name);
// };
// //コントロール
// let myCtrl = function() {
//     this.model = new myModel("");
// };
// //ビュー
// let myView = function(ctrl) {
//     return [
//         m("p", [
//             m("div", "setter"),
//             m("input", {
//                 //キーアップ時にテキストボックスの入力値(value)を
//                 //コントロールで生成したインスタンスにセットする
//                 onkeyup: m.withAttr("value", ctrl.model.text)
//             })
//         ]),
//         m("p", [
//             m("div", "getter"),
//             m("input", {
//                 //コントロールで生成したインスタンスから
//                 //値をゲットする
//                 value: ctrl.model.text()
//             })
//         ])
//     ]
// };
//
// let myComponent = {
//     controller: myCtrl,
//     view: myView
// };
//
// //描写
// m.mount(document.getElementById("root"), myComponent);

//双方向データバインディング

let myApp = {};

//モデル
let myModel = function(name) {
    this.text = m.prop(name);
};

myApp.vm = (function(){
    let vm = {};
    vm.init = function(){
        vm.model = new myModel();
    }
    return vm
}());

//コントロール
myApp.controller = function() {
    myApp.vm.init();
};
//ビュー
myApp.view = function(ctrl) {
    return [
        m("p", [
            m("div", "setter"),
            m("input", {
                //キーアップ時にテキストボックスの入力値(value)を
                //コントロールで生成したインスタンスにセットする
                onkeyup: m.withAttr("value", myApp.vm.model.text)
            })
        ]),
        m("p", [
            m("div", "getter"),
            m("input", {
                //コントロールで生成したインスタンスから
                //値をゲットする
                value: myApp.vm.model.text()
            })
        ])
    ]
};

//描写
m.mount(document.getElementById("root"), myApp);
