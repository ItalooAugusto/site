import React from 'react';
import Img1 from '../../assets/img1.webp';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.webp';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import './styles.css';


export default function Main() {
  return (
    <section>

      <div className="galeria">
        <img src={Img1} className="imagens" />
        <h3>Carro 1</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img2} className="imagens" />
        <h3>Carro 2</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img3} className="imagens" />
        <h3>Carro 3</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img4} className="imagens" />
        <h3>Carro 4</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src={Img5} className="imagens" />
        <h3>Carro 5</h3>
        <p>Valor: R$</p>

      </div>



    </section>

  );
}
