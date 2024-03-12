import Image from 'next/image'

import Container from 'components/Container'
//import Button from 'components/Button'
import Nav from './Nav'

import traveloLogo from 'public/assets/nayasha-logo-header.png'

const Header = () => {
    return (
        <header className = "h-[85px] bg-[#E0D5F6] shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src = {traveloLogo}
                            alt = "Travelo Logo"
                            placeholder = "blur"
                            height = "48"
                            width = "182"
                        />
                    </div>

                    <div className="flex gap-5">
                        <Nav/>
                        {/* <Button className="w-[190px]">
                            Masuk
                        </Button> */}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header