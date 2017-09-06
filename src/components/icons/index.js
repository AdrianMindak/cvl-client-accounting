// TRASH CAN COMPONENT
import React, { Component } from 'react'

const colors = {
  noRed: "#E20007",
  yesGreen: "#08AF44"
}

class TrashCan extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } viewBox="0 0 100 100" x="0px" y="0px">
        <title>trash can</title>
        <path d="M75,31.5H62V28.75a7,7,0,0,0-7-7H45a7,7,0,0,0-7,7V31.5H25a3,3,0,0,0,0,6h5V67.25a11,11,0,0,0,11,11H59a11,11,0,0,0,11-11V37.5h5a3,3,0,0,0,0-6ZM44,28.75a1,1,0,0,1,1-1H55a1,1,0,0,1,1,1V31.5H44Zm20,38.5a5,5,0,0,1-5,5H41a5,5,0,0,1-5-5V37.5H64Z"/>
      </svg>
    )
  }
};

class HomeHouse extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ this.props.width || "100%" } fill={ this.props.color || "black" } viewBox="0 0 100 100">
        <g>
          <path d="M25,92.4h13.8c2.2,0,4-1.8,4-4V65.2c0-0.6,0.4-1,1-1h12.4c0.6,0,1,0.4,1,1l0,23.2c0,2.2,1.8,4,4,4H75c7.7,0,14-6.3,14-14   V45.9c0-2.8-1.1-5.5-3.2-7.5L56.1,10.1c-3.4-3.4-8.8-3.4-12.3,0L14.2,38.5c-2,1.9-3.1,4.7-3.1,7.4v32.5C11,86.1,17.3,92.4,25,92.4z    M19,45.9c0-0.6,0.3-1.3,0.7-1.7l29.7-28.4c0.3-0.3,0.8-0.3,1.1,0l29.7,28.4c0.5,0.4,0.7,1.1,0.7,1.7v32.5c0,3.3-2.7,6-6,6h-9.8   l0-19.2c0-5-4-9-9-9H43.8c-5,0-9,4-9,9v19.2H25c-3.3,0-6-2.7-6-6V45.9z"/>
        </g>
      </svg>
    )
  }
};

