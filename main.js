// 設定物件
const clock = {
    data() {
        return {
            hr : "07",
            min : 17,
            sec : 27
        }
    }
} ;
// 安裝與html的連結
Vue.createApp(clock).mount(".clock") ;