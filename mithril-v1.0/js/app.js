//コンポーネントを宣言
const myApp = {
    oninit: function(vnode) {
        console.log("initialized")
        vnode.state.name = stream('名無し');
    },
    //ビューのプロパティ作成
    view: function (vnode) {
        return [
            m("h4", "Happy Birthday!! mithril v1.0"),
            m(statusView,{title:'名前を入力してみる！',text:vnode.state.name}),
            m('div','こんにちは!!' + vnode.state.name + 'さん！'),
        ]
    }
};

//ビューのカプセル化
const statusView = {
    oninit: function(vnode){
        vnode.state.text = vnode.attrs.text;
    },
    view: function(vnode) {
        return m('p',[
            m('div',vnode.attrs.title),
            m('input', {
                type:'text',
                oninput: m.withAttr('value', vnode.state.text),
                value: vnode.state.text()
            })
        ])
    }
};

//idがrootの要素の中に、ビューの要素を追加する。
m.mount(document.getElementById("root"), myApp);
