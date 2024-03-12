import Image from "next/image"

const CategoryCard = () => {
    return (
        <a href="https://multimedianusantara-my.sharepoint.com/:b:/g/personal/nayasha_clarisa_student_umn_ac_id1/Edm-yXHywT5GrqdBpTfYn1QBsEp5TefGDqYYP115-D4Qfw?e=jjBN0E" target="_blank" rel="noopener noreferrer" className="flex flex-col w-[182px]">
            <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
                <Image 
                    src="/assets/home/Duolingo.png"
                    alt="Duolingo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </figure>

            <p className="text-heading-4 text-gray-100 font-bold">
                English Proficiency Test
            </p>
        </a>
    );
}

export default CategoryCard;
