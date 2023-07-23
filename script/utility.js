const json = {
    "Name": "Wenjie Mo",
    "Education": {
        "MS": {
            "School": "University of California, Los Angeles (UCLA)",
            "Major": "Computer Science",
            "Year": "2023-2024"
        },
        "BS": {
            "School": "University of California, Los Angeles (UCLA)",
            "Major": "Computer Science",
            "Year": "2019-2023"
        }
    },
    "Industry Experiences": {
        "ZipRecruiter": {
            "Title": "Software Engineer Intern",
            "Time": "May 2023 - August 2023",
            "Team": "Messaging Team"
        },
        "Amazon": {
            "Title": "Software Development Engineer Intern",
            "Time": "June 2022 - September 2022",
            "Team": "ReCommerce AfterMarketplace team"
        },
        "Tencent": {
            "Job title": "Software Engineer Intern",
            "Time": "June 2021 - September 2021",
            "Team": "Android QQ team"
        }
    },
    "Research Experiences": {
        "UCLA Zhou Lab":{
            "Concentration": "Reinforcement Learning",
            "Advisor": "Professor Bolei Zhou",
            "Time": "March 2021 - Present"
        },
        "UCLA Vision Lab": {
            "Concentration": "Computer Vision",
            "Advisor": "Professor Stefano Soatto",
            "Time": "March 2021 - January 2023"
        },
        "UCLA Structures-Computer Interaction Laboratory": {
            "Concentration": "Robotics",
            "Advisor": "Professor M. Khalid Jawed",
            "Time": "July 2020 - March 2022"
        }},
    "Location": [
        "Los Angeles, USA",
        "Hangzhou, China"
    ],
    "Links": [
        "https://github.com/wenjie-mo$Github",
        "https://www.linkedin.com/in/wenjie-mo$Linkedin",
        "https://scholar.google.com/citations?user=Q_F174kAAAAJ$Google_Scholar",
    ]
};

$(function() {
    $("#json").JSONView(json);
    $('#json').JSONView('toggle', 2);

    jsonContent = document.getElementsByClassName("obj level1 collapsible");
    for (let i = 0; i < jsonContent.length; i++) {
        const item = jsonContent[i].childNodes[0].getElementsByClassName("collapser");
        item[0].click();

    }
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