import React from 'react';
import Img1 from '../../assets/img1.webp';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.webp';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import { Jumbotron, Button } from 'react-bootstrap';
import './styles.css';


export default function Main() {
  return (
    <>
    <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>

    <section>

      <div className="galeria">
        <img src={Img1} alt="" className="imagens" />
        <h3>Carro 1</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img2} alt="" className="imagens" />
        <h3>Carro 2</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img3} alt="" className="imagens" />
        <h3>Carro 3</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img4} alt="" className="imagens" />
        <h3>Carro 4</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img5} alt="" className="imagens" />
        <h3>Carro 5</h3>
        <p>Valor: R$</p>

      </div>

<hr></hr>

    </section>
</>

  );
}
