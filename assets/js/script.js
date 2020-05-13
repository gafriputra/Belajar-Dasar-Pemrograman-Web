function gantiPage(a) {
    let page = a.getAttribute("href");
    let result = document.getElementById('content');

    if (page != '#') {

        // buat object ajax
        var xhr = new XMLHttpRequest();

        // cek kesiapan ajax
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                result.innerHTML = xhr.responseText;
            }
        }

        if (page == '#page1') {
            page = "page1";
        } else if (page == '#page2') {
            page = "page2";
        } else if (page == "#page3") {
            page = "page3";
        }

        // eksekusi ajax
        xhr.open('GET', 'page/' + page + '.html', true);
        xhr.send();
    }

}