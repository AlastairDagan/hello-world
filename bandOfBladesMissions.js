// function getRandomInt(max) {
//     let x =  Math.floor(Math.random() * max)
//     return x; 
// }

function getMissionType(max) {
    let missionType = ["assault", "recon", "religious", "supply" ];
    let x = Math.floor(Math.random() * max)
    return missionType[x]
};
let z = getMissionType(4);
console.log(z);
//assault
if (z === 0){
        let assaultMissionType = [
            "people", 
            "the wild", 
            "undead",
            "undead", 
            "powerful undead",
            "powerful undead"
        ];
        let assaultMissionRewards = [
            "+2 Morale", 
            "+3 Morale",
            "+4 Morale",
            "+2 Morale, +1 Supply",
            "+2 Morale, +1 Intel",
            "+2 Morale, -1 Time"
        ];
        let assaultMissionPenalties = [
            "+1 Pressure, +1 Time", 
            "+1 Time", 
            "-1 Supply", 
            "+1 Pressure",
            "+1 Pressure",
            "+1 Pressure" 
        ];

        let y = Math.floor(Math.random() * 6);
        let a = assaultMissionType[y];
        let b = assaultMissionRewards[y];
        let c = assaultMissionPenalties[y];

        const text = document.createElement('h1');
        text.innerText = `The Assault mission type is ${a}, the mission rewards is/are ${b},
        the penalties are ${c}.`;
        document.body.appendChild(text);

        console.log(`The mission type is ${assaultMissionType[y]},
        the mission rewards is/are ${assaultMissionRewards[y]}, 
        and the penalties is/are ${assaultMissionPenalties[y]}`);
} else if (z === 1){
        let reconMissionType = [
            "Area Recon", 
            "Route Recon", 
            "Troop Recon",
            "Infiltration", 
            "Exfiltration",
            "Pick above + Danger"
        ];
        let reconMissionRewards = [
            "+2 Intel", 
            "+2 Intel",
            "Asset +1 Intel",
            "Asset or Troops +1 Intel",
            "+1 Intel, -1 Time",
            "+3 Intel"
        ];
        let reconMissionPenalties = [
            "+1 Time", 
            "2 Deaths", 
            "1 Death", 
            "+1 Pressure",
            "+1 Pressure",
            "None" 
        ];

        let y = Math.floor(Math.random() * 6);
        let d = reconMissionType[y];
        let e = reconMissionRewards[y];
        let f = reconMissionPenalties[y];
        
        const text = document.createElement('h1');
        text.innerText = `The Recon mission type is ${d}, the mission rewards is/are ${e},
        the penalties are ${f}.`;
        document.body.appendChild(text);
        
        console.log(`The Assault mission type is ${reconMissionType[y]},
        the mission rewards is/are ${reconMissionRewards[y]}, 
        and the penalties is/are ${reconMissionPenalties[y]}`);
} else if (z === 2) {
        let religiousMissionType = [
            "Escort", 
            "Cleansing", 
            "Defense",
            "Unearth", 
            "Pick above + Favor",
            "Pick above + Favor"
        ];
        let religiousMissionRewards = [
            "+1 Time, +2 xp.",
            "+2 Morale, +10 points", 
            "+1 Intel, +2 Morale", 
            "Fine Asset", 
            "Exceptional Asset",
            "Specialist"
        ];
        let religiousMissionPenalties = [
            "+1 Pressure, -1 Morale", 
            "+1 Pressure",
            "+1 Pressure",
            "-1 Morale",
            "-1 Morale",
            "None."             
        ];

        let y = Math.floor(Math.random() * 6);
        let g = religiousMissionType[y];
        let h = religiousMissionRewards[y];
        let i = religiousMissionPenalties[y];
        
        const text = document.createElement('h1');
        text.innerText = `The Religious mission type is ${g}, the mission rewards is/are ${h},
        the penalties are ${i}.`;
        document.body.appendChild(text);
        
        console.log(`The Recon mission type is ${religiousMissionType[y]},
        the mission rewards is/are ${religiousMissionRewards[y]}, 
        and the penalties is/are ${religiousMissionPenalties[y]}`);
} else {
    let supplyMissionType = [
        "Scrounge or Trade", 
        "Scrounge or Trade",
        "Rescue Supplies",
        "Rescue Supplies",
        "Mercenary Work",
        "Mercenary Work"
    ];
    let supplyMissionRewards = [
        "Asset, +1 Supply",
        "Asset, +1 Supply",
        "+2 Supply",
        "Asset, +2 Supply",
        "+3 Supply",
        "+3 Supply"
    ];
    let supplyMissionPenalties = [
        "-1 Morale, -1 Supply",
        "-1 Supply",
        "-1 Morale",
        "-1 Morale", 
        "None",
        "None"
    ];

    let y = Math.floor(Math.random() * 6);
    let j = supplyMissionType[y];
    let k = supplyMissionRewards[y];
    let l = supplyMissionPenalties[y];
    
    const text = document.createElement('h1');
    text.innerText = `The Supply mission type is ${j}, the mission rewards is/are ${k},
    the penalties are ${l}.`;
    document.body.appendChild(text);
    //text.style.color = "red";
   
    console.log(`The Supply mission type is ${supplyMissionType[y]},
    the mission rewards is/are ${supplyMissionRewards[y]}, 
    and the penalties is/are ${supplyMissionPenalties[y]}`);
};


  
