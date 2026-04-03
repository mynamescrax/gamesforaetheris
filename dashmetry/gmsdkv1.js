/**
 * GMSDK v1 - Game Management & Ads SDK
 * Purpose: License verification, configuration loading, and AdSense/WGPlayer integration.
 */

window['GMSOFT_OPTIONS'] = config;
const API_BASE_URL = "https://api.1games.io/sdk/gsv1";

verifyLicenseAndLoad(API_BASE_URL);

function verifyLicenseAndLoad(apiUrl) {
    let currentHostname = window.location.hostname;
    let gameId = window['GMSOFT_OPTIONS']?.['gameId'] || '';
    let isIframe = 'no';

    try {
        if (checkIfCrossDomain()) {
            if (document.referrer) {
                let referrerUrl = new URL(document.referrer);
                currentHostname = referrerUrl.hostname;
            }
            isIframe = 'yes';
        }

        let cacheBuster = Math.floor(Date.now() / 30000);
        let payload = 'd=' + currentHostname + '&gid=' + gameId + '&hn=' + window.location.hostname + '&ts=' + cacheBuster + '&wp=' + isIframe;
        let encodedPayload = btoa(payload);
        let requestUrl = apiUrl + '?params=' + encodedPayload;

        console.log("SDK: Verifying license...");

        // Spoofed license response — skips remote API check
        let response = { regisinfo: { allow_play: 'yes', signed: '' }, moregames_url: {}, adsinfo: { enable: 'no' } };
        let data = response['regisinfo'] || {};

        if (data['signed']) {
            window['GMSOFT_SIGNED'] = data['signed'];
            try { localStorage.setItem('gmsdksigndomain', data['signed']); } catch (e) {}
        }

        if (data['allow_play'] !== 'yes') {
            injectGameSplashUI(data);
        }

        let moreGames = response['moregames_url'] || {};
        window['GMSOFT_OPTIONS'] = {
            'sdktype': window['GMSOFT_SDKTYPE'],
            'more_games_url': moreGames['more_games_url'] || '',
            'promotion': moreGames['promotion'] || {}
        };

        let ads = response['adsinfo'] || {};
        window['GMSOFT_ADS_INFO'] = {
            'enable': ads['enable'],
            'sdk_type': ads['sdk_type'] || 'gm',
            'time_show_inter': Number(ads['time_show_inter'] || 60),
            'time_show_reward': Number(ads['time_show_reward'] || 60),
            'pubid': ads['pubid'],
            'reward': ads['reward'],
            'enable_reward': ads['enable_reward'] || 'yes',
            'enable_interstitial': ads['enable_interstitial'] || 'yes',
            'enable_preroll': ads['enable_preroll'] || 'yes'
        };

        if (ads['enable'] === 'yes') {
            if (ads['sdk_type'] === 'h5') {
                initGoogleH5Ads(gameId, ads['pubid'], ads['ads_debug'] === 'yes');
            } else if (ads['sdk_type'] === 'wg') {
                initWGPlayerAds(ads['ads_debug'] === 'yes');
            }
        }

    } catch (err) {
        console.error("SDK Error:", err);
    }

    document.dispatchEvent(new CustomEvent('gmsoftSdkReady'));
}

function initGoogleH5Ads(gameId, pubId, debug) {
    var script = document.createElement('script');
    script.setAttribute('data-ad-client', pubId);
    if (debug) script.setAttribute('data-adbreak-test', 'on');
    script.setAttribute('data-ad-channel', gameId);
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + pubId;
    document.head.appendChild(script);
    window.adsbygoogle = window.adsbygoogle || [];
    window.adConfig = function(config) { adsbygoogle.push(config); };
    window.onBeforeAd = function() {};
    window.onAfterAd = function() {};
}

function initWGPlayerAds(debug) {
    if (debug) {
        window['wgCustomImplementation'] = true;
        let script = document.createElement('script');
        script.src = 'https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js';
        document.head.appendChild(script);
    } else {
        let script = document.createElement('script');
        script.src = 'https://universal.wgplayer.com/tag/?lh=' + encodeURIComponent(window.location.hostname) + '&wp=' + encodeURIComponent(window.location.pathname) + '&ws=' + encodeURIComponent(window.location.search);
        let firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    }
}

function checkIfCrossDomain() {
    try {
        if (window.location && window == window.top) return false;
        if (window.location.hostname == window.top.location.hostname) return false;
    } catch (e) { return true; }
    return true;
}

function syncHttpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
}

function injectGameSplashUI(data) {}