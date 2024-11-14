const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const jsonData = {
    "graphicItemObjects": [{
        "x": 365.82,
        "y": 3.54,
        "width": 800,
        "height": 352,
        "scaleX": 0.4158,
        "scaleY": 0.4158,
        "hashedFilename": "04ecd746a5d3e8ecd311e6041313c987786531",
        "fileExtension": "png"
    }]
};

const image = new Image();
image.src = "YOUR_IMAGE_PATH/04ecd746a5d3e8ecd311e6041313c987786531.png";
image.onload = () => {
    const obj = jsonData.graphicItemObjects[0];
    ctx.drawImage(
        image,
        obj.x,
        obj.y,
        obj.width * obj.scaleX,
        obj.height * obj.scaleY
    );
};