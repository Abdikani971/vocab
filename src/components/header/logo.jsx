import { useTheme } from "@/hooks/use-theme";

export const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <svg
      width="30"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_0_2732)">
        <path
          d="M41.6656 0H8.33443C3.75181 0 0 3.74993 0 8.33443V41.6665C0 46.2472 3.75181 49.9981 8.33443 49.9981H41.6665C46.2491 49.9981 50.0009 46.2482 50.0009 41.6665V8.33443C50 3.74993 46.2482 0 41.6656 0ZM40.9081 38.2587C40.9081 39.7154 39.7154 40.9043 38.2577 40.9043H11.7404C10.2836 40.9043 9.09005 39.7145 9.09005 38.2587V11.7423C9.09005 10.2855 10.2836 9.09193 11.7404 9.09193H38.2577C39.7154 9.09193 40.9081 10.2855 40.9081 11.7423V38.2587ZM31.8199 30.3021C31.8199 31.1376 31.1376 31.8171 30.3068 31.8171H19.7008C18.8671 31.8171 18.1876 31.1366 18.1876 30.3021V19.697C18.1876 18.8634 18.8671 18.1829 19.7008 18.1829H30.3058C31.1376 18.1829 31.8189 18.8643 31.8189 19.697V30.3021H31.8199Z"
          fill={isDark ? "url(#light-gradient)" : "url(#dark-gradient)"}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_2732">
          <rect width="50" height="49.9981" fill="white" />
        </clipPath>
        <linearGradient
          id="dark-gradient"
          x1="0"
          y1="0"
          x2="50"
          y2="50"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#004080" />
          <stop offset="100%" stop-color="#002060" />
        </linearGradient>
        <linearGradient
          id="light-gradient"
          x1="0"
          y1="0"
          x2="50"
          y2="50"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#80C0FF" />
          <stop offset="100%" stop-color="#4080FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