class CashStation extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox="0 0 100 100">
        <g>
          <path d="M89.6455078,17.8552895H72.8994141V15.113102h12.5263672c2.3588867,0,4.277832-1.9189453,4.277832-4.2773438V8.1736488   c0-2.3593745-1.9189453-4.2783198-4.277832-4.2783198H57.3735352c-2.3588867,0-4.2783203,1.9189453-4.2783203,4.2783198v2.6621094   c0,2.3583984,1.9194336,4.2773438,4.2783203,4.2773438h12.5258789v2.7421875H43.7856445V8.559391   c0-0.5664058-0.3183594-1.0839839-0.8237305-1.3388667c-0.5053711-0.2568359-1.1113281-0.2050781-1.5664062,0.1318359   l-2.4677734,1.8193355l-2.4677734-1.8193355c-0.5292969-0.390625-1.2509766-0.390625-1.7802734,0l-2.4677734,1.8193355   l-2.4677734-1.8193355c-0.5292969-0.390625-1.2509766-0.390625-1.7802734,0l-2.4677734,1.8193355l-2.4677734-1.8193355   c-0.4555664-0.3359375-1.0610352-0.3867188-1.5664062-0.1318359s-0.8237305,0.7724609-0.8237305,1.3388667v9.2958984h-8.2109375   c-3.0463867,0-5.5249023,2.4785156-5.5249023,5.5253906v57.5000038v0.0878906v7.5576172   c0,3.5878906,2.9189453,6.5068359,6.5068359,6.5068359h75.2543945c3.5878906,0,6.5068359-2.9189453,6.5068359-6.5068359v-7.5576172   v-0.0878906V23.3806801C95.1704102,20.3338051,92.6918945,17.8552895,89.6455078,17.8552895z M56.0952148,10.8357582V8.1736488   c0-0.7050776,0.5732422-1.2783198,1.2783203-1.2783198h28.0522461c0.7045898,0,1.277832,0.5732422,1.277832,1.2783198v2.6621094   c0,0.7041016-0.5732422,1.2773438-1.277832,1.2773438H57.3735352C56.668457,12.113102,56.0952148,11.5398598,56.0952148,10.8357582   z M9.9023438,78.2390823h82.2680664v1.1416016H9.9023438V78.2390823z M23.6381836,11.5291176l0.9677734,0.7128906   c0.5292969,0.390625,1.2509766,0.390625,1.7802734,0l2.4677734-1.8193359l2.4677734,1.8193359   c0.5292969,0.390625,1.2509766,0.390625,1.7802734,0l2.4677734-1.8193359l2.4677734,1.8193359   c0.5292969,0.390625,1.2509766,0.390625,1.7802734,0l0.9677734-0.7128906v20.6503906c0,0.828125,0.6713867,1.5,1.5,1.5   s1.5-0.671875,1.5-1.5v-1.8786011c0.9334106,0.12146,1.6591797,0.9125366,1.6591797,1.8786011   c0,1.0498047-0.8540039,1.9042969-1.9038086,1.9042969H20.8823242c-1.0498047,0-1.9038086-0.8544922-1.9038086-1.9042969   c0-0.9661865,0.7260132-1.7573853,1.659668-1.8786621v1.8786621c0,0.828125,0.6713867,1.5,1.5,1.5s1.5-0.671875,1.5-1.5V11.5291176   z M12.4272461,20.8552895h8.2109375v6.4455566c-2.5886841,0.130249-4.659668,2.2581787-4.659668,4.8786621   c0,2.7041016,2.199707,4.9042969,4.9038086,4.9042969h22.6586914c2.7041016,0,4.9038086-2.2001953,4.9038086-4.9042969   c0-2.6203003-2.0707397-4.7481689-4.6591797-4.8786011v-6.4456177h45.8598633c1.3920898,0,2.5249023,1.1328125,2.5249023,2.5253906   v51.8584023H9.9023438V23.3806801C9.9023438,21.988102,11.0351562,20.8552895,12.4272461,20.8552895z M92.1704102,88.5261917   c0,1.9335938-1.5732422,3.5068359-3.5068359,3.5068359H13.4091797c-1.9335938,0-3.5068359-1.5732422-3.5068359-3.5068359   v-6.1455078h82.2680664V88.5261917z"/>
          <path d="M18.1669922,50.9578285h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5   h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C16.6669922,50.2859535,17.3383789,50.9578285,18.1669922,50.9578285z    M19.6669922,45.7478676h3.2919922v2.2099609h-3.2919922V45.7478676z"/>
          <path d="M29.409668,50.9578285h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5H29.409668   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C27.909668,50.2859535,28.5810547,50.9578285,29.409668,50.9578285z    M30.909668,45.7478676h3.2919922v2.2099609H30.909668V45.7478676z"/>
          <path d="M40.652832,50.9578285h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5H40.652832   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C39.152832,50.2859535,39.8242188,50.9578285,40.652832,50.9578285z    M42.152832,45.7478676h3.2919922v2.2099609H42.152832V45.7478676z"/>
          <path d="M83.6650391,42.7478676h-17.534668c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609c0,0.828125,0.6713867,1.5,1.5,1.5   h17.534668c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609C85.1650391,43.4197426,84.4936523,42.7478676,83.6650391,42.7478676z    M82.1650391,47.9578285h-14.534668v-2.2099609h14.534668V47.9578285z"/>
          <path d="M54.5952148,39.3855629h29.0698242c0.8286133,0,1.5-0.671875,1.5-1.5V25.9910316c0-0.828125-0.6713867-1.5-1.5-1.5   H54.5952148c-0.8286133,0-1.5,0.671875-1.5,1.5v11.8945312C53.0952148,38.7136879,53.7666016,39.3855629,54.5952148,39.3855629z    M56.0952148,27.4910316h26.0698242v8.8945312H56.0952148V27.4910316z"/>
          <path d="M18.1669922,60.5242348h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5   h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C16.6669922,59.8523598,17.3383789,60.5242348,18.1669922,60.5242348z    M19.6669922,55.3142738h3.2919922v2.2099609h-3.2919922V55.3142738z"/>
          <path d="M29.409668,60.5242348h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5H29.409668   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C27.909668,59.8523598,28.5810547,60.5242348,29.409668,60.5242348z    M30.909668,55.3142738h3.2919922v2.2099609H30.909668V55.3142738z"/>
          <path d="M40.652832,60.5242348h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609c0-0.828125-0.6713867-1.5-1.5-1.5H40.652832   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609C39.152832,59.8523598,39.8242188,60.5242348,40.652832,60.5242348z    M42.152832,55.3142738h3.2919922v2.2099609H42.152832V55.3142738z"/>
          <path d="M18.1669922,70.0906448h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099648c0-0.828125-0.6713867-1.5-1.5-1.5   h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099648C16.6669922,69.4187698,17.3383789,70.0906448,18.1669922,70.0906448z    M19.6669922,64.8806839h3.2919922v2.2099609h-3.2919922V64.8806839z"/>
          <path d="M29.409668,70.0906448h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099648c0-0.828125-0.6713867-1.5-1.5-1.5H29.409668   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099648C27.909668,69.4187698,28.5810547,70.0906448,29.409668,70.0906448z    M30.909668,64.8806839h3.2919922v2.2099609H30.909668V64.8806839z"/>
          <path d="M40.652832,70.0906448h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099648c0-0.828125-0.6713867-1.5-1.5-1.5H40.652832   c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099648C39.152832,69.4187698,39.8242188,70.0906448,40.652832,70.0906448z    M42.152832,64.8806839h3.2919922v2.2099609H42.152832V64.8806839z"/>
          <path d="M72.4223633,52.3142738h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609c0,0.828125,0.6713867,1.5,1.5,1.5   h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609C73.9223633,52.9861488,73.2509766,52.3142738,72.4223633,52.3142738z    M70.9223633,57.5242348h-3.2919922v-2.2099609h3.2919922V57.5242348z"/>
          <path d="M83.6650391,52.3142738h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099609c0,0.828125,0.6713867,1.5,1.5,1.5   h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099609C85.1650391,52.9861488,84.4936523,52.3142738,83.6650391,52.3142738z    M82.1650391,57.5242348h-3.2919922v-2.2099609h3.2919922V57.5242348z"/>
          <path d="M72.4223633,61.8806801h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099648c0,0.828125,0.6713867,1.5,1.5,1.5   h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099648C73.9223633,62.5525551,73.2509766,61.8806801,72.4223633,61.8806801z    M70.9223633,67.0906448h-3.2919922v-2.2099609h3.2919922V67.0906448z"/>
          <path d="M83.6650391,61.8806801h-6.2919922c-0.8286133,0-1.5,0.671875-1.5,1.5v5.2099648c0,0.828125,0.6713867,1.5,1.5,1.5   h6.2919922c0.8286133,0,1.5-0.671875,1.5-1.5v-5.2099648C85.1650391,62.5525551,84.4936523,61.8806801,83.6650391,61.8806801z    M82.1650391,67.0906448h-3.2919922v-2.2099609h3.2919922V67.0906448z"/>
          <path d="M26.8310547,19.7547035h10.9335938c0.8286133,0,1.5-0.671875,1.5-1.5s-0.6713867-1.5-1.5-1.5H26.8310547   c-0.8286133,0-1.5,0.671875-1.5,1.5S26.0024414,19.7547035,26.8310547,19.7547035z"/>
          <path d="M26.8310547,24.4998207h10.9335938c0.8286133,0,1.5-0.671875,1.5-1.5s-0.6713867-1.5-1.5-1.5H26.8310547   c-0.8286133,0-1.5,0.671875-1.5,1.5S26.0024414,24.4998207,26.8310547,24.4998207z"/>
          <path d="M26.8310547,29.2449379h10.9335938c0.8286133,0,1.5-0.671875,1.5-1.5s-0.6713867-1.5-1.5-1.5H26.8310547   c-0.8286133,0-1.5,0.671875-1.5,1.5S26.0024414,29.2449379,26.8310547,29.2449379z"/>
          <path d="M49.6264648,88.7068558h2.9912109c0.8286133,0,1.5-0.671875,1.5-1.5s-0.6713867-1.5-1.5-1.5h-2.9912109   c-0.8286133,0-1.5,0.671875-1.5,1.5S48.7978516,88.7068558,49.6264648,88.7068558z"/>
        </g>
      </svg>
    )
  }
};

