import React, { Component } from 'react';

import './home.css';
export default class Home extends Component {
  state = {
    data:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusantium fuga, vel eius sed magni tempore totam aliquid, nihil hic explicabo autem eos blanditiis porro veniam nam aliquam minima inventore voluptatum molestiae facilis. Sint recusandae provident rem, quam, nostrum corrupti odit alias modi natus consectetur, distinctio nihil fuga quas quibusdam.',
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="lead">{this.state.data}</h1>
        <div className=" row">
          <div className="mt-2 col">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              impedit natus? Quae doloremque nulla iste ipsam odio, saepe
              adipisci ipsum numquam delectus incidunt, veritatis mollitia ullam
              consequatur minus. At corrupti perferendis harum, ducimus aperiam,
              autem ratione odio aut iusto quis consequatur modi nobis
              dignissimos numquam ea magnam maiores repudiandae? Doloribus!
            </p>
          </div>
          <div className="mt-2 col">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              impedit natus? Quae doloremque nulla iste ipsam odio, saepe
              adipisci ipsum numquam delectus incidunt, veritatis mollitia ullam
              consequatur minus. At corrupti perferendis harum, ducimus aperiam,
              autem ratione odio aut iusto quis consequatur modi nobis
              dignissimos numquam ea magnam maiores repudiandae? Doloribus!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
