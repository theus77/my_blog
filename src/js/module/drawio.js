function drawioPreviewer() {
    const drawioDocuments = document.querySelectorAll('a[href$=".drawio"]');
    let loaded = 0;

    [].forEach.call(drawioDocuments, function (doc) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", doc.href, true);
        xhttp.send();

        xhttp.onload = function (e) {
            const config = {
                highlight: "#0000ff",
                nav: true,
                resize: true,
                toolbar: "zoom layers lightbox",
                xml: xhttp.responseText
            };
            const div = document.createElement('div');
            div.setAttribute('class', 'mxgraph');
            div.dataset.mxgraph = JSON.stringify(config);
            doc.parentNode.replaceChild(div, doc);
            ++loaded;

            if (loaded < drawioDocuments.length) {
                return;
            }

            const script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.addEventListener("load", function() {
                const redrawEvent = new Event('redraw');
                window.dispatchEvent(redrawEvent);
            });
            script.setAttribute('src', '//viewer.diagrams.net/js/viewer-static.min.js');
            document.body.appendChild(script);

        };

    })
}

export {drawioPreviewer};