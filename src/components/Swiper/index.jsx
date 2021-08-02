import React from "react";
import { Carousel } from "antd-mobile";

class Swipe extends React.Component {
  render() {
    const { swipeList } = this.props;
    return (
      <div>
        {/* 轮播图 */}
        <Carousel autoplay infinite>
          {swipeList.map((item) => (
            <a
              key={item.id}
              href="http://www.alipay.com"
              style={{ display: "inline-block", width: "100%", height: 212 }}
            >
              <img
                src={`http://localhost:8009${item.imgSrc}`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Swipe;
