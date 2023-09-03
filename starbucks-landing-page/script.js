var img = document.querySelector('#mainimg')
                var circle = document.querySelector('.extras')
                var txt = document.querySelector('.fonth')
                var but = document.querySelector('.butmore')
                var txtf = document.querySelector(".textform")

                function change() {
                    img.src = "assets/2pinkcoffe2.png";
                    circle.style.background = '#d492a6';
                    txt.style.color = '#d492a6'
                    but.style.background = '#d492a6'
                    but.style.borderColor = '#d492a6'
                    txtf.innerHTML = ('Get Pink Matcha<br>today in a Starbucks store!')
                };

                function change2() {
                    img.src = "assets/greencoffe.png";
                    circle.style.background = '#017143';
                    txt.style.color = '#017143'
                    but.style.background = '#017143'
                    but.style.borderColor = '#017143'
                    txtf.innerHTML = ('Get Green Matcha<br>today in a Starbucks store!')
                };

                function change3() {
                    img.src = "assets/magcoffe.png";
                    circle.style.background = '#e685d1';
                    txt.style.color = '#e685d1'
                    but.style.background = '#e685d1'
                    but.style.borderColor = '#e685d1'
                    txtf.innerHTML = ('Get Magenta Matcha<br>today in a Starbucks store!')
                };

