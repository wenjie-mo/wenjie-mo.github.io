var json = {
    "Language": [
        "English",
        "简体中文"
    ],
    "Name": "Wenjie Mo",
    "Education": {
        "BS": {
            "School": "University of California, Los Angeles (UCLA)",
            "Major": "Computer Science",
            "Year": "2019-2023"
        }
    },
    "Work": [
        {
            "Company": "Amazon",
            "Job title": "Incoming Software Dev Engineer Intern",
            "Time": "June 2022 - September 2022"
        }],
    "Past Experiences": [
        {
            "Company": "Tencent",
            "Job title": "Software Engineering Intern",
            "Time": "June 2021 - September 2021"
        },
        {
            "Company": "UCLA Structures-Computer Interaction Laboratory",
            "Job title": "Undergraduate Student Researcher",
            "Time": "July 2020 - Present"
        }],
    "Location": [
        "Los Angeles, USA",
        "Hangzhou, China"
    ],
    "Links": [
        "https://github.com/wenjie-mo$Github",
        "https://www.linkedin.com/in/wenjie-mo$Linkedin",
    ]
};

$(function() {
    $("#json").JSONView(json);

    $("#json-collapsed").JSONView(json, { collapsed: true, nl2br: true, recursive_collapser: true });

    $('#collapse-btn').on('click', function() {
        $('#json').JSONView('collapse');
    });

    $('#expand-btn').on('click', function() {
        $('#json').JSONView('expand');
    });

    $('#toggle-btn').on('click', function() {
        $('#json').JSONView('toggle');
    });

    $('#toggle-level1-btn').on('click', function() {
        $('#json').JSONView('toggle', 1);
    });

    $('#toggle-level2-btn').on('click',  function() {
        $('#json').JSONView('selectCollapse');
    });
});

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}