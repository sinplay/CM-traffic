var app = new Vue({
    el: '#trafficDetail',
    data: {
        trafficBlocks: [],
    },
    methods: {
        add: () => {
            firebase.database().ref('road').push({
                roadName: document.getElementById("r").value,
                status: document.getElementById("reportForm").elements["status"].value
            });
            document.getElementById("reportForm").reset()
        },
        deleteMessage: (trafficBlock) => {
          //  firebase.database().ref('road'+ trafficBlock.id).remove()
          alert(trafficBlock.id)
        }
    }
})
var config = {
    apiKey: "AIzaSyDURyuCaBOE0zHOMPnBCi24cOMZoAYWoek",
    authDomain: "time-73b79.firebaseapp.com",
    databaseURL: "https://time-73b79.firebaseio.com",
    projectId: "time-73b79",
    storageBucket: "time-73b79.appspot.com",
    messagingSenderId: "569063702966"
  };

var convertFromFirebase = (data) => {
    var emptyData = []
    if (data == null || data == undefined) {
        return []
    }
    var ids = Object.keys(data)
    return ids.map(id => {
        var beforeInfo = data[id]
        beforeInfo.id = id
        return beforeInfo
    })

}
firebase.initializeApp(config);
var database = firebase.database();
var trafficDatabase = database.ref("road")
trafficDatabase.on("value", (trafficBlocks) => {
    var data = convertFromFirebase(trafficBlocks.val()).reverse()
    app.trafficBlocks = data
})

function saveData(roadName, status) {
    firebase.database().ref('road').push({
        roadName: roadName,
        status: status
    });
}