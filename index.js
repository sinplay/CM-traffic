var app = new Vue({
    el: '#trafficDetail',
    data: {
        trafficBlocks: []
    }
})
var f = (r, s) => {
    var data = {
        roadName: r,
        status: s
    }
    app.$data.trafficBlocks.push(data)
}
document.getElementById("reportInfo").onclick = () => {
    f(document.getElementById("r").value, document.getElementById("reportForm").elements["status"].value)
    document.getElementById("reportForm").reset()
}