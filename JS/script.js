
let ClickButton = function(btn){
    $(btn).click(function(button){
        let toggles = $(button.currentTarget).attr('data-toggles');
        if(toggles == 'false'){
            $(button.currentTarget).find('.music-menu-boxes').css('display','block');
            $(button.currentTarget).attr('data-toggles', true);
        }else{
            $(button.currentTarget).find('.music-menu-boxes').css('display','none');
            $(button.currentTarget).attr('data-toggles', false);
        }
    })
}

let clickImg = function(img){
    $(img).click(function(imgclikced){
        let imgtoggles = $(imgclikced.currentTarget).attr('data-toggles');

        if (imgtoggles == 'false'){
            $(imgclikced.currentTarget).find('.play-button1').css('display','block');
            $(imgclikced.currentTarget).attr('data-toggles',true);
        }else{
            $(imgclikced.currentTarget).find('.play-button1').css('display','none');
            $(imgclikced.currentTarget).attr('data-toggles',false);
        }
    })
}

let playbtn = function(menu){
    $(menu).click(function(song){
        // console.log($(song.currentTarget).attr('data-toggles'));
        let menuClicked = $(song.currentTarget).attr('data-toggles');
        if (menuClicked == 'false'){
            $('#music-play-container').css('display','block');
            $(song.currentTarget).attr('data-toggles',true);
        }else{
            $('#music-play-container').css('display','none');
            $(song.currentTarget).attr('data-toggles',false);
        }

    })
}


let playlist = $('#downmenu i');
playlist.click(function(e){
    let data = $('#playlist').attr('data-toggles');
    if(data == 'false'){
        $('#playlist').css('display','block');
        $('#playlist').attr('data-toggles',true);
    }else{
        $('#playlist').css('display','none');
        $('#playlist').attr('data-toggles',false);
    }
})

let playbutton = $('.play-button1');

for(i of playbutton){
    playbtn(i);
}


let time = $('.time1');

for(i of time){
    ClickButton(i);
}


let imgHover = $('.image-over');

for(img of imgHover){
    clickImg(img);
}


