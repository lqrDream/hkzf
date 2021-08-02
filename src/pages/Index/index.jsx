import React, { Component } from "react";
import Swipe from "../../components/Swiper";
import { Flex } from "antd-mobile";

import homeImg from "../../assets/img/_home.png";
import myImg from "../../assets/img/_my.png";
import searchImg from "../../assets/img/_search.png";
import videoImg from "../../assets/img/_videocamera.png";

import { getSwipeList } from "../../api";

import "./index.css";

export default class Index extends Component {
  state = {
    swipeList: [],
  };

  async componentDidMount() {
    // simulate img loading

    const {
      data: { body },
    } = await getSwipeList();

    this.setState({ swipeList: body });
  }

  render() {
    const { swipeList } = this.state;
    return (
      <div>
        <Swipe swipeList={swipeList} />
        {/* 导航栏 */}
        <Flex className="nav">
          <Flex.Item>
            <img src={homeImg} alt="" />
            <p>整租</p>
          </Flex.Item>
          <Flex.Item>
            <img src={myImg} alt="" />
            <p>合租</p>
          </Flex.Item>
          <Flex.Item>
            <img src={searchImg} alt="" />
            <p>长租</p>
          </Flex.Item>
          <Flex.Item>
            <img src={videoImg} alt="" />
            <p>去出租</p>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
