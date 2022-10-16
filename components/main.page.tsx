import Platform from 'platform'
// @ts-expect-error
import Detect from 'just-detect-adblock'

type Props = {
    ip: string
}

const MainPage = (props:Props) => {
    const {
        ip
    } = props

    const { name, version, manufacturer, os } = Platform
    const { 
      screen: {width, height, availHeight, availWidth, colorDepth },
      devicePixelRatio,
      navigator: {cookieEnabled, language}
    } = window
    const javaEnabled = window.navigator.javaEnabled() || false
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const adblock = Detect.detectAnyAdblocker()
    return (
        <>
            <h1>Hello World</h1>
            <h2>IP Address: {ip}</h2>
            <h2>Platform: {name}</h2>
            <h2>Version: {version}</h2>
            <h2>Manufacturer: {manufacturer}</h2>
            <h2>OS: {os?.toString()}</h2>
            <h2>Width: {width}</h2>
        </>
    )
}

export default MainPage