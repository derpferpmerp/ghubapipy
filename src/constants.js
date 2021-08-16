export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: "#aac8dd",//'hsl(0deg, 0%, 100%)',  white
    dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
  },
  borderinfo: {
    light: '10px',
    dark: '10px',
  },
  icon: {
    light: 'url("https://i.ibb.co/ccVFsyH/light.png")',
    dark: 'url("https://i.ibb.co/FbMsKbs/dark.png")',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const FONTINFO = {
  fontsize: '64px',
  bordersize: '10px',
};

export const MISCSTYLES = {
  diconbkg: {
    light: "transparent",
    dark: '#00000010',
  },
  diconbrdr: {
    light: '#000000',
    dark: '#ffffff',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
