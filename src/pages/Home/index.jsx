import { TabBar } from "antd-mobile";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Index from "../Index";
import List from "../List";
import News from "../News";
import Profile from "../Profile";
import "./index.css";

export default class Home extends Component {
  state = {
    selectedTab: this.props.location.pathname,
    hidden: false,
    fullScreen: true,
    tabItem: [
      {
        title: "首页",
        icon: "icon-shouye",
        path: "/home",
      },
      {
        title: "找房",
        icon: "icon-icon_bangwozhaofang",
        path: "/home/list",
      },
      {
        title: "资讯",
        icon: "icon-zixun",
        path: "/home/news",
      },
      {
        title: "我的",
        icon: "icon-wode-copy",
        path: "/home/profile",
      },
    ],
  };

  render() {
    return (
      <div className="home">
        <Route exact path="/home" component={Index} />
        <Route path="/home/list" component={List} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />
        <TabBar
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent={true}
        >
          {Object.freeze(this.state.tabItem).map((item) => (
            <TabBar.Item
              title={item.title}
              key="home"
              icon={<i className={`iconfont ${item.icon}`}></i>}
              selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
              selected={this.state.selectedTab === item.path}
              onPress={() => {
                this.setState({
                  selectedTab: item.path,
                });
                this.props.history.push(item.path);
              }}
              data-seed="logId"
            />
          ))}
        </TabBar>
      </div>
    );
  }
}
