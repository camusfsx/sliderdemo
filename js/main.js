let $imgBoard = $(`.imgBoard`)
    , $icons = $(`.iconList>img`)
    , clickIndex = 0
var carouselTimer = setCarouselTimer.call()
$icons.on(`click`, (event) => {
    let $icon = $(event.target)
        , index = $icon.index()
        , pixel = index * 275
    $icon.addClass(`clicked`).siblings(`.clicked`).removeClass(`clicked`)
    $imgBoard.css({ transform: `translateY(-${pixel}px)` })
})

stopForHover.call(this, $imgBoard)
stopForHover.call(this, $icons)
function setCarouselTimer(index) {
    return setInterval(() => {
        clickIndex++
        clickIndex = clickIndex > 3 ? 0 : clickIndex
        $icons.eq(clickIndex).trigger(`click`)
    }, 1000)
}
function stopForHover($object) {
    $object.on(`mouseenter`, () => {
        window.clearInterval(carouselTimer)
    }).on(`mouseleave`, () => {
        carouselTimer = setCarouselTimer.call()
    })
}




