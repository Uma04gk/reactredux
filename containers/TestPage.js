import React, { Component } from 'react';
import Wearable from './Wearable';
import Wearable2 from './Wearable';
import Wearable3 from './Wearable';


class TestPage extends Component {
component
  render() {
    const all = {
      display: 'inline-block',
      width: '50%'
    };
    return (
        <div>
        <p><br></br>For Him</p>
        <div style= {all}>
        <Wearable title="Casual wear" image="http://charliemenswear.com/wp-content/uploads/2016/03/s901993193701188121_p2_i1_w1300.jpeg" size="[S,M,L]" price="$150"/>
        </div>
        <div style= {all}>
        <Wearable2 title="Formal wear" image="http://www.dncworkwear.com.au/images/hires/4122278.jpg" size="[S,M,L]" price="$100"/>
        </div>
        <div style= {all}>
        <Wearable3 title="Casual wear" image="http://www.trendzystore.com/wp-content/uploads/2016/07/1294768_0_201303281235080000000.jpg" size="[S,M,L]" price="$150"/>
        </div>
        <p><br></br>For Her</p>
        <div style= {all}>
        <Wearable title="Casual wear" image="http://www.rockfrocks.com/images/lindy-bop-grace-classy-red-vintage-1950s-evening-party-dress.jpg" size="[S,M,L]" price="$150"/>
        </div>
        <div style= {all}>
        <Wearable2 title="Casual wear" image="https://s-media-cache-ak0.pinimg.com/236x/41/9c/49/419c4916921a7dc8841356a15a6c71f7.jpg" size="[S M L]" price="$150"/>
        </div>
        <div style= {all}>
        <Wearable3 title="Casual wear" image="http://1.bp.blogspot.com/-GEJi44UJez0/UTyhG61BtbI/AAAAAAAAAEQ/WjzZBevdVSU/s1600/women+in+formal+dress+for+office+(15).jpg" size="[S M L]" price="$150"/>
        </div>
      </div>
        );
  }
    }
export default TestPage;
