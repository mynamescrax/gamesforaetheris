

const scriptsInEvents = {

	async Loadingsheet_Event7_Act1(runtime, localVars)
	{
		YaGames
				.init()
				.then(ysdk => {
					
					window.ysdk = ysdk;
					if (ysdk.features.LoadingAPI) 
			{
			   ysdk.features.LoadingAPI.ready();
		
			   
			}
		
				});
	},

	async Loadingsheet_Event7_Act3(runtime, localVars)
	{
		runtime.globalVars.Lang = ysdk.environment.i18n.lang;
	},

	async Homesheet_Event50_Act1(runtime, localVars)
	{

	},

	async Homesheet_Event50_Act3(runtime, localVars)
	{

	},

	async Adsheet_Event1_Act1(runtime, localVars)
	{
		ysdk.adv.showFullscreenAdv({
				callbacks: {
		            onOpen: () => {
		              runtime.callFunction("Off");
		              
		            },
		            onClose: () => {
		              runtime.callFunction("On");
		            },
		            onError: () => {
		              runtime.callFunction("On");
		            },
		            wasShown: () => {
		              
		              
		            }
		        }
			})
	},

	async Adsheet_Event2_Act1(runtime, localVars)
	{
		 ysdk.adv.showRewardedVideo({
		        callbacks: {
		            onOpen: () => {
		              runtime.callFunction("Off");
		              
		            },
		            onRewarded: () => {
		              runtime.callFunction("WatchAdSuccess",runtime.globalVars.RewardedState);
		              
		            },
		            onClose: () => {
		              runtime.callFunction("On");
		            },
		            onError: () => {
		              
		              runtime.callFunction("On");
		            }
		        }
		    })
	},

	async Generalsheet_Event309_Act1(runtime, localVars)
	{

	},

	async Generalsheet_Event314_Act1(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
