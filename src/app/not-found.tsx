import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='error-page'>
      <div className='error-page__container'>
        <Image src='/images/404.svg' alt='500 error' width={134} height={124} />
        <h1>Error 404</h1>
        <h3>Ooops... Page not found!</h3>
        <p>Look like the page you are looking for no longer exists.</p>
      </div>
    </div>
  );
}

