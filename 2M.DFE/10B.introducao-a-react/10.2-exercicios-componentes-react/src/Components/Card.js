import React from "react";

class Card extends React.Component {
  render(){
    const { PropriedadesData } = this.props;
    const { imageUrl, name, title } = PropriedadesData;
    return(
      <article>
        {/* <img src={this.props.imagem} alt="" />
        <h3>{this.props.modulo}</h3>
        <h2>{this.props.nome}</h2> */}

        {/* <img src={this.props.PropriedadesData.imageUrl} alt="" />
        <h3>{this.props.PropriedadesData.name}</h3>
        <h2>{this.props.PropriedadesData.title}</h2> */}

        {/* <img src={PropriedadesData.imageUrl} alt="" />
        <h3>{PropriedadesData.name}</h3>
        <h2>{PropriedadesData.title}</h2> */}

        <img src={imageUrl} alt="" />
        <h3>{name}</h3>
        <h2>{title}</h2>
        
      </article>
    );
  }
}

export default Card;
