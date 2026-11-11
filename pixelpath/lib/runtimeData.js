const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DefaultCompany",
        productName: "TestPixel",
        productVersion: "0.1",
        sdkVersion: "3.19.12+merge4",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/PixelPath_Web_GameDistribution.loader.js",
        dataURL: "bin/PixelPath_Web_GameDistribution.data.unityweb",
        frameworkURL: "bin/PixelPath_Web_GameDistribution.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/PixelPath_Web_GameDistribution.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "LOGO_TYPE",
        iconTextureName: "jump12323.png",
        backgroundTextureName: "gradient_1280_720.png",

        // Aspect ratio.
        desktopAspectRatio: 1.777778,
        mobileAspectRatio: 1.777778,

        // Debug mode.
        debugMode: false,
        rotationLockType : "LandscapeOnly",

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "gameDistributionWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "3ffc5c0944f54f06afb212ca7d80bb00",
        gameDistributionPrefix: "mirragames_",

        // CrazyGames.
        crazyGamesXSollaProjectId: "",

        // Ads by Google.
        googleAdsClient: "",
        googleAdsChannel: "",
        googleAdsTest: true,

        // GamePush.
        gamepushProjectId: "",
        gamepushToken: "",

    }

})();