class UserIcon extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox="0 0 100 100">
        <g transform="translate(0,-952.36218)">
          <path d="m 50,957.36218 c -24.81728,0 -44.9999998,20.1827 -44.9999998,45.00002 0,24.8173 20.1827198,45 44.9999998,45 24.81728,0 45,-20.1827 45,-45 0,-24.81732 -20.18272,-45.00002 -45,-45.00002 z m 0,6 c 21.57464,0 39,17.4254 39,39.00002 0,8.909 -2.9921,17.0971 -8,23.6562 l 0,-3.6562 c 0,-8.2581 -6.7419,-15 -15,-15 l -32,0 c -8.2581,0 -15,6.7419 -15,15 l 0,3.6562 c -5.0079,-6.5591 -8,-14.7472 -8,-23.6562 0,-21.57462 17.42536,-39.00002 39,-39.00002 z m 0,3 c -9.58493,0 -17,8.7448 -17,19 0,10.25521 7.41507,19.00002 17,19.00002 9.58493,0 17,-8.74481 17,-19.00002 0,-10.2552 -7.41507,-19 -17,-19 z m 0,6 c 5.87905,0 11,5.5821 11,13 0,7.41791 -5.12095,13.00001 -11,13.00001 -5.87905,0 -11,-5.5821 -11,-13.00001 0,-7.4179 5.12095,-13 11,-13 z m -16,41.00002 32,0 c 5.03788,0 9,3.9621 9,9 l 0,9.9375 c -6.76542,5.6517 -15.47378,9.0625 -25,9.0625 -9.52622,0 -18.23458,-3.4108 -25,-9.0625 l 0,-9.9375 c 0,-5.0379 3.96212,-9 9,-9 z"
            visibility="visible"
            display="inline"
            overflow="visible"
          />
        </g>
      </svg>
    )
  }
};

class Shop extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox="0 0 102 105">
        <g display="none">
          <rect x="-246" y="-495" display="inline" width="1156" height="606.478"/>
        </g>
        <g>
          <path d="M6.144,61.005l0.116,0.052l0.026,0.126c0.557,2.723,2.98,4.699,5.761,4.699c3.174,0,5.752-2.487,5.87-5.663l0.009-0.241   H20.4l0.046,0.19c0.476,1.947,1.883,3.53,3.764,4.233l0.163,0.061v24.149h-4.105v4.105h-9.608v2.182h11.79v-4.105h4.105V64.786   l0.231-0.018c1.692-0.129,3.264-0.975,4.313-2.319l0.195-0.25l0.198,0.247c1.204,1.508,3.014,2.372,4.965,2.372   c1.975,0,3.798-0.882,5.002-2.419l0.194-0.248l0.197,0.246c1.249,1.556,3.145,2.447,5.203,2.447c1.997,0,3.857-0.848,5.106-2.325   l0.193-0.229l0.19,0.231c1.204,1.46,2.993,2.297,4.908,2.297c1.957,0,3.77-0.868,4.974-2.382l0.193-0.243l0.196,0.24   c1.248,1.532,3.132,2.411,5.169,2.411c1.933,0,3.755-0.803,5-2.203l0.191-0.215l0.186,0.219c1.057,1.245,2.533,1.999,4.156,2.123   l0.231,0.018v26.008h4.106v4.105h11.789v-2.182h-2.807v-5.113l0.199-0.042c2.836-0.593,4.844-3.228,4.67-6.129   c-0.151-2.517-2.001-4.661-4.369-5.318c1.656-0.618,2.844-2.202,2.844-4.071c0-2.402-1.955-4.357-4.358-4.357   s-4.357,1.955-4.357,4.357c0,1.873,1.194,3.459,2.856,4.074c-0.982,0.258-1.892,0.747-2.636,1.48   c-1.132,1.116-1.755,2.606-1.755,4.196c0,2.774,1.968,5.2,4.681,5.768l0.199,0.042v5.112h-4.773v-4.105h-4.106V64.462l0.163-0.061   c2.358-0.882,3.943-3.16,3.943-5.669V40.711H59.902l0.7-0.459c1.818-1.192,3.404-2.749,4.712-4.625l0.075-0.107h5.423   c2.754,0,4.995-2.456,4.995-5.476s-2.241-5.477-4.995-5.477h-1.961l0.006-0.32l0.002-4.064H35.442V24.2   c0,6.551,3.159,12.702,8.244,16.053l0.696,0.459H20.267v17.085h-2.853c-0.911,0-1.652,0.741-1.652,1.652l-0.023,0.803   c-0.129,1.924-1.735,3.449-3.691,3.449c-1.517,0-2.903-0.959-3.448-2.388l-0.084-0.219l0.213-0.098   c1.369-0.626,2.094-2.097,1.762-3.575c-0.254-1.136-1.185-2.073-2.315-2.335c-0.962-0.222-1.945-0.005-2.7,0.596   c-0.757,0.603-1.191,1.499-1.191,2.462C4.285,59.373,5.015,60.496,6.144,61.005z M87.491,72.044c0-1.285,1.045-2.33,2.33-2.33   c1.285,0,2.331,1.045,2.331,2.33s-1.045,2.331-2.331,2.331C88.537,74.375,87.491,73.33,87.491,72.044z M85.955,81.795   c0-2.132,1.734-3.866,3.866-3.866s3.866,1.734,3.866,3.866s-1.734,3.866-3.866,3.866S85.955,83.927,85.955,81.795z M74.101,42.893   h7.752v15.84c0,2.138-1.739,3.876-3.876,3.876s-3.876-1.738-3.876-3.876V42.893z M63.671,42.893h8.248v16.461   c0,0.676-0.24,1.314-0.675,1.796c-0.805,0.894-1.994,1.406-3.262,1.406c-2.337,0-4.312-1.751-4.312-3.823V42.893z M61.489,42.893   l-0.015,16.09c-0.148,2.035-1.898,3.6-4.024,3.6c-2.282,0-4.209-1.763-4.209-3.85v-15.84H61.489z M66.872,32.98   c0.906-1.884,1.509-3.907,1.792-6.014l0.029-0.217h2.119c1.551,0,2.813,1.479,2.813,3.295s-1.262,3.294-2.813,3.294h-4.113   L66.872,32.98z M37.623,24.2v-1.835h29.054V24.2c0,0.488-0.032,0.967-0.061,1.376c-0.22,2.984-1.159,5.841-2.716,8.263   c-1.545,2.414-4.12,5.146-6.535,6.317h-9.599C41.48,37.75,37.623,30.809,37.623,24.2z M42.811,42.893h8.249L51.044,59.94   c-0.58,1.564-2.184,2.615-3.992,2.615c-2.378,0-4.241-1.631-4.241-3.713V42.893z M32.382,42.893h8.248v15.84   c0,2.087-1.912,3.85-4.174,3.85c-2.247,0-4.074-1.727-4.074-3.85V42.893z M22.448,42.893H30.2v15.84   c-0.102,2.106-1.877,3.876-3.876,3.876c-2.137,0-3.875-1.738-3.875-3.876V42.893z M7.429,57.182c0.53,0,0.962,0.432,0.962,0.962   s-0.432,0.962-0.962,0.962s-0.962-0.432-0.962-0.962S6.899,57.182,7.429,57.182z"/>
          <path d="M72.401,66.714H31.9v25.447h15.867v-8.211h24.634V66.714z M45.585,89.98H34.081V68.896h11.504V89.98z M70.219,81.769   H47.767V68.896h22.453V81.769z"/>
          <path d="M43.661,70.821h-7.656v10.393h7.656V70.821z M41.48,79.032h-3.293v-6.029h3.293V79.032z"/>
          <path d="M40.629,25.178c0.059,3.608,1.383,7.004,3.75,9.612l1.59-1.495c-1.986-2.203-3.101-5.067-3.158-8.117H40.629z"/>
          <rect x="46.954" y="9.207" width="2.182" height="7.712"/>
          <rect x="51.06" y="5.101" width="2.182" height="10.448"/>
          <rect x="55.165" y="9.207" width="2.182" height="7.712"/>
          <rect x="49.714" y="92.794" width="2.237" height="2.027"/>
          <rect x="56.556" y="92.794" width="2.237" height="2.027"/>
          <rect x="63.399" y="92.794" width="2.237" height="2.027"/>
          <rect x="70.242" y="92.794" width="2.237" height="2.027"/>
          <rect x="77.085" y="92.794" width="2.237" height="2.027"/>
          <rect x="36.028" y="84.583" width="2.237" height="2.027"/>
          <rect x="54.389" y="70.568" transform="matrix(0.5999 0.8001 -0.8001 0.5999 81.1991 -14.8834)" width="2.182" height="6.343"/>
          <rect x="54.361" y="74.701" transform="matrix(-0.8 0.6 -0.6 -0.8 155.1935 99.8512)" width="13.186" height="2.182"/>
          <path d="M18.867,74.739c0-4.351-2.97-7.891-6.621-7.891s-6.621,3.54-6.621,7.891s2.97,7.891,6.621,7.891   S18.867,79.09,18.867,74.739z M11.36,71.436c0.156-0.665,0.504-1.26,0.958-1.633c0.216-0.178,0.654-0.463,1.152-0.345   c0.299,0.07,0.609,0.089,0.919,0.067c1.471,0.987,2.478,2.952,2.478,5.214c0,2.068-0.842,3.887-2.11,4.938   c0.045-0.14,0.099-0.276,0.133-0.422c0.595-2.543-0.953-3.922-2.083-4.928C11.652,73.299,11.063,72.704,11.36,71.436z    M11.729,80.591c-2.305-0.329-4.104-2.826-4.104-5.851c0-2.171,0.928-4.066,2.303-5.088c-0.223,0.411-0.405,0.854-0.516,1.329   c-0.581,2.485,0.948,3.846,2.064,4.84c1.176,1.048,1.775,1.656,1.466,2.979c-0.156,0.666-0.501,1.255-0.962,1.629   C11.91,80.489,11.819,80.539,11.729,80.591z"/>
          <polygon points="28.33,58.09 24.16,58.09 26.245,60.846  "/>
          <polygon points="38.722,58.09 34.552,58.09 36.637,60.846  "/>
          <polygon points="49.113,58.09 44.943,58.09 47.028,60.846  "/>
          <polygon points="59.505,58.09 55.335,58.09 57.42,60.846  "/>
          <polygon points="69.897,58.09 65.727,58.09 67.812,60.846  "/>
          <polygon points="80.289,58.09 76.119,58.09 78.204,60.846  "/>
        </g>
      </svg>
    )
  }
};

