const todo = {
    //TodoListクラスはtodoの配列
    list: new Array,
    //Todoの内容を保持する変数
    description: stream(""),
    //リストのモデルを作成
    listModel: function(data){
        this.description = stream(data.description);
        this.done        = stream(false);
    },
    //初回処理
    oninit: function(vnode) {
        //Todo追加処理
        vnode.state.add = () => {
            return function() {
                if (vnode.state.description()) {
                    vnode.state.list.push(new vnode.state.listModel({description: vnode.state.description()}));
                    vnode.state.description("");
                }
            }
        };
    },
    //ビュー
    view: function(vnode) {
        return m("html", [
            m("body", [
                m("input", {onchange: m.withAttr("value", vnode.state.description), value: vnode.state.description}),
                m("button", {onclick : vnode.state.add()}, "追加"),
                m("table", [
                    vnode.state.list.map(function(task, index) {
                        return m("tr", [
                            m("td", [
                                m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done), checked: task.done()})
                            ]),
                            m("td", {style: {textDecoration: task.done() ?"line-through" : "none"}}, task.description()),
                        ])
                    })
                ])
            ])
        ]);
    }
}

m.mount(document.getElementById("root"), todo);
