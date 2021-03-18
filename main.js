// 設定物件
const clock = {
    // 容器宣告與內容物初始值
    data() {
        return {
            hh: '07',
            mm: 77,
            ss: 70
        }
    },
    // 函數宣告區
    methods: {
        updateTime() {
            var date = new Date() ;//MDN APIs
            // 確保顯示2位的方法：其中slice是字串擷取指令
            this.hh = ('0' + date.getHours()).slice(-2) ;
            this.mm = ('0' + date.getMinutes()).slice(-2) ;
            this.ss = ('0' + date.getSeconds()).slice(-2) ;
        }
    },
    // 指令執行區 as  another function
    mounted() {
        setInterval(this.updateTime, 1000);
    }
};
// 安裝與html的連結
Vue.createApp(clock).mount(".clock");