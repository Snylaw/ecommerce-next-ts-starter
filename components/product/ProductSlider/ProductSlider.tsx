import React, { FC, Children, isValidElement } from 'react'
import s from './ProductSlider.module.css'
import { useKeenSlider } from "keen-slider/react"

const ProductSlider: FC = ({children}) => {

    const [sliderRef, _] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
          console.log("Slide changed to: ", slider.track.details.rel)
        },
      })

    return (
        <div className={s.root}>
            <div ref={sliderRef} className="keen-slider h-full transition-opacity">
                { Children.map(children, child => {

                    if (isValidElement(child)) {
                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${
                                    child.props.className ? `${child.props.className}` : ""
                                } keen-slider__slide` 
                            }
                        }

                        // return React.cloneElement(child, { 
                        //     className: `${
                        //         child.props.className ? `${child.props.className}` : ""
                        //     } keen-slider__slide` 
                        // })
                    }

                    return child
                }
                )}  
            </div>
        </div>
    )
}

export default ProductSlider;