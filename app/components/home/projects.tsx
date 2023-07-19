import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'vercel.svg',
        },
    ];

    return (
        <div>
            <div className="-mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
                    Latest Projects
                </h2>
            </div>
            <div className="flex justify-center items-center h-32">
                <p className="text-xl font-medium text-slate-200">
                    No projects to display at the moment.
                </p>
            </div>
            {/* <Slider {...settings}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="max-w-sm rounded overflow-hidden shadow-lg"
                    >
                        <Image src={project.imageUrl} alt={project.title} width={50} height={50} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-base">{project.description}</p>
                        </div>
                    </div>
                ))}
            </Slider> */}
        </div>
    );
}





