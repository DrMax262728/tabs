window.onload = () => {
    let links = document.querySelectorAll('.tablinks li a');
    let contents = document.querySelectorAll('.tabcontents div');

        for (let [iLink, link] of links.entries()) {
            link.onclick = () => {

                for (let [iContent, content] of contents.entries()) {

                    if (content.classList.contains('show')) {
                        content.classList.remove('show', 'active');
                        links[iContent].classList.remove('active');
                    }
                }

                contents[iLink].classList.add('show', 'active');
                link.classList.add('active');
            }
        }
};
