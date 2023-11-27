import AnimationsIds from "./Deps/AnimationIds";
import AutoCustomRBXAnimationIds from "./Deps/AutoCustomRBXAnimationIds";
import AnimationsClient from "./Package/AnimationsClient";
import AnimationsServer from "./Package/AnimationsServer";

declare interface Animations {
	Deps: {
		AnimationsIds: typeof AnimationsIds;
		AutoCustomRBXAnimationIds: typeof AutoCustomRBXAnimationIds;
	};
	Package: {
		AnimationsClient: typeof AnimationsClient;
		AnimationsServer: typeof AnimationsServer;
	};
}

export declare const Animations: Animations;
