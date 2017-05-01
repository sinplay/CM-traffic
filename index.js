var app = new Vue({
    el: '#trafficDetail',
    data: {
        trafficBlocks: []
    },
    methods: {
        add: function (roadName, status) {
            var data = {
                roadName: roadName,
                status: status
            }
            this.trafficBlocks.push(data)
        }
    }
})
document.getElementById("reportInfo").onclick = () => {
    app.add(document.getElementById("r").value, document.getElementById("reportForm").elements["status"].value)
    document.getElementById("reportForm").reset()
}
var config = {
    apiKey: "AIzaSyAFV4VAHm0Xa1EJt48xzVldwv3xv_f6kww",
    authDomain: "cm-traffic.firebaseapp.com",
    databaseURL: "https://cm-traffic.firebaseio.com",
    projectId: "cm-traffic",
    storageBucket: "cm-traffic.appspot.com",
    messagingSenderId: "621929469587"
};
var convertFromFirebase = (data) => {
  var ids = Object.keys(data)
  return ids.map(id => data[id])
}
firebase.initializeApp(config);
var database = firebase.database();
var trafficDatabase = database.ref("/")
trafficDatabase.on("value", (trafficBlocks) => {
    console.log(trafficBlocks.val())
    var data =convertFromFirebase(trafficBlocks.val())
    app.trafficBlocks=data
})