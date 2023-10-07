import SplashImage from '../assets/splash.png'

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={SplashImage}
        alt="Splash"
        className="w-8/12"
      />
    </div>
  )
}
