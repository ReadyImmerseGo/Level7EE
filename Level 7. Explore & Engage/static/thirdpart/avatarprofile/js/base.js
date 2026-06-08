// Default configuration

Coloris({
    el: '.coloris',
    alpha: false,
    theme: 'polaroid',
    themeMode: 'light',
    formatToggle: false
});

/** Instances **/
Coloris.setInstance('.profile-skin', {
    swatchesOnly: true,
    swatches: [
        '#FFE4C4', // bisque
        '#F5DEB3', // wheat
        '#DEB887', // burlywood
        '#D2B48C', // tan
        '#CD853F', // peru
        '#8B4513', // saddlebrown
        '#A0522D', // sienna
        '#6B4423', // dark brown
        '#5C4033', // dark brown
        '#A67B5B', // medium brown
        '#E6BE8A', // light brown
        '#F5D0A9'  // light tan
    ]
});

Coloris.setInstance('.profile-hair', {
    swatches: [
        // Natural Black to Brown Shades
        '#000000', // jet black
        '#1A1A1A', // soft black
        '#2C1810', // dark brown
        '#3C2314', // medium dark brown
        '#4A2C2A', // chestnut brown
        '#5C4033', // medium brown
        '#6B4423', // light brown
        '#8B4513', // golden brown
        '#A67B5B', // light chestnut
        '#C19A6B', // honey brown
        
        // Blonde Shades
        '#F5D0A9', // light blonde
        '#E6BE8A', // golden blonde
        '#D2B48C', // sandy blonde
        '#C19A6B', // dark blonde
        '#B8860B', // dark golden blonde
        
        // Red Shades
        '#8B0000', // dark red
        '#A52A2A', // auburn
        '#CD5C5C', // indian red
        '#DC143C', // crimson
        '#FF4500', // orange red
        
        // Gray/White Shades
        '#808080', // gray
        '#A9A9A9', // dark gray
        '#D3D3D3', // light gray
        '#FFFFFF', // white
        '#F5F5F5'  // off-white
    ]
});

Coloris.setInstance('.profile-lips', {
    swatches: [
        // Soft Pink Shades
        '#FFB6C1', // light pink
        '#FFC0CB', // pink
        '#FFB5C5', // soft pink
        '#FFAEB9', // pale pink
        '#FFC1C9', // baby pink
        
        // Natural Rose Shades
        '#E8ADAA', // light rose
        '#E8A1A1', // soft rose
        '#D98880', // dusty rose
        '#C08081', // mauve
        '#B76E79', // rose pink
        
        // Soft Red Shades
        '#CD5C5C', // indian red
        '#DB7093', // pale violet red
        '#BC8F8F', // rosy brown
        '#D2B48C', // tan
        '#DEB887'  // burlywood
    ]
});

Coloris.setInstance('.profile-accessory', {
    swatches: [
        // Classic Colors
        '#000000', // black
        '#FFFFFF', // white
        '#808080', // gray
        '#C0C0C0', // silver
        '#FFD700', // gold
        
        // Warm Colors
        '#FF4500', // orange red
        '#FF8C00', // dark orange
        '#FFA500', // orange
        '#FFD700', // gold
        '#FFE4B5', // moccasin
        
        // Cool Colors
        '#4169E1', // royal blue
        '#1E90FF', // dodger blue
        '#00BFFF', // deep sky blue
        '#87CEEB', // sky blue
        '#B0E0E6', // powder blue
        
        // Jewel Tones
        '#4B0082', // indigo
        '#800080', // purple
        '#9932CC', // dark orchid
        '#BA55D3', // medium orchid
        '#DA70D6', // orchid
        
        // Earth Tones
        '#8B4513', // saddle brown
        '#A0522D', // sienna
        '#6B8E23', // olive drab
        '#556B2F', // dark olive green
        '#2E8B57'  // sea green
    ]
});

