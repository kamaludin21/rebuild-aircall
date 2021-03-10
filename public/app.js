// * Dropdown desktop
const dropdown = document.querySelector('#dropdown');
const dropdown_menu = document.querySelector('#dropdown-menu');

dropdown.addEventListener('click', () => {
    if (dropdown_menu.classList.contains('hidden')) {
        dropdown_menu.classList.remove('hidden');
        dropdown_menu.classList.add('absolute');
    } else {
        dropdown_menu.classList.add('hidden');
        dropdown_menu.classList.remove('absolute');
    }
});

// * Dropdown mobile
const dropdownM = document.querySelector('#dropdownM');
const dropdown_menuM = document.querySelector('#dropdown-menuM');

dropdownM.addEventListener('click', () => {
    if (dropdown_menuM.classList.contains('hidden')) {
        dropdown_menuM.classList.remove('hidden');
        dropdown_menuM.classList.add('absolute');
    } else {
        dropdown_menuM.classList.add('hidden');
        dropdown_menuM.classList.remove('absolute');
    }
});

// * Mobile menu
const burgerButton = document.querySelector('#burger-menu');
const mobileMenu = document.querySelector('#mobile-menu');

burgerButton.addEventListener('click', () => {
    if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});


// Language
var languages = new Vue({
    el: '#languages',
    data: {
        items: [
        { language: 'Français' },
        { language: 'English' },
        { language: 'Deutsch' },
        { language: 'Español' },
        { language: 'Indonesia' }
        ]
    }
});
// Language
var languages = new Vue({
    el: '#languages-mobile',
    data: {
        items: [
        { language: 'Français' },
        { language: 'English' },
        { language: 'Deutsch' },
        { language: 'Español' },
        { language: 'Indonesia' }
        ]
    }
});

// Feature
var features = new Vue({
    el: '#features',
    data: {
        items: [
            {
                id: '1',
                title: 'Set up in seconds',
                content: 'No hardware. No headaches. Just a beautiful cloud call center solution you can use to start a conversation anywhere in the world today.',
                action: 'Explore all features'
            },
            {
                id: '2',
                title: 'Connect to your tools',
                content: 'Calls go better when all the right info is tied together in the cloud. Integrate Aircall with CRM systems, Helpdesk solutions, and other essential apps.',
                action: 'See our integrations'
            },
            {
                id: '3',
                title: 'Connect to your tools',
                content: 'Get rid of the guesswork. Monitor individual and team metrics in real-time to start making measurable improvements.',
                action: 'Monitor key metrics'
            },
            {
                id: '4',
                title: 'Enable productivity',
                content: 'Don’t put progress on hold. Create new numbers, teams, and workflows on the fly whenever new business requirements arise.',
                action: 'See true stories'
            }
        ]
    }
})

