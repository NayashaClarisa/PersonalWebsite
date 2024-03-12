import Image from 'next/image'

import Container from 'components/Container'
import FooterInfo from './FooterInfo'

import styles from './Footer.module.css'

import traveloLogo from 'public/assets/nayasha-logo-footer.png'

const Footer = () => {
    return (
        <footer className = {styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image
                            src={traveloLogo}
                            alt="Travelo Logo"
                            placeholder="blur"
                            height="98"
                            width="136"
                        />
                    </figure>

                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Instagram',
                                    href: 'https://www.instagram.com/nayashac_'
                                },
                                {
                                    label: 'LinkedIn',
                                    href: 'https://linkedin.com/in/nayasha-clarisa-dwisutrisna'
                                },
                                {
                                    label: 'Email',
                                    href: 'mailto:nayashaclarisa@gmail.com'
                                }                                
                            ]}
                        />

                        {/* <FooterInfo
                            title="Perusahaan"
                            content={[
                                {
                                    label: 'Syarat & Ketentuan',
                                    href: '/'
                                },
                                {
                                    label: 'Kebijakan Privasi',
                                    href: '/'
                                },
                                {
                                    label: 'Blog',
                                    href: '/'
                                },
                                {
                                    label: 'Bantuan Pelayanan',
                                    href: '/'
                                }
                            ]}
                        /> */}

                        {/* <FooterInfo
                            title="Kontak"
                            content={[
                                'Jl. Dago No. 1A',
                                'Bandung, Jawa Barat',
                                'Indonesia',
                                '(022)8080808',
                                'contact@email.com'
                            ]}
                        /> */}
                    </div>
                </div>
            </Container>
            <div className = "bg-[#E0D5F6] p-3">
                <p className = "text-heading-5 text-white font-bold text-center">
                    Copyright ©2024 Nayasha Clarisa Dwisutrisna. All right Reserved.
                </p>
            </div>
            
        </footer>
    )
}

export default Footer