declare var process: any
declare var require: any

declare module '*.vhtml' {
    import Vue, { ComponentOptions, FunctionalComponentOptions } from 'vue'
    interface WithRender {
        <V extends Vue, U extends ComponentOptions<V> | FunctionalComponentOptions>(options: U): U
        <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export default withRender
}

//
// declare module "*!text" {
//     const Content: string;
//     export default Content;
// }