import Typewritter from 'typewriter-effect'

type Props = {
    handleLoading: () => void
}

const LandingPage = (props:Props) => {
    const { 
        handleLoading
    } = props

    const listener = () => {
        return new Promise(resolve => {
            const handleKey = (e:KeyboardEvent) => {
                if(e.key === 'Enter'){
                    handleLoading()
                    document.removeEventListener("keydown", handleKey)
                    console.log("ENTER")
                    resolve(true)
                    return true
                }
            }
            document.addEventListener("keydown", handleKey)
        })
    }
    const wait = async () => {
        console.log("Waiting for Input")
        await listener()
    }
    return (
        <div className="text-green-500 p-2 font-mono">
            <Typewritter
                options={{
                    delay: 40,
                    deleteSpeed: 40
                }}
                onInit={typeWritter => {
                    typeWritter.typeString("Hello world!")
                    .pauseFor(500)
                    .deleteChars(6)
                    .typeString("World!<br/>How're you doin")
                    .callFunction(() => wait())
                    .start()
                }}
            />
        </div>
    )
}

export default LandingPage