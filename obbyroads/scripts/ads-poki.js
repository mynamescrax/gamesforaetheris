'use strict';

function showInterstitial(audioOn, interstitialType, interstitialName)
{
    if (!isVideoAdPlaying && firebase.auth().currentUser != null)
    {
        PokiSDK.commercialBreak(() => {
            isVideoAdPlaying = true;
            interstitialStart(false);
            console.log("Commercial break started");
        }).then(() => {
        console.log("Commercial break finished, proceeding to game");
        isVideoAdPlaying = false;
        interstitialComplete(false);
        });
    }
}

function tryInitRewardedInterstitial(audioOn)
{
    // Need to check for PokiSDK.adblockDetected?
    console.log("Poki SDK - tryInitRewardedInterstitial");
}

function tryShowRewardedInterstitial(audioOn)
{
    PokiSDK.rewardedBreak(() => {
        isVideoAdPlaying = true;
        interstitialStart(true);
    }).then((success) => {
        if(success) {
            interstitialComplete(true);
        } else {
            interstitialSkipped(true);
        }
    });
}

function recordGameplayStart()
{
    PokiSDK.gameplayStart();
}

function recordGameplayStop()
{
    PokiSDK.gameplayStop();
}

// //// DISPLAY AD FUNCTIONS FOR POKI SDK ////
// 'use strict';

// ///////////////////////////
//ad tags
const adTagMainMenuBanner = "obbyroads-io_300x600";
const adTagStageCompleteBannerLeftWeb = "obbyroads-io_300x600_completeleft";
const adTagStageCompleteBannerRightWeb = "obbyroads-io_300x600_completeright";
const adTagRaceStartBannerLeftWeb = "obbyroads-io_300x600_left";
const adTagRaceStartBannerRightWeb = "obbyroads-io_300x600_right";
const adTagDeathBannerWeb = "obbyroads-io_970x250";

var currShownAdElementIds = [];

function hasAdContent(adElementId)
{
    const ad = document.getElementById(adElementId);

    return (ad != null && ad.innerHTML);
}

function showAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if(ad != null)
    {
        ad.style.display = "block";
    }
    
    currShownAdElementIds.push(adElementId);
}

function requestAd(adElementId, adShownTimestamp)
{
    if(currShownAdElementIds.includes(adElementId))
        return;
    
    if(Date.now() >= (adShownTimestamp.val + bannerMinRefreshDelayMillisecs) || !hasAdContent(adElementId))
    {
        adShownTimestamp.val = Date.now();

        hideAd(adElementId);

        const ad = document.getElementById(adElementId);
        if(adElementId == adTagDeathBannerWeb)
        {
            PokiSDK.displayAd(ad, "970x250");
        }
        // else
        // {
        //     PokiSDK.displayAd(ad, "300x250");
        // }
        showAd(adElementId);
    }
}

function hideAd(adElementId)
{
    if(currShownAdElementIds.includes(adElementId))
    {
        destroyAd(adElementId);
    }
}

function destroyAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if(ad != null)
    {
        ad.style.display = "none";
        PokiSDK.destroyAd(ad);
    }
    
    const indexToRemove = currShownAdElementIds.indexOf(adElementId);
    
    if(indexToRemove >= 0)
    {
        currShownAdElementIds.splice(indexToRemove, 1);
    }
}

function requestLoadingAd()
{
    requestAd(adTagLoadingBanner, loadingBannerShownTimestamp);
}

function requestMainMenuAd()
{
    requestAd(adTagMainMenuBanner, mainMenuBannerShownTimestamp);
}

function hideMainMenuAd()
{
    hideAd(adTagMainMenuBanner);
}


function requestStageCompleteAd()
{
    requestAd(adTagStageCompleteBannerLeftWeb, stageCompleteBannerShownTimestamp);
    requestAd(adTagStageCompleteBannerRightWeb, stageCompleteBannerShownTimestamp);
}

function hideStageCompleteAd()
{
    hideAd(adTagStageCompleteBannerLeftWeb);
    hideAd(adTagStageCompleteBannerRightWeb);
}

function requestRaceStartAd()
{
    requestAd(adTagRaceStartBannerLeftWeb, raceStartBannerShownTimestamp);
    requestAd(adTagRaceStartBannerRightWeb, raceStartBannerShownTimestamp);
}

function hideRaceStartAd()
{
    hideAd(adTagRaceStartBannerLeftWeb);
    hideAd(adTagRaceStartBannerRightWeb);
}

function requestDeathAd()
{
    if(isMobile())
    {
        // needs to be added back in when we have a mobile death banner
        //requestAd(adTagDeathBannerMobile, deathBannerShownTimestamp);
    }
    else
    {
        requestAd(adTagDeathBannerWeb, deathBannerShownTimestamp);
    }
}

function hideDeathAd()
{
    if(isMobile())
    {
        // needs to be added back in when we have a mobile death banner
        //hideAd(adTagDeathBannerMobile);
    }
    else
    {
        hideAd(adTagDeathBannerWeb);
    }
}

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
}

function hideOffCanvasAds(adResArray)
{
}
