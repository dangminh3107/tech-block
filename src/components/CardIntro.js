import React from 'react'
import "aos/dist/aos.css";
import styled from 'styled-components'

const Card = styled.div`
  height: 450px;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 20px #003091;
  .card-img {
    background: #0049FF;
    max-height: 224px;
    border-radius: 10px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  p {
    padding: 30px 25px 0;
    text-align: justify;
    font-size: 18px;
    line-height: 26px;
    color: #003091;
    font-weight: 500;
    span {
      font-weight: bold;
    }
  }
`;

function CardIntro(props) {
  const createMarkup = () => {
    return {__html: props.intro}
  }
  return (
    <Card data-aos="fade-up">
      <div className="card-img">
        <img src={props.card} alt="" />
      </div>
      <p dangerouslySetInnerHTML={createMarkup()}>
      </p>
    </Card>
  )
}

export default CardIntro