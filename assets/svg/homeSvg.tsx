import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const HomeSvg: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (isActive) {
    return (
      <Svg width="30" height="31" viewBox="0 0 30 31" fill="none">
        <Path
          d="M19.5 30.0975V22.5975C19.5 21.404 19.0259 20.2594 18.182 19.4155C17.3381 18.5716 16.1935 18.0975 15 18.0975C13.8065 18.0975 12.6619 18.5716 11.818 19.4155C10.9741 20.2594 10.5 21.404 10.5 22.5975V30.0975H3C2.20435 30.0975 1.44129 29.7814 0.87868 29.2188C0.316071 28.6562 1.38884e-10 27.8931 1.38884e-10 27.0975V10.7955C-4.98411e-06 10.2774 0.134146 9.7682 0.38939 9.31738C0.644633 8.86657 1.01227 8.48953 1.4565 8.22299L13.4565 1.02299C13.9227 0.743235 14.4563 0.595459 15 0.595459C15.5437 0.595459 16.0773 0.743235 16.5435 1.02299L28.5435 8.22299C28.9877 8.48953 29.3554 8.86657 29.6106 9.31738C29.8659 9.7682 30 10.2774 30 10.7955V27.0975C30 27.8931 29.6839 28.6562 29.1213 29.2188C28.5587 29.7814 27.7957 30.0975 27 30.0975H19.5Z"
          fill="url(#paint0_linear_1_490)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1_490"
            x1="15"
            y1="0.595459"
            x2="15"
            y2="30.0975"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#549994" />
            <Stop offset="1" stopColor="#408782" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  return (
    <Svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <Path
        d="M29.7083 30V13.698L18.125 6.49802L6.54165 13.698V30H12.3333V25.875C12.3333 24.2837 12.9435 22.7576 14.0297 21.6324C15.1158 20.5072 16.5889 19.875 18.125 19.875C19.661 19.875 21.1342 20.5072 22.2203 21.6324C23.3065 22.7576 23.9166 24.2837 23.9166 25.875V30H29.7083ZM21.0208 33V25.875C21.0208 25.0794 20.7157 24.3163 20.1726 23.7537C19.6296 23.1911 18.893 22.875 18.125 22.875C17.357 22.875 16.6204 23.1911 16.0773 23.7537C15.5342 24.3163 15.2291 25.0794 15.2291 25.875V33H6.54165C5.77362 33 5.03706 32.6839 4.49398 32.1213C3.95091 31.5587 3.64581 30.7957 3.64581 30V13.698C3.64581 13.18 3.7753 12.6707 4.02168 12.2199C4.26806 11.7691 4.62293 11.3921 5.05174 11.1255L16.6351 3.92551C17.0851 3.64576 17.6001 3.49799 18.125 3.49799C18.6498 3.49799 19.1648 3.64576 19.6149 3.92551L31.1982 11.1255C31.627 11.3921 31.9819 11.7691 32.2283 12.2199C32.4747 12.6707 32.6042 13.18 32.6041 13.698V30C32.6041 30.7957 32.2991 31.5587 31.756 32.1213C31.2129 32.6839 30.4763 33 29.7083 33H21.0208Z"
        fill="#AAAAAA"
      />
    </Svg>
  );
};

export default HomeSvg;