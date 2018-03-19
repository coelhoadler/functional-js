export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => value =>
    fns.reduceRight((prev, fn) => 
        fn(prev), value);

export const takeUntil = (times, fn) => 
    () => times-- > 0 && fn();