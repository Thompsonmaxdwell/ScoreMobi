
const tabs = document.querySelectorAll('#tabs ul li');
const tabs_contents = document.querySelectorAll('.tabs_content')
const loader = document.querySelector('.loading_container');


 function tab() {
return tabs.forEach(function(tab, tab_index) {
        tab.addEventListener('click',() => {
    
            tabs.forEach((tab)=> {
                tab.classList.remove('active');
            });
    
            tab.classList.add('active');
    
            tabs_contents.forEach((content, content_index) => {
                
                if(content_index == tab_index){
                    loader.style.display = "block";

                    setTimeout(() => {
                        loader.style.display = "none";
                        content.style.display = 'block';
                    }, 1500);

                }else {
                    content.style.display = 'none';
                }
                
            })
        })
    })
}

export default tab;

















