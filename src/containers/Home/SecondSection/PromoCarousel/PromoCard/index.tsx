import Image from 'next/image'

import Button from 'components/Button'

const PromoCard = () => {
    return (
        <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
            <figure className="relative w-[212px] h-full">
    <Image
        src="/assets/home/dkbm.jpeg"
        alt="dkbm"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
    />
</figure>


            <div className="flex-1 flex flex-col justify-center p-4">
                <p className="text-heading-4 text-gray-100 font-label font-bold">
                    Dewan Keluarga Besar Mahasiswa UMN
                </p>
                <p className="text-heading-4 text-gray-70 mb-4">
                    Secretary & Treasurer
                </p>

                {/* <div className="flex gap-1">
                    <p className="text-heading-5 text-gray-70 line-through">
                        Rp. 7.700.000
                    </p>
                    <p className="text-heading-5 text-red-100 font-bold">
                        10%
                    </p>
                </div> */}

                <p className="text-[16px] font-bold text-gray-100 mb-4">
                    December 2022 - December 2023
                </p>

                <p className="text-heading-5 text-gray-70 mb-4">
                    Responsible for managing administrative documents, recording expenses and income, and supervise the division of Communication
                    and Information Media
                </p>

                {/* <p className="text-heading-5 text-gray-50 mb-4">
                    Berangkat: 27 - 11 - 2024 10:00
                </p> */}

                <div className="flex justify-between gap-3">
                    <a href="https://drive.google.com/file/d/17YNzYOHONZ6HFbXTs7PcCSjht8Ez-d8f/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button fullWidth outLined>
                            Certificate
                        </Button>
                    </a>
                    {/* <Button fullWidth>
                        Pesan
                    </Button> */}
                </div>

            </div>
        </article>
    )
}

export default PromoCard