// Company
var company = new Vue({
    el: '#companies',
    data: {
        items: [
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/5soq14P4c7WzOGqlOgksDg/602128ee28b589b176f902e8403fe3d3/intercom-logo_2x.png',
                name: 'Intercom',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/4T7ntXxswrr0dV9akRfASx/335e4700adb1488a9a4de0b482ce9cc8/salesforces_2x.png',
                name: 'Salesforces',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/4hvpm3NEV6UaSn3mYDEcA7/d28b81dc0a873b09b363d6d14e843da6/zendesk-logo_2x.png',
                name: 'Zendesk',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/5A3E4mdRZFZnMUwTcqvg89/a9cb63ba7ee052407ac866832f946e1a/hubspot-logo_2x.png',
                name: 'Hubspot',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/3T5JRG62JDJ1kCzP05qaMK/9e41e4e4b304d7a94396a78b800b02cb/ms-logo_2x.png',
                name: 'Microsoft Dynamic',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/1akwWesL0Pf904skeSqs8B/30c550978c750c41a7a2c3587997de05/shopify_2x.png',
                name: 'Shopify',
                hiddenOn: 'flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/69eUHjvL82vSH7NeTsXWft/a8952f89a6e95ceba4c55cd101455b91/gorgias_2x.png',
                name: 'Gorgias',
                hiddenOn: 'hidden md:flex'
                
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/6Ky6pgY6ykdZfbOZgXIwWV/9cd8afd0eaf61d89f67f73540e277f80/help-scout-logo_2x.png',
                name: 'Help Scout',
                hiddenOn: 'hidden md:flex'
                
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/1Ki9tYAY45fQLcfZavUxyu/425f79640ce888a39c65d263c6a53019/zapier_2x.png',
                name: 'Zapier',
                hiddenOn: 'hidden md:flex'
                
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/1A0Jjuh4gneIv3HvwtinCg/f2764f80e200848f6c9bf9f881da4ffb/front.png',
                name: 'Front',
                hiddenOn: 'hidden md:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/7yPXIKlYBHlWil6vCi07RG/3995ad4c2e11db6bfe9571cd371ea06a/slack_2x.png',
                name: 'Slack',
                hiddenOn: 'hidden md:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/ETTSmNuX2w6vm1eeLx6pV/0df4057a9d4f11f2bcfb2bfcb5328979/kustomer_2x.png',
                name: 'Kustomer',
                hiddenOn: 'hidden md:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/5yS1Pd5bfSPMYxv9lrvrXG/f7d6bf00b5e188ee754ac651a0769964/zohocrm-icon.png',
                name: 'Zoho CRM',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/3tjWztEIyTR0AO4Ltb1JcR/3cd5a03918ac98fb49565bf582909f0a/freshdesk_2x.png',
                name: 'Freshdesk',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/75H8dAqPJ56VOLVX4T6NvP/9a4677f2f4bd414bc21e70717e8a6b14/HappyFox_logo2w.png',
                name: 'HappyFox',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/5QvVSXNvekQdRXHVKRyJIG/32c173706d24b4aac2849749febb48f2/JobAdder_2x.png',
                name: 'JobAdder',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/73mjiKSkWhObeTDKIcxuqc/a6b126cec0ada32d83d1d0f3f302009f/copper_2x.png',
                name: 'Copper',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/6KLiFcWSWHClMHhDA38Geu/b5933f506428e4de6633282ca74ac3cc/pipedrive_2x.png',
                name: 'Pipedrive',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/6sp7zjpO0puvzgKRv8b4m5/244f15cec294936f00473f01109051b9/no-crm-io_2x.png',
                name: 'noCRM.io',
                hiddenOn: 'hidden lg:flex'
            },
            {
                photoURL: 'https://images.ctfassets.net/0kz5nrpxuzuo/4rxldWPldtYH7RnjKKjUmA/ed6362e5d965778703ea43f0406be38a/reamaze-icon.png',
                name: 'Re:amaze',
                hiddenOn: 'hidden lg:flex'
            },
        ]
    }
});

var footer = new Vue({
    el: '#footer-menu',
    data: {
        items: [
            {
                title: 'Solutions',
                subtitles: [
                    'Call Center',
                    'Support',
                    'Sales',
                    'Phone System',
                ]
            },
            {
                title: 'Product',
                subtitles: [
                    'Integrations',
                    'Quality and reliability',
                    'Apps',
                    'Pricing',
                    'Country coverage',
                    'Request a demo',
                ]
            },
            {
                title: 'Features',
                subtitles: [
                    'PowerDialer',
                    'IVR',
                    'Call Routing',
                    'Call Center Analytics',
                    'CTI Integration',
                    'Click to Dial',
                ]
            },
            {
                title: 'Resources',
                subtitles: [
                    'Blog',
                    'Knowledge Base',
                    'Customer Stories',
                    'Partner Stories',
                    'Become a Partner',
                    'Build an Integration',
                    'VoIP Documentation',
                    'Glossary',
                ]
            },
            {
                title: 'Company',
                subtitles: [
                    'Contact Us',
                    'About Us',
                    'Careers',
                    'Press',
                    'Uptime',
                    'Brand',
                ]
            },
        ]
    }
})

// footer-menu2
var footerLink = new Vue({
    el: '#footer-link',
    data: {
        items: [
            {link: '© Aircall'},
            {link: 'Privacy Policy'},
            {link: 'Terms of use'},
            {link: 'Security'},
            {link: 'GDPR'},
            {link: 'Privacy Shield'},
            {link: 'Sitemap'},
        ]
    }
});