import Image from 'next/image'
import appPreview from '../assets/app-preview.png'
import logo from '../assets/logo.svg';
import avatares from '../assets/avatares.png';
import icon from '../assets/icon.png';

interface HomeProps {
  poolCount: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={ logo } alt="NLW copa" />
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 flex items-center gap-2 text-white'>
          <Image src={ avatares } alt="" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando!
          </strong>
        </div>

        <form className='mt-10 flex gap-2'>
          <input
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
            type="text"
            required
            placeholder='Qual nome do seu bolão?' 
          />
          <button
            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
            type="submit"
          >
              Criar um bolão
          </button>
        </form>

        <p className='mt-4 text-sm text-gray-300 max-w-sm'>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className='mt-10 pt-10 border-t border-gray-600 text-gray-100 flex justify-between'>
          <div className='flex items-center gap-6'>
            <Image src={ icon } alt="" />
            <div className='flex flex-col '>
              <span className='font-bold text-2xl'>+{ props.poolCount }</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Image src={ icon } alt="" />
            <div className='flex flex-col '>
              <span className='font-bold text-2xl'>+192.847</span>
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

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();

  return {
    props: {
      poolCount: data.count,
    }
  }
}