class WavedAccountingSheet extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox="0 0 70 70">
        <g>
          <rect x="13.7" y="8.5" width="20.8" height="1.5"/>
          <rect x="13.7" y="12.8" width="16.5" height="1.5"/>
          <rect x="29.4" y="45.1" width="10.1" height="1.5"/>
          <rect x="29.4" y="49.5" width="20.5" height="1.5"/>
          <path d="M65,40V13.3H43.6v5.4l-3.5,0l0-11.5c0-2.6-2.1-4.7-4.7-4.8l-30.1,0v0.1c-0.1,0-0.3,0-0.4,0C2.2,2.4,0,4.6,0,7.2V9h8.1v19.9   H3.7c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7h4.5l0,7.1c0,2.7,2.2,4.8,4.8,4.8h11.5l0,11.5c0,2.7,2.2,4.8,4.8,4.8   c0,0,0,0,0,0l30,0c2.4,0,4.2-1.9,4.2-4.5c0-0.4,0-1.4,0-1.4l0-0.7h-7V40H65z M45.1,14.8h18.5v23.7H45.1V14.8z M8.1,7.5H1.5V7.2   c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3V7.5z M9.6,7.2c0-1.3-0.5-2.5-1.4-3.3l27,0c1.8,0,3.3,1.5,3.3,3.3l0,11.5l-17,0v0.1   c-0.1,0-0.3,0-0.4,0c-2.7,0-4.8,2.2-4.8,4.8l0,5.4H9.6L9.6,7.2z M24.4,23.6l0,5.4h-6.6l0-5.4c0-1.8,1.5-3.3,3.3-3.3   C22.9,20.2,24.4,21.7,24.4,23.6z M2.4,31.6c0-0.7,0.6-1.2,1.2-1.2h22.9l0,2.5H3.7C3,32.9,2.4,32.3,2.4,31.6z M29.3,30.4l2.5,1.2   l-2.5,1.2h-1.2l0-2.5H29.3z M9.6,41.4l0-7.1h6.6l0,7.1c0,1.8-1.5,3.3-3.3,3.3S9.6,43.3,9.6,41.4z M16.4,44.8c0.8-0.9,1.3-2,1.3-3.3   l0-7.1h6.6l0,10.4H16.4z M61.9,58.1c0,1.7-1.1,3-2.7,3l-26.5,0c0.8-0.9,1.3-2,1.3-3.3c0-0.1,0-0.2,0-0.3h27.9   C61.9,57.7,61.9,58,61.9,58.1z M54.8,56H33.3l-1,0.2l0.2,0.8c0.1,0.2,0.1,0.6,0.1,0.9c0,1.8-1.5,3.3-3.3,3.3   c-1.8,0-3.3-1.5-3.3-3.3l0-23.4h3.7l5.5-2.7l-5.5-2.7h-3.7l0-5.4c0-1.3-0.5-2.5-1.4-3.3l19,0V40h11.2V56z"/>
          <path d="M46.4,22.9h15.8v-6.4H46.4V22.9z M47.9,18h12.9v3.5H47.9V18z"/>
          <rect x="47.8" y="33.5" width="4.2" height="1.5"/>
          <rect x="57.9" y="35.7" width="1.5" height="1.5"/>
          <rect x="56.1" y="33.5" width="5.1" height="1.5"/>
          <rect x="57.9" y="31.3" width="1.5" height="1.5"/>
          <polygon points="50.6,25 49.1,25 49.1,26.3 47.8,26.3 47.8,27.8 49.1,27.8 49.1,29.2 50.6,29.2 50.6,27.8 52,27.8 52,26.3    50.6,26.3  "/>
          <polygon points="57.7,29.1 58.7,28.1 59.6,29.1 60.7,28.1 59.7,27.1 60.7,26.1 59.6,25.1 58.7,26 57.7,25.1 56.7,26.1 57.6,27.1    56.7,28.1  "/>
        </g>
      </svg>
    )
  }
};

