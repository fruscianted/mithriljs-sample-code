const todo = {
    List: new Array,
    Description: stream(""),
    vmlist: function(data){
        this.description = stream(data.description);
        this.done = stream(false);
    },
    oninit: function(vnode) {
        vnode.state.add = () => {
            return function() {
                console.log('add')
                if (vnode.state.Description()) {
                    vnode.state.List.push(new vnode.state.vmlist({description: vnode.state.Description()}));
                    vnode.state.Description("");
                }
            }
        };
    },
    view: function(vnode) {
        return m("html", [
            m("body", [
                m("input", {onchange: m.withAttr("value", vnode.state.Description), value: vnode.state.Description}),
                m("button", {onclick: vnode.state.add()}, "追加"),
                m("table", [
                    vnode.state.List.map(function(task, index) {
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

//idがrootの要素の中に、ビューの要素を追加する。
m.mount(document.getElementById("root"), todo);
