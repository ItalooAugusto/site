import React from 'react';
import Img1 from '../../assets/img1.webp';
import './styles.css';


export default function Main() {
  return (
    <section>

      <div className="galeria">
        <img src={Img1} alt="" className="imagens" />
        <h3>Carro 1</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src="" alt="" className="imagens" />
        <h3>Carro 2</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src="" alt="" className="imagens" />
        <h3>Carro 3</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src="" alt="" className="imagens" />
        <h3>Carro 4</h3>
        <p>Valor: R$</p>

      </div>
      <div className="galeria">
        <img src="" alt="" className="imagens" />
        <h3>Carro 5</h3>
        <p>Valor: R$</p>

      </div>

<hr></hr>

    </section>

  );
}
