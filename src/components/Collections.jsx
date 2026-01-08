import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Collections = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardShow, setCardShow] = useState(1)
    const maxIndex = Math.max(projectsData.length - cardShow, 0)



    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardShow(4)
            } else {
                setCardShow(1)
            }
        }

        updateCardsToShow()

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow)
    }, [])

    const nextCollection = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }

    const prevCollection = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    return (
        <div className='container mx-auto py-4 pt-20 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Featured <span className='underline underline-offset-4 decoration-1 under font-light'>Collections</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Curated Objects, Crafted Stories—Explore Our Collection</p>

            {/* Slider Buttons for previous and next scrolling */}


            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevCollection}
                    className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextCollection}
                    className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>


            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                <div className='flex transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * (100 / cardShow)}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full lg:w-1/4 px-4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-shadow-gray-800'>
                                        {project.title}
                                    </h2>

                                    <p className='text-gray-500 text-sm'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collections
