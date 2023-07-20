export const BREAKPOINT = {
    small: 500,
    smaller: 300,
    large: 1024,
    iphone4: 320
};

export const QUERIES = {
    desktopOrSmaller : "(max-width: 1024px)",
    mobileOrSmaller : "(max-width: 520px)"
}

export const mq = size => `@media (max-width: ${size}px)`;