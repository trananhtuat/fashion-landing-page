let isScroll = false
scrollSlide = () => {

    if (isScroll) return

    isScroll = true

    let  listitems = document.querySelectorAll('.slide')

    let slider = document.querySelector('.slider')

    let reverse = Array.from(listitems).slice().reverse()

    left = reverse[0].offsetLeft+'px'
    height = reverse[0].offsetHeight+'px'
    width = reverse[0].offsetWidth+'px'
    zIndex = reverse[0].style.zIndex

    reverse.forEach((el, index) => {
        // console.log(el)
    
        if (index < listitems.length-1) {
            // console.log(index)
            // console.log(reverse[index + 1].offsetLeft)
            el.style.left = reverse[index + 1].offsetLeft+'px'
            el.style.height = reverse[index + 1].offsetHeight+'px'
            el.style.width = reverse[index + 1].offsetWidth+'px'
            el.style.zIndex = index + 1
            el.style.transform = 'unset'
            el.style.opacity = '1'
        }
        if (index === listitems.length - 1) {
            el.style.transform = 'scale(1.5)'
            el.style.opacity = '0'

            let cln = el.cloneNode(true)
            
            setTimeout(() => {
                el.remove()
                cln.style.transform = 'scale(0)'
                cln.style.left = left
                cln.style.height = height
                cln.style.width = width
                // cln.style.transform = 'unset'
                cln.style.opacity = '0'
                cln.style.zIndex = 0
                slider.appendChild(cln)
                setTimeout(() => {
                    // console.log(height)
                    // cln.style.transform = '1'
                    // cln.style.opacity = '1'
                    
                },10);
                isScroll = false
            }, 2000);
        }
    })
    listitems = document.querySelectorAll('.slide')
    listitems[0].style.zIndex = '4'
}

let slideControl = document.querySelector('.slide-control')

slideControl.onclick = (e) => {
    scrollSlide()
}
// scrollSlide()
// setInterval(() => {
//     scrollSlide()
// }, 2200);