import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 6rem;
  height: 100vh;
  background: rgba(110,220,220,1); 
  background: -webkit-linear-gradient(to bottom, rgba(110,220,220,1) 0%, rgba(43,31,174,1) 10%, rgba(255,20,30,1) 50%); 
  background: linear-gradient(to bottom, rgba(110,220,220,1) 0%, rgba(43,31,174,1) 10%, rgba(255,20,30,1) 50%); 
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: rgba(0,0,0,0.3);
  clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%);
  a#home {
    cursor: pointer;
  }
`;

// export const HeaderContainer = styled.header`
//   height: 80px;
//   position: relative;
//   z-index: 1;
//   background: rgb(41, 26, 71);
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 0 0 20px 20px;
//   box-shadow: 0 5px 8px rgba(0,0,0,0.3);
//   padding: 0 5%;
// `;

// export const NavContainer = styled.nav`
//   &#nav {
//     width: 70%;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     align-items: center;
//     a#login {
//       text-decoration: none;
//       color: #fff;
//       margin-right: 5%;
//       font-weight: 400;
//       text-shadow: 1.5px 1px 0 rgba(255,255,255,0.3);
//       transition: 0.3s all;
//       cursor: pointer;
//       &:hover {
//         text-shadow: 1.5px 1px 0 rgba(255,255,255,0.6);
//       }
//     }
//     button#register {
//       background: #ff141e;
//       color: #fff;
//       border: 0;
//       border-radius: 10px;
//       padding: 10px 30px;
//       font-size: 16px;
//       box-shadow: 0 0 10px rgba(255, 20, 30, 0.5);
//       transition: 0.3s all;
//       &:hover {
//         padding: 10px 40px;
//         border-radius: 15px;
//         box-shadow: 0 0 15px rgba(255, 20, 30, 1);
//       }
//     }
//   }
// `;
