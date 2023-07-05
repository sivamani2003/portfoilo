var sp = document.getElementsByClassName("p4")
            var spia = document.getElementsByClassName("s4")
            function opentab(tabname){
                for (s of sp){
                    s.classList.remove("active-link");
                }
                for (spi of spia){
                    spi.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
            }