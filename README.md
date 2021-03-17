# WD_prac2103_Vue_clock
用Vue實作電子數位鐘

# 簡介
顯示現在（台灣）時間的數位鐘。並且有呈現下列細節：<br>
1. 隨著裝置的時間即時顯示
1. 24小時制
1. 每個部位皆顯示兩位數字

# 使用說明
1. 必須在class名稱為clock的元素之內
1. 用關鍵字hr、min、sec呼叫時間。
```
<div class="clock">
    {{ hr }} : {{ min }} : {{ sec }}
</div>
```

# 範例網站
https://rediichen.github.io/WD_prac2103_Vue_clock/


# CDN
在body的結束標籤前貼上下列codes：
```
<script src="https://unpkg.com/vue@next"></script>
<script src="https://rediichen.github.io/WD_prac2103_Vue_clock/main.js"></script>
```