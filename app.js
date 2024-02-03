

        // document.addEventListener('scroll', (e) => {
        //     console.log(e);
        //     console.log(window.scrollY);
        // })


        window.onload = (event) => {


            let frameNumber = 0;
            let playbackConst = 1000;
            
            let setHeight = document.getElementById('set-height');
            let video = document.getElementById('video');
    
    
            video.addEventListener('loadedmetadata', function(){
                setHeight.style.height = Math.floor(video.duration) * playbackConst + 'px';
                console.log(video.duration);
                cosnole.log('dziala')
            }) // TU COŚ NIE DZIAŁA! NIE CONSOLOGUJE
            
            // setHeight.style.height = 6 * playbackConst + 'px';
    
            function scrollPlay() {
                let frameNumber = window.scrollY/playbackConst;
                video.currentTime = frameNumber;
                window.requestAnimationFrame(scrollPlay);
            }
            window.requestAnimationFrame(scrollPlay);
    
            window.onscroll = function(){stickyOnOff()}; //przypisanie do onscroll'a mojej funkcji
    
            function stickyOnOff() {
                if (window.scrollY < 1000) {
                    video.classList.add('video');
                    video.classList.remove('sticky');
                    console.log("1");
                } else if (window.scrollY > 1000 && window.scrollY<5245) {
                    video.classList.add("sticky");
                    video.classList.remove('video');
                    video.classList.remove('stop');
                    console.log("2");
                } else if (window.scrollY > 5245) {
                    video.classList.add("stop");
                    video.classList.remove('sticky');
                    console.log('3');
                }
            };
            stickyOnOff();
    
            console.log("page is fully loaded");
            };
    
            //const text1 = document.querySelector('.text__1')
            
            document.addEventListener('scroll', ()=>{
                if (scrollY>1300) {
                    //wł main 1
                }
            })