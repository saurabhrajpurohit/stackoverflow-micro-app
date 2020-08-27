import { useEffect } from "react";

/**
 * Custom infinite scroll Component
 * @param props Data passed from parent component
 */
const ScrollComponent = (props: any) => {

    /**
     * Checks if user reached the bottom of the givedn element
     * @param el Element on which height is to be monitered
     */
    function isBottom(el: any) {
        return el.getBoundingClientRect().bottom <= (window.innerHeight + 1000);
    }

    /**
     * Called for scrolling event
     */
    function trackScrolling() {
        const wrappedElement = document.getElementById(props.target);
        if (isBottom(wrappedElement) && !props.isLoading) {
            props.onNext();
            document.removeEventListener("scroll", trackScrolling);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", trackScrolling);
    });

    return (props.children);
};

export default ScrollComponent;