import React from 'react';
import variables from '../../app/variables.module.scss'
const MenuIcon : React.FC = () =>  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0,0,256,256"
    >
      <g
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{mixBlendMode: 'normal'}}
      >
        <g transform="scale(5.12,5.12)">
          <path
            fill={variables.primaryColor}
            d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"
          ></path >
        </g >
      </g >
    </svg >
  );
}

export default MenuIcon;