import React, { Component } from 'react';
import Wearable4 from './Wearable';
import Test from './Test';
import Styles from './Style.less';


class BootS extends Component {
component
  render() {
    return (
        <div>
          <div className={Styles.Him}>
        For Him
      </div>
        <Test/>
        <div className= {Styles.All}>
        <Wearable4 title="Casual wear" size= "[S,M,L]" price="$150"/>
      </div>
        </div>
        );
  }
    }
export default BootS;
