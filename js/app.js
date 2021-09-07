const imgCount = 5
const background = document.getElementById('background')

const loadImages = () => {
    console.log('loadImages')
    let y = Math.ceil(Math.random*300)
    let x = Math.ceil(Math.random*300)
    for (let i = 1; i<= imgCount; i++) {
        let pic = document.createElement('img')
        pic.setAttribute = `src='/assets/${i}.jpg'`;
        console.log(i)
        background.appendChild(pic); 

    }
}

document.addEventListener("DOMContentLoaded", loadImages)

// , style='top: ${y}px; left: ${x}px