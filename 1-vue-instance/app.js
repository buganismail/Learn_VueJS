const app = Vue.createApp({
    data() {
        return {
            title: "Bootcamp 2",
            content: "Lorem ipsum dolor sit amet..",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp",
            },
            owner: "Pogaca",
        };
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
    },
}).mount("#app");