Coloris.setInstance('.profile-eyes', {
    swatches: [
        '#a0cbb0',
        '#b8e1ef',
        '#70c7ed',
        '#00a8e1',
        '#0087c9',
        '#73c5c4',
        '#00a19d',
        '#00a06d',
        '#3aa948',
        '#547e44',
        '#b4ca4e',
        '#ddbc3f',
        '#f4e76c',
        '#bfb66e',
        '#c49a47',
        '#d1883c',
        '#9d6224',
        '#947142',
        '#866135',
        '#58663b',
    ]
});

Coloris.setInstance('.profile-chest', {
    swatches: [

        '#a0cbb0',
        '#b8e1ef',
        '#70c7ed',
        '#00a8e1',
        '#0087c9',
        '#73c5c4',
        '#00a19d',
        '#00a06d',
        '#3aa948',
        '#547e44',
        '#b4ca4e',
        '#ddbc3f',
        '#f4e76c',
        '#bfb66e',
        '#c49a47',
        '#d1883c',
        '#9d6224',
        '#947142',
        '#866135',
        '#58663b',
    ]
});

document.getElementById("closeButtonAvatar").onclick = (event) => {
    document.dispatchEvent(new CustomEvent("notify", { detail: {type:"close", command: "avatar_close"} }));
};

let changeColor = (target, color) => {
    document.dispatchEvent(
        new CustomEvent("notify", { detail: {type:"notify", command:"avatar_notify", target:target, data:color} })
    );
};

document.getElementById("skinInput").addEventListener('change',
     (event) => {
     changeColor('skin', event.target.value);
    }
)
document.getElementById("skinInput").addEventListener('input',
    (event) => {
        changeColor('skin', event.target.value);
    }
)

document.getElementById("hairInput").addEventListener('change',
 (event) => {
     changeColor('hair', event.target.value);
 }
)
document.getElementById("hairInput").addEventListener('input',
 (event) => {
     changeColor('hair', event.target.value);
 }
)

document.getElementById("eyesInput").addEventListener('change',
     (event) => {
     changeColor('eyes', event.target.value);
    }
)
document.getElementById("eyesInput").addEventListener('input',
    (event) => {
        changeColor('eyes', event.target.value);
    }
)

document.getElementById("lipsInput").addEventListener('change',
     (event) => {
     changeColor('lips', event.target.value);
    }
)
document.getElementById("lipsInput").addEventListener('input',
    (event) => {
        changeColor('lips', event.target.value);
    }
)

document.getElementById("facialHairInput").addEventListener('change',
     (event) => {
     changeColor('facialHair', event.target.value);
    }
)
document.getElementById("facialHairInput").addEventListener('input',
    (event) => {
        changeColor('facialHair', event.target.value);
    }
)

document.getElementById("accessory1Input").addEventListener('change',
     (event) => {
     changeColor('accessory1', event.target.value);
    }
)
document.getElementById("accessory1Input").addEventListener('input',
    (event) => {
        changeColor('accessory1', event.target.value);
    }
)

document.getElementById("accessory2Input").addEventListener('change',
     (event) => {
     changeColor('accessory2', event.target.value);
    }
)
document.getElementById("accessory2Input").addEventListener('input',
    (event) => {
        changeColor('accessory2', event.target.value);
    }
)

document.getElementById("collarInput").addEventListener('change',
     (event) => {
     changeColor('collar', event.target.value);
    }
)
document.getElementById("collarInput").addEventListener('input',
    (event) => {
        changeColor('collar', event.target.value);
    }
)

document.getElementById("chestInput").addEventListener('change',
     (event) => {
     changeColor('chest', event.target.value);
    }
)
document.getElementById("chestInput").addEventListener('input',
    (event) => {
        changeColor('chest', event.target.value);
    }
)

document.getElementById("logoInput").addEventListener('change',
     (event) => {
     changeColor('logo', event.target.value);
    }
)
document.getElementById("logoInput").addEventListener('input',
    (event) => {
        changeColor('logo', event.target.value);
    }
)



