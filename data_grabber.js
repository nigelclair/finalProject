var script = {};
script.getNextBtn = function() {
    return $('.pagination-control__next');
};
script.getSlugs = function() {
    return $('.spirits > li > a').map((idx,el) => {
        return el.href.split('/').pop();
    });
};
script.getAllSlugs = function(cb) {
    const btn = script.getNextBtn();
    if (btn.length == 0) {
        console.log('DONE!', script.slugs)
        cb(script.slugs);
        return;
    }
    script.slugs = (script.slugs || []).concat(...script.getSlugs());
    console.log(script.slugs.length, script.slugs[script.slugs.length-1])
    btn.click();
    setTimeout(() => {
        script.getAllSlugs(cb);
    }, 1000);        
};
script.getOneSlug = function(slug, idx) {
    return new Promise((resolve, reject) => {
       const url = 'https://distiller.com/api/v1/spirits/' + slug + '.json';
       const http = new XMLHttpRequest();
       http.open('GET', url);
       http.onload = function() {
           if (!script.data) script.data = [];
           const data = JSON.parse(this.responseText);
           script.data.push(data);
           console.log(script.data.length)
           resolve(data)
       }
       http.onerror = (e) => {
           reject(e)
       }
       console.log(`sending ${idx}...` + url )
       http.send();
    });
}
script.getAllSlugs((slugs)=> {
      console.log('LOADING ALL NOW')
      const first = slugs.shift(); 
      slugs.reduce((promise, currentSlug, idx) => {
          return promise.then(() => {
              return script.getOneSlug(currentSlug, idx)
          })
      }, script.getOneSlug(first, 0))    
    .then(() => {
        console.log(script.data)
    });
})

    
    
