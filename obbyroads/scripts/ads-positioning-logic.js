'use strict';

var gameContainer;
function updateAdSizes()
{
  if(gameContainer == null)
  {
    gameContainer = document.getElementById('gameContainer');
  }

  if(gameContainer != null)
  {
    updateLongBanner();
    
    if(!offCanvasAdsEnabled)
    {
      updateMainMenuBanner();
      updateStageCompleteBanner();
      updateRaceStartBanner();
    }
  }
}

var mainMenuBanner;
const defaultMainMenuScaleStr = "scale(100%, 100%)";
const defaultMainMenuTranslateStr = "translate(0px, -50%)";
function updateMainMenuBanner()
{
  if(mainMenuBanner == null)
  {
    mainMenuBanner = document.getElementById(divIdMainMenuBanner);
  }

  if(mainMenuBanner != null && mainMenuBanner.style.display !== "none")
  {
    var adContainerW = mainMenuBanner.offsetWidth;
    var adContainerH = mainMenuBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      mainMenuBanner.style.transform = `${scaleString} ${defaultMainMenuTranslateStr}`;
    }
    else
    {
      mainMenuBanner.style.transform =  `${defaultMainMenuScaleStr} ${defaultMainMenuTranslateStr}`
    }
  }
}

var stageCompleteLeftBanner;
var stageCompleteRightBanner;
const defaultStageCompleteScaleStr = "scale(100%, 100%)";
const defaultStageCompleteTranslateStr = "translate(0px, 0px)";
function updateStageCompleteBanner()
{
  if(stageCompleteLeftBanner == null)
  {
    stageCompleteLeftBanner = document.getElementById(divIdStageCompleteLeftBanner);
  }
  if(stageCompleteRightBanner == null)
  {
    stageCompleteRightBanner = document.getElementById(divIdStageCompleteRightBanner);
  }

  // Update left banner
  if(stageCompleteLeftBanner != null && stageCompleteLeftBanner.style.display !== "none")
  {
    var adContainerW = stageCompleteLeftBanner.offsetWidth;
    var adContainerH = stageCompleteLeftBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      stageCompleteLeftBanner.style.transform = `${scaleString} ${defaultStageCompleteTranslateStr}`;
    }
    else
    {
      stageCompleteLeftBanner.style.transform =  `${defaultStageCompleteScaleStr} ${defaultStageCompleteTranslateStr}`
    }
  }

  // Update right banner
  if(stageCompleteRightBanner != null && stageCompleteRightBanner.style.display !== "none")
  {
    var adContainerW = stageCompleteRightBanner.offsetWidth;
    var adContainerH = stageCompleteRightBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      stageCompleteRightBanner.style.transform = `${scaleString} ${defaultStageCompleteTranslateStr}`;
    }
    else
    {
      stageCompleteRightBanner.style.transform =  `${defaultStageCompleteScaleStr} ${defaultStageCompleteTranslateStr}`
    }
  }
}

var raceStartLeftBanner;
var raceStartRightBanner;
const defaultRaceStartScaleStr = "scale(100%, 100%)";
const defaultRaceStartTranslateStr = "translate(0px, 0px)";
function updateRaceStartBanner()
{
  if(raceStartLeftBanner == null)
  {
    raceStartLeftBanner = document.getElementById(divIdRaceStartLeftBanner);
  }
  if(raceStartRightBanner == null)
  {
    raceStartRightBanner = document.getElementById(divIdRaceStartRightBanner);
  }

  // Update left banner
  if(raceStartLeftBanner != null && raceStartLeftBanner.style.display !== "none")
  {
    var adContainerW = raceStartLeftBanner.offsetWidth;
    var adContainerH = raceStartLeftBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      raceStartLeftBanner.style.transform = `${scaleString} ${defaultRaceStartTranslateStr}`;
    }
    else
    {
      raceStartLeftBanner.style.transform =  `${defaultRaceStartScaleStr} ${defaultRaceStartTranslateStr}`
    }
  }

  // Update right banner
  if(raceStartRightBanner != null && raceStartRightBanner.style.display !== "none")
  {
    var adContainerW = raceStartRightBanner.offsetWidth;
    var adContainerH = raceStartRightBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(adContainerH/gameContainerH > 0.75)
    {
      var newHeight = gameContainerH * 0.75;
      var newScale = newHeight / adContainerH;
      var scaleString = "scale( " + newScale + "," + newScale + ")";
      raceStartRightBanner.style.transform = `${scaleString} ${defaultRaceStartTranslateStr}`;
    }
    else
    {
      raceStartRightBanner.style.transform =  `${defaultRaceStartScaleStr} ${defaultRaceStartTranslateStr}`
    }
  }
}

var longBanner;
function updateLongBanner()
{
  if(longBanner == null)
  {
    longBanner = document.getElementById(divIdDeathBanner);

    if(isMobile() && longBanner != null)
    {
      //revert from right to center for mobile
      longBanner.style.right = "auto"; 
    }
  }

  if(longBanner != null && longBanner.style.display !== "none")
  {
    longBanner.style.bottom = 0 + "px";
    //longBanner.style.width = 100 + "vw";
    //longBanner.style.width = gameContainer.offsetWidth + "px";

    var adContainerW = longBanner.offsetWidth;
    var adContainerH = longBanner.offsetHeight;
    var gameContainerH = gameContainer.offsetHeight;

    if(isMobile())
    {
      longBanner.style.top = (gameContainerH - adContainerH) + "px";
      longBanner.style.transform =  "scale( 1, 1) translate(0px, -10px)";
    }
    else
    {
      //reserve 30% screen height for horizontal ads, 75% for vertical ads
      let heightPercentage = (adContainerW > adContainerH) ? 0.3 : 0.75;

      if(adContainerH/gameContainerH > heightPercentage)
      {
        const newHeight = gameContainerH * heightPercentage;
        const newScale = newHeight / adContainerH;
        const scaleString = "scale( " + newScale + "," + newScale + ")";
        //const offsetX = 0;
        const offsetX = (adContainerW - adContainerW*newScale)/2 - 10;
        const offsetY = (adContainerH - adContainerH*newScale)/2 - 10;
        const translateString = "translate(" + offsetX + "px, " + offsetY + "px)";
        longBanner.style.transform = translateString + " " + scaleString;
      }
      else
      {
        longBanner.style.transform =  "scale( 1, 1) translate(-10px, -10px)";
      }
    }
  }
}

//window.addEventListener("load", updateAdSizes);
//window.addEventListener("resize", updateAdSizes);
setInterval(updateAdSizes, 500);
