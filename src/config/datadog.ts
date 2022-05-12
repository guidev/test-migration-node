import tracer from 'dd-trace';
tracer.init({
    logInjection: true,
    profiling: true,
    appsec: true
});

export default tracer;