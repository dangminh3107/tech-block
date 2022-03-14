import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import background7 from "../assets/images/background/bg-7.png";

const BlockDate = styled.div`
  height: 750px;
  background-image: url(${background7});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #003091;
    padding: 30px 0 30px;
    @media (max-width: 1000px) {
      & {
        font-size: 4.5vw;
      }
    }
  }
  div {
    table {
      text-align: center;
      border-spacing: 10px;
      th {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: #3a3aa4;
        letter-spacing: 1px;
        border: 2px solid #fff;
        box-shadow: 2px 0px 5px #848080;
        @media (max-width: 724px) {
          & {
            font-size: 2.5vw;
          }
        }
      }
      th:nth-child(1),
      td {
        padding: 20px 25px;
        @media (max-width: 724px) {
          & {
            padding: 2vw;
          }
        }
        @media (max-width: 680px) {
          & {
            padding: 1vw;
          }
        }
      }
      th:nth-child(2) {
        max-width: 350px;
        padding: 30px 60px;
        @media (max-width: 680px) {
          & {
            padding: 1vw;
          }
        }
      }
      th:nth-child(3) {
        padding: 30px 20px;
        @media (max-width: 680px) {
          & {
            padding: 1vw;
          }
        }
      }
      th:nth-child(4) {
        padding: 30px 45px;
        @media (max-width: 680px) {
          & {
            padding: 1vw;
          }
        }
      }
      td {
        max-width: 350px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 1px;
        font-weight: 600;
        box-shadow: 3px 3px 6px #848080;
        background-color: #fff;
        @media (max-width: 724px) {
          & {
            font-size: 2.5vw;
          }
        }
      }
      td:nth-child(3),
      td:nth-child(4) {
        font-weight: bold;
        letter-spacing: 1px;
      }
      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 680px) {
    height: 600px;
  }
  @media (max-width: 1100px) {
    background-size: cover;
  }
`;

function BlockDateRelease() {
  const infoTable = [
    {
      number: 1,
      dateRelease: "TỪ 15/07/2021 ĐẾN NGÀY 18/07/2021",
      token: "5 TRIỆU TOKEN",
      price: "$0.036",
    },
    {
      number: 2,
      dateRelease: "TỪ 22/07/2021 ĐẾN NGÀY 25/07/2021",
      token: "10 TRIỆU TOKEN",
      price: "$0.043",
    },
    {
      number: 3,
      dateRelease: "TỪ 29/07/2021 ĐẾN NGÀY 01/08/2021",
      token: "25 TRIỆU TOKEN",
      price: "$0.062",
    },
    {
      number: 4,
      dateRelease: "TỪ 05/08/2021 ĐẾN NGÀY 08/08/2021",
      token: "30 TRIỆU TOKEN",
      price: "$0.075",
    },
    {
      number: 5,
      dateRelease: "TỪ 12/08/2021 ĐẾN NGÀY 15/08/2021",
      token: "50 TRIỆU TOKEN",
      price: "$0.104",
    },
  ];
  return (
    <BlockDate>
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        PHÁT HÀNH ITO
      </h1>
      <div>
        <table className="table">
          <tbody>
            <tr data-aos="fade-up" data-aos-duration="1500">
              <th>ROUND</th>
              <th>THỜI GIAN PHÁT HÀNH</th>
              <th>SỐ LƯỢNG PHÁT HÀNH</th>
              <th>ĐƠN GIÁ</th>
            </tr>
            {infoTable.map((item, index) => {
              return (
                <tr key={index} data-aos="fade-up" data-aos-duration="1500">
                  <td>{item.number}</td>
                  <td>{item.dateRelease}</td>
                  <td>{item.token}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BlockDate>
  );
}

export default BlockDateRelease;
