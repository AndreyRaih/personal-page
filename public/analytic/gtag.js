(function () {
    function getQueryParam(param) {
        var searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(param);
    }
    var fromValue = getQueryParam('from') || 'direct';
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-YRWED3ME0V', {
        'campaignSource': fromValue,
        'campaignMedium': 'socials',
        'campaignName': 'tracking'
    });
})();
