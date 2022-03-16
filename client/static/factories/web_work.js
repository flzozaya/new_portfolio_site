app.factory('webWorkFactory', ['$http', function($http){

        var factory = {}
        factory.work = [{
            // GRID //
            contentNumber: 1,
            displayDevice: "iMac",
            deviceImage: "imac.png",
            contentPrevClass: 'preview-iMac',
            contentPrevImage: 'uproot-content-preview.jpg',
            contentPrevImageWidth: 405,
            contentPrevImageAlt: "iMac app preview",
            zoomerNum: 5,
            slideTitleSpan: "Web & Native Mobile App Development",
            slideTitle: "Uproot",

            // SLIDER //
            contentImage: "uproot-content.jpg",
            contentImageAlt: "eMail Blast Deployment App Project in Full MEAN JavaScript",
            contentH2: "Uproot App",
            contentH3: "Web & Native Mobile App Development",
            contentUL: [
                "Web and mobile app that builds meaningful data insights between local, state, and federal officials with issues pertaining to underserved communities. The app provides tools for political engagement around issues of racial justice, lgbtq rights, women's rights, criminal justice"
            ],
            contentCopy: "Technologies used: React, Ionic, Sass, Node, GraphQL, MongoDB",
            liveLinkURL: "http://www.uproot.co/"
        },
        {
            // GRID //
            contentNumber: 2,
            displayDevice: "macbook",
            deviceImage: "macbook.png",
            contentPrevClass: 'preview-macbook',
            contentPrevImage: 'dabr-content-preview.jpg',
            contentPrevImageWidth: 392,
            contentPrevImageAlt: "Dental Associates of Boca Raton preview",
            zoomerNum: 3,
            slideTitleSpan: "Web Design & Development",
            slideTitle: "Dental Associates of Boca Raton",

            // SLIDER //
            contentImage: "dabr-content.jpg",
            contentImageAlt: "Dental Associates of Boca Raton Project",
            contentH2: "Dental Associates of Boca Raton",
            contentH3: "Freelance Web Design & Development",
            contentUL: [
                    "Designed, developed, managed and directed team of 4 in the website redesign project",
                    "Supervised launch of Social Media marketing",
                    "Designed and developed email marketing campaigns",
                    "Provided monthly scheduled website maintenance and updates",
                    "Integrated Wordpress blog while maintaining existing website layout and branding"
                    ],
            contentCopy: "Technologies used: Node.js, Express.js, HTML5, CSS3, Jquery, Responsive web design, UX & Web Graphics Design.",
            liveLinkURL: "http://www.mybocasmile.com/"
        },
        {
            // GRID //
            contentNumber: 3,
            displayDevice: "iphone",
            deviceImage: "iphone.png",
            contentPrevClass: 'preview-iphone',
            contentPrevImage: 'dabr-mobile-content-preview.jpg',
            contentPrevImageWidth: 122,
            contentPrevImageAlt: "Dental Associates of Boca Raton mobile web app preview",
            zoomerNum: 2,
            slideTitleSpan: "Mobile Web App Development",
            slideTitle: "Dental Associates of Boca Raton",

            // SLIDER //
            contentImage: "dabr-mobile-content.png",
            contentImageAlt: "Dental Associates of Boca Raton Mobile Web App Project",
            contentH2: "Dental Associates of Boca Raton",
            contentH3: "Freelance Mobile Web App Development",
            contentUL: [
                    "Designed & developed mobile-compatible version of their website"
                    ],
            contentCopy: "Technologies used: HTML5, CSS3, JavaScript, Jquery, Responsive web design, Web graphics with Adobe Illustrator and Photoshop.",
            liveLinkURL: "http://m.mybocasmile.com/"
        },
        {
            // GRID //
            contentNumber: 4,
            displayDevice: "iMac",
            deviceImage: "imac.png",
            contentPrevClass: 'preview-iMac',
            contentPrevImage: 'emailApp-content-preview.jpg',
            contentPrevImageWidth: 405,
            contentPrevImageAlt: "iMac app preview",
            zoomerNum: 5,
            slideTitleSpan: "Full MEAN JS Development",
            slideTitle: "eMail Blast Deployment App in Full MEAN",

            // SLIDER //
            contentImage: "emailApp-content.jpg",
            contentImageAlt: "eMail Blast Deployment App Project in Full MEAN JavaScript",
            contentH2: "eMail Blast Deployment App",
            contentH3: "Web Application in Full MEAN JavaScript",
            contentUL: [
                    "Custom Email Deployment Platform built in full MEAN stack"
                /*
                    "",
                    "",
                    "",
                    ""
                */
                    ],
            contentCopy: "Technologies used: HTML, CSS3, LESS, BootStrap, JavaScript, Angular.js, Node.js, Express.js, MongoDB, JQuery, Responsive web design",
            liveLinkURL: "http://ec2-35-160-7-62.us-west-2.compute.amazonaws.com/"
        }];
        /*  displayDevice: iMac, macbook, iphone
            deviceImage: imac, macbook, iphone
            contentPrevClass: preview-iMac, preview-macbook, preview-iphone
            contentPrevImageWidth: iMac = 405
                                    macbook = 392
                                    iphone = 122
        */
        return factory;
}]);