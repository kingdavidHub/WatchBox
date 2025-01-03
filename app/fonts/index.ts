import {
  Work_Sans,
  Plus_Jakarta_Sans,
  Inter,
  Bebas_Neue
} from 'next/font/google';


const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});


const jaka = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  display: 'swap',
  variable: '--font-jakarta'
});


const inter = Inter({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue'
})

export { inter, workSans, jaka, bebasNeue }