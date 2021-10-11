// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // 小于10补0
    paddingLeft(num) {
        return parseInt(num) < 10 ? "0" + num : num;
    },
    /**
     * 传时间戳 
     * 转换为2001-12-12 格式
     * @param {*} timeStamp 
     */
    formateDate(timeStamp, hms = false) {
        var time = new Date(+timeStamp);
        var y = time.getFullYear();
        var M = this.paddingLeft(time.getMonth() + 1);
        var d = this.paddingLeft(time.getDate());
        var h = this.paddingLeft(time.getHours());
        var m = this.paddingLeft(time.getMinutes());
        var s = this.paddingLeft(time.getSeconds());
        if(hms) {
            return (
                y + '-' + M + '-' + d + " " + h + ":" + m + ":" + s
            );
        } else {
            return (
                y + '-' + M + '-' + d
            );
        }
    },

    // 获取某个范围的随机整数
    getRangeRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}