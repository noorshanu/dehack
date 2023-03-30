import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class Crisps extends Component {
  componentDidMount () {
    Crisp.configure("5df579da-90ce-4223-a27f-2544363467bc");
  }

  render () {
    return null;
  }
}
export default Crisps