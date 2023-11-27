import AnimationClass from "./Utils/AnimationsClass";

declare type initOptions = {
	AutoLoadPlayerTracks?: boolean;
	TimeToLoadPrints?: boolean;
	EnableAutoCustomRBXAnimationIds?: boolean;
};

interface customRBXAnimationIds {
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
declare class AnimationsServer extends AnimationClass {
	private AutoLoadPlayerTracks: boolean;
	private TimeToLoadPrints: boolean;
	private EnableAutoCustomRBXAnimationIds: boolean;
	public Init(initOptions?: initOptions): void;
	public ApplyCustomRBXAnimationIds(player: Player, customRBXAnimationIds: customRBXAnimationIds): void;
}

export = AnimationsServer;
