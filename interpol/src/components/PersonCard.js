import React from "react";

class PersonCard extends React.Component {
  render() {
    // console.log(data._embedded.notices[0]);
    // console.log(data._embedded.notices[0]._links.thumbnail.href);
    const { card } = this.props;
    
    const getAge = () => {
      const today = new Date().getFullYear();
      const birthDate = new Date(card.date_of_birth).getFullYear();
      return (today - birthDate);
    }
    // const image = card._links.thumbnail.href;
    // console.log(image);
    
    return <div className='card'>
      {/* <img src={JSON.parse(JSON.stringify(image))} alt='' /> */}
      <div>{card.forename} {card.name}</div>
      <div>Age: {getAge()}</div>
      <div>Country: {card.nationalities}</div>
    </div>
  }
}

export default PersonCard;