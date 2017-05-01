var app = new Vue({
    el: '#trafficDetail',
    data: {
        trafficBlocks: [],
    },
    methods: {
        add: () => {
            firebase.database().ref('/').push({
                roadName: document.getElementById("r").value,
                status: document.getElementById("reportForm").elements["status"].value
            });
            document.getElementById("reportForm").reset()
        },
        deleteMessage: (trafficBlock) => {
            firebase.database().ref("/" + trafficBlock.id).remove()
        }
    }
})
var config = {
    apiKey: "AIzaSyAFV4VAHm0Xa1EJt48xzVldwv3xv_f6kww",
    authDomain: "cm-traffic.firebaseapp.com",
    databaseURL: "https://cm-traffic.firebaseio.com",
    projectId: "cm-traffic",
    storageBucket: "cm-traffic.appspot.com",
    messagingSenderId: "621929469587"
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
var trafficDatabase = database.ref("/")
trafficDatabase.on("value", (trafficBlocks) => {
    var data = convertFromFirebase(trafficBlocks.val()).reverse()
    app.trafficBlocks = data
})

function saveData(roadName, status) {
    firebase.database().ref('/').push({
        roadName: roadName,
        status: status
    });
}