class ValidationIcons extends Component {
  render() {
    if (this.props.validation) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ colors.yesGreen } x="0px" y="0px" viewBox="-949 951 100 100">
          <switch>
            <foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/>
            <g>
              <path d="M-899,953.5c-26.2,0-47.5,21.3-47.5,47.5s21.3,47.5,47.5,47.5s47.5-21.3,47.5-47.5S-872.8,953.5-899,953.5z M-871.4,991.2    l-30.5,30.5c-0.7,0.7-1.6,1.1-2.5,1.1c-0.9,0-1.8-0.4-2.5-1.1l-16.8-16.8c-1.4-1.4-1.4-3.7,0-5.1c1.4-1.4,3.7-1.4,5.1,0l14.2,14.2    l28-28c1.4-1.4,3.7-1.4,5.1,0C-870,987.5-870,989.8-871.4,991.2z"/>
            </g>
          </switch>
        </svg>
      )
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ colors.noRed } x="0px" y="0px" viewBox="-949 951 100 100">
        <switch>
          <foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/>
          <g>
            <path d="M-899,953.5c-26.2,0-47.5,21.3-47.5,47.5s21.3,47.5,47.5,47.5s47.5-21.3,47.5-47.5S-872.8,953.5-899,953.5z     M-876.6,1018.3c1.4,1.4,1.4,3.7,0,5.1c-0.7,0.7-1.6,1.1-2.5,1.1c-0.9,0-1.8-0.4-2.5-1.1l-17.3-17.3l-17.3,17.3    c-0.7,0.7-1.6,1.1-2.5,1.1c-0.9,0-1.8-0.4-2.5-1.1c-1.4-1.4-1.4-3.7,0-5.1l17.3-17.3l-17.3-17.3c-1.4-1.4-1.4-3.7,0-5.1    c1.4-1.4,3.7-1.4,5.1,0l17.3,17.3l17.3-17.3c1.4-1.4,3.7-1.4,5.1,0c1.4,1.4,1.4,3.7,0,5.1l-17.3,17.3L-876.6,1018.3z"/>
          </g>
        </switch>
        </svg>
      )
    }
  }
};

