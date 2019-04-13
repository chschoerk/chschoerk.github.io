document.getElementById("defaultOpen-1").click();
document.getElementById("defaultOpen-2").click();

function openTab(evt, tabName, boxName) {    
    var i, tabcontent, tablinks;

    var box = document.getElementById(boxName);

    tabcontent = box.getElementsByClassName("sg-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = box.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" sg-current", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " sg-current";
}