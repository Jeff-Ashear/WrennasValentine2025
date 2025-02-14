let counter = 0

let introPicPath = {
    stop: [`<div id="intro">
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-envelope-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124q.219.416.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442q.33-.421.55-.836L15 11.105V5.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
      </svg>
    <h1 class="display-5 fw-bold text-body-emphasis">Happy Valentine's Day Wrenna!</h1>
    <div class="col-lg-6 mx-auto">
      <h3>Daddy loves you SOsoSOsoSOsoSOsoSOsoSOsoSOsoSOsoSO much!</h3>
      <h4>Touch the hearts below to see some special messages and pictures to wish you a happy valentines day!</h4>
    </div>
</div>`],
    running: [`<div id="intro">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
    </svg>
</div>`]
}
let poemArray1 = ["My dear Bean it's a day all about valentines", "Wanting to make it so crystally clear", "Your dad's just bursting with a most thankful pride", "She's so big and so smart and so strong and so kind", "His love is right with you even when he's away", "On the far side of the planet the fusion continues", "Growing so fast dad can hardly believe it!", "You can know this for sure and I'll tell you why", "I love no matter the things that you do,", "You don't need to be fast or limber or strong,", "You needn't be clever or wealthy or classy", "You don't have to sing songs in Carnage Hall", "You don't have to be pretty or make famous art", "I love you exactly as you are in this moment", "So if you ever feel lonely, or frightened or sad", "Remember you'll always have all his favor", "Through days and through weeks, through months and through years", "Both when we're together and when we're apart"]

let poemArray2 = ["When daddys are just about losing their minds!", "All the love in their hearts for their daughters so dear.", "To know that his Wrenna is making such strides.", "But that's all a bonus, as dad's love is blind.", "Just like the sun burns when its not quite yet day.", "Just like dad's love for his fantabulous kid who's.", "He loves you so much it's hard to conceive it.", "Because for you to have it, you never need try.", "The things that you say or the gunk on your shoe.", "I love you already, I think I'll go on…", "I love already, even if things get gassy.", "I love you right now, imperfections and all.", "I love you just as you are with all of my heart.", "And throughout any future, wouldn't you know it.", "Close your eyes for a moment and think of you dad.", "His support is undying and never will waver.", "About whether you're loved, you need not ever fear.", "I love you dear Wrenna with all of my heart!"]

let picPath = ['./assets/images/zero.jpg', './assets/images/one.jpg', './assets/images/two.jpeg', './assets/images/three.jpeg', './assets/images/four.jpg', './assets/images/five.jpg', './assets/images/six.jpg', './assets/images/seven.jpg', './assets/images/eight.jpg', './assets/images/nine.jpg', './assets/images/ten.jpg', './assets/images/eleven.jpg', './assets/images/twelve.jpg', './assets/images/thirteen.JPG', './assets/images/fourteen.jpeg', './assets/images/fifteen.jpg', './assets/images/sixteen.jpg', './assets/images/seventeen.jpg', './assets/images/cloudheart.jpg',]

let buttonPath = {
    btnStart: [`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-envelope-paper-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982"/>
  </svg>`],
    btnWait: [`<button type="button" class="btn btn-secondary" id="deadBtn">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
  </svg>
  </button>`],
    0:[`<button type="button" class="btn btn-success" id="startBtn">
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="64" fill="currentColor" class="bi bi-heart-arrow" viewBox="0 0 16 16">
<path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708z"/>
</svg>
  </button>`],
    1: [`<button type="button" class="btn btn-warning" id="startBtn">
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="64" fill="currentColor" class="bi bi-heart-arrow" viewBox="0 0 16 16">
<path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708z"/>
</svg>
  </button>`],
}

$('#startBtn').click(function () {
    if (counter === 17) {
        $('.card-img-top').attr('id', 'cloudHeart')
    }

    if (counter > 17) {
        location.reload(true)
    }

    console.log(counter)
    $('#intro').replaceWith(introPicPath.running)
    // $('#startBtn').replaceWith(buttonPath.btnWait)
    $('#line1').text('')
    $('#line2').text('')
    
    advancePic(counter)
    advanceText(counter)
    // advanceBtn(counter)
    setTimeout(function () {
        advanceCntr(counter)
    }, 3000)
})

function advancePic() {
    $(".card-img-top").attr('src', picPath[counter])
}

function advanceText() {
    setTimeout(function () {
        $('#line1').text(poemArray1[counter])
    },500)
    setTimeout(function() {
        $('#line2').text(poemArray2[counter])
    }, 1500)
}

function advanceBtn() {
    setTimeout(function () {
        $('#deadBtn').replaceWith(buttonPath[1])
    }, 3000)    
}

function advanceCntr() {
    return counter++
}