class CashFlowIcons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewBox: "10 10 80 80",
    }
  }

  render () {
    if (this.props.direction === 'IN' || this.props.type) {
      return (
        <svg
          width={ this.props.width || "100%" }
          fill={ colors.yesGreen }
          x="0px"
          y="0px"
          viewBox={ this.state.viewBox }>
          <switch>
            <foreignObject
              requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
              x="0"
              y="0"
              width="1"
              height="1"/>
            <g>
              <path
                width="100%"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M79.981,77.625H20.019c-1.689,0-3.058-1.369-3.058-3.058v-1.138  c0-1.689,1.369-3.058,3.058-3.058h5.321c-3.737-5.006-5.981-11.189-5.981-17.917c0-16.612,13.466-30.078,30.078-30.078  c16.611,0,30.077,13.466,30.077,30.078c0,6.728-2.243,12.911-5.981,17.917h6.447c1.689,0,3.058,1.369,3.058,3.058v1.138  C83.04,76.255,81.67,77.625,79.981,77.625z M72.24,52.571c0.065-12.594-10.091-22.855-22.685-22.921  C36.962,29.585,26.7,39.741,26.635,52.335c-0.038,7.324,3.395,13.84,8.744,18.034h28.115C68.781,66.226,72.202,59.812,72.24,52.571z   M33.76,52.966v-1.138c0-1.689,1.369-3.058,3.058-3.058h8.953v-8.954c0-1.689,1.369-3.058,3.058-3.058h1.139  c1.689,0,3.058,1.369,3.058,3.058v8.954h8.954c1.689,0,3.058,1.369,3.058,3.058v1.138c0,1.689-1.369,3.058-3.058,3.058h-8.954v8.954  c0,1.689-1.369,3.058-3.058,3.058H48.83c-1.689,0-3.058-1.369-3.058-3.058v-8.954h-8.953C35.13,56.025,33.76,54.655,33.76,52.966z"/>
            </g>
          </switch>
        </svg>
      )
    } else {
      return (
        <svg
          width={ this.props.width || "100%" }
          fill={ colors.noRed }
          x="0px"
          y="0px"
          viewBox={ this.state.viewBox }>
          <path
            width="100%"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M79.981,77.625H20.019c-1.689,0-3.058-1.369-3.058-3.058v-1.138  c0-1.689,1.369-3.058,3.058-3.058h5.321c-3.737-5.006-5.981-11.189-5.981-17.917c0-16.612,13.466-30.078,30.078-30.078  c16.611,0,30.077,13.466,30.077,30.078c0,6.728-2.243,12.911-5.98,17.917h6.447c1.689,0,3.058,1.369,3.058,3.058v1.138  C83.04,76.255,81.67,77.625,79.981,77.625z M72.24,52.571c0.065-12.594-10.091-22.855-22.684-22.921  C36.962,29.585,26.7,39.741,26.635,52.335c-0.038,7.324,3.395,13.84,8.744,18.034h28.115C68.781,66.226,72.202,59.812,72.24,52.571z   M33.761,52.966v-1.138c0-1.689,1.369-3.058,3.058-3.058h25.162c1.689,0,3.058,1.369,3.058,3.058v1.138  c0,1.689-1.369,3.058-3.058,3.058H36.819C35.13,56.025,33.761,54.655,33.761,52.966z"/>
        </svg>
      )
    }
  }
};

