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
                    delay: 30,
                    deleteSpeed: 20
                }}
                onInit={typeWritter => {
                    typeWritter.pasteString(`
                        CD-ROM Device Driver for IDE (Four Channel is Supported)<br/>
                        (C)Copyright BrowZ Inc. 2022<br/>
                        App Version &emsp;&emsp;&emsp;&ensp;: V1.0<br/>
                        Transfer Mode  &emsp;&emsp;&ensp;: Programmed I/O<br/>
                        Drive 0  &emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&ensp;: Port= 1F0 (Primary Channel), Slave  IRQ= 14<br/>
                        Firmware Version  &emsp;: V1.0<br/>
                        <br/>
                        MSCDEX Version 1.00
                        Copyright (C) BrowZ Inc. 2022. All rights reserved<br/>
                        &emsp;&emsp; Drive D: = Driver BTC unit 0 <br/>
                        Microsoft (R) Mouse Dirver Version 6.26 <br/>
                        Copyright (C) Microsoft Corp 1983-2022. All rights reserved <br/>
                        Mouse driver installed <br/>
                        Microsoft (R) Keyboard Driver Version 5.04 <br/>
                        Copyright (C) Microsoft Corp 1983-2022. All rights reserved <br/>
                        Keyboard driver installed <br/> <br/>
                        <hr class="border-green-500"/>
                        <br/> <br/>
                        Starting BrowZ...
                    `, null)
                    .pauseFor(1000)
                    .typeString(`
                        Welcome User<br/>
                        Press <b>Enter</b> to log in...
                    `)
                    /* .deleteChars(6)
                    .typeString("World!<br/>How're you doin") */
                    .callFunction(() => wait())
                    .start()
                }}
            />
        </div>
    )
}

export default LandingPage