import React from "react";



import "./presentation.scss";
import avatar from "../../assets/img/moi.png";
import cv from "../../assets/resume/CV-Nicolas_Vitry.pdf";

const Presentation = () => {

  

  return (
    <div className="presentation">
      <div className="presentation__top">
        <h2 className="presentation__top__title">A propos de moi</h2>
      </div>
      <div className="presentation__bottom">
        <div className="presentation__bottom__img">
          <img src={avatar} alt="moi" className="" />
        </div>
        <div className="presentation__bottom__text">
          <div className="presentation__bottom__text__title">
            Voici le titre de la section
          </div>
          <p>
            Lorem ipsum dolor sit amet. Nam ducimus ullam ut iusto placeat aut
            neque voluptates est dolore eum omnis voluptas eos autem
            consequuntur est dolores quia? Et blanditiis unde ea vero quia ea
            velit molestiae At velit dolor nam voluptatibus eveniet. Vel numquam
            quia eos voluptatem voluptatibus aut recusandae culpa sit
            consequatur tenetur et harum minima. Non totam quod aut culpa illum
            et illum quia
          </p>
          <div className="presentation__bottom__text__resume">
            <a href={cv} download>
              <button>Télécharger mon CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
