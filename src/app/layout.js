import Header from '@/components/Header'
import './globals.css'
import { Roboto} from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight:'500' })

export const metadata = {
  title: 'Henrick | Dev',
  description: 'Meu portifólio criado com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  )
}
