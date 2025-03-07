import { createLoginUrl } from "../../factory/createLoginUrl";
import { store } from "../../store";

export function Teaser() {
    const { apiBaseUrl, twitchClientId } = store.useState(s => ({ apiBaseUrl: s.apiBaseUrl, twitchClientId: s.twitchClientId }));
    const url = createLoginUrl(apiBaseUrl, twitchClientId);


    return <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">bitraft</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Channel Point Rewards</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Offer your viewers special channel point rewards</p>
            </div>
            <div className="flex flex-wrap">
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-100 font-medium title-font mb-2">BetterTTV Emotes</h2>
                    <p className="leading-relaxed text-base mb-4 text-gray-400">Allow viewers to add new BetterTTV emotes to your chat</p>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="m-auto mx-auto mt-16 text-white bg-purple-800 hover:bg-purple-600 border-0 py-2 px-8 focus:outline-none rounded text-lg" href={url.toString()}>Login to Get Started</a>
            </div>
        </div>
    </section>
}