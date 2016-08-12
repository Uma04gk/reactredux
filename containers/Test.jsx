
import React, { Component } from 'react';
import Styles from './Style.less';

class Test extends Component {

    constructor() {
      super();
      this.state = {
        url: 'http://clipartix.com/wp-content/uploads/2016/05/T-shirt-clipart-black-shirt.png',
      };
    }

    handleClick1() {
      this.setState(
        {
          url: 'http://clipartix.com/wp-content/uploads/2016/05/T-shirt-clipart-black-shirt.png',
        });
    }
    handleClick2() {
      this.setState(
        {
          url: 'http://pforf.weebly.com/uploads/4/9/2/9/49298831/s218566430444065912_p8_i4_w900.jpeg',
        });
    }

   handleClick3() {
     this.setState( {
       url: 'http://www.sd44.ca/school/boundary/PublishingImages/10467front-0.jpg',
     });
   }

    handleClick4() {
      this.setState({
        url: 'http://inikweb.com/wp-content/uploads/2015/02/t473kellygreen.jpg',
      });
    }

    render() {
      return (
        <div>
          <div className={Styles. image}>
        <img src={this.state.url} width="20%" height="20%"/></div>
        <p>
          <div className={Styles.button}>
         <button className={Styles.Id1} onClick={this.handleClick1.bind(this)} >BLAC</button>
         <button className={Styles.Id2} onClick={this.handleClick2.bind(this)}>BLUE</button>
         <button className={Styles.Id3} onClick={this.handleClick3.bind(this)}>ORAN</button>
         <button className={Styles.Id4} onClick={this.handleClick4.bind(this)}>GREN</button>
         </div>
         </p>
   </div>
    );
    }
  }


export default Test;
