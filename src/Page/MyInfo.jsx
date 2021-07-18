import React, { Component} from "react";
import FadeIn from "../effect/FadeIn";

class MyInfo extends Component {
  render (){
    return (
      <FadeIn>
        <div>
          info페이지
        </div>
      </FadeIn>
    );
  }
}

export default MyInfo;