class CircledArrow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewBox: "0 0 90 90",
    }
  }
  render () {
    if (this.props.direction) {
      if (this.props.filled) {
        switch (this.props.direction) {
          case "up":
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                <path d="M44.9,80c19.4,0,35-15.6,35-35s-15.6-35-35-35s-35,15.6-35,35C9.9,64.4,25.6,80,44.9,80z M31.4,48.1  l13.8-16.2l13.7,16.2c0.8,0.9,0.7,2.3-0.2,3.1c-0.9,0.8-2.3,0.7-3.1-0.2L45.2,38.7L34.8,50.9c-0.8,0.9-2.2,1-3.1,0.2  C30.7,50.4,30.6,48.9,31.4,48.1z"/>
              </svg>
            )
          case "right":
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                <path d="M9.9,45c0,19.4,15.6,35,35,35s35-15.6,35-35s-15.6-35-35-35S9.9,25.6,9.9,45z M41.9,31.4l16.2,13.8  L41.9,58.9c-0.9,0.8-2.3,0.7-3.1-0.2c-0.8-0.9-0.7-2.3,0.2-3.1l12.3-10.4L39,34.8c-0.9-0.8-1-2.2-0.2-3.1  C39.6,30.8,41,30.7,41.9,31.4z"/>
              </svg>
            )
          case "down":
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                <path d="M44.9,10c-19.4,0-35,15.6-35,35s15.6,35,35,35s35-15.6,35-35S64.3,10,44.9,10z M58.5,41.9L44.7,58.1L31,41.9  c-0.8-0.9-0.7-2.3,0.2-3.1c0.9-0.8,2.3-0.7,3.1,0.2l10.4,12.3l10.4-12.3c0.8-0.9,2.2-1,3.1-0.2C59.2,39.6,59.3,41.1,58.5,41.9z"/>
              </svg>
            )
          case "left":
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                <path d="M80,45c0-19.4-15.6-35-35-35s-35,15.6-35,35c0,19.4,15.6,35,35,35S80,64.4,80,45z M48,58.6L31.8,44.8  L48,31.1c0.9-0.8,2.3-0.7,3.1,0.2c0.8,0.9,0.7,2.3-0.2,3.1L38.6,44.8l12.3,10.4c0.9,0.8,1,2.2,0.2,3.1C50.3,59.2,48.9,59.3,48,58.6z  "/>
              </svg>
            )
          default: return new Error("Error no arrow could be created. Make sure you used the right properties.");
          }
        } else {
          switch (this.props.direction) {
            case "up":
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                  <g>
                    <path d="M45.2,31.9l13.7,16.2c0.8,0.9,0.7,2.3-0.2,3.1c-0.9,0.8-2.3,0.7-3.1-0.2L45.2,38.7L34.8,50.9   c-0.8,0.9-2.2,1-3.1,0.2c-0.9-0.8-1-2.2-0.2-3.1L45.2,31.9z"/>
                    <path d="M44.9,10c19.3,0,35,15.8,35,35s-15.8,35-35,35s-35-15.8-35-35S25.7,10,44.9,10z M44.9,75.6   c16.9,0,30.6-13.8,30.6-30.6S61.8,14.4,44.9,14.4S14.3,28.2,14.3,45S28.1,75.6,44.9,75.6z"/>
                  </g>
                </svg>
              )
            case "right":
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                  <g>
                    <path d="M58.1,45.2L41.9,58.9c-0.9,0.8-2.3,0.7-3.1-0.2c-0.8-0.9-0.7-2.3,0.2-3.1l12.3-10.4L39,34.8   c-0.9-0.8-1-2.2-0.2-3.1c0.8-0.9,2.2-1,3.1-0.2L58.1,45.2z"/>
                    <path d="M80,45c0,19.3-15.8,35-35,35s-35-15.8-35-35s15.8-35,35-35S80,25.7,80,45z M14.3,45   c0,16.9,13.8,30.6,30.6,30.6S75.6,61.9,75.6,45S61.8,14.4,44.9,14.4S14.3,28.2,14.3,45z"/>
                  </g>
                </svg>
              )
            case "down":
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                  <g>
                    <path d="M44.7,58.1L31,41.9c-0.8-0.9-0.7-2.3,0.2-3.1c0.9-0.8,2.3-0.7,3.1,0.2l10.4,12.3l10.4-12.3   c0.8-0.9,2.2-1,3.1-0.2c0.9,0.8,1,2.2,0.2,3.1L44.7,58.1z"/>
                    <path d="M44.9,80c-19.3,0-35-15.8-35-35s15.8-35,35-35s35,15.8,35,35S64.2,80,44.9,80z M44.9,14.4   c-16.9,0-30.6,13.8-30.6,30.6s13.8,30.6,30.6,30.6S75.6,61.9,75.6,45S61.8,14.4,44.9,14.4z"/>
                  </g>
                </svg>
              )
            case "left":
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width={ this.props.width || "100%" } fill={ this.props.color || "black" } x="0px" y="0px" viewBox={ this.state.viewBox }>
                  <g>
                    <path d="M31.8,44.8L48,31.1c0.9-0.8,2.3-0.7,3.1,0.2c0.8,0.9,0.7,2.3-0.2,3.1L38.6,44.8l12.3,10.4   c0.9,0.8,1,2.2,0.2,3.1s-2.2,1-3.1,0.2L31.8,44.8z"/>
                    <path d="M9.9,45c0-19.3,15.8-35,35-35s35,15.8,35,35s-15.8,35-35,35S9.9,64.3,9.9,45z M75.6,45   c0-16.9-13.8-30.6-30.6-30.6S14.3,28.2,14.3,45s13.8,30.6,30.6,30.6S75.6,61.9,75.6,45z"/>
                  </g>
                </svg>
              )
            default: return new Error("Error no arrow could be created. Make sure you used the right properties.");
          }
        }
    } else {
      return new Error("Circled Arrow needs a direction to show.");
    }
  }
}

export {
  TrashCan,
  HomeHouse,
  CashStation,
  UserIcon,
  Shop,
  WavedAccountingSheet,
  ValidationIcons,
  CashFlowIcons,
  CircledArrow
}
