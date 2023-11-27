import AnimationClass from "./Utils/AnimationsClass";

declare type initOptions = {
	AutoLoadPlayerTracks?: boolean;
	TimeToLoadPrints?: boolean;
};

declare class AnimationsClient extends AnimationClass {
    private AutoLoadPlayerTracks: boolean
    private TimeToLoadPrints: boolean
    public Init(initOptions?: initOptions): void;
}

export = AnimationsClient
