import { useState } from 'react';
import Styles from './App.module.css'
import Image from './img/photo.png'

function App() {
  const [showCardList, setShowCardList] = useState(1);

  const card1 = [
    {
      text: "პროდუქტები 1",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 2",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 3",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 4",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 5",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 6",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 7",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 8",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 9",
      price: "15,000$",
      img: Image,
    },
    {
      text: "პროდუქტები 10",
      price: "15,000$",
      img: Image,
    },

  ]
  const card2 = [
    {
      text: "ელექტრონიკა 1",
      price: "35,000$",
    },
    {
      text: "ელექტრონიკა 2",
      price: "35,000$",
    },
    {
      text: "ელექტრონიკა 3",
      price: "35,000$",
    },
    {
      text: "ელექტრონიკა 4",
      price: "35,000$",
    },
    {
      text: "ელექტრონიკა 5",
      price: "35,000$",
    },
  ]
  const card3 = [
    {
      text: "test3",
      price: "55,000$"
    }
  ]
  const card4 = [
    {
      text: "test4",
      price: "105,000$"
    }
  ]
  const list1 = card1.map((a, i) =>
    <div className={Styles.card_container}>
      <h1>{a.text}</h1>
      <img src={a.img} />
      <button>{a.price}</button>
    </div>)
  const list2 = card2.map((a, i) =>
    <div className={Styles.card_container}>
      <h1>{a.text}</h1>
      <img src={a.img} />
      <button>{a.price}</button>
    </div>)
  const list3 = card3.map((a, i) =>
    <div className={Styles.card_container}>
      <h1>{a.text}</h1>
      <img src={a.img} />
      <button>{a.price}</button>
    </div>)
  const list4 = card4.map((a, i) =>
    <div className={Styles.card_container}>
      <h1>{a.text}</h1>
      <img src={a.img} />
      <button>{a.price}</button>
    </div>)
  return (
    <div className={Styles.container}>
      <div className={Styles.left_container}>
        <div className={Styles.logo}>
          <h1 className={Styles.logo_text1}>24/7</h1>
          <h1 className={Styles.logo_text2}>SHOP</h1>
        </div>
        <div className={Styles.cardList}>
          <div className={`${Styles.cards} ${showCardList === 1 ? Styles.selected : ''}`}
            onClick={() => setShowCardList(1)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M15.5001 2C16.0159 1.99995 16.5254 2.11392 16.9921 2.33377C17.4587 2.55361 17.871 2.87389 18.1994 3.27169C18.5279 3.66948 18.7643 4.13496 18.8918 4.6348C19.0193 5.13464 19.0348 5.65649 18.9371 6.163L18.9221 6.229C19.792 6.51921 20.5526 7.06819 21.1021 7.8025C21.6515 8.5368 21.9636 9.4214 21.9966 10.3379C22.0295 11.2544 21.7818 12.1592 21.2865 12.931C20.7912 13.7029 20.072 14.3051 19.2251 14.657L18.1391 21.164C18.1002 21.3975 17.9798 21.6097 17.7993 21.7627C17.6188 21.9158 17.3898 21.9999 17.1531 22H6.84706C6.61035 21.9999 6.38136 21.9158 6.20081 21.7627C6.02027 21.6097 5.89988 21.3975 5.86106 21.164L4.83206 14.994C4.13998 14.9547 3.48286 14.677 2.97238 14.2081C2.46191 13.7391 2.12958 13.1078 2.0319 12.4216C1.93421 11.7353 2.07719 11.0364 2.43654 10.4436C2.79589 9.85085 3.34942 9.40081 4.00306 9.17L4.00006 9C3.99995 7.98741 4.25611 6.99126 4.74469 6.10433C5.23327 5.21741 5.93837 4.46856 6.79432 3.92754C7.65026 3.38653 8.62921 3.07094 9.63998 3.01017C10.6507 2.9494 11.6605 3.14543 12.5751 3.58C12.8929 3.09435 13.3268 2.69557 13.8375 2.41971C14.3482 2.14385 14.9196 1.9996 15.5001 2ZM11.0001 15H9.00006V20H11.0001V15ZM15.0001 15H13.0001V20H15.0001V15ZM17.5001 13C17.8697 13 18.2347 12.918 18.5689 12.76C18.903 12.602 19.1979 12.3718 19.4324 12.0861C19.667 11.8004 19.8352 11.4663 19.925 11.1077C20.0149 10.7492 20.0241 10.3752 19.9521 10.0127C19.88 9.65012 19.7285 9.30807 19.5083 9.01114C19.2882 8.71421 19.005 8.46979 18.679 8.29547C18.3531 8.12116 17.9926 8.02128 17.6234 8.00305C17.2542 7.98481 16.8856 8.04866 16.5441 8.19L16.3691 8.271C15.9076 8.50877 15.3718 8.55783 14.8749 8.40779C14.378 8.25776 13.9588 7.9204 13.7061 7.467L13.6361 7.33C13.3165 6.63443 12.804 6.04517 12.1595 5.63216C11.515 5.21916 10.7655 4.99975 10.0001 5C7.85806 5 6.10906 6.684 6.00506 8.767L6.00006 8.964L6.00306 9.134C6.01013 9.52668 5.90143 9.91274 5.69052 10.244C5.47961 10.5753 5.17582 10.8372 4.81706 10.997L4.66706 11.056C4.44501 11.1351 4.25799 11.2899 4.13893 11.4934C4.01987 11.6968 3.97641 11.9357 4.0162 12.168C4.056 12.4003 4.17649 12.6112 4.35647 12.7633C4.53645 12.9155 4.76436 12.9993 5.00006 13H17.5001Z" fill="white" fill-opacity="0.7" />
            </svg><h1>პროდუქტები</h1><div className={Styles.circle}></div></div>
          <div className={`${Styles.cards} ${showCardList === 2 ? Styles.selected : ''}`}
            onClick={() => setShowCardList(2)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M6 18H18V6H6V18ZM14 20H10V22H8V20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V16H2V14H4V10H2V8H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H8V2H10V4H14V2H16V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V8H22V10H20V14H22V16H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H16V22H14V20ZM8 8H16V16H8V8Z" fill="white" fill-opacity="0.7" />
            </svg><h1>ელექტრონიკა</h1><div className={Styles.circle}></div></div>
          <div className={`${Styles.cards} ${showCardList === 3 ? Styles.selected : ''}`}
            onClick={() => setShowCardList(3)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10H4C3.73478 10 3.48043 9.89464 3.29289 9.70711C3.10536 9.51957 3 9.26522 3 9V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM6 12H12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13V16H14V22H10V16H11V14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V11H6V12ZM17.732 13.732L19.5 11.964L21.268 13.732C21.6176 14.0817 21.8556 14.5271 21.952 15.0121C22.0484 15.497 21.9989 15.9996 21.8096 16.4564C21.6204 16.9132 21.3 17.3036 20.8889 17.5783C20.4777 17.8529 19.9944 17.9995 19.5 17.9995C19.0056 17.9995 18.5223 17.8529 18.1111 17.5783C17.7 17.3036 17.3796 16.9132 17.1904 16.4564C17.0011 15.9996 16.9516 15.497 17.048 15.0121C17.1444 14.5271 17.3824 14.0817 17.732 13.732Z" fill="white" fill-opacity="0.7" />
            </svg><h1>ხელსაწყოები</h1><div className={Styles.circle}></div></div>
          <div className={`${Styles.cards} ${showCardList === 4 ? Styles.selected : ''}`}
            onClick={() => setShowCardList(4)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="white" fill-opacity="0.7" />
            </svg><h1>სხვადასხვა</h1><div className={Styles.circle}></div></div>
          <h1 className={Styles.exit}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M1.59997 0L0 1.59997L10.4003 12.0002L0.000467896 22.4L1.60044 24L12.0002 13.6002L22.3996 23.9996L23.9996 22.3996L13.6002 12.0002L24.0001 1.60036L22.4001 0.000382434L12.0002 10.4003L1.59997 0Z" fill="white" />
          </svg><h1>გასვლა</h1></h1>
        </div>
      </div>
      <div className={Styles.right_container}>
        {showCardList == 1 ? list1 : showCardList == 2 ? list2 : showCardList == 3 ? list3 : showCardList == 4 ? list4 : null}
      </div>
    </div>
  );
}

export default App;
