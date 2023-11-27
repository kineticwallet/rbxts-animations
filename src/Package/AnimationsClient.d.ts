import AnimationClass from "./Util/AnimationsClass";

declare type initOptions = {
	AutoLoadPlayerTracks?: boolean;
	TimeToLoadPrints?: boolean;
};

declare interface AnimationsClient extends AnimationClass {
	AutoLoadPlayerTracks: boolean;
	TimeToLoadPrints: boolean;
	Init(initOptions?: initOptions): void;
}

declare const AnimationsClient: AnimationsClient;

export = AnimationsClient;
