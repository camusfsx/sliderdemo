window.onload = () => {
    let $imgBoard = $(`.imgBoard`)
    , $icons = $(`.iconList>img`)
    , carouselIndex = 0
    $icons.on(`click`, (event) => {
        let $icon = $(event.target)
            , index = $icon.index()
            , pixel = index * 275
        $icon.addClass(`clicked`).siblings(`.clicked`).removeClass(`clicked`)
        $imgBoard.css({ transform: `translateY(-${pixel}px)` })
    })
    setCarouselTimer.call(this, carouselIndex)
    stopForHover.call(this, $imgBoard,carouselIndex)
    stopForHover.call(this, $icons,carouselIndex)
    function setCarouselTimer(index) {
            carouselTimer = setInterval(() => {
            index++
            index = index > 3 ? 0 : index
            $icons.eq(index).trigger(`click`)
        }, 1000)
    }
    function stopForHover($object,index) {
        $object.on(`mouseenter`, () => {
            window.clearInterval(carouselTimer)
        }).on(`mouseleave`, () => {
            setCarouselTimer.call(this, index)
        })
    }
}



