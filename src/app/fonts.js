import localFont from 'next/font/local';

export const rockybilly = localFont({
  src: [
    {
      path: '../fonts/Rockybilly.ttf', 
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-rockybilly',
});
