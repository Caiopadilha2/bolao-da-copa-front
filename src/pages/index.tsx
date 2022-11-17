// interface HomeProps {
//   count: number;
// }

import Image from 'next/image'
import appPreview from '../assets/app-preview.png'
import logo from '../assets/logo.svg';
import avatares from '../assets/avatares.png';
import icon from '../assets/icon.png';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={ logo } alt="NLW copa" />
        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={ avatares } alt="" />

          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão?' />
          <button type="submit">Criar um bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div>
          <div>
            <Image src={ icon } alt="" />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={ icon } alt="" />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>

      <Image src={ appPreview } alt="Dois celulares com o preview da aplicação." quality={ 100 }/>
      {/* Tem que usar esse Image pq o next otimiza, reduzindo qualidade imagem. */}
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count');
//   const data = await response.json();

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }
