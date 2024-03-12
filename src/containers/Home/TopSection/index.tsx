import Container from 'components/Container'
import InfoItem from './InfoItem'
import Button from 'components/Button'

import styles from './TopSection.module.css'

const TopSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    <div className="flex flex-col mb-[10px]">
                        <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8">
                            Nayasha Clarisa Dwisutrisna
                        </h1>

                        <p className="text-heading-3 text-gray-70 w-[526px] mb-7">
                            An enthusiastic and adaptable Computer Science student at Multimedia Nusantara University, with a keen 
                            interest in the intersection of communication, technology, event. problem-solving, and critical thinking. Eager to 
                            contribute to innovative projects and embrace challenges in a dynamic technological landscape
                        </p>

                        <a href="https://drive.google.com/file/d/1RAQ_SsFbAmFsj6ZCZdGUj0LZAVFYDr2_/view?usp=sharing" 
                        className="w-[250px]">
                            <Button>
                                Get to Know Me!
                            </Button>
                        </a>
                    </div>

                    <div className="flex gap-40 mx-auto">
                        <InfoItem
                            label="5+"
                            subLabel="Programming Language"
                        />
                        <InfoItem
                            label="7"
                            subLabel="Organizational Experience"
                        />
                        <InfoItem
                            label="8"
                            subLabel="IT Project"
                        />
                    </div>
                    
                </div>
            </Container>
        </section>
    )
}

export default TopSection
