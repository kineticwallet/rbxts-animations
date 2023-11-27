import AnimationClass from "./Util/AnimationsClass";

declare type initOptions = {
	AutoLoadPlayerTracks?: boolean;
	TimeToLoadPrints?: boolean;
	EnableAutoCustomRBXAnimationIds?: boolean;
};

declare interface customRBXAnimationIds {
	run: number | undefined;
	walk: number | undefined;
	jump: number | undefined;
	idle:
		| {
				Animation1: number | undefined;
				Animation2: number | undefined;
		  }
		| undefined;
	fall: number | undefined;
	swim: number | undefined;
	swimIdle: number | undefined;
	climb: number | undefined;
}
declare interface AnimationsServer extends AnimationClass {
	AutoLoadPlayerTracks: boolean;
	TimeToLoadPrints: boolean;
	EnableAutoCustomRBXAnimationIds: boolean;
	Init(initOptions?: initOptions): void;
	ApplyCustomRBXAnimationIds(player: Player, customRBXAnimationIds: customRBXAnimationIds): void;
}

declare const AnimationsServer: AnimationsServer;

export = AnimationsServer;
