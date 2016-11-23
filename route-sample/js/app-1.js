'use strict';

const move = {
    home:      () => {m.route("/")},
    dashboard: () => {m.route("/dashboard")}
}

const Home = {
    //controller省略
    view: () => {
        return [
            m("div", "Home"),
            m("button", { onclick: move.dashboard }, "dashboardへ移動")
        ]
    }
};

const Dashboard = {
    //controller省略
    view: () => {
        return [
            m("div", "dashboard"),
            m("button", { onclick: move.home }, "homeへ移動")
        ]
    }
};

//初回起動をHomeに設定。他のページも設定。
m.route(document.getElementById("root"), "/", {
    "/": Home,
    "/dashboard": Dashboard,
});
