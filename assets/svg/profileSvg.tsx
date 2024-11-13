import React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

const ProfileSvg: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (isActive) {
    return (
      <Svg width="37" height="36" viewBox="0 0 37 36" fill="none">
        <G clip-path="url(#clip0_1_687)">
          <Path
            d="M32.8609 29.8125C30.7617 26.1964 27.4017 23.4823 23.4249 22.1906C25.3311 21.0571 26.8124 19.3292 27.6412 17.2722C28.4701 15.2152 28.6006 12.943 28.0129 10.8046C27.4251 8.66618 26.1515 6.77991 24.3878 5.43553C22.624 4.09115 20.4676 3.36304 18.2499 3.36304C16.0323 3.36304 13.8759 4.09115 12.1121 5.43553C10.3484 6.77991 9.07479 8.66618 8.48703 10.8046C7.89926 12.943 8.02984 15.2152 8.85868 17.2722C9.68753 19.3292 11.1688 21.0571 13.0749 22.1906C9.09821 23.4823 5.73817 26.1964 3.63901 29.8125C3.53595 29.982 3.48145 30.1766 3.48145 30.375C3.48145 30.5734 3.53595 30.768 3.63901 30.9375C3.73517 31.1099 3.87606 31.2531 4.04684 31.3521C4.21762 31.4511 4.41194 31.5022 4.60933 31.5H31.8906C32.088 31.5022 32.2823 31.4511 32.4531 31.3521C32.6238 31.2531 32.7647 31.1099 32.8609 30.9375C32.9639 30.768 33.0185 30.5734 33.0185 30.375C33.0185 30.1766 32.9639 29.982 32.8609 29.8125Z"
            fill="url(#paint0_linear_1_687)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_1_687"
            x1="18.25"
            y1="3.36304"
            x2="18.25"
            y2="31.5001"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#549994" />
            <Stop offset="1" stopColor="#408782" />
          </LinearGradient>
          <ClipPath id="clip0_1_687">
            <Rect
              width="36"
              height="36"
              fill="white"
              transform="translate(0.25)"
            />
          </ClipPath>
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
      <G clip-path="url(#clip0_1_2898)">
        <Path
          d="M17.875 22.5C22.673 22.5 26.5625 18.4706 26.5625 13.5C26.5625 8.52944 22.673 4.5 17.875 4.5C13.077 4.5 9.1875 8.52944 9.1875 13.5C9.1875 18.4706 13.077 22.5 17.875 22.5Z"
          stroke="#AAAAAA"
          strokeWidth="2.25"
          strokeMiterlimit="10"
        />
        <Path
          d="M4.70801 30.375C6.04227 27.9804 7.96152 25.9918 10.2728 24.6092C12.5841 23.2267 15.2061 22.4988 17.875 22.4988C20.5439 22.4988 23.1659 23.2267 25.4772 24.6092C27.7885 25.9918 29.7077 27.9804 31.042 30.375"
          stroke="#AAAAAA"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2898">
          <Rect
            width="34.75"
            height="36"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ProfileSvg;
