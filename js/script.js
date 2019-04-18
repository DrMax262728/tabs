'use strict';
class CheckTab {
    constructor(links, contents) {
        this.links = links; 
        this.contents = contents;
    }
    checkF() {
        window.onload = () => {
            
            for (let [iLink, link] of this.links.entries()) {
                link.onclick = () => {
                    for (let [iContent, content] of this.contents.entries()) {

                        if (content.classList.contains('show')) {
                            content.classList.remove('show', 'active');
                            this.links[iContent].classList.remove('active');
                        }
                    }
                    this.contents[iLink].classList.add('show', 'active');
                    link.classList.add('active');
                }
            }
        }
    }
}
let tab = new CheckTab( document.querySelectorAll('.tablinks li a'), document.querySelectorAll('.tabcontents div') );
tab.checkF();