var app = new Vue({
    el: '#trafficDetail',
    data: {
        trafficBlocks: []
    },
    methods: {
        add: function(roadName, status) {
            var data={
                roadName:roadName,status:status
            }
            this.trafficBlocks.push(data)
        }
    }
})
document.getElementById("reportInfo").onclick = () => {
    app.add(document.getElementById("r").value, document.getElementById("reportForm").elements["status"].value)
    document.getElementById("reportForm").